import { createElement } from "react";
import { tv } from "tailwind-variants";

const text = tv({
  base: "",
  variants: {
    variant: {
      h1: "text-primary text-4xl md:text-5xl lg:text-6xl font-montserrat",
      h2: "text-primary text-3xl md:text-4xl lg:text-5xl font-montserrat",
      h3: "text-primary text-2xl md:text-3xl lg:text-4xl font-montserrat",
      h4: "text-primary text-xl md:text-2xl lg:text-3xl font-montserrat",
      p: "text-primary text-base font-inter",
    },
  },
  defaultVariants: {
    variant: "p",
  },
});

const Text = ({
  children,
  variant = "p",
  tag,
  additionalClasses,
}: {
  children: React.ReactNode;
  variant: "h1" | "h2" | "h3" | "h4" | "p";
  tag?: string;
  additionalClasses?: string;
}) => {
  const componentTag = tag
    ? tag
    : variant == "h1" || variant == "h2" || variant == "h3" || variant == "h4"
    ? variant
    : "span";
  return createElement(
    componentTag,
    { className: `${text({ variant })}` + " " + additionalClasses },
    children
  );
};

export default Text;
