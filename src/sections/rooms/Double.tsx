import Text from "@/components/Text";
import RoomCarousel from "@/components/Carousel/RoomCarousel";
import BulletList from "@/components/BulletList";

export default function SuiteRoom() {
  return (
    <div className="flex flex-col lg:!flex-row items-center lg:items-start">
      <div className="flex-[1] bg-white px-10 items-center justify-center">
        <span className="relative text-[200px] md:text-[250px] lg:text-[300px]">
          D
          <div className="bg-[#FFF] text-center absolute top-[calc(50%-25px)] w-full px-[0] py-[10px] text-[20px]">
            DOUBLE ROOM
          </div>
        </span>
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
              { id: 1, image: "/rooms/double-1.webp" },
              { id: 2, image: "/rooms/double-2.webp" },
            ]}
          />
          <br />
          <div>
            <Text variant="p">
              Our double rooms are not on the waterfront side, they have two
              double beds with private bathrooms and all the room amenities
              common in our guestrooms. One is on the ground floor (with a
              patio) and two are on the second level. Our building does not have
              an elevator, but we try to have someone around to help with your
              bags if you need help. Our rates are based on 2 people per room
              with a 30.00 per/person charge over two guest.
            </Text>
            <br />
            <br />
            <Text variant="p">Book Double Room only from 169$/ Night</Text>
          </div>
        </div>
      </div>
    </div>
  );
}
