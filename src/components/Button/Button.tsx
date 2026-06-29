interface ButtonProps {
  label: string;
  variant?: "primary" | "secondary" | "danger";
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  onClick?: () => void;
}

// Interface is used to describe the shape of an object or function
// It could be extended later down the line

const variantClasses = {
  primary: "bg-yellow-400 hover:bg-yellow-500",
  secondary: "bg-gray-200 text-gray-900 hover:bg-gray-300",
  danger: "bg-red-600 text-white hover:bg-red-700",
};

const sizeClasses = {
  small: "px-3 py-1.5 text-sm",
  medium: "px-4 py-2 text-base",
  large: "px-6 py-3 text-lg",
};

export const Button = ({
  label,
  variant = "primary",
  size = "small",
  disabled = false,
  onClick,
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={`rounded-xl font-medium transition-colors ${
        variantClasses[variant]
      } ${sizeClasses[size]} ${
        disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
      }`}
      disabled={disabled}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
