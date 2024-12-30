import { Stars } from "./Stars";

interface WokeScoreProps {
  value: number;
  variant?: "default" | "mini";
}

export const WokeScore = ({ value, variant = "default" }: WokeScoreProps) => {
  return (
    <div className="flex flex-col gap-1 w-[196px]">
      <p
        className={`text-base ${
          variant === "mini" ? "font-sm font-normal" : "font-normal"
        } text-[#8C8C93] font-inria`}
      >
        Woke Meter
      </p>
      <div
        className={`flex items-center gap-1 ${
          variant === "mini" ? "w-min" : "w-full"
        } bg-[#F8F8FF] rounded-3xl ${
          variant === "mini" ? "px-[12px] py-1" : "px-[18px] py-3"
        }`}
      >
        <Stars amount={value} variant={variant} />
        {value < 5 && <Stars amount={5 - value} isEmpty variant={variant} />}
        <p className="font-inria font-bold text-lg ms-[5px]">{value}/5</p>
      </div>
    </div>
  );
};
