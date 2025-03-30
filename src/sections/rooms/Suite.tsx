import Text from "@/components/Text";
import RoomCarousel from "@/components/Carousel/RoomCarousel";
import BulletList from "@/components/BulletList";
import LetterText from "@/components/Headers/LetterText";

export default function SuiteRoom() {
  return (
    <div className="flex flex-col lg:!flex-row items-center lg:items-start">
      <div className="flex-[1] bg-white px-10 items-center justify-center">
        <LetterText text="SUITE" letter="S" />
        <Text variant="h4">Room Features</Text>
        <br />
        <BulletList
          items={[
            "Free Wifi",
            "Private Baths",
            "Coffee Maker",
            "individual heat and A/C",
            "Electronic keys with 24 hour access",
            "Access to washer & dryer ($)",
            "Heat outdoor pool & hot tub",
            "Smart TV`s",
            "Hair Dryer",
            "Fridge",
          ]}
        />
      </div>
      <div className="flex flex-col flex-[5] bg-white gap-[20px]">
        <div className="max-w-[1000px]">
          <RoomCarousel
            slides={[
              { id: 1, image: "/rooms/su-1.webp" },
              { id: 2, image: "/rooms/su-2.webp" },
              { id: 3, image: "/rooms/su-3.webp" },
              { id: 4, image: "/rooms/su-4.webp" },
            ]}
          />
          <br />
          <div>
            <Text variant="p">
              We have 4 suites, they are our most spacious rooms, they have king
              beds and a sofa-bed. All are waterfront with decks or patios. Mini
              fridge, private baths, hair dryers, cable/smart TV`s, mini-split
              heat and A/C with free Wi-Fi. There are 2different types of
              suites, one is a 2 room suite (Bedroom and sitting room) and the
              other two have a mini kitchen (no cooking, microwave, toaster
              fridge and sink).
            </Text>
            <br />
            <br />
            <Text variant="p">Book Standard room only from 229$/ Night</Text>
          </div>
        </div>
      </div>
    </div>
  );
}
