import { AnimatePresence } from "motion/react";
import * as Pages from "./pages";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <AnimatePresence>
      <Routes>
        <Route path="/" element={<Pages.Home />} />
        <Route path="/:movieName" element={<Pages.Movie />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
