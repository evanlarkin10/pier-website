import Metadata from "@/components/Metadata";
import Carousel from "@/components/Carousel";
import Rooms from "@/sections/landing/Rooms";
import MoreOptions from "@/sections/landing/MoreOptions";
import Text from "@/components/Text";
import SidePanel from "@/sections/landing/SidePanel";

export default function Home() {
  return (
    <>
      <Metadata
        title="Inn at the Pier | Prince Edward Island"
        description="Inn at the Pier | Prince Edward Island"
        keywords="Inn at the pier, Pier, Cavendish, Hotel, Accommodation, Restaurant, Bar, Beach, Family, Pet Friendly, Free Wifi, Free Parking, Free Breakfast"
      />
      <div>
        <Carousel
          slides={[
            {
              id: 1,
              image: "/slide-2.webp",
              title: "YOUR ISLAND ESCAPE IS WAITING",
              subtitle: "Perfect for couples",
            },
            {
              id: 2,
              image: "/slide-1.webp",
              title: "RESTAURANT ON-SITE",
            },
            {
              id: 3,
              image: "/slide-3.webp",
              title: "PACKAGES",
              subtitle: "For Romance, Golf & More",
            },
          ]}
        />
        <Rooms />
        <Text variant="h2" additionalClasses="text-center pt-10">
          Our Packages
        </Text>
        <MoreOptions />
        {/* Move to the side panel on desktop */}
        <div className="block lg:hidden flex-[1] min-w-[400px] bg-white">
          <SidePanel />
        </div>
      </div>
    </>
  );
}
