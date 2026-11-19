"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface QuantityInputProps {
  id?: string;
  label?: string;
  showLabel?: boolean;
  min?: number;
  max?: number;
  step?: number;
  initialValue?: number;
  onChange?: (value: number) => void;
  onValueChange?: (value: number) => void;
}

export default function QuantityInput({
  id = "quantity",
  label = "Quantity",
  showLabel = false,
  min = 1,
  max = Infinity,
  step = 1,
  initialValue = 1,
  onChange,
  onValueChange,
}: QuantityInputProps) {
  const clamp = React.useCallback(
    (num: number) => Math.min(Math.max(num, min), max),
    [min, max]
  );

  const [value, setValue] = React.useState<number>(() => clamp(initialValue));
  const [inputValue, setInputValue] = React.useState<string>(() =>
    String(clamp(initialValue))
  );

  React.useEffect(() => {
    const next = clamp(initialValue);
    setValue(next);
    setInputValue(String(next));
  }, [initialValue, clamp]);

  const updateValue = (newValue: number) => {
    const clamped = clamp(newValue);
    setValue(clamped);
    setInputValue(String(clamped));
    onChange?.(clamped);
    onValueChange?.(clamped);
  };

  const increment = () => updateValue(value + step);
  const decrement = () => updateValue(value - step);

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value;
    setInputValue(raw);

    if (raw.trim() === "") return;

    const num = Number(raw);
    if (!Number.isNaN(num)) {
      const clamped = clamp(num);
      setValue(clamped);
      onChange?.(clamped);
      onValueChange?.(clamped);
    }
  };

  const handleBlur = () => {
    const parsed = Number(inputValue);
    if (inputValue.trim() === "" || Number.isNaN(parsed)) {
      updateValue(min);
    } else {
      updateValue(parsed);
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
      {showLabel && (
        <Label htmlFor={id} className="text-sm font-medium">
          {label}
        </Label>
      )}
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
          aria-label={label}
          value={inputValue}
          onChange={handleQuantityChange}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          className="text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
          min={min}
          max={Number.isFinite(max) ? max : undefined}
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
