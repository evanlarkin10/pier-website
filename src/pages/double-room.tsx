import PageLayout from "@/components/Layouts/PageLayout";
import Metadata from "@/components/Metadata";
import DoubleRoom from "@/sections/rooms/Double";

export default function DoubleRoomPage() {
  return (
    <>
      <Metadata
        title="Inn at the Pier | Double Room"
        description="Inn at the Pier | Double Room"
        keywords="Inn at the pier, Pier, Cavendish, Hotel, Accommodation, Double room"
      />
      <PageLayout>
        <DoubleRoom />
      </PageLayout>
    </>
  );
}
