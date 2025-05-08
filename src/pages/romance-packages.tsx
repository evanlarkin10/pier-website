import PageLayout from "@/components/Layouts/PageLayout";
import Image from "next/image";
import Metadata from "@/components/Metadata";
import LetterText from "@/components/Headers/LetterText";
import Button from "@/components/Button";
import { WEBREZ_BOOKING_URL } from "@/utils/constants";
import SeasonalPricing from "@/components/SeasonalPricing";

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
            <LetterText text="ROMANCE" letter="R" />
          </div>
          <div className="flex flex-col flex-[5] bg-white gap-[20px]">
            <Image
              src="/about-us.webp"
              alt="Aerial Shot"
              height={350}
              width={850}
              className="w-full max-h-[450px] object-cover"
            />

            <SeasonalPricing
              preSeasonPrice={"719.99"}
              peakSeasonPrice={"959.00"}
              preSeasonText={"Off Season"}
              preSeasonDates={`Until June 22, 2025`}
              peakSeasonText={"Peak Season"}
              peakSeasonDates="June 23rd, 2025 - October 5th, 2025"
              bullets={[
                "3 Nights waterfront Deluxe Room",
                "Morning Kayak or Paddle Board Rental (2 X 2hrs included)",
                '$50.00 coupon for "Island Chef at The Pier" .on site restaurant',
                "Heated outdoor pool and Hot Tub",
                "Robes provided for your comfort",
                "Waterside fire pit available",
              ]}
            />
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
            <Button
              text="Book Now"
              color="primary"
              variant="solid"
              additionalClasses="w-fit self-center"
              size="lg"
              onClick={() => window.open(WEBREZ_BOOKING_URL, "_blank")}
            />
          </div>
        </div>
      </PageLayout>
    </>
  );
}
