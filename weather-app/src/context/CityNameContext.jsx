import React, { createContext, useState } from "react";

export const CityNameContext = createContext([
  {
    city: ""
  },
  () => {}
]);
export function CityNameContextProvider(props) {
  const [value, setValue] = useState({
    city: "Vancouver"
  });
  return (
    <CityNameContext.Provider value={[value, setValue]}>
      {props.children}
    </CityNameContext.Provider>
  );
}
