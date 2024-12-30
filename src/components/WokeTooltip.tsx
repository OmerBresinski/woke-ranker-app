interface WokeTooltipProps {
  wokeMeter: number;
}

export const WokeTooltip = ({ wokeMeter }: WokeTooltipProps) => {
  const text =
    wokeMeter === 1 ? "Unwoke" : wokeMeter === 2 ? "Wokeish" : "Wokest";
  const emoji = wokeMeter === 1 ? "🇺🇸" : wokeMeter === 2 ? "🧔‍♀️" : "🫃";
  const emojiSize =
    wokeMeter === 1 ? "text-xl" : wokeMeter === 2 ? "text-md" : "text-xl";
  const rightPosition =
    wokeMeter === 1 ? "37px" : wokeMeter === 2 ? "-21px" : "-79px";
  return (
    <div
      className={`relative flex justify-center items-center w-[86px] h-[24px] bg-[#343437] rounded-md top-[3px] `}
      style={{
        right: rightPosition,
      }}
    >
      <p className="flex items-center gap-1 font-martian font-medium font-sm text-white">
        <span className={`${emojiSize}`}>{emoji}</span>
        <span className="text-xs -tracking-widest">{text}</span>
      </p>
      <div className="absolute -bottom-[3px] w-[8px] h-[8px] bg-[#343437] rotate-45 rounded-[2px]" />
    </div>
  );
};
