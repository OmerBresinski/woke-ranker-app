import { AnimatePresence } from "motion/react";
import * as Pages from "./pages";
import { Route, Routes } from "react-router-dom";
import { SliderProvider } from "./context/SliderContext";

function App() {
  return (
    <AnimatePresence>
      <SliderProvider>
        <Routes>
          <Route path="/" element={<Pages.Home />} />
          <Route path="/:movieName" element={<Pages.Movie />} />
        </Routes>
      </SliderProvider>
    </AnimatePresence>
  );
}

export default App;
