import RoomDisplay from "@/components/RoomDisplay";
import Text from "@/components/Text";
import SidePanel from "./SidePanel";

const Rooms = () => {
  return (
    <div className="bg-white flex flex-col lg:!flex-row">
      {/* Move to the bottom on mobile */}
      <div className="hidden lg:flex flex-[1] min-w-[400px] bg-white">
        <SidePanel />
      </div>
      <div className="flex flex-[3] flex-col bg-foreground items-start justify-start">
        <Text variant="h2" additionalClasses="text-center self-center pt-10">
          Our Accomodations
        </Text>
        <RoomDisplay
          room_image="/rooms/std-2.webp"
          room_description="Our Standard Rooms feature comfortable queen-sized beds and are situated on the non-waterfront side of the Inn. Each room comes fully equipped with a private bathroom, hair dryer, mini-refrigerator, smart TV with cable programming, climate control (mini-split heating and air conditioning), and complimentary high-speed WiFi."
          room_type="Standard Room"
          room_image_height={990}
          room_image_width={1600}
          link={"/standard-room"}
        />
        <RoomDisplay
          room_image="/rooms/std-plus-1.webp"
          room_description="Our Standard Plus rooms offer two distinct configurations. One family-oriented room features a queen bed, two twin beds, and a single sofa bed. The other two Standard Plus rooms provide waterfront views without patios. All rooms include a private bathroom, mini-refrigerator, hair dryer, smart TV with cable programming, climate control (mini-split heating and air conditioning), and complimentary high-speed WiFi."
          room_type="Standard Plus"
          room_image_height={990}
          room_image_width={1600}
          invert_order={true}
          link={"/standard-plus-room"}
        />
        <RoomDisplay
          room_image="/rooms/js-2.webp"
          room_description="Our Junior Suites feature luxurious king or queen-sized beds, with three of the four suites offering stunning waterfront views and private patios or decks. Each suite is appointed with a mini-refrigerator, private bathroom, hair dryer, smart TV with cable programming, climate control (mini-split heating and air conditioning), and complimentary high-speed WiFi."
          room_type="Junior Suite"
          room_image_height={990}
          room_image_width={1600}
          link={"/junior-suite-room"}
        />
        <RoomDisplay
          room_image="/rooms/su-1.webp"
          room_description="Our four premium Suites represent our most spacious accommodations, each featuring a king-sized bed and a comfortable sofa bed. All suites offer spectacular waterfront views with private decks or patios. Available in two configurations: a two-room layout (separate bedroom and sitting room) or enhanced suites with convenient kitchenettes (featuring a microwave, toaster, refrigerator, and sink). Each suite includes a private bathroom, hair dryer, smart TV with cable programming, climate control, and complimentary high-speed WiFi."
          room_type="Suite"
          room_image_height={990}
          room_image_width={1600}
          invert_order={true}
          link={"/suite-room"}
        />
        <RoomDisplay
          room_image="/rooms/double-1.webp"
          room_description="Our Double Rooms, located on the non-waterfront side, feature two comfortable double beds and include all standard room amenities. One room is conveniently situated on the ground floor with a private patio, while two rooms are located on the second level. Please note that our property does not have an elevator, though assistance with luggage is available upon request. Base rates accommodate two guests, with an additional charge of $30 per person for extra occupants."
          room_type="Double Bed Room"
          room_image_height={990}
          room_image_width={1600}
          link={"/double-room"}
        />
      </div>
    </div>
  );
};
export default Rooms;
