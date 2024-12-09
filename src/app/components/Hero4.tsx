import { Card, CardContent } from "@/components/ui/card";

import Image from "next/image";

export default function ProductSection() {
  return (
    <div>
      <div className="container mx-auto px-4 py-8 space-y-16">
        <section>
          <h2 className="text-2xl font-semibold text-center text-primary mb-8">
            Trending Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="overflow-hidden">
              <CardContent className="p-4">
                <div className="aspect-square relative mb-3">
                  <Image
                    src="/chair10.png"
                    alt="Cantilever chair 1"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-center text-sm font-medium text-[#151875]">
                  Cantilever chair
                </h3>
                <p className="text-center text-primary text-[#151875]">
                  $200.00
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <CardContent className="p-4">
                <div className="aspect-square relative mb-3">
                  <Image
                    src="/chair11.png"
                    alt="Cantilever chair 2"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-center text-sm font-medium text-[#151875]">
                  Cantilever chair
                </h3>
                <p className="text-center text-primary text-[#151875]">
                  $200.00
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <CardContent className="p-4">
                <div className="aspect-square relative mb-3">
                  <Image
                    src="/chair12.png"
                    alt="Cantilever chair 3"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-center text-sm font-medium text-[#151875]">
                  Cantilever chair
                </h3>
                <p className="text-center text-primary text-[#151875]">
                  $200.00
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <CardContent className="p-4">
                <div className="aspect-square relative mb-3">
                  <Image
                    src="/chair13.png"
                    alt="Cantilever chair 4"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-center text-sm font-medium text-[#151875]">
                  Cantilever chair
                </h3>
                <p className="text-center text-primary text-[#151875]">
                  $200.00
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-[#FFF6FB]">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-2 text-[#151875]">
                23% off on all products
              </h3>
              <h4 className="font-semibold cursor-pointer text-red-500 underline">
                Shop Now
              </h4>

              <Image
                src="/chair14.png"
                alt="Promotional item 1"
                width={200}
                height={200}
                className="mx-auto"
              />
            </CardContent>
          </Card>

          <Card className="bg-[#EEEFFB]">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-2 text-[#151875]">
                25% off on all products
              </h3>
              <h4 className="font-semibold cursor-pointer text-red-500 underline">
                Veiw Collection
              </h4>
              <Image
                src="/chair15.png"
                alt="Promotional item 2"
                width={200}
                height={200}
                className="mx-auto"
              />
            </CardContent>
          </Card>

          <Card className="bg-[#FEEFEA]">
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Image
                    src="/chair16.png"
                    alt="Executive item 1"
                    width={80}
                    height={80}
                    className="rounded-lg"
                  />
                  <div>
                    <h4 className="text-sm font-medium text-[#151875]">
                      Executive Seat chair
                    </h4>
                    <p className="text-sm text-muted-foreground text-[#151875]">
                      $200.00
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Image
                    src="/chair17.png"
                    alt="Executive item 2"
                    width={80}
                    height={80}
                    className="rounded-lg"
                  />
                  <div>
                    <h4 className="text-sm font-medium text-[#151875]">
                      Executive Seat chair
                    </h4>
                    <p className="text-sm text-muted-foreground text-[#151875]">
                      $200.00
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Image
                    src="/chair18.png"
                    alt="Executive item 3"
                    width={80}
                    height={80}
                    className="rounded-lg"
                  />
                  <div>
                    <h4 className="text-sm font-medium text-[#151875]">
                      Executive Seat chair
                    </h4>
                    <p className="text-sm text-muted-foreground text-[#151875]">
                      $200.00
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
