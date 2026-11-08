"use client"
import { useState } from "react";

import Image from "next/image";
import Link from "next/link"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"

// import styles from './index.module.css';
import TabDescription from "./tab-description";
import TabDataSheet from "./tab-data-sheet";
import TabReviews from "./tab-reviews";
import TabSpecification from "./tab-specification";
import OverviewBlock from "./overview-block"
import CartCardDialog from "./cart-card"

export default function AyamKampungDuaLimaPage() {
  const [quantity, setQuantity] = useState(5);
  const [selectedOption, setSelectedOption] = useState("0");
  
  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>

      <h1>Ayam Kampung Frozen</h1>
        <OverviewBlock />
    </main>
  );
}
