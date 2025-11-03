import PageLayout from "@/components/Layouts/PageLayout";
import Metadata from "@/components/Metadata";

export default function Dining() {
  return (
    <>
      <Metadata
        title="Dining - Inn at the Pier"
        description="Restaurant space available for lease at Inn at the Pier"
        keywords="dining, restaurant, lease, Inn at the Pier, PEI"
      />
      <PageLayout>
        <div className="flex items-center justify-center min-h-[50vh]">
          <div className="border-4 border-secondary p-12 sm:p-16 bg-white rounded-none">
            <div className="text-center">
              <h1 className="text-primary text-4xl sm:text-5xl lg:text-6xl font-montserrat font-semibold leading-tight">
                Restaurant Closed For Season
              </h1>
              <p className="text-primary text-2xl sm:text-3xl lg:text-4xl font-montserrat font-medium mt-4">
                Available for lease in 2026
              </p>
            </div>
          </div>
        </div>
      </PageLayout>
    </>
  );
}