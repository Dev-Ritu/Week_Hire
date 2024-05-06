import { createSlice } from "@reduxjs/toolkit";

// Initial state
const initialState = {
  jobsList: [],
  filteredJobs: [],
  appliedFilters: {},
  isLoading: false,
  hasMore: true,
  page: 1,
};

// Reducer function

const slice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    setJobsLists: (state, action) => {
      state.jobsList = [...state.jobsList, ...action.payload];
    },
    setFilteredJobs: (state, action) => {
      state.filteredJobs = action.payload;
    },
    setAppliedFilters: (state, action) => {
      state.appliedFilters = { ...state.appliedFilters, ...action.payload };
    },
  },
});

export const { name, reducer, actions } = slice;
export default slice;
