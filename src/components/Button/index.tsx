import { tv } from "tailwind-variants";

const button = tv({
  base: "rounded-2 cursor-pointer focus:outline-none whitespace-nowrap text-ellipsis border-[2px]",
  variants: {
    color: {
      primary: "",
      secondary: "",
      tertiary: "",
    },
    size: {
      sm: "text-sm px-4 py-1",
      md: "text-base px-6 py-2",
      lg: "text-lg px-8 py-4",
    },
    variant: {
      solid: "",
      outlined: "",
      lg: "",
    },
  },
  compoundVariants: [
    {
      color: ["primary"],
      variant: ["solid"],
      class: "bg-primary border-secondary text-white",
    },
    {
      color: ["secondary"],
      variant: ["solid"],
      class: "bg-white border-secondary text-secondary",
    },
    {
      color: ["tertiary"],
      variant: ["solid"],
      class: "bg-tertiary border-tertiary-light text-white",
    },
    {
      color: ["primary"],
      variant: ["outlined"],
      class: "bg-white border-primary text-primary",
    },
    {
      color: ["secondary"],
      variant: ["outlined"],
      class: "bg-white border-secondary text-secondary",
    },
    {
      color: ["tertiary"],
      variant: ["outlined"],
      class: "bg-white border-tertiary text-tertiary",
    },
  ],
  defaultVariants: {
    size: "md",
    color: "primary",
    variant: "solid",
  },
});

const Button = ({
  text,
  variant = "solid",
  color = "primary",
  size = "md",
  additionalClasses,
  onClick,
}: {
  text: string;
  variant?: "solid" | "outlined";
  color?: "primary" | "secondary" | "tertiary";
  size?: "sm" | "md" | "lg";
  additionalClasses?: string;
  onClick?: (arg0: any) => any;
}) => {
  return (
    <button
      className={
        `${button({ color, variant, size })}` + " " + additionalClasses
      }
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
