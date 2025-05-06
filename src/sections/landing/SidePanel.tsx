import Text from "@/components/Text";
import BulletList from "@/components/BulletList";
import InstaPanel from "@/components/InstaPanel";

const SidePanel = () => {
  return (
    <div className="flex flex-col px-10 py-10 gap-10">
      <Text variant="h4" additionalClasses="text-center">
        WHY INN AT THE PIER?
      </Text>
      <Text variant="p">
        Explore the core of Prince Edward Island and the central hub of its
        northern coastline. This rural haven has unquestionably earned numerous
        endearing titles throughout its history, showcasing the many people and
        lives it has deeply impacted. This enchanting location offers
        opportunities to craft extraordinary experiences and lasting memories.
        Along your journey, you&apos;ll encounter many close friends and
        like-minded souls who are eager to help you revitalize and reestablish
        connections. Whether you&apos;re dedicating time to cherished
        companions, family members, beloved friends, or even self-discovery,
        this captivating destination effortlessly helps you recall what truly
        matters in your life.
      </Text>
      <BulletList
        items={[
          "Comfortable Stays",
          "Restaurant",
          "Bar",
          "24h Parking & Security",
        ]}
      />
      <InstaPanel />
    </div>
  );
};

export default SidePanel;
