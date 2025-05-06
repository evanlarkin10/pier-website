import Metadata from "@/components/Metadata";
import Carousel from "@/components/Carousel";
import Rooms from "@/sections/landing/Rooms";
import MoreOptions from "@/sections/landing/MoreOptions";
import Text from "@/components/Text";
import SidePanel from "@/sections/landing/SidePanel";
import { createContext } from "react";

export async function getStaticProps() {
  // Replace these with your Instagram Business Account credentials
  const ACCESS_TOKEN = process.env.NEXT_PUBLIC_INSTAGRAM_ACCESS_TOKEN;
  const BUSINESS_ACCOUNT_ID = process.env.NEXT_PUBLIC_INSTAGRAM_ACCOUNT_ID;

  const response = await fetch(
    `https://graph.instagram.com/${BUSINESS_ACCOUNT_ID}/media?fields=id,media_url,permalink,timestamp,caption&access_token=${ACCESS_TOKEN}&limit=3`
  );
  const data = await response.json();

  return {
    props: {
      insta_images: data.data,
    },
    revalidate: 3600, // Rebuild every hour
  };
}

export const HomePageContext = createContext<{ insta_images: InstagramPost[] }>(
  { insta_images: [] }
);

interface InstagramPost {
  id: string;
  media_url: string;
  permalink: string;
  timestamp: string;
  caption: string;
}

export default function Home({
  insta_images,
}: {
  insta_images: InstagramPost[];
}) {
  return (
    <HomePageContext.Provider value={{ insta_images }}>
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
    </HomePageContext.Provider>
  );
}
