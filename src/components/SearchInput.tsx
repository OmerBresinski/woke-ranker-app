import { isMobile } from "../utils/isMobile";
import { ClearIcon } from "./ClearIcon";
import { SearchIcon } from "./SearchIcon";

interface SearchInputProps {
  value: string;
  isDisabled?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClear: () => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement | HTMLButtonElement>) => void;
}

export const SearchInput = ({
  value,
  onChange,
  onClear,
  onSubmit,
  isDisabled,
}: SearchInputProps) => (
  <form
    action="."
    onSubmit={onSubmit}
    className={`relative ${isMobile ? "w-full" : "w-5/12"}`}
  >
    <input
      type="search"
      value={value}
      onChange={onChange}
      maxLength={100}
      placeholder="Tell me of the movie you wish to judge but dare not ask"
      className="pl-5 pr-20 py-2.5 focus:outline-none font-sans text-base rounded-full border border-[#D9D9D9] w-full placeholder:font-inria placeholder:text-[#B3B3B3] leading-4 search-cancel:hidden"
    />
    {value && (
      <div
        onClick={onClear}
        className="absolute right-2 top-1 p-2 hover:cursor-pointer"
      >
        <ClearIcon />
      </div>
    )}
    {value.length === 0 && (
      <button
        type="submit"
        disabled={isDisabled}
        className="absolute right-2 top-1 p-2 rounded-full hover:cursor-pointer"
        onClick={onSubmit}
      >
        <SearchIcon />
      </button>
    )}
  </form>
);
