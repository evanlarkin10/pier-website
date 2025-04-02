import PageLayout from "@/components/Layouts/PageLayout";
import Metadata from "@/components/Metadata";
import JuniorSuite from "@/sections/rooms/JuniorSuite";

export default function JuniorSuiteRoomPage() {
  return (
    <>
      <Metadata
        title="Inn at the Pier | Junior Suite Room"
        description="Inn at the Pier | Junior Suite Room"
        keywords="Inn at the pier, Pier, Cavendish, Hotel, Accommodation, Junior Suite room"
      />
      <PageLayout>
        <JuniorSuite />
      </PageLayout>
    </>
  );
}
