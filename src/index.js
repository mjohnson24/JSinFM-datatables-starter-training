import { admissionsColumns, customerColumns } from "./columns";

let table, type;
// https://datatables.net/reference/option/
// https://datatables.net/examples/index

window.loadTable = (json) => {
  const obj = JSON.parse(json);
  const data = obj.data;
  type = obj.type;
  //   console.log(type);

  const columns = type === "Customers" ? customerColumns : admissionsColumns;
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
  //   console.log(row);
  const data = row.data();
  console.log("data: ", data);

  const primaryKey = data.fieldData.PrimaryKey;
  //   console.log(primaryKey);
  //   const title = data.fieldData.CompanyName;
  const obj = { primaryKey, type };
  console.log("obj: ", obj);
  FileMaker.PerformScript("Get Data Back", JSON.stringify(obj));
});
