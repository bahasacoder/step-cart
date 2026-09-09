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

export default function FrozenAyamKampungPage() {
  const [quantity, setQuantity] = useState(5);
  const [selectedOption, setSelectedOption] = useState("0");
  
  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Welcome to My Frozen Ayam Kampung Site</h1>
      <p>This is a basic home page.</p>
      <OverviewBlock />

       {/* Product Tabs */}
            <div className="row">
              <div className="col-sm-12">
                 <Tabs className="w-full flex flex-col gap-3" defaultValue="description">
                    <TabsList className="w-full flex p-4" variant="line">
                      <TabsTrigger className="relative flex py-4 transition-transform duration-300 ease-in-out hover:scale-105 hover:text-blue-900" value="description">
                        Description
                      </TabsTrigger>
                      <TabsTrigger className="relative flex py-4 transition-transform duration-300 ease-in-out hover:scale-105 hover:text-blue-900" value="tabSpecification">
                        Specification
                      </TabsTrigger>
                    </TabsList>
                      <TabsContent className="" value="description">
                        <TabDescription />
                      </TabsContent>
                    <TabsContent className="" value="tabSpecification">
                        <TabSpecification />
                      </TabsContent>
                  </Tabs>
              </div>         
            </div>
            
            
    </main>
  );
}
