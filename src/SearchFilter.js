import { FormControl, OutlinedInput } from "@mui/material"
import { CustomSelect } from "./Components"

// Below I've created a JSON object to streamline and reduce code repetition, then utilized the map method to dynamically render input components based on this object

const filterCategories = [{ name: "roles", label: "Roles", inputType: "multi" }, { name: "employees", label: "No. of Employees", inputType: "single" }, { name: "experience", label: "Experience", inputType: "single" }, { name: "remote", label: "Remote", inputType: "multi" }, { name: "basePay", label: "Minimum Base Pay Salary", inputType: "single" }]

const SearchFilter = () => {
    return <>
        <div className="search-filter">
            {
                filterCategories.map(({ name, label, inputType }) =>
                    <CustomSelect
                        key={name}
                        name={name}
                        label={label}
                        inputType={inputType}
                    ></CustomSelect>

                )
            }
            <FormControl>
                <OutlinedInput placeholder="Company Name" className="OutlinedInput" />
            </FormControl>
        </div>
    </>

}

export default SearchFilter