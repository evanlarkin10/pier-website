import PageLayout from "@/components/Layouts/PageLayout";
import Image from "next/image";
import Metadata from "@/components/Metadata";
import LetterText from "@/components/Headers/LetterText";
import SeasonalPricing from "@/components/SeasonalPricing";
import ContactUs from "@/components/ContactUsSection/ContactUs";
import { useNavigate } from "@/utils/useNavigate";

export default function AnneOfGreenGables() {
  const navigate = useNavigate();
  return (
    <>
      <Metadata
        title="Inn at the Pier | Anne of Green Gables"
        description="Inn at the Pier | Anne of Green Gables"
        keywords="Anne of green gables, Pier, Cavendish, Lucy Maud Montgomery, Bar, Golf, Packages, PEI"
      />
      <PageLayout>
        <div className="flex flex-col lg:!flex-row items-center lg:items-start">
          <div className="flex-[1] bg-white px-10 items-center justify-center">
            <LetterText text="Green Gables" letter="G" />
          </div>
          <div className="flex flex-col flex-[5] bg-white gap-[20px]">
            <Image
              src="/banner-LMM-culture.webp"
              alt="Aerial Shot of the golf course"
              height={478}
              width={1375}
              className="w-full max-h-[450px] object-cover"
            />
            <div>
              <div className="flex flex-col gap-8 my-8">
                <SeasonalPricing
                  preSeasonPrice={"499"}
                  peakSeasonPrice={"799"}
                  preSeasonText={"Off Season"}
                  preSeasonDates={`June 1, 2025 - June 24, 2025 \n September 2, 2025 - October 14, 2025`}
                  peakSeasonText={"Peak Season"}
                  peakSeasonDates="June 25rd, 2025 - September 1st, 2025"
                  bullets={[
                    "Green Gables Heritage Place",
                    "Anne of Green Gables Museum",
                    '"Anne & Gilbert" The Musical',
                    "L.M. Montgomery's Birthplace",
                    "Site of L.M. Montgomery's Cavendish Home",
                    "Continental breakfast daily.",
                    {
                      onClick: () => {
                        navigate("standard-room");
                      },
                      text: "Standard room (Queen Bed)",
                    },
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
