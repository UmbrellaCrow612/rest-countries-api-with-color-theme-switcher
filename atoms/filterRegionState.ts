// filterRegionState

import { atom } from "recoil";

export const filterRegionState = atom({
  key: "filterRegionState", // unique ID (with respect to other atoms/selectors)
  default: "", // default value (aka initial value)
});