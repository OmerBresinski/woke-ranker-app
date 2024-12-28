import { ClearIcon } from "./ClearIcon";
import { SearchIcon } from "./SearchIcon";

interface SearchInputProps {
  value: string;
  isDisabled: boolean;
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
  <div className="relative w-5/12">
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder="Search for a movie"
      className="pl-5 pr-20 py-2.5 focus:outline-none font-sans text-base rounded-full border-stone-200 w-full"
    />
    {value && (
      <div
        onClick={onClear}
        className="absolute right-11 top-1 p-2 hover:cursor-pointer"
      >
        <ClearIcon />
      </div>
    )}
    <button
      type="submit"
      disabled={isDisabled}
      className="absolute right-2 top-1 bg-black p-2 rounded-full hover:bg-gray-700 hover:cursor-pointer disabled:bg-gray-300"
      onClick={onSubmit}
    >
      <SearchIcon />
    </button>
  </div>
);
