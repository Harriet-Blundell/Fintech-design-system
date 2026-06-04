interface ButtonProps {
  label: string;
  variant?: "primary" | "secondary" | "danger";
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  onClick?: () => void;
}

const variantClasses = {
  primary: "bg-blue-600 text-white hover:bg-blue-700",
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
      className={`rounded font-medium transition-colors ${
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
