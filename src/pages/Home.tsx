import { SearchInput } from "../components/SearchInput";
import { AnimatePresence } from "motion/react";
import { useFormBehavior } from "../api/useFormBehavior";
import { Typewriter } from "../components/Typewriter";
import { BrandIcon } from "../components/BranIcon";
import { Slider } from "../components/Slider";
import { motion } from "motion/react";
import { isMobile } from "../utils/isMobile";
import { PopularMoviesCarousel } from "../components/PopularMoviesCarousel";

export const Home = () => {
  const {
    search,
    wokeMeter,
    handleSubmit,
    handleSearchChange,
    handleWokeMeterChange,
    handleTypewriterClick,
    handleClearSearchClick,
    handleSelectPopularMovie,
  } = useFormBehavior();

  return (
    <div className={`relative h-dvh w-screen bg-primary`}>
      <Slider value={wokeMeter} onChange={handleWokeMeterChange} />
      <div
        className={`flex flex-col justify-between h-full ${
          isMobile && "overflow-hidden"
        }`}
      >
        <motion.div
          className={`w-full flex flex-col items-center ${
            isMobile ? "overflow-hidden pt-[120px] pb-8" : "pt-32 pb-8"
          } font-serif ${isMobile ? "px-[42px]" : "px-0"}`}
          initial={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <BrandIcon />
          <div
            className={`text-center max-w-3xl pt-2 ${
              isMobile ? "mt-11 mb-6" : "mt-14 mb-[34px]"
            }`}
          >
            <AnimatePresence mode="wait">
              <Typewriter onClick={handleTypewriterClick} />
            </AnimatePresence>
          </div>
          <SearchInput
            value={search}
            onChange={handleSearchChange}
            onClear={handleClearSearchClick}
            onSubmit={handleSubmit}
          />
        </motion.div>
        <PopularMoviesCarousel onClick={handleSelectPopularMovie} />
      </div>
    </div>
  );
};
