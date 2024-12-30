import { Stars } from "./Stars";

interface WokeScoreProps {
  value: number;
}

export const WokeScore = ({ value }: WokeScoreProps) => {
  return (
    <div className="flex flex-col gap-2 w-[196px]">
      <p className="text-base font-normal text-[#8C8C93] font-inria">
        Woke Meter
      </p>
      <div className="flex items-center gap-1 w-full bg-[#F8F8FF] rounded-3xl px-[18px] py-3">
        <Stars amount={value} />
        {value < 5 && <Stars amount={5 - value} isEmpty />}
        <p className="font-inria font-bold text-lg ms-[5px]">{value}/5</p>
      </div>
    </div>
  );
};
