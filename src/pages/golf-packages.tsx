import PageLayout from "@/components/Layouts/PageLayout";
import Image from "next/image";
import Text from "@/components/Text";
import Metadata from "@/components/Metadata";
import BulletList from "@/components/BulletList";
import LetterText from "@/components/Headers/LetterText";

export default function GolfPackages() {
  return (
    <>
      <Metadata
        title="Inn at the Pier | About Us"
        description="Inn at the Pier | About US"
        keywords="Inn at the pier, Pier, Cavendish, Hotel, Accommodation, Restaurant, Bar, Beach, Family, Pet Friendly, Free Wifi, Free Parking, Free Breakfast"
      />
      <PageLayout>
        <div className="flex flex-col lg:!flex-row items-center lg:items-start">
          <div className="flex-[1] bg-white px-10 items-center justify-center">
            <LetterText text="GOLF PACKAGES" letter="G" />
          </div>
          <div className="flex flex-col flex-[5] bg-white gap-[20px]">
            <Image
              src="/aerial-back.webp"
              alt="Aerial Shot of the back of the Inn"
              height={350}
              width={850}
              className="object-contain"
            />
            <div>
              <Text variant="p">
                Enjoy miles of beaches, championship courses and a ready supply
                of the world’s finest seafood, all in the span of a day. The
                Cavendish golf courses are all within a 15-minute drive from the
                Inn at The Pier. Our location makes touring and/or golfing on
                Prince Edward Island convenient and relaxing. Price for two
                people, queen bed, 4 nights
              </Text>
              <br />
              <br />
              <Text variant="p">
                Open to June 16th and September 4th to Oct 2nd (Shoulder Season)
                ------ $1199.00
              </Text>
              <br />
              <br />
              <Text variant="p">
                June17th to August 26th, 2024 ------ $1399.00
              </Text>
              <br />
              <br />
              <Text variant="h4">Package Includes</Text>
              <br />
              <BulletList
                items={[
                  "4 nights standard accommodations (upgrades available)",
                  "2 rounds of golf each (extra rounds available)",
                  "Continental breakfast each morning",
                  "Includes cart and range balls",
                  " Dinner available on site",
                ]}
              />
            </div>
          </div>
        </div>
      </PageLayout>
    </>
  );
}
