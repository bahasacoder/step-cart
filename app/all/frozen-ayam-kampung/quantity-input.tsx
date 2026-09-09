"use client"

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface QuantityInputProps {
  id?: string;
  label?: string;
  min?: number;
  max?: number;
  step?: number;
  initialValue?: number;
  onChange?: (value: number) => void;
}

export function QuantityInput({
  id = "quantity",
  label = "Quantity",
  min = 0,
  max = Infinity,
  step = 1,
  initialValue = 1,
  onChange,
}: QuantityInputProps) {
  const [value, setValue] = React.useState<number>(initialValue);

  const updateValue = (newValue: number) => {
    const clamped = Math.min(Math.max(newValue, min), max);
    setValue(clamped);
    onChange?.(clamped);
  };

  const increment = () => updateValue(value + step);
  const decrement = () => updateValue(value - step);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const num = Number(e.target.value);
    if (!isNaN(num)) {
      updateValue(num);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      increment();
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      decrement();
    }
  };

  return (
    <div className="flex flex-col gap-2 w-44">
      <Label htmlFor={id}>{label}</Label>
      <div className="flex items-center gap-1">
        <Button
          type="button"
          variant="outline"
          size="icon"
          onClick={decrement}
          aria-label={`Decrease ${label}`}
          disabled={value <= min}
        >
          −
        </Button>
        <Input
          id={id}
          type="number"
          value={value}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          className="text-center"
          min={min}
          max={max}
          step={step}
        />
        <Button
          type="button"
          variant="outline"
          size="icon"
          onClick={increment}
          aria-label={`Increase ${label}`}
          disabled={value >= max}
        >
          +
        </Button>
      </div>
    </div>
  );
}
