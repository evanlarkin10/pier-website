import BulletList from "@/components/BulletList";
import RoomDisplay from "@/components/RoomDisplay";
import Text from "@/components/Text";

const Rooms = () => {
  return (
    <div className="bg-white flex flex-col lg:!flex-row">
      <div className="flex flex-[1] min-w-[400px] bg-white">
        <div className="flex flex-col px-10 py-10 gap-10">
          <Text variant="h4">WHY INN AT THE PIER?</Text>
          <Text variant="p">
            Explore the core of Prince Edward Island and the central hub of its
            northern coastline. This rural haven has unquestionably earned
            numerous endearing titles throughout its history, showcasing the
            multitude of people and lives it has deeply impacted. This
            enchanting location offers the opportunity to craft extraordinary
            experiences and enduring recollections. Along your journey,
            you&apos;ll encounter numerous close friends and like-minded souls
            who are enthusiastic about aiding you in revitalizing and
            reestablishing connections. Whether you&apos;re dedicating moments
            to cherished companions, family members, beloved friends, or even
            self-discovery, this captivating destination effortlessly assists
            you in recalling the elements that hold genuine significance in your
            life.
          </Text>
          <BulletList
            items={[
              "Comfortable Stays",
              "Restaurant",
              "Bar",
              "Water Sports",
              "24h Parking & Security",
              "Treaking",
            ]}
          />
        </div>
      </div>
      <div className="flex flex-[3] flex-col bg-foreground items-start justify-start">
        <RoomDisplay
          room_image="/standard-room.webp"
          room_description="Our standard rooms have queen beds, they are not located on the waterfront side of the Inn. All our rooms have a private bath, Hair dryer, mini fridge, smart T.V with cable, mini-split heat/AC and free WiFi."
          room_type="Standard Room"
          room_image_height={227}
          room_image_width={369}
          link={"/standard-room"}
        />
        <RoomDisplay
          room_image="/standard-plus-room.webp"
          room_description="We have three standard plus rooms; one is suitable for a family and is equipped with a queen bed and 2 twin beds as well as a single sofa bed. The other two standard plus rooms are waterfront, but do not have patios. They have queen beds, mini fridge, private baths, hair dryers, cable/smart TV`s, mini-split heat and A/C with free WiFi."
          room_type="Standard Plus"
          room_image_height={227}
          room_image_width={369}
          invert_order={true}
          link={"/standard-plus-room"}
        />
        <RoomDisplay
          room_image="/junior-suites-room.webp"
          room_description="Jr suites have king or queen beds, three of the 4 Jr. Suites are waterfront with patios or decks. The Jr. suites are equipped with mini fridge, private baths, hair dryers, cable/smart TV`s, mini-split heat, and A/C with free Wi-Fi."
          room_type="Junior Suite"
          room_image_height={227}
          room_image_width={369}
          link={"/junior-suite-room"}
        />
        <RoomDisplay
          room_image="/suites-room.webp"
          room_description="We have 4 suites, they are our most spacious rooms, they have king beds and a sofa-bed. All are waterfront with decks or patios. Mini fridge, private baths, hair dryers, cable/smart TV`s, mini-split heat and A/C with free Wi-Fi. There are 2different types of suites, one is a 2 room suite (Bedroom and sitting room) and the other two have a mini kitchen (no cooking, microwave, toaster fridge and sink)."
          room_type="Suite"
          room_image_height={227}
          room_image_width={369}
          invert_order={true}
          link={"/suite-room"}
        />
        <RoomDisplay
          room_image="/double-bed-room.webp"
          room_description="Our double rooms are not on the waterfront side, they have two double beds with private bathrooms and all the room amenities common in our guestrooms. One is on the ground floor (with a patio) and two are on the second level. Our building does not have an elevator, but we try to have someone around to help with your bags if you need help. Our rates are based on 2 people per room with a 30.00 per/person charge over two guest."
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
