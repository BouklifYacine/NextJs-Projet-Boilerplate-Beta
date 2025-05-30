import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useId } from "react";

function Component() {
  const id = useId();
  return (
    <RadioGroup defaultValue="1">
      <div className="flex items-center gap-2 max-w-[400px]">
        <RadioGroupItem value="1" id={`${id}-1`} />
        <Label htmlFor={`${id}-1`}>Option 1</Label>
      </div>
      <div className="flex items-center gap-2 max-w-[400px]">
        <RadioGroupItem value="2" id={`${id}-2`} />
        <Label htmlFor={`${id}-2`}>Option 2</Label>
      </div>
      <div className="flex items-center gap-2 max-w-[400px]">
        <RadioGroupItem value="3" id={`${id}-3`} />
        <Label htmlFor={`${id}-3`}>Option 3</Label>
      </div>
    </RadioGroup>
  );
}

export { Component };
