export const engineering = [
  { value: "backend", label: "Backend" },
  { value: "frontend", label: "Frontend" },
  { value: "full stack", label: "Fullstack" },
  { value: "ios", label: "iOS" },
  { value: "android", label: "Android" },
  { value: "flutter", label: "Flutter" },
  { value: "react native", label: "React Native" },
  { value: "tech lead", label: "Tech Lead" },
  { value: "data engineer", label: "Data Engineer" },
  { value: "devops", label: "DevOps" },
  { value: "cloud computing", label: "Cloud Computing" },
  { value: "machine learning", label: "Machine Learning" },
  { value: "artificial intelligence", label: "Artificial Intelligence" },
  { value: "robotics", label: "Robotics" },
  { value: "software engineering", label: "Software Engineering" },
  { value: "embedded systems", label: "Embedded Systems" },
  { value: "game programming", label: "Game Programming" },
  { value: "block chain", label: "Blockchain Development" },
  { value: "iot", label: "Internet of Things (IoT)" },
  { value: "arvr", label: "Augmented Reality/Virtual Reality (AR/VR)" },
];

export const design = [
  { value: "design", label: "Design" },
  { value: "design manager", label: "ChocDesign Manager" },
  { value: "graphic designer", label: "Graphic Designer" },
  { value: "product designer", label: "Product Designer" },
];

const produts = [{ value: "productManager", label: "Product Manager" }];

const legal = [{ value: "legal", label: "Legal" }];

const hr = [{ value: "hr", label: "HR" }];

const finance = [{ value: "finance", label: "Finance" }];

const sales = [ { value: "account manager", label: "Account Manager" },
{ value: "account executive", label: "Account Executive" },
{ value: "sales development executive", label: "Product Designer" },]

export const groupedOptions = [
  {
    label: "ENGINEERING",
    options: engineering,
  },
  {
    label: "DESIGN",
    options: design,
  },
  {
    label: "PRODUCT",
    options: produts,
  },
  {
    label:"SALES",
    options:sales
  },
  {
    label:"LEGAL",
    options:legal
  },
  {
    label:"HR",
    options:hr
  },
  {
    label:"FINANCE",
    options:finance
  }

];

export const filterCategories = [
    {
      name: "roles",
      label: "Roles",
      inputType: "multi",
      options: { groupedOptions },
    },
    {
      name: "employees",
      label: "No. of Employees",
      inputType: "single",
      options: [
        { label: "1-10", value: "1-10" },
        { label: "11-20", value: "11-20" },
        { label: "21-50", value: "21-50" },
        { label: "50-100", value: "50-100" },
        { label: "101-500", value: "101-500" },
        { label: "500+", value: "500+" },
      ],
    },
    {
      name: "experience",
      label: "Experience",
      inputType: "single",
      options: [
        { value: 0, label: "0 year" },
        { value: 1, label: "1 year" },
        { value: 2, label: "2 year" },
        { value: 3, label: "3 year" },
        { value: 4, label: "4 year" },
        { value: 5, label: "5 year" },
        { value: 6, label: "6 year" },
        { value: 7, label: "7 year" },
        { value: 8, label: "8 year" },
        { value: 9, label: "9 year" },
        { value: 10, label: "10 year" },
      ],
    },
    {
      name: "jobType",
      label: "Job Type",
      inputType: "multi",
      options: [
        { label: "Remote", value: "remote" },
        { label: "Hybrid", value: "hybrid" },
        { label: "In-Office", value: "inOffice" },
      ],
    },
    {
      name: "basePay",
      label: "Minimum Base Pay Salary",
      inputType: "single",
      options: [
        { value: 0, label: "0L" },
        { value: 10, label: "10L" },
        { value: 20, label: "20L" },
        { value: 30, label: "30L" },
        { value: 40, label: "40L" },
        { value: 50, label: "50L" },
        { value: 60, label: "60L" },
        { value: 70, label: "70L" },
      ],
    },
  ];
  