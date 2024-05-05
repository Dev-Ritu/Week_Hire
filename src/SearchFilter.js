import { Box, Container, FormControl, OutlinedInput } from "@mui/material";
import { CustomSelect } from "./Components";
import { useState } from "react";
import { filterCategories } from "./constants";

const SearchFilter = () => {
  const [filters, setFilters] = useState({});

  const handleFilterChange = (name, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  return (
    <>
      <Container>
        <Box className="search-filter">
          {filterCategories.map(({ name, label, inputType, options }) => (
            <CustomSelect
              key={name}
              name={name}
              label={label}
              inputType={inputType}
              options={options}
              setFilters={setFilters}
            ></CustomSelect>
          ))}
          <FormControl>
            <OutlinedInput
              placeholder="Company Name"
              className="outlined-input"
              onChange={(event) =>
                handleFilterChange("companyName", event.target.value)
              }
            />
          </FormControl>
        </Box>
      </Container>
    </>
  );
};

export default SearchFilter;
