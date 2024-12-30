import { WokeTooltip } from "./WokeTooltip";

interface SliderProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: number;
}

export const Slider = ({ onChange, value }: SliderProps) => {
  return (
    <div className="absolute w-[116px] top-[20px] right-[80px]">
      <WokeTooltip wokeMeter={value} />
      <input type="range" min="1" max="3" value={value} onChange={onChange} />
    </div>
  );
};
