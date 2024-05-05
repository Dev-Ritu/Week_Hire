import { name } from "./reducers";

export const selectSlice = (state) => state[name];

export const selectJobsList = (state) => selectSlice(state).jobsList;
