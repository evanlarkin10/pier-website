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
        title="Inn at the Pier | Groups & Meetings"
        description="Inn at the Pier | Groups & Meetings"
        keywords="Inn at the pier, Pier, Cavendish, Hotel, Accommodation, Restaurant, Bar, Beach, Family, Pet Friendly, Free Wifi, Free Parking, Free Breakfast"
      />
      <PageLayout>
        <div className="flex flex-col lg:!flex-row items-center lg:items-start">
          <div className="flex-[1] bg-white px-10 items-center justify-center">
            <LetterText text="GROUPS & MEETINGS" letter="G" />
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
                Inn at The Pier is a perfect spot to host your meeting, with a
                meeting room for 10 to 14 people offering a meeting experience
                that has served many groups over the past 15 years.
              </Text>
              <br />
              <br />
              <Text variant="p">
                Inn at The Pier has 18 rooms and is capable of providing
                value-added experiences that will rejuvenate and motivate your
                group to ensure your investment is well worth it. We offer
                meetings and Group events year round.
              </Text>
              <br />
              <br />
              <Text variant="p">We can assist meeting planners with</Text>
              <br />

              <BulletList
                items={[
                  "on or off-site social, dining, and cultural experiences",
                  "qualified facilitators to help you define and implement company goals",
                  "coastal experiences with a dining and/or local entertainment theme",
                  "with our many local connections we can advise on defining moments that will make this meeting the one everyone remembers.",
                ]}
              />
              <br />
              <br />
              <Text variant="p">
                To talk to Dale, call 1-877-886-7437 or 1-902-886-3126
                (off-season call Dale’s cell 902-367-1776)
              </Text>
            </div>
          </div>
        </div>
      </PageLayout>
    </>
  );
}
