import Text from "@/components/Text";
import RoomPage from ".";
import Price from "@/components/Price";
import BulletList from "@/components/BulletList";
import { WEBREZ_BOOKING_URL_DOUBLE } from "@/utils/constants";

export default function SuiteRoom() {
  return (
    <RoomPage
      roomLetter="D"
      roomType="DOUBLE ROOM"
      images={["/rooms/double-1.webp", "/rooms/double-2.webp"]}
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
      bookingUrl={WEBREZ_BOOKING_URL_DOUBLE}
      infoComponent={
        <>
          <div>
            <div className="flex flex-col gap-4">
              <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
                <Text variant="h3" additionalClasses="mb-3">
                  Double Room &nbsp;
                  <Price
                    price="169"
                    additionalClasses="text-secondary font-notoSerif"
                  />
                </Text>
                <BulletList
                  items={[
                    "Not on the waterfront side",
                    "(1) Ground floor with patio",
                    "(2) Second Floor",
                    "No elevator",
                    "Rates based on 2 people per room with a 30.00 per/person charge over two guests",
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
