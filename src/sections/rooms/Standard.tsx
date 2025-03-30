import Text from "@/components/Text";
import RoomCarousel from "@/components/Carousel/RoomCarousel";
import BulletList from "@/components/BulletList";
import LetterText from "@/components/Headers/LetterText";

export default function StandardRoom() {
  return (
    <div className="flex flex-col lg:!flex-row items-center lg:items-start">
      <div className="flex-[1] bg-white px-10 items-center justify-center">
        <LetterText text="STANDARD" letter="S" />

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
              { id: 1, image: "/rooms/std-1.webp" },
              { id: 2, image: "/rooms/std-2.webp" },
              { id: 3, image: "/rooms/std-3.webp" },
              { id: 4, image: "/rooms/std-4.webp" },
            ]}
          />
          <br />
          <div>
            <Text variant="p">
              Our standard rooms have queen beds, they are not located on the
              waterfront side of the Inn. All our rooms have a private bath,
              Hair dryer, mini fridge, smart T.V with cable, mini-split heat/AC
              and free WiFi.
            </Text>
            <br />
            <br />
            <Text variant="p">Book Standard room only from 149$/ Night</Text>
          </div>
        </div>
      </div>
    </div>
  );
}
