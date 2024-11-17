const customerColumns = [
  { data: "fieldData.CompanyName", title: "Company" },
  { data: "fieldData.City", title: "City" },
  { data: "fieldData.State", title: "State", orderable: false },
  { data: "fieldData.Zip", title: "Zip", orderable: false },
];

const admissionsColumns = [
  { title: "School", data: "fieldData.School" },
  { title: "Program", data: "fieldData.Program" },
  { title: "Grade", data: "fieldData.Grade" },
];

export { admissionsColumns, customerColumns };

