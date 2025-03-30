import PageLayout from "@/components/Layouts/PageLayout";
import Image from "next/image";
import Text from "@/components/Text";
import Metadata from "@/components/Metadata";
import Button from "@/components/Button";
import LetterText from "@/components/Headers/LetterText";

export default function ContactUs() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };
    console.log("Form data:", data);
  };

  return (
    <>
      <Metadata
        title="Inn at the Pier | Contact Us"
        description="Contact the Inn at the Pier administration"
        keywords="Romance, Pier, Cavendish, Hotel, Accommodation, contact, more information, email, phone"
      />
      <PageLayout>
        <div className="flex flex-col lg:!flex-row">
          <div className="flex flex-col flex-[1]">
            <Image
              src="/aerial-sq.jpg"
              alt="Contact Us"
              width={750}
              height={645}
            />
          </div>
          <div className="flex flex-col flex-[1] text-left px-80">
            <div>
              <LetterText text="CONTACT US" letter="C" />
            </div>
            <div className="flex flex-col gap-4">
              <Text variant="p">Contact us for more information</Text>
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="p-2 border rounded"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="p-2 border rounded"
                  required
                />
                <textarea
                  name="message"
                  placeholder="Message"
                  rows={4}
                  className="p-2 border rounded resize-none"
                  required
                />
                <Button
                  type="submit"
                  variant="outlined"
                  color="secondary"
                  text="Send Message"
                />
              </form>
            </div>
          </div>
        </div>
      </PageLayout>
    </>
  );
}
