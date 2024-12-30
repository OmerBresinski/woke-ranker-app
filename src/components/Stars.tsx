import { StarIcon } from "./StarIcon";

interface StarsProps {
  amount: number;
  isEmpty?: boolean;
}

export const Stars = ({ amount, isEmpty }: StarsProps) => {
  return (
    <div className="flex gap-1">
      {[...Array(amount)].map((_, i) => (
        <StarIcon key={i} isEmpty={isEmpty} />
      ))}
    </div>
  );
};
