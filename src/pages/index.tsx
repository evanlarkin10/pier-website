import Metadata from "@/components/Metadata";
import Carousel from "@/sections/landing/Carousel";
import Button from "@/components/Button";
import Text from "@/components/Text";
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
        <Carousel />
        <div>
          <div className="flex flex-row min-h-[150px]">
            <div className="flex-[1] bg-primary min-w-[400px]">
              <Text variant="h3" additionalClasses="text-secondary">
                Check <br />
                Availability
              </Text>
            </div>
            <div className="flex-[3] bg-secondary p-4"></div>
          </div>
          <div className="flex flex-row min-h-[150px]">
            <div className="flex flex-[1] bg-white min-w-[400px]" />
            <div className="flex flex-[3] bg-secondary items-center justify-start p-4">
              <Button
                size="lg"
                color="secondary"
                variant="solid"
                text="Check Availability"
                additionalClasses="self-center justify-center"
              />
            </div>
          </div>
        </div>
        <Rooms />
        <MoreOptions />
      </div>
    </>
  );
}
