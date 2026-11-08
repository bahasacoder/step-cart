"use client"

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import TabDescription from "./tab-description";
import TabDataSheet from "./tab-data-sheet";
import TabReviews from "./tab-reviews";
import TabSpecification from "./tab-specification";

export default function pageDua() {


return (
  
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

  
)

}


