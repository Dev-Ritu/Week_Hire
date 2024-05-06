// This function will return the currencySymbol used for display currencySymbol with salary detail
export const getCurrencySymbol = (currencyCode) => {
  const currencySymbols = {
    USD: "$",
    EUR: "€",
    GBP: "£",
    INR: "₹",
  };

  return currencySymbols[currencyCode] || "";
};

// This Function will provide the string to be displayed for the salary details based on response for min and max salary from the response.
export const getSalaryDetails = (
  minJdSalary,
  maxJdSalary,
  salaryCurrencyCode
) => {
  if (!minJdSalary && maxJdSalary) {
    return `Estimated Salary: Upto ${getCurrencySymbol(
      salaryCurrencyCode
    )} ${maxJdSalary}`;
  }
  if (!minJdSalary && !maxJdSalary) return `Estimated Salary: Not Disclosed`;
  if (!maxJdSalary && minJdSalary)
    return `Estimated Salary : around ${getCurrencySymbol(
      salaryCurrencyCode
    )} ${minJdSalary}`;
  else if (maxJdSalary && minJdSalary) {
    return `Estimated Salary: ${getCurrencySymbol(
      salaryCurrencyCode
    )} ${minJdSalary} - ${getCurrencySymbol(
      salaryCurrencyCode
    )} ${maxJdSalary}`;
  }
};

//This function will provide the Experience details based on the response value for min and max experience value
export const getExperienceString = (minExp, maxExp) => {
  if (minExp === null && maxExp === null) {
    return "No experience specified";
  } else if (minExp !== null && maxExp !== null) {
    return `${minExp} - ${maxExp} years`;
  } else if (minExp !== null) {
    return `Minimum ${minExp} years of experience`;
  } else if (maxExp !== null) {
    return `Maximum ${maxExp} years of experience`;
  } else {
    return "";
  }
};

// This function will help to capitalize the first letter of the word
export const capitalizeFirstLetter = (str) => {
  return str.replace(/\b\w/g, (char) => char.toUpperCase());
};
