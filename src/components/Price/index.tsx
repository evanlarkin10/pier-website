import Text from "@/components/Text";

const Price = ({
  price,
  additionalClasses,
}: {
  price: string;
  additionalClasses?: string;
}) => {
  return (
    <Text variant="h3" tag="span" additionalClasses={additionalClasses}>
      ${price} <span className="text-sm">+HST / Night</span>
    </Text>
  );
};
export default Price;
