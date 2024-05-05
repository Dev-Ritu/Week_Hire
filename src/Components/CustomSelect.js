import Select from "react-select";

import { engineering, groupedOptions } from "../constants";

const groupStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
};

const groupBadgeStyles = {
  backgroundColor: "#EBECF0",
  borderRadius: "2em",
  color: "#172B4D",
  display: "inline-block",
  fontSize: 12,
  fontWeight: "normal",
  lineHeight: "1",
  minWidth: 1,
  padding: "0.16666666666667em 0.5em",
  textAlign: "center",
};

const formatGroupLabel = (data) => (
  <div style={groupStyles}>
    <span>{data.label}</span>
    <span style={groupBadgeStyles}>{data.options.length}</span>
  </div>
);

const CustomSelect = ({ name, label, inputType, options = [], setFilters }) => {
  const handleFilterChange = (name, data) => {
    let value = "";
    if (!!data.length) {
      value = data.map((each) => each.value);
    } else value = data.value;

    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };
  return (
    <>
      {name === "roles" ? (
        <Select
          defaultValue={engineering[1]}
          options={groupedOptions}
          formatGroupLabel={formatGroupLabel}
          onChange={(event) => {
            handleFilterChange(name, event);
          }}
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
    </>
  );
};

export default CustomSelect;
