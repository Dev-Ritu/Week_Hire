import React, { useState } from "react";
import { Box, Container, InputLabel, OutlinedInput } from "@mui/material";
import { filterCategories, groupedOptions } from "./constants";
import { actions } from "./redux/reducers";
import Select from "react-select";
import { useDispatch } from "react-redux";
const { setAppliedFilters } = actions;

const formatGroupLabel = (data) => (
  <div className="grouped-options">
    <span>{data.label}</span>
  </div>
);

const SearchFilter = () => {
  const dispatch = useDispatch();
  const [inputValues, setInputValues] = useState({});

  const handleFilterChange = (name, value) => {
    dispatch(setAppliedFilters({ [name]: value }));
    setInputValues({ ...inputValues, [name]: value });
  };

  return (
    <>
      <Container>
        <Box className="search-filter">
          {filterCategories.map(({ name, label, inputType, options }) => {
            return (
              <div key={name}>
                <InputLabel className="label">
                  {!!inputValues[name] && label}
                </InputLabel>
                <div className="minWidth-400">
                  {name === "roles" ? (
                    <Select
                      options={groupedOptions}
                      placeholder={label}
                      name={name}
                      formatGroupLabel={formatGroupLabel}
                      onChange={(event) => {
                        handleFilterChange(name, event);
                      }}
                      isMulti
                    />
                  ) : (
                    <Select
                      name={name}
                      options={options}
                      placeholder={label}
                      isMulti={inputType === "multi"}
                      onChange={(event) => {
                        handleFilterChange(name, event);
                      }}
                    ></Select>
                  )}
                </div>
              </div>
            );
          })}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontWeight: 500,
            }}
          >
            <InputLabel className="label">
              {!!inputValues["companyName"] ? "Company Name" : ""}
            </InputLabel>
            <OutlinedInput
              placeholder="Company Name"
              className="outlined-input"
              onChange={(event) =>
                handleFilterChange("companyName", event.target.value)
              }
            />
          </div>
        </Box>
      </Container>
    </>
  );
};

export default SearchFilter;
