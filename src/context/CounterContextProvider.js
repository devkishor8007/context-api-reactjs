import React, { createContext } from 'react';

export const counterContext = createContext();

export default function CounterContextProvider(props) {
  const [count, setCount] = React.useState(0);

  function increase() {
    setCount(count + 1);
  }

  function decrease() {
    setCount(count - 1);
  }

  const value = { count, increase, decrease };
  return (
    <counterContext.Provider value={value}>
      {props.children}
    </counterContext.Provider>
  );
}
