// filterSearchState

import { atom } from "recoil";

export const filterSearchState = atom({
  key: "filterSearchState", // unique ID (with respect to other atoms/selectors)
  default: "", // default value (aka initial value)
});