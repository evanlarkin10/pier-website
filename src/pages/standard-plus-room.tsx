import PageLayout from "@/components/Layouts/PageLayout";
import Metadata from "@/components/Metadata";
import StandardPlusRoom from "@/sections/rooms/StandardPlus";

export default function StandardPlusRoomPage() {
  return (
    <>
      <Metadata
        title="Inn at the Pier | Standard Plus Room"
        description="Inn at the Pier | Standard Plus Room"
        keywords="Inn at the pier, Pier, Cavendish, Hotel, Accommodation,Standard room"
      />
      <PageLayout>
        <StandardPlusRoom />
      </PageLayout>
    </>
  );
}
