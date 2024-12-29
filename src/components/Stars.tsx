import { StarIcon } from "./StarIcon";
export const Stars = ({ amount }: { amount: number }) => {
  return (
    <div className="flex gap-1">
      {[...Array(amount)].map((_, i) => (
        <StarIcon key={i} />
      ))}
    </div>
  );
};
