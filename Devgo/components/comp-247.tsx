"use client"

import { useState } from "react"

import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"

export default function Component() {
  const [value, setValue] = useState([25])

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between gap-2">
        <Label className="leading-6">Slider with output</Label>
        <output className="text-sm font-medium tabular-nums">{value[0]}</output>
      </div>
      <Slider
        value={value}
        onValueChange={setValue}
        aria-label="Slider with output"
      />
    </div>
  )
}
