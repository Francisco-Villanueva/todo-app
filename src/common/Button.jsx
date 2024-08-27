import React from "react";
export default function Button({
  children,
  onClick,
  variant = "primary",
  disabled = false,
  className,
  type = "button",
}) {
  let variantClass = {
    primary: "bg-primary text-white  hover:bg-primary/85",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300 font-medium",
    outline:
      "bg-transparent border border-solid border-white text-white font-semibold hover:bg-primary/10",
    destructive: "bg-red-700 text-white font-semibold hover:bg-red-700",
  };

  return (
    <button
      type={type}
      className={`${variantClass[variant]} ${className} text-center h-full p-2 rounded-md `}
      onClick={onClick}
      disabled={disabled}
    >
      <>{children}</>
    </button>
  );
}
