import Text from "@/components/Text";
import RoomPage from ".";
import Price from "@/components/Price";
import { WEBREZ_BOOKING_URL_STD_PLUS } from "@/utils/constants";

export default function StandardPlusRoom() {
  return (
    <RoomPage
      roomLetter="S"
      roomType="STANDARD PLUS"
      images={[
        "/rooms/std-plus-1.webp",
        "/rooms/std-plus-2.webp",
        "/rooms/std-plus-3.webp",
        "/rooms/std-plus-4.webp",
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
      bookingUrl={WEBREZ_BOOKING_URL_STD_PLUS}
      infoComponent={
        <>
          <div>
            <div className="flex flex-col gap-4">
              <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
                <Text variant="h3" additionalClasses="mb-3">
                  Standard Plus &nbsp;
                  <Price
                    price="169"
                    additionalClasses="text-secondary font-notoSerif"
                  />
                </Text>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="border-l-4 border-secondary pl-4">
                    <Text
                      variant="p"
                      tag="h5"
                      additionalClasses="text-primary mb-2 text-xl"
                    >
                      Family Standard Plus
                    </Text>
                    <Text variant="p">
                      Queen bed and 2 twin beds as well as a single sofa bed.
                    </Text>
                  </div>
                  <div className="border-l-4 border-secondary pl-4">
                    <Text
                      variant="p"
                      tag="h5"
                      additionalClasses="text-primary mb-2 text-xl"
                    >
                      Waterfront Standard Plus
                    </Text>
                    <Text variant="p">
                      Waterfront view, but do no have patios.
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      }
    />
  );
}
