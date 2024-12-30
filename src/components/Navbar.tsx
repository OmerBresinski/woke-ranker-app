import { isMobile } from "../utils/isMobile";
import { BrandIcon } from "./BranIcon";
import { SearchInput } from "./SearchInput";

interface NavbarProps {
  search: string;
  handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleClearSearchClick: () => void;
  handleSubmit: (
    e: React.FormEvent<HTMLFormElement | HTMLButtonElement>
  ) => void;
  isFetching: boolean;
}

export const Navbar = ({
  search,
  handleSearchChange,
  handleClearSearchClick,
  handleSubmit,
  isFetching,
}: NavbarProps) => {
  return (
    <>
      <div className="flex justify-between items-center">
        <div
          className="min-w-1/5 hover:cursor-pointer"
          onClick={handleClearSearchClick}
        >
          <BrandIcon variant="mini" />
        </div>
        {!isMobile && (
          <form onSubmit={handleSubmit} className="flex justify-center w-full">
            <SearchInput
              value={search}
              onChange={handleSearchChange}
              onClear={handleClearSearchClick}
              onSubmit={handleSubmit}
              isDisabled={isFetching}
            />
          </form>
        )}
        <div className="min-w-15" />
      </div>
      {isMobile && (
        <form onSubmit={handleSubmit} className="flex justify-center w-full">
          <SearchInput
            value={search}
            onChange={handleSearchChange}
            onClear={handleClearSearchClick}
            onSubmit={handleSubmit}
            isDisabled={isFetching}
          />
        </form>
      )}
    </>
  );
};
