import PageLayout from "@/components/Layouts/PageLayout";
import Image from "next/image";
import Text from "@/components/Text";
import Metadata from "@/components/Metadata";
import BulletList from "@/components/BulletList";

export default function RomancePackages() {
  return (
    <>
      <Metadata
        title="Inn at the Pier | Romance Packages"
        description="Inn at the Pier | Romance Packages"
        keywords="Romance, Pier, Cavendish, Hotel, Accommodation, Restaurant, Bar, Beach, Family, Pet Friendly, Free Wifi, Free Parking, Free Breakfast"
      />
      <PageLayout>
        <div className="flex flex-col lg:!flex-row items-center lg:items-start">
          <div className="flex-[1] bg-white px-10 items-center justify-center">
            <span className="relative text-[200px] md:text-[250px] lg:text-[300px]">
              R
              <div className="bg-[#FFF] text-center absolute top-[calc(50%)] w-full px-[0] py-[10px] text-[20px]">
                ROMANCE
              </div>
            </span>
          </div>
          <div className="flex flex-col flex-[5] bg-white gap-[20px]">
            <Image
              src="/about-us.webp"
              alt="Aerial Shot"
              height={350}
              width={850}
              className="object-contain"
            />
            <div>
              <Text variant="h3">3-Night Romance Package Includes:</Text>
              <br />
              <BulletList
                items={[
                  "3 Nights waterfront Deluxe Room",
                  "Morning Kayak or Paddle Board Rental (2 X 2hrs included)",
                  '$50.00 coupon for "Island Chef at The Pier" .on site restaurant',
                  "Heated outdoor pool and Hot Tub",
                  "Robes provided for your comfort",
                  "Waterside fire pit available",
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
