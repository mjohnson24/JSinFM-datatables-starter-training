let table;
// https://datatables.net/reference/option/
// https://datatables.net/examples/index

window.loadTable = (json) => {
  const obj = JSON.parse(json);
  const data = obj.data;
  console.log(data);
  const columns = [
    { data: "fieldData.CompanyName", title: "Company" },
    { data: "fieldData.City", title: "City" },
    { data: "fieldData.State", title: "State", orderable: false },
    { data: "fieldData.Zip", title: "Zip", orderable: false },
  ];

  table = $("#dtable").DataTable({
    columns,
    data,
    // paging: false,
    // ordering: false,
  });
};

// add a row click event
$("#dtable").on("click", "tr", function () {
  const row = table.row(this);
  console.log(row);
  const data = row.data();
  console.log(data);
  const primaryKey = data.fieldData.PrimaryKey;
  console.log(primaryKey);
  const obj = { primaryKey };
  console.log(obj);
  FileMaker.PerformScript("Get Data Back", JSON.stringify(obj));
});
