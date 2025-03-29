import Text from "@/components/Text";
import { useNavigate } from "@/utils/useNavigate";
import Image from "next/image";

const RoomDisplay = ({
  room_type,
  room_description,
  room_image,
  room_image_height,
  room_image_width,
  invert_order = false,
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
    <div
      className={`bg-white flex ${
        invert_order
          ? "flex-col-reverse md:!flex-row-reverse"
          : "flex-col md:!flex-row"
      } p-10 m-10 gap-4`}
    >
      <div className="flex flex-[1] flex-col">
        <Text variant="h3">{room_type}</Text>
        <Text variant="p">{room_description}</Text>
        <span
          onClick={() => {
            if (link) navigate(link);
          }}
        >
          <Text variant="p">See More</Text>
        </span>
      </div>
      <Image
        src={room_image}
        alt={room_type}
        height={room_image_height}
        width={room_image_width}
        className="flex flex-[1] object-contain"
        draggable={false}
      />
    </div>
  );
};
export default RoomDisplay;
