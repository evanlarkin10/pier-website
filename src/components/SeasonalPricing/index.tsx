import Text from "@/components/Text";
import BulletList, { BulletListItem } from "../BulletList";

interface SeasonalPricingProps {
  preSeasonPrice: string;
  peakSeasonPrice: string;
  preSeasonDates: string;
  peakSeasonDates: string;
  preSeasonText: string;
  peakSeasonText: string;
  bullets: (string | BulletListItem)[];
}

const SeasonalPricing = ({
  preSeasonPrice,
  peakSeasonPrice,
  preSeasonDates,
  peakSeasonDates,
  preSeasonText,
  peakSeasonText,
  bullets,
}: SeasonalPricingProps) => {
  return (
    <>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-1 border-2 border-primary rounded-lg p-6 hover:shadow-lg transition-shadow">
          <div className="flex flex-col gap-4">
            <Text variant="h4" additionalClasses="text-primary">
              {preSeasonText}
            </Text>
            <Text variant="h3">
              ${preSeasonPrice} <span className="text-sm">+HST</span>
            </Text>
            <Text
              variant="p"
              additionalClasses="text-gray-600 whitespace-pre-line"
            >
              {preSeasonDates}
            </Text>
          </div>
        </div>

        <div className="flex-1 border-2 border-primary rounded-lg p-6 hover:shadow-lg transition-shadow">
          <div className="flex flex-col gap-4">
            <Text variant="h4" additionalClasses="text-primary">
              {peakSeasonText}
            </Text>
            <Text variant="h3">
              ${peakSeasonPrice} <span className="text-sm">+HST</span>
            </Text>
            <Text variant="p" additionalClasses="text-gray-600">
              {peakSeasonDates}
            </Text>
          </div>
        </div>
      </div>
      <div className="border-2 border-primary rounded-lg p-6">
        <Text variant="h4" additionalClasses="text-primary mb-4">
          Package Inclusions:
        </Text>
        <BulletList items={bullets} />
      </div>
    </>
  );
};

export default SeasonalPricing;
