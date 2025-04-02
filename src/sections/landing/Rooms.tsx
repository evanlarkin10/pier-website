import BulletList from "@/components/BulletList";
import RoomDisplay from "@/components/RoomDisplay";
import Text from "@/components/Text";

const Rooms = () => {
  return (
    <div className="bg-white flex flex-col lg:!flex-row">
      <div className="flex flex-[1] min-w-[400px] bg-white">
        <div className="flex flex-col px-10 py-10 gap-10">
          <Text variant="h4" additionalClasses="text-center">
            WHY INN AT THE PIER?
          </Text>
          <Text variant="p">
            Explore the core of Prince Edward Island and the central hub of its
            northern coastline. This rural haven has unquestionably earned
            numerous endearing titles throughout its history, showcasing the
            many people and lives it has deeply impacted. This enchanting
            location offers opportunities to craft extraordinary experiences and
            lasting memories. Along your journey, you&apos;ll encounter many
            close friends and like-minded souls who are eager to help you
            revitalize and reestablish connections. Whether you&apos;re
            dedicating time to cherished companions, family members, beloved
            friends, or even self-discovery, this captivating destination
            effortlessly helps you recall what truly matters in your life.
          </Text>
          <BulletList
            items={[
              "Comfortable Stays",
              "Restaurant",
              "Bar",
              "24h Parking & Security",
              "Treaking",
            ]}
          />
        </div>
      </div>
      <div className="flex flex-[3] flex-col bg-foreground items-start justify-start">
        <RoomDisplay
          room_image="/standard-room.webp"
          room_description="Our Standard Rooms feature comfortable queen-sized beds and are situated on the non-waterfront side of the Inn. Each room comes fully equipped with a private bathroom, hair dryer, mini-refrigerator, smart TV with cable programming, climate control (mini-split heating and air conditioning), and complimentary high-speed WiFi."
          room_type="Standard Room"
          room_image_height={227}
          room_image_width={369}
          link={"/standard-room"}
        />
        <RoomDisplay
          room_image="/standard-plus-room.webp"
          room_description="Our Standard Plus rooms offer two distinct configurations. One family-oriented room features a queen bed, two twin beds, and a single sofa bed. The other two Standard Plus rooms provide waterfront views without patios. All rooms include a private bathroom, mini-refrigerator, hair dryer, smart TV with cable programming, climate control (mini-split heating and air conditioning), and complimentary high-speed WiFi."
          room_type="Standard Plus"
          room_image_height={227}
          room_image_width={369}
          invert_order={true}
          link={"/standard-plus-room"}
        />
        <RoomDisplay
          room_image="/junior-suites-room.webp"
          room_description="Our Junior Suites feature luxurious king or queen-sized beds, with three of the four suites offering stunning waterfront views and private patios or decks. Each suite is appointed with a mini-refrigerator, private bathroom, hair dryer, smart TV with cable programming, climate control (mini-split heating and air conditioning), and complimentary high-speed WiFi."
          room_type="Junior Suite"
          room_image_height={227}
          room_image_width={369}
          link={"/junior-suite-room"}
        />
        <RoomDisplay
          room_image="/suites-room.webp"
          room_description="Our four premium Suites represent our most spacious accommodations, each featuring a king-sized bed and a comfortable sofa bed. All suites offer spectacular waterfront views with private decks or patios. Available in two configurations: a two-room layout (separate bedroom and sitting room) or enhanced suites with convenient kitchenettes (featuring a microwave, toaster, refrigerator, and sink). Each suite includes a private bathroom, hair dryer, smart TV with cable programming, climate control, and complimentary high-speed WiFi."
          room_type="Suite"
          room_image_height={227}
          room_image_width={369}
          invert_order={true}
          link={"/suite-room"}
        />
        <RoomDisplay
          room_image="/double-bed-room.webp"
          room_description="Our Double Rooms, located on the non-waterfront side, feature two comfortable double beds and include all standard room amenities. One room is conveniently situated on the ground floor with a private patio, while two rooms are located on the second level. Please note that our property does not have an elevator, though assistance with luggage is available upon request. Base rates accommodate two guests, with an additional charge of $30 per person for extra occupants."
          room_type="Double Bed Room"
          room_image_height={227}
          room_image_width={369}
          link={"/double-room"}
        />
      </div>
    </div>
  );
};
export default Rooms;
