import Text from "@/components/Text";
import RoomCarousel from "@/components/Carousel/RoomCarousel";
import BulletList from "@/components/BulletList";
import LetterText from "@/components/Headers/LetterText";
import Button from "@/components/Button";
import { WEBREZ_BOOKING_URL } from "@/utils/constants";

export default function RoomPage({
  roomLetter,
  roomType,
  images,
  bullets,
  infoComponent: InfoComponent,
}: {
  roomType: string;
  roomLetter: string;
  images: string[];
  bullets: string[];
  infoComponent: React.ReactNode;
}) {
  return (
    <div className="flex flex-col lg:!flex-row items-start gap-10 sm-gap-0">
      <div className="flex flex-col flex-[1] bg-white px-10 items-start justify-center">
        <LetterText text={roomType} letter={roomLetter} />

        <Text variant="h4">Room Features</Text>
        <br />
        <BulletList items={bullets} />
        <Button
          text="Book Now"
          onClick={() => window.open(WEBREZ_BOOKING_URL, "_blank")}
          additionalClasses="mt-10"
        />
      </div>
      <div className="flex flex-col flex-[5] bg-white gap-[20px]">
        <div className="max-w-[1000px]">
          <RoomCarousel
            slides={images.map((img, i) => {
              return { id: i + 1, image: img };
            })}
          />
          <br />
          {InfoComponent}
        </div>
      </div>
    </div>
  );
}
