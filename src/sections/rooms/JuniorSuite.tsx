import Text from "@/components/Text";
import RoomPage from ".";
import Price from "@/components/Price";
import BulletList from "@/components/BulletList";
import { WEBREZ_BOOKING_URL_JR_SUITE } from "@/utils/constants";

export default function JuniorSuiteRoom() {
  return (
    <RoomPage
      roomLetter="J"
      roomType="JUNIOR SUITE"
      images={[
        "/rooms/js-1.webp",
        "/rooms/js-2.webp",
        "/rooms/js-3.webp",
        "/rooms/js-4.webp",
      ]}
      bullets={[
        "Free Wifi",
        "Private Baths",
        "Coffee Maker",
        "Individual heat and A/C",
        "Electronic keys with 24 hour access",
        "Access to washer & dryer ($)",
        "Heat outdoor pool & hot tub",
        "Smart TV`s",
        "Hair Dryer",
        "Fridge",
      ]}
      bookingUrl={WEBREZ_BOOKING_URL_JR_SUITE}
      infoComponent={
        <>
          <div>
            <div className="flex flex-col gap-4">
              <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
                <Text variant="h3" additionalClasses="mb-3">
                  Junior Suite &nbsp;
                  <Price
                    price="199"
                    additionalClasses="text-secondary font-notoSerif"
                  />
                </Text>
                <BulletList
                  items={[
                    "King or Queen Bed",
                    "(3) Waterfront with patios or decks",
                  ]}
                />
              </div>
            </div>
          </div>
        </>
      }
    />
  );
}
