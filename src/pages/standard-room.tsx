import PageLayout from "@/components/Layouts/PageLayout";
import Metadata from "@/components/Metadata";
import StandardRoom from "@/sections/rooms/Standard";

export default function StandardRoomPage() {
  return (
    <>
      <Metadata
        title="Inn at the Pier | Standard Room"
        description="Inn at the Pier | Standard Room"
        keywords="Inn at the pier, Pier, Cavendish, Hotel, Accommodation,Standard room"
      />
      <PageLayout>
        <StandardRoom />
      </PageLayout>
    </>
  );
}
