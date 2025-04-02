import Button from "@/components/Button";
import Text from "@/components/Text";
import { useNavigate } from "@/utils/useNavigate";
import Image from "next/image";

const MoreOptions = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-white flex flex-col lg:!flex-row justify-evenly items-stretch py-68 px-16 gap-8">
      <div className="flex flex-col items-center justify-between flex-1 shadow-lg rounded-lg p-6 border-1 border-secondary">
        <div className="flex flex-col items-center">
          <Image
            src="/couple-package.webp"
            alt="Packages For Couples"
            height={230}
            width={370}
            draggable={false}
            className="mx-10"
          />
          <div className="flex flex-col p-10 pb-4 items-center gap-4 flex-grow">
            <Text variant="h4" additionalClasses="text-center">
              Packages For Couples
            </Text>
          </div>
        </div>
        <Button
          text="See More"
          color="secondary"
          variant="outlined"
          onClick={() => {
            navigate("/romance-packages");
          }}
        />
      </div>

      <div className="flex flex-col items-center justify-between flex-1 shadow-lg rounded-lg p-6 border-1 border-secondary">
        <div className="flex flex-col items-center">
          <Image
            src="/anne.webp"
            alt="Anne of Green Gables House"
            height={230}
            width={370}
            draggable={false}
            className="mx-10"
          />
          <div className="flex flex-col p-10 pb-4 items-center gap-4 flex-grow">
            <Text variant="h4" additionalClasses="text-center">
              Anne of Green Gables Package
            </Text>
          </div>
        </div>
        <Button
          text="See More"
          color="secondary"
          variant="outlined"
          onClick={() => {
            navigate("/anne-of-green-gables");
          }}
        />
      </div>

      <div className="flex flex-col items-center justify-between flex-1 shadow-lg rounded-lg p-6 border-1 border-secondary">
        <div className="flex flex-col items-center">
          <Image
            src="/greengables.webp"
            alt="Green Gables Golf Course"
            height={230}
            width={370}
            draggable={false}
            className="mx-10"
          />
          <div className="flex flex-col p-10 pb-4 items-center gap-4 flex-grow">
            <Text variant="h4" additionalClasses="text-center">
              Cavendish Beach Seaside Golf
            </Text>
          </div>
        </div>
        <Button
          text="See More"
          color="secondary"
          variant="outlined"
          onClick={() => {
            navigate("/golf-packages");
          }}
        />
      </div>
    </div>
  );
};

export default MoreOptions;
