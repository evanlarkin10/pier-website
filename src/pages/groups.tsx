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
        keywords="Inn at the pier, Pier, Cavendish, Hotel, Accommodation, Restaurant, Bar, corporate, meeting, group, events"
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
              className="w-full max-h-[450px] object-cover"
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
                meetings and Group events all year round.
              </Text>
              <br />
              <br />

              <BulletList
                items={[
                  "Assistance with on or off-site social, dining, and cultural experiences",
                  "Qualified facilitators to help you define and implement company goals",
                  "Coastal experiences with a dining and/or local entertainment theme",
                  "Advice on defining moments that will make this meeting the one everyone remembers, with our many local connections",
                ]}
              />
              <br />
              <br />
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="border-l-4 border-secondary pl-4">
                  <Text
                    variant="p"
                    tag="h5"
                    additionalClasses="text-primary mb-2 text-xl"
                  >
                    Contact Dale for more information
                  </Text>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href="tel:18778867437"
                      className="flex items-center gap-2 text-secondary hover:text-blue-800"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                      <span>1-877-886-7437</span>
                    </a>
                    or
                    <a
                      href="tel:19028863126"
                      className="flex items-center gap-2 text-secondary hover:text-blue-800"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                      <span>1-902-886-3126</span>
                    </a>
                  </div>
                  <br />
                  <div className="flex flex-row gap-2 text-gray-600 italic">
                    <span>Off-season: </span>
                    <a
                      href="tel:19023671776"
                      className="flex items-center gap-2 text-secondary hover:text-blue-800"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                      <span> 902-367-1776</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageLayout>
    </>
  );
}
