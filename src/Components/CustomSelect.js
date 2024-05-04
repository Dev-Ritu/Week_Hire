import Select from "react-select";
const CustomSelect = ({ name, label, inputType, options = [] }) => {
    return <>
        <Select
            name={name}
            options={options}
            placeholder={label}
            isMulti={inputType === "multi"} //this is used to conditionally make the input as multi-select
        >
        </Select> </>
}

export default CustomSelect;