import PageLayout from "@/components/Layouts/PageLayout";
import Metadata from "@/components/Metadata";
import Image from "next/image";

export default function Dining() {
  return (
    <>
      <Metadata
        title="Dining - Inn at the Pier"
        description="Island Favorites Restaurant coming this summer to Inn at the Pier"
        keywords="dining, restaurant, Island Favorites, lobster roll, Inn at the Pier, PEI"
      />
      <PageLayout>
        <div className="flex items-center justify-center min-h-[50vh]">
          <div className="border-4 border-secondary p-12 sm:p-16 bg-white rounded-none max-w-3xl">
            <div className="text-center flex flex-col items-center gap-8">
              <Image
                src="/482022189_1208446054224675_5165704708338156086_n.jpg"
                alt="Island Favorites - PEI's Best Lobster Roll"
                width={400}
                height={400}
                className="max-w-full h-auto"
              />
              <p className="text-primary text-xl sm:text-2xl lg:text-3xl font-montserrat font-medium">
                This summer we are excited to welcome
              </p>
              <h1 className="text-primary text-3xl sm:text-4xl lg:text-5xl font-montserrat font-bold leading-tight">
                Island Favorites Restaurant
              </h1>
              <p className="text-primary text-xl sm:text-2xl lg:text-3xl font-montserrat font-medium">
                They will be moving to our lovely waterfront patio this summer.
              </p>
              <a
                href="https://www.facebook.com/p/Island-Favorites-100051778766142/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary text-lg sm:text-xl font-montserrat font-medium underline hover:opacity-80"
              >
                Check them out on Facebook
              </a>
              <p className="text-primary text-lg sm:text-xl font-montserrat font-medium italic">
                We will have updated information here soon
              </p>
            </div>
          </div>
        </div>
      </PageLayout>
    </>
  );
}