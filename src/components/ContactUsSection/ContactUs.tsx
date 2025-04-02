import Button from "@/components/Button";
import { useNavigate } from "@/utils/useNavigate";

const ContactUs = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full flex justify-center">
      <Button
        text="Contact Us"
        color="primary"
        variant="solid"
        size="lg"
        onClick={() => navigate("/contact")}
      />
    </div>
  );
};

export default ContactUs;
