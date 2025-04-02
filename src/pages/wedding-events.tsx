import PageLayout from "@/components/Layouts/PageLayout";
import Image from "next/image";
import Text from "@/components/Text";
import Metadata from "@/components/Metadata";
import LetterText from "@/components/Headers/LetterText";
import ContactUs from "@/components/ContactUsSection/ContactUs";

export default function WeddingEvents() {
  return (
    <>
      <Metadata
        title="Inn at the Pier | Wedding Events"
        description="Inn at the Pier | Wedding Events"
        keywords="Wedding, Pier, PEI, Cavendish, Hotel, Accommodation, Restaurant, Bar, Beach"
      />
      <PageLayout>
        <div className="flex flex-col lg:!flex-row items-center lg:items-start">
          <div className="flex-[1] bg-white px-10 items-center justify-center">
            <LetterText text="WEDDING & EVENTS" letter="W" />
          </div>
          <div className="flex flex-col flex-[5] bg-white gap-[20px]">
            <Image
              src="/wedding-cover.webp"
              alt="Image of the wedding setup"
              height={350}
              width={850}
              className="w-full max-h-[450px] object-cover"
            />
            <div>
              <Text variant="p">
                Inn at The Pier is the perfect location for your wedding or any
                special occasion where you want a romantic seaside location.
                From small intimate gatherings to a celebration with a 100+
                guest we can help you host. Most groups require an individual
                plan for hosting their special event, therefore when you contact
                us, we will work with you to determine the total cost for what
                we provide, including but not limited to catering food and
                beverage as well as guest rooms. Small weddings may not require
                the space to be closed to the public, whereas a larger group
                will require our full facility. Groups requiring the full
                facility and a tent for extra comfort from the weather are
                required to book the 18 rooms available in the Inn for multiple
                nights. We will handle your guest reservation for you and charge
                them individually or you may want to host the complete event, we
                can help you make it all happen.
              </Text>
              <br />
              <br />
              <Text variant="p">
                If you are planning a destination wedding, this is the place for
                you. Up to 40 of your friends and family can stay and celebrate
                your wedding and enjoy an Island holiday. Friends, family, and
                your wedding party can arrange their own arrival and departure
                dates directly with us, you simply give us the guest list.
              </Text>
              <br />
              <br />
              <Text variant="p">
                Chef “Nish” will help you with your menu ideas and look after
                all the details of your special banquet. Special meal requests
                for sensitive diets can be handled with ease. If you are
                considering a destination wedding, we can set up a convenient
                time to call and discuss. Please visit the following link to
                schedule appointmnts with Chef Nish “Island Chef at The Pier” .
              </Text>
              <br />
              <br />
              <Text variant="h4">Basic Wedding Package</Text>
              <br />
              <Text variant="p">
                Introducing our elegant wedding package, starting at $5500 for
                up to 30 guests(additional person at extra$$). To book an
                appointment with Chef Nish, please follow the link below: Island
                Chef at the Pier
              </Text>
              <br />
              <br />
              <Text variant="h4">Group Events</Text>
              <br />
              <Text variant="p">
                We have 18 guestrooms, a 30-seat dining room, large waterside
                patio (partially enclosed), full-service kitchen, heated outdoor
                pool and hot tub, available year-round (advance reservation
                required October through May). We can host your group, business
                or pleasure, something as simple as an overnight stay with
                dinner or a multi-day professional retreat.
              </Text>
            </div>
            <div className="flex flex-col sm:!flex-row gap-3">
              <div className="flex-[1]">
                <Image
                  src="/we-1.webp"
                  alt="Aerial of the back of the Inn"
                  height={1000}
                  width={1500}
                  className="object-contain flex-[1] shadow-lg rounded-lg"
                />
              </div>
              <div className="flex-[1]">
                <Image
                  src="/we-2.webp"
                  alt="Front of the inn"
                  height={1000}
                  width={1500}
                  className="object-contain flex-[1] shadow-lg rounded-lg"
                />
              </div>
              <div className="flex-[1]">
                <Image
                  src="/we-3.webp"
                  alt="Two tables in the dining area"
                  height={1000}
                  width={1500}
                  className="object-contain flex-[1] shadow-lg rounded-lg"
                />
              </div>
            </div>
            <ContactUs />
          </div>
        </div>
      </PageLayout>
    </>
  );
}
