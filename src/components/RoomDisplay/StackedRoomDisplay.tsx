import Text from "@/components/Text";
import { useNavigate } from "@/utils/useNavigate";
import Image from "next/image";
import Button from "@/components/Button";

const RoomDisplayStacked = ({
  room_type,
  room_description,
  room_image,
  room_image_height,
  room_image_width,
  link,
}: {
  room_type: string;
  room_description: string;
  room_image: string;
  room_image_height: number;
  room_image_width: number;
  invert_order?: boolean;
  link?: string;
}) => {
  const navigate = useNavigate();
  return (
    <div className={`bg-white flex flex-col p-10 gap-4 max-w-[450px]`}>
      <div className="flex flex-[1] flex-col justify-between h-full">
        <div className="flex flex-col gap-4">
          <Image
            src={room_image}
            alt={room_type}
            height={room_image_height}
            width={room_image_width}
            className="flex flex-[1] object-contain"
            draggable={false}
          />
          <Text variant="h3">{room_type}</Text>
          <Text variant="p">{room_description}</Text>
        </div>
        <Button
          color="secondary"
          variant="outlined"
          onClick={() => {
            if (link) navigate(link);
          }}
          text="See Details"
        />
      </div>
    </div>
  );
};
export default RoomDisplayStacked;
