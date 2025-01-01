import React, { createContext, useState, ReactNode, useContext } from "react";

interface SliderContextProps {
  wokeMeter: number;
  setWokeMeter: (value: number) => void;
}

export const SliderContext = createContext<SliderContextProps | undefined>(
  undefined
);

export const SliderProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [wokeMeter, setWokeMeter] = useState(DEFAULT_WOKE_METER);

  return (
    <SliderContext.Provider value={{ wokeMeter, setWokeMeter }}>
      {children}
    </SliderContext.Provider>
  );
};

export const useSliderContext = () => {
  const context = useContext(SliderContext);
  if (!context) {
    throw new Error("useSliderContext must be used within a SliderProvider");
  }
  return context;
};

const DEFAULT_WOKE_METER = 3;
