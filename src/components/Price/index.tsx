import Text from "@/components/Text";

const Price = ({
  price,
  from,
  additionalClasses,
}: {
  price: string;
  from?: boolean;
  additionalClasses?: string;
}) => {
  return (
    <Text variant="h3" tag="span" additionalClasses={additionalClasses}>
      {from && "From "}${price} <span className="text-sm">+HST / Night</span>
    </Text>
  );
};
export default Price;
