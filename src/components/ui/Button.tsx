import { IconType } from "react-icons";

interface ButtonProp {
  variant?: "ctaBag" | "ctaWishList";
  onClick: () => void;
  Icon?: IconType;
  text: string;
  width?: "wide" | "normal";
}

interface Styles {
  ctaBag: string;
  ctaWishList: string;
}

function Button({
  variant = "ctaBag",
  onClick,
  Icon,
  text,
  width,
}: ButtonProp) {
  const styles: Styles = {
    ctaBag:
      "bg-gradient-pink-RO hover:bg-gradient-orange-RP text-white border-pink-600",
    ctaWishList: "bg-white border-pink-600",
  };

  return (
    <button
      className={`flex items-center justify-center gap-2 rounded-lg border px-4 py-2 font-semibold transition duration-500 ease-in-out hover:bg-opacity-85 active:scale-95 ${styles[variant]} ${width === "wide" ? "w-[250px]" : ""}`}
      onClick={onClick}
    >
      {Icon && (
        <Icon
          className={`${variant === "ctaBag" ? "text-white" : "text-pink-500"}`}
        />
      )}{" "}
      {text}
    </button>
  );
}

export default Button;
