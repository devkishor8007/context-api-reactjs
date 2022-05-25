import React, { createContext, useState } from 'react';

export const ColorContext = createContext({
  selectColor: null,
  onColorChange: newColor => {},
});

export default function ColorContextProvider({ children }) {
  const [color, setColor] = useState('red');

  const handleColorChange = c => {
    setColor(c);
  };
  const contextValue = {
    selectColor: color,
    onColorChange: handleColorChange,
  };
  return (
    <ColorContext.Provider value={contextValue}>
      {children}
    </ColorContext.Provider>
  );
}
