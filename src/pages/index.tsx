import Metadata from "@/components/Metadata";
import Carousel from "@/components/Carousel";
import Rooms from "@/sections/landing/Rooms";
import MoreOptions from "@/sections/landing/MoreOptions";

export default function Home() {
  return (
    <>
      <Metadata
        title="Inn at the Pier | Home"
        description="Inn at the Pier | Home"
        keywords="Inn at the pier, Pier, Cavendish, Hotel, Accommodation, Restaurant, Bar, Beach, Family, Pet Friendly, Free Wifi, Free Parking, Free Breakfast"
      />
      <div>
        <Carousel
          slides={[
            {
              id: 1,
              image: "/slide-1.webp",
              title: "RESTAURANT ON-SITE",
            },
            {
              id: 2,
              image: "/slide-2.webp",
              title: "YOUR ISLAND ESCAPE IS WAITING",
              subtitle: "Perfect for couples",
            },
            {
              id: 3,
              image: "/slide-3.webp",
              title: "PACKAGES",
              subtitle: "For Romance & Golf",
            },
          ]}
        />
        {/* <div>
          <div className="flex flex-col sm:!flex-row min-h-[150px]">
            <div className="flex-[1] bg-primary min-w-[400px]">
              <Text variant="h3" additionalClasses="text-secondary">
                Check <br />
                Availability
              </Text>
            </div>
            <div className="flex flex-[3] bg-secondary items-center justify-start p-4">
              <Button
                size="lg"
                color="secondary"
                variant="solid"
                text="Check Availability"
                additionalClasses="self-center justify-center"
                onClick={() => window.open(WEBREZ_BOOKING_URL, "_blank")}
              />
            </div>
          </div>
        </div> */}
        <Rooms />
        <MoreOptions />
      </div>
    </>
  );
}
