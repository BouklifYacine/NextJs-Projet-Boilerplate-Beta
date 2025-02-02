import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import SchemaInscription from "@/schema/SchemaInscription";
import { prisma } from "@/prisma";
import EmailBienvenue from "@/app/(emails)/EmailBievenue";
import { createElement } from "react";
import { sendEmail } from "@/app/utils/email";

export async function POST(request: NextRequest) {
    
  const { email, password, name  } = await request.json();

  const emailElement = createElement(EmailBienvenue, { name });
  const validation = SchemaInscription.safeParse({ email, password ,  name });
  if (!validation.success) {
    return NextResponse.json(
        { message: validation.error.errors[0].message }, 
        { status: 400 }
    );
}

  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (user)
    return NextResponse.json("Cet email est déja utilisé", { status: 400 });

  const motdepasse = await bcrypt.hash(password, 10);

   const result = await sendEmail({
        to: email,
        subject: "Bienvenue!",
        emailComponent: emailElement,
      });

  const nouvelutilisateur = await prisma.user.create({
    data: {
      email,
      password: motdepasse,
      name, 
      
    },
  });

  return NextResponse.json({
    name : nouvelutilisateur.name , 
    emailresultat : result.success
  });
}
