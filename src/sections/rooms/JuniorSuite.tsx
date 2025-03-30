import Text from "@/components/Text";
import RoomCarousel from "@/components/Carousel/RoomCarousel";
import BulletList from "@/components/BulletList";
import LetterText from "@/components/Headers/LetterText";

export default function JuniorSuiteRoom() {
  return (
    <div className="flex flex-col lg:!flex-row items-center lg:items-start">
      <div className="flex-[1] bg-white px-10 items-center justify-center">
        <LetterText text="JUNIOR SUITE" letter="J" />

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
              { id: 1, image: "/rooms/js-1.webp" },
              { id: 2, image: "/rooms/js-2.webp" },
              { id: 3, image: "/rooms/js-3.webp" },
              { id: 4, image: "/rooms/js-4.webp" },
            ]}
          />
          <br />
          <div>
            <Text variant="p">
              Jr suites have king or queen beds, three of the 4 Jr. Suites are
              waterfront with patios or decks. The Jr. suites are equipped with
              mini fridge, private baths, hair dryers, cable/smart TV`s,
              mini-split heat, and A/C with free Wi-Fi.
            </Text>
            <br />
            <br />
            <Text variant="p">Book Standard room only from 199$/ Night</Text>
          </div>
        </div>
      </div>
    </div>
  );
}
