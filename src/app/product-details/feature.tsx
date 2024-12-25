'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FaArrowRight } from "react-icons/fa6";

export default function Feature() {
  return (
    <div className="w-full min-h-[649px] bg-background">
      <div className="max-w-[1920px] mx-auto h-full">
        <div className="flex items-center justify-center h-full p-4 md:p-6 lg:p-8">
          <div className="w-full max-w-4xl">
            <Tabs defaultValue="description" className="w-full">
              <TabsList className="w-full justify-start border-b rounded-none h-auto space-x-8 bg-transparent pb-2">
                <TabsTrigger 
                  value="description" 
                  className="border-b-2 border-transparent data-[state=active]:border-primary rounded-none bg-transparent px-0 pb-2 text-base md:text-lg text-[#151875] leading-[20px] font-semibold"
                >
                  Description
                </TabsTrigger>
                <TabsTrigger 
                  value="additional" 
                  className="border-b-2 border-transparent data-[state=active]:border-primary rounded-none bg-transparent px-0 pb-2 text-base md:text-lg text-[#151875] leading-[20px] font-semibold"
                >
                  Additional Info
                </TabsTrigger>
                <TabsTrigger 
                  value="reviews" 
                  className="border-b-2 border-transparent data-[state=active]:border-primary rounded-none bg-transparent px-0 pb-2 text-base md:text-lg text-[#151875] leading-[20px] font-semibold"
                >
                  Reviews
                </TabsTrigger>
                <TabsTrigger 
                  value="video" 
                  className="border-b-2 border-transparent data-[state=active]:border-primary rounded-none bg-transparent px-0 pb-2 text-base md:text-lg text-[#151875] leading-[20px] font-semibold"
                >
                  Video
                </TabsTrigger>
              </TabsList>
              <TabsContent value="description" className="mt-8">
                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-semibold mb-4">Varius tempor.</h3>
                    <p className="text-muted-foreground leading-relaxed text-base md:text-lg md:w-[1250px]">
                      Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor ornare faucibus vel sed et eleifend habitasse amet. Montes, mauris varius ac est bibendum. Scelerisque a, risus ac ante. Velit consectetur neque, elit, aliquet. Non varius proin sed urna, egestas consequat laoreet diam tincidunt. Magna eget faucibus cras justo, tortor sed donec tempus. Imperdiet consequat, quis diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xl font-medium mb-6">More details</h4>
                    <ul className="space-y-4">
                      {[...Array(4)].map((_, i) => (
                        <li key={i} className="flex items-start gap-3 text-muted-foreground text-base md:text-lg md:w-[1250px]">
                          <FaArrowRight className="h-5 w-5 text-primary mt-1" />
                          <span>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr.</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="additional">
                <div className="h-[400px] flex items-center justify-center text-muted-foreground text-lg">
                  Additional information content
                </div>
              </TabsContent>
              <TabsContent value="reviews">
                <div className="h-[400px] flex items-center justify-center text-muted-foreground text-lg">
                  Reviews content
                </div>
              </TabsContent>
              <TabsContent value="video">
                <div className="h-[400px] flex items-center justify-center text-muted-foreground text-lg">
                  Video content
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}

