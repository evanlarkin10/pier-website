import PageLayout from "@/components/Layouts/PageLayout";
import Image from "next/image";
import Text from "@/components/Text";
import Metadata from "@/components/Metadata";
import BulletList from "@/components/BulletList";

export default function RomancePackages() {
  return (
    <>
      <Metadata
        title="Inn at the Pier | Date Night"
        description="Info on how Inn at the Pier can help you plan a romantic getaway"
        keywords="Romance, Pier, Cavendish, Hotel, Accommodation, Restaurant, Bar, Beach, Family, Pet Friendly, Free Wifi, Free Parking, Free Breakfast"
      />
      <PageLayout>
        <div className="flex flex-col lg:!flex-row items-center lg:items-start">
          <div className="flex-[1] bg-white px-10 items-center justify-center">
            <span className="relative text-[200px] md:text-[250px] lg:text-[300px]">
              D
              <div className="bg-[#FFF] text-center absolute top-[calc(50%)] w-full px-[0] py-[10px] text-[20px]">
                DATE NIGHT
              </div>
            </span>
          </div>
          <div className="flex flex-col flex-[5] bg-white gap-[20px]">
            <Image
              src="/date-night.webp"
              alt="Two people on a date"
              height={350}
              width={875}
              className="object-contain"
            />
            <div>
              <Text variant="p">
                Inn at The Pier is the perfect place to spend a day or two (or
                more) if your looking to relax and reconnect with your special
                partner. Arrive early! Come before dinner and relax by the pool
                and hot tub (maybe an adult beverage is in order?
              </Text>
              <Text variant="h3">3-Night Romance Package Includes:</Text>
              <br />
              <BulletList
                items={[
                  `Enjoy a delicious 3 course meal prepared by Island Chef "Nish" on the waterfront patio, then retire to your own water side patio or deck for a night cap! (Deluxe room option)", "Standard or Water front Deluxe Room`,
                  "Shared access to our fire pit",
                  "Deluxe room 250.00 1 night, (450 for 2 night Package, One dinner for 2 each night)",
                  "Standard Room 220.00 One night Package (400.00 for 2 night Package, one dinner for 2 each night)",
                  "three nights 899.00",
                ]}
              />
            </div>
            <div className="flex flex-col sm:!flex-row gap-3">
              <div className="flex-[1]">
                <Image
                  src="/pr-1.webp"
                  alt="Two people on a date"
                  height={1000}
                  width={1500}
                  className="object-contain flex-[1]"
                />
              </div>
              <div className="flex-[1]">
                <Image
                  src="/pr-2.webp"
                  alt="View from the back deck of the inn"
                  height={1000}
                  width={1500}
                  className="object-contain flex-[1]"
                />
              </div>
              <div className="flex-[1]">
                <Image
                  src="/pr-3.webp"
                  alt="A picture of one of the rooms in the inn"
                  height={1000}
                  width={1500}
                  className="object-contain flex-[1]"
                />
              </div>
            </div>
          </div>
        </div>
      </PageLayout>
    </>
  );
}
