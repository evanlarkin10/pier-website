import PageLayout from "@/components/Layouts/PageLayout";
import Image from "next/image";
import Text from "@/components/Text";
import Metadata from "@/components/Metadata";
import LetterText from "@/components/Headers/LetterText";

export default function AboutUs() {
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
            <LetterText text="ABOUT US" letter="A" />
          </div>
          <div className="flex flex-col flex-[5] bg-white gap-[20px]">
            <Image
              src="/about-us.webp"
              alt="Aerial Shot"
              height={350}
              width={850}
              className="w-full max-h-[450px] object-cover"
            />
            <div>
              <Text variant="p">
                Dale and Lorna started their journey at Cavendish Marina & Beach
                Resort, the parent company that owns and operates Inn at The
                Pier in 1991. What you enjoy today started as rustic waterfront
                roadhouse/restaurant that specialized in all sorts of
                entertainment from live bands to dinner theater and stints in
                the winter catering mainly to the snowmobile community.
              </Text>
              <br />
              <br />
              <Text variant="p">
                The inn was constructed and opened in June of 2000 and several
                updates have been made since then. Our newly expanded waterside
                outdoor patio is one of the few restaurant patios at the waters
                edge in the Cavendish Resort area. There are 18 guest rooms all
                with private baths, the guestrooms on the waterfront are
                upgraded rooms (Suites/Jr. Suites & Standard Plus), all
                guestrooms have mini-split heat pumps providing individual
                climate control for heat and A/C. On site you can enjoy our
                heated outdoor pool and hot tub, our restaurant (Island Chef at
                The Pier) your host Chef Nish is returning for a second year
                after a successful first year in 2023. Inn at The Pier is
                located centrally on Prince Edward Island`s north shore making
                day trips east or west convenient, Canada`s national park trails
                and Cavendish beach is a short 5-minute drive as are all the
                activities the resort area has to offer, we have several links
                to nearby attractions , golf courses, points of interest and
                restaurants throughout this website.
              </Text>
              <br />
              <br />
              <Text variant="p">
                Inn at The Pier offers group functions year-round limited only
                by our size, meetings, family reunions, milestone birthdays and
                weddings to name a few. We do host destination weddings, if you
                are interested in getting married at Inn at The Pier there is a
                few things you should know, weddings with more than 50 guests
                that require a sit-down meal will require an outside tent rental
                (around 5K extra), in most circumstances you will be required
                the reserve all the guestrooms for a 3-night minimum. Check our
                Packages Page
              </Text>
              <br />
              <br />
              <Text variant="p">
                We are a mainly seasonal business therefore you may not be able
                to reach us by phone from mid October until late April. Use our
                contact page we will get back to you.
              </Text>
            </div>
            <div className="flex flex-col sm:!flex-row gap-3">
              <div className="flex-[1]">
                <Image
                  src="/kayak.webp"
                  alt="Kayaking Image"
                  height={1000}
                  width={1500}
                  className="object-contain flex-[1] shadow-lg rounded-lg"
                />
              </div>
              <div className="flex-[1]">
                <Image
                  src="/paddled.webp"
                  alt="Paddleboard Image"
                  height={1000}
                  width={1500}
                  className="object-contain flex-[1] shadow-lg rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </PageLayout>
    </>
  );
}
