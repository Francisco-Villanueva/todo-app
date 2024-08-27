import React from "react";
export default function Button({
  children,
  onClick,
  variant,
  disabled = false,
  className,
  type = "button",
}) {
  const primaryClass = "bg-primary text-white  hover:bg-primary/85";
  const outlineClass =
    "bg-transparent border border-solid border-primary text-primary font-semibold hover:bg-primary/10";
  const destructiveClass =
    "bg-red-600 text-white font-semibold hover:bg-red-700";

  let variantClass;
  switch (variant) {
    case "outline":
      variantClass = outlineClass;
      break;
    case "destructive":
      variantClass = destructiveClass;
      break;
    default:
      variantClass = primaryClass;
  }

  return (
    <button
      type={type}
      className={`${variantClass} ${className} px-4 transition-all duration-150 p-1 rounded-md`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
