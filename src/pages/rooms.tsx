import PageLayout from "@/components/Layouts/PageLayout";
import Metadata from "@/components/Metadata";
import RoomDisplayStacked from "@/components/RoomDisplay/StackedRoomDisplay";
import Button from "@/components/Button";
import { WEBREZ_BOOKING_URL } from "@/utils/constants";

export default function GolfPackages() {
  return (
    <>
      <Metadata
        title="Inn at the Pier | About Us"
        description="Inn at the Pier | About US"
        keywords="Inn at the pier, Pier, Cavendish, Hotel, Accommodation, Restaurant, Bar, Beach, Family, Pet Friendly, Free Wifi, Free Parking, Free Breakfast"
      />
      <PageLayout>
        <div className="flex flex-col lg:!flex-row items-center lg:items-start">
          <div className="flex-[1] bg-white px-10 items-center justify-center">
            <span className="relative text-[200px] md:text-[250px] lg:text-[300px]">
              A
              <div className="bg-[#FFF] text-center absolute top-[calc(50%-10px)] w-full px-[0] py-[10px] text-[20px]">
                ACCOMMODATION
              </div>
            </span>
            <Button
              variant="solid"
              color="primary"
              size="lg"
              text="CHECK AVAILABILITY"
              onClick={() => window.open(WEBREZ_BOOKING_URL, "_blank")}
            />
          </div>
          <div className="flex flex-row flex-wrap flex-[5] bg-white gap-[10px]">
            <RoomDisplayStacked
              room_image="/standard-room.webp"
              room_description="Our standard rooms have queen beds, they are not located on the waterfront side of the Inn. All our rooms have a private bath, Hair dryer, mini fridge, smart T.V with cable, mini-split heat/AC and free WiFi."
              room_type="Standard Room"
              room_image_height={227}
              room_image_width={369}
              link="standard-room"
            />
            <RoomDisplayStacked
              room_image="/standard-plus-room.webp"
              room_description="We have three standard plus rooms; one is suitable for a family and is equipped with a queen bed and 2 twin beds as well as a single sofa bed. The other two standard plus rooms are waterfront, but do not have patios. They have queen beds, mini fridge, private baths, hair dryers, cable/smart TV`s, mini-split heat and A/C with free WiFi."
              room_type="Standard Plus"
              room_image_height={227}
              room_image_width={369}
              link="standard-plus-room"
            />
            <RoomDisplayStacked
              room_image="/junior-suites-room.webp"
              room_description="Jr suites have king or queen beds, three of the 4 Jr. Suites are waterfront with patios or decks. The Jr. suites are equipped with mini fridge, private baths, hair dryers, cable/smart TV`s, mini-split heat, and A/C with free Wi-Fi."
              room_type="Junior Suite"
              room_image_height={227}
              room_image_width={369}
              link="junior-suite-room"
            />
            <RoomDisplayStacked
              room_image="/suites-room.webp"
              room_description="We have 4 suites, they are our most spacious rooms, they have king beds and a sofa-bed. All are waterfront with decks or patios. Mini fridge, private baths, hair dryers, cable/smart TV`s, mini-split heat and A/C with free Wi-Fi. There are 2different types of suites, one is a 2 room suite (Bedroom and sitting room) and the other two have a mini kitchen (no cooking, microwave, toaster fridge and sink)."
              room_type="Suite"
              room_image_height={227}
              room_image_width={369}
              link="suite-room"
            />
            <RoomDisplayStacked
              room_image="/double-bed-room.webp"
              room_description="Our double rooms are not on the waterfront side, they have two double beds with private bathrooms and all the room amenities common in our guestrooms. One is on the ground floor (with a patio) and two are on the second level. Our building does not have an elevator, but we try to have someone around to help with your bags if you need help. Our rates are based on 2 people per room with a 30.00 per/person charge over two guest."
              room_type="Double Bed Room"
              room_image_height={227}
              room_image_width={369}
              link="double-room"
            />
          </div>
        </div>
      </PageLayout>
    </>
  );
}
