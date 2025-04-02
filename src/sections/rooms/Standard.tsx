import Text from "@/components/Text";
import RoomPage from ".";
import Price from "@/components/Price";

export default function StandardRoom() {
  return (
    <RoomPage
      roomLetter="S"
      roomType="STANDARD"
      images={[
        "/rooms/std-1.webp",
        "/rooms/std-2.webp",
        "/rooms/std-3.webp",
        "/rooms/std-4.webp",
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
                  Standard &nbsp;
                  <Price
                    price="149"
                    additionalClasses="text-secondary font-notoSerif"
                  />
                </Text>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="border-l-4 border-secondary pl-4">
                    <Text variant="p">
                      Standard rooms are not located on the waterfront side of
                      the inn
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
