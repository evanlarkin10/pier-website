import PageLayout from "@/components/Layouts/PageLayout";
import Metadata from "@/components/Metadata";
import Suite from "@/sections/rooms/Suite";

export default function SuiteRoomPage() {
  return (
    <>
      <Metadata
        title="Inn at the Pier | Suite Room"
        description="Inn at the Pier | Suite Room"
        keywords="Inn at the pier, Pier, Cavendish, Hotel, Accommodation, Suite room"
      />
      <PageLayout>
        <Suite />
      </PageLayout>
    </>
  );
}
