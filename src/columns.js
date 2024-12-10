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

const servicesColumns = [
  {
    title: "Status",
    data: "fieldData.Status",
  },
  {
    title: "Client ID",
    data: "fieldData.ClientID",
  },
  {
    title: "Unit Serial #",
    data: "fieldData.UnitSerialNumber",
  },
  {
    title: "Unit Type",
    data: "fieldData.UnitType",
  },
  {
    title: "Unit Location",
    data: "fieldData.UnitLocation",
  },
  {
    title: "Program Fee",
    data: "fieldData.ProgramFee",
    orderable: false,
  },
];

export { admissionsColumns, customerColumns, servicesColumns };
