import PageLayout from "@/components/Layouts/PageLayout";
import Image from "next/image";
import Metadata from "@/components/Metadata";
import LetterText from "@/components/Headers/LetterText";
import SeasonalPricing from "@/components/SeasonalPricing";
import ContactUs from "@/components/ContactUsSection/ContactUs";
import { useNavigate } from "@/utils/useNavigate";

export default function GolfPackages() {
  const navigate = useNavigate();
  return (
    <>
      <Metadata
        title="Inn at the Pier | Golf Packages"
        description="Inn at the Pier | Golf Packages"
        keywords="Inn at the pier, Pier, Cavendish, Hotel, Accommodation, Restaurant, Bar, Golf, Packages, PEI"
      />
      <PageLayout>
        <div className="flex flex-col lg:!flex-row items-center lg:items-start">
          <div className="flex-[1] bg-white px-10 items-center justify-center">
            <LetterText text="GOLF PACKAGES" letter="G" />
          </div>
          <div className="flex flex-col flex-[5] bg-white gap-[20px]">
            <Image
              src="/golf-aerial.webp"
              alt="Aerial Shot of the golf course"
              height={350}
              width={850}
              className="w-full max-h-[450px] object-cover"
            />
            <div>
              <div className="flex flex-col gap-8 my-8">
                <SeasonalPricing
                  preSeasonPrice={"1,499"}
                  peakSeasonPrice={"1,900"}
                  preSeasonText={"Off Season"}
                  peakSeasonText={"Peak Season"}
                  preSeasonDates="Until June 22nd, 2025"
                  peakSeasonDates="June 23rd, 2025 - October 5th, 2025"
                  bullets={[
                    {
                      onClick: () => {
                        navigate("standard-room");
                      },
                      text: "5 nights standard accommodations",
                    },
                    "4 rounds for 2 players",
                    "Cart & range balls included",
                    "Daily continental breakfast",
                    "Access to all Cavendish Beach courses",
                  ]}
                />
                <ContactUs />
              </div>
            </div>
          </div>
        </div>
      </PageLayout>
    </>
  );
}
