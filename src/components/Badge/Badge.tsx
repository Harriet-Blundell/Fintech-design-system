interface BadgeProps {
  label: string;
  variant?: "completed" | "pending" | "failed" | "positive" | "negative";
}

const variantClasses = {
  completed: "bg-green-600 hover:bg-green-700",
  pending: "bg-gray-500 hover:bg-gray-600",
  failed: "bg-red-600 hover:bg-red-700",
};

export const Badge = ({ label, variant = "completed" }: BadgeProps) => {
  return (
    <span
      className={`inline-flex items-center rounded-full px-5.5 py-2.5 text-xs font-medium text-white ${variantClasses[variant]} cursor-pointer`}
    >
      {label}
    </span>
  );
};
