import { WokeTooltip } from "./WokeTooltip";
import { isMobile } from "../utils/isMobile";

interface SliderProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: number;
  hasData?: boolean;
}

export const Slider = ({ onChange, value, hasData = false }: SliderProps) => {
  return (
    <div
      className={`absolute w-[116px] ${
        isMobile ? "top-[16px]" : "top-[20px]"
      } ${
        isMobile ? (hasData ? "right-[58px]" : "right-[162px]") : "right-[80px]"
      }`}
    >
      <WokeTooltip wokeMeter={value} />
      <input type="range" min="1" max="3" value={value} onChange={onChange} />
    </div>
  );
};
