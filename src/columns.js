const customerColumns = [
  {
    title: "Company",
    data: "fieldData.CompanyName",
  },
  {
    title: "City",
    data: "fieldData.City",
  },
  {
    title: "State",
    data: "fieldData.State",
    orderable: false,
  },
  {
    title: "Zip",
    data: "fieldData.Zip",
    orderable: false,
  },
];

const admissionsColumns = [
  {
    title: "School",
    data: "fieldData.School",
  },
  {
    title: "Program",
    data: "fieldData.Program",
  },
  {
    title: "Grade",
    data: "fieldData.Grade",
  },
  {
    title: "Year",
    data: "fieldData.MatricYear",
  },
];

export { admissionsColumns, customerColumns };

