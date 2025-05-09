import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Props {
    Fallback : string, 
    texte : string
}

function AvatarEnLigne({Fallback , texte} : Props) {
  return (
    <div className="relative">
      <Avatar>
        <AvatarImage src="https://originui.com/avatar-80-07.jpg" alt="Kelly King" />
        <AvatarFallback>{Fallback}</AvatarFallback>
      </Avatar>
      <span className="absolute bottom-0 end-0 size-3 rounded-full border-2 border-background bg-emerald-500">
        <span className="sr-only">{texte}</span>
      </span>
    </div>
  );
}

export { AvatarEnLigne };


