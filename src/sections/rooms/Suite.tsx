import Text from "@/components/Text";
import RoomPage from ".";
import Price from "@/components/Price";

export default function SuiteRoom() {
  return (
    <RoomPage
      roomLetter="S"
      roomType="SUITE"
      images={[
        "/rooms/su-1.webp",
        "/rooms/su-2.webp",
        "/rooms/su-3.webp",
        "/rooms/su-4.webp",
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
      infoComponent={
        <>
          <div>
            <div className="flex flex-col gap-4">
              <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
                <Text variant="h3" additionalClasses="mb-3">
                  Suites &nbsp;
                  <Price
                    price="229"
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
                      Two-Room Suite
                    </Text>
                    <Text variant="p">
                      Featuring a separate bedroom and sitting room, perfect for
                      families or those seeking extra space.
                    </Text>
                  </div>
                  <div className="border-l-4 border-secondary pl-4">
                    <Text
                      variant="p"
                      tag="h5"
                      additionalClasses="text-primary mb-2 text-xl"
                    >
                      Mini Kitchen Suite
                    </Text>
                    <Text variant="p">
                      Equipped with microwave, toaster, fridge and sink (no
                      cooking facilities).
                    </Text>
                  </div>
                </div>
                <Text variant="h4" additionalClasses="text-primary mb-3">
                  Common Features
                </Text>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <span className="text-primary">•</span>
                    <Text variant="p">Waterfront views</Text>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-primary">•</span>
                    <Text variant="p">Private deck or patio</Text>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-primary">•</span>
                    <Text variant="p">King-size bed</Text>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-primary">•</span>
                    <Text variant="p">Comfortable sofa bed</Text>
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
