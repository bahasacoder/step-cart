"use client"
import { useState } from "react";

import { Button } from "@/components/ui/button"
import OverviewBlock from "./overview-block"

export default function AyamKampungDuaLimaPage() {
  const [quantity, setQuantity] = useState(5);
  const [selectedOption, setSelectedOption] = useState("0");
  
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
        <OverviewBlock />
    {/* Tabs Spesicifaiton , description , review */}
    </div>
  );
}
