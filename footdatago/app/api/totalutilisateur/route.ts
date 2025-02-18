import { auth } from "@/auth";
import { prisma } from "@/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const session = await auth();
  const sessionId = session?.user?.id
  if (sessionId)
    return NextResponse.json("Vous devez etre connecté", { status: 401 });

  const admin = await prisma.user.findUnique({
    where: {
      id: sessionId ,
    },
    select: { role: true },
  });

  if (admin?.role !== "Admin")
    return NextResponse.json("Vous devez etre admin !", { status: 403 });

  const utilisateurs = await prisma.user.findMany({
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      image: true,
      plan: true,
      createdAt: true,
      abonnement: {
        select: {
          periode: true,
          datedebut: true,
          datefin: true,
        },
      },
    },
  });

  if (!utilisateurs || utilisateurs.length === 0) {
    return NextResponse.json(
      {
        message: "Aucun utilisateur disponible",
        data: [],
      },
      { status: 200 }
    );
  }

  return NextResponse.json({
    message: "Utilisateurs récupérés avec succès",
    data: utilisateurs,
    totalutilisateur: utilisateurs.length,
  });
}
