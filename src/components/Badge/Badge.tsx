interface BadgeProps {
  label: string;
  variant?: "completed" | "pending" | "failed" | "positive" | "negative";
}

const variantClasses = {
  completed: "bg-green-500",
  pending: "bg-gray-500",
  failed: "bg-red-600",
  positive: "bg-green-600",
  negative: "bg-red-500",
};

export const Badge = ({ label, variant = "completed" }: BadgeProps) => {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium text-white ${variantClasses[variant]}`}
    >
      {label}
    </span>
  );
};
