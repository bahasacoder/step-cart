"use client";

import React, { useEffect, useState } from "react";

interface OptionsPaketProps {
  onChangeHarga: (value: number, label?: string) => void;
  defaultValue?: string;
}

const PAKET_OPTIONS = [
  {
    label: "100 gram",
    value: "15000",
    bgClass: "bg-rose-600",
    ringClass: "group-hover:ring-rose-600/50 peer-checked:ring-rose-600",
    activeRingClass: "ring-2 ring-rose-600",
  },
  {
    label: "200 gram",
    value: "20000",
    bgClass: "bg-blue-600",
    ringClass: "group-hover:ring-blue-600/50 peer-checked:ring-blue-600",
    activeRingClass: "ring-2 ring-blue-600",
  },
  {
    label: "300 gram",
    value: "25000",
    bgClass: "bg-amber-600",
    ringClass: "group-hover:ring-amber-600/50 peer-checked:ring-amber-600",
    activeRingClass: "ring-2 ring-amber-600",
  },
  {
    label: "400 gram",
    value: "30000",
    bgClass: "bg-purple-600",
    ringClass: "group-hover:ring-purple-600/50 peer-checked:ring-purple-600",
    activeRingClass: "ring-2 ring-purple-600",
  },
  {
    label: "500 gram",
    value: "35000",
    bgClass: "bg-lime-600",
    ringClass: "group-hover:ring-lime-600/50 peer-checked:ring-lime-600",
    activeRingClass: "ring-2 ring-lime-600",
  },
] as const;

export default function OptionsPaket({
  onChangeHarga,
  defaultValue = "35000",
}: OptionsPaketProps) {
  const [selectedValue, setSelectedValue] = useState<string>(defaultValue);

  useEffect(() => {
    const initialOption = PAKET_OPTIONS.find(
      (opt) => opt.value === defaultValue
    );
    if (initialOption) {
      onChangeHarga(Number(initialOption.value), initialOption.label);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const nextValue = e.target.value;
    const selectedOption = PAKET_OPTIONS.find((opt) => opt.value === nextValue);

    setSelectedValue(nextValue);
    onChangeHarga(Number(nextValue), selectedOption?.label);
  };

  return (
    <div className="flex flex-wrap items-center gap-4 sm:gap-6">
      <h4 className="text-lg font-semibold whitespace-nowrap">Kemasan :</h4>

      <div
        role="radiogroup"
        aria-label="Pilih Paket"
        className="flex flex-wrap items-center gap-4"
      >
        {PAKET_OPTIONS.map((option) => {
          const isChecked = selectedValue === option.value;

          return (
            <label
              key={option.value}
              className="flex items-center gap-2 cursor-pointer group"
            >
              <div
                className={`relative flex size-5 items-center justify-center rounded-full shadow-xs transition-all ring-offset-2 group-hover:ring-2 ${
                  option.bgClass
                } ${option.ringClass} ${
                  isChecked ? option.activeRingClass : ""
                }`}
              >
                <input
                  type="radio"
                  name="paket"
                  value={option.value}
                  checked={isChecked}
                  onChange={handleValueChange}
                  className="peer sr-only"
                />
                <div className="hidden size-2 rounded-full bg-white peer-checked:block" />
              </div>
              <span className="text-sm font-medium text-slate-700">
                {option.label}
              </span>
            </label>
          );
        })}
      </div>
    </div>
  );
}
