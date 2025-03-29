import Button from "@/components/Button";
import Text from "@/components/Text";
import Image from "next/image";

const MoreOptions = () => {
  return (
    <div className="bg-white flex flex-col lg:!flex-row justify-center pt-68">
      <div className="flex flex-col  items-center justify-center">
        <Image
          src="/couple-package.webp"
          alt="Packages For Couples"
          height={230}
          width={370}
          draggable={false}
        />
        <div className="flex flex-col p-10 items-center gap-4">
          <Text variant="h4">Packages For Couples</Text>
          <Button
            text="See More"
            color="secondary"
            variant="outlined"
            onClick={() => {}}
          />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <Image
          src="/wedding-package.webp"
          alt="Packages For Couples"
          height={230}
          width={370}
          draggable={false}
        />
        <div className="flex flex-col p-10 items-center gap-4">
          <Text variant="h4">Date Night at the Pier</Text>
          <Button
            text="See More"
            color="secondary"
            variant="outlined"
            onClick={() => {}}
          />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <Image
          src="/dining.webp"
          alt="The Pier Restaurant"
          height={230}
          width={370}
          draggable={false}
        />
        <div className="flex flex-col p-10 items-center gap-4">
          <Text variant="h4">Dining & Entertainment</Text>
          <Button
            text="See More"
            color="secondary"
            variant="outlined"
            onClick={() => {}}
          />
        </div>
      </div>
    </div>
  );
};
export default MoreOptions;
