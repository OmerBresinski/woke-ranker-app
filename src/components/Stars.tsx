import { StarIcon } from "./StarIcon";

interface StarsProps {
  amount: number;
  isEmpty?: boolean;
  variant?: "default" | "mini";
}

export const Stars = ({ amount, isEmpty, variant = "default" }: StarsProps) => {
  return (
    <div className="flex gap-1">
      {[...Array(amount)].map((_, i) => (
        <StarIcon key={i} isEmpty={isEmpty} variant={variant} />
      ))}
    </div>
  );
};
