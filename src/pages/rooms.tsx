import PageLayout from "@/components/Layouts/PageLayout";
import Metadata from "@/components/Metadata";
import RoomDisplayStacked from "@/components/RoomDisplay/StackedRoomDisplay";
import Button from "@/components/Button";
import { WEBREZ_BOOKING_URL } from "@/utils/constants";
import LetterText from "@/components/Headers/LetterText";

export default function RoomOptions() {
  return (
    <>
      <Metadata
        title="Inn at the Pier | Rooms"
        description="Inn at the Pier | Rooms"
        keywords="Inn at the pier, Pier, Cavendish, Hotel, Accommodation, Rooms"
      />
      <PageLayout>
        <div className="flex flex-col lg:!flex-row items-center lg:items-start">
          <div className="flex flex-col items-center">
            <div className="flex-[1] bg-white px-10 items-center justify-center">
              <LetterText text="ACCOMODATIONS" letter="A" />
            </div>
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
              room_description="Our Standard Rooms feature comfortable queen-sized beds and are situated on the non-waterfront side of the Inn. Each room comes fully equipped with a private bathroom, hair dryer, mini-refrigerator, smart TV with cable programming, climate control (mini-split heating and air conditioning), and complimentary high-speed WiFi."
              room_type="Standard Room"
              room_image_height={227}
              room_image_width={369}
              link="standard-room"
            />
            <RoomDisplayStacked
              room_image="/standard-plus-room.webp"
              room_description="Our Standard Plus rooms offer two distinct configurations. One family-oriented room features a queen bed, two twin beds, and a single sofa bed. The other two Standard Plus rooms provide waterfront views without patios. All rooms include a private bathroom, mini-refrigerator, hair dryer, smart TV with cable programming, climate control (mini-split heating and air conditioning), and complimentary high-speed WiFi."
              room_type="Standard Plus"
              room_image_height={227}
              room_image_width={369}
              link="standard-plus-room"
            />
            <RoomDisplayStacked
              room_image="/junior-suites-room.webp"
              room_description="Our Junior Suites feature luxurious king or queen-sized beds, with three of the four suites offering stunning waterfront views and private patios or decks. Each suite is appointed with a mini-refrigerator, private bathroom, hair dryer, smart TV with cable programming, climate control (mini-split heating and air conditioning), and complimentary high-speed WiFi."
              room_type="Junior Suite"
              room_image_height={227}
              room_image_width={369}
              link="junior-suite-room"
            />
            <RoomDisplayStacked
              room_image="/suites-room.webp"
              room_description="Our four premium Suites represent our most spacious accommodations, each featuring a king-sized bed and a comfortable sofa bed. All suites offer spectacular waterfront views with private decks or patios. Available in two configurations: a two-room layout (separate bedroom and sitting room) or enhanced suites with convenient kitchenettes (featuring a microwave, toaster, refrigerator, and sink). Each suite includes a private bathroom, hair dryer, smart TV with cable programming, climate control, and complimentary high-speed WiFi."
              room_type="Suite"
              room_image_height={227}
              room_image_width={369}
              link="suite-room"
            />
            <RoomDisplayStacked
              room_image="/double-bed-room.webp"
              room_description="Our Double Rooms, located on the non-waterfront side, feature two comfortable double beds and include all standard room amenities. One room is conveniently situated on the ground floor with a private patio, while two rooms are located on the second level. Please note that our property does not have an elevator, though assistance with luggage is available upon request. Base rates accommodate two guests, with an additional charge of $30 per person for extra occupants."
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
