import bootstrap from "bootstrap";
import DataTable from "datatables.net-dt";
import "datatables.net-responsive-dt";
import "datatables.net-searchbuilder-dt";
import "datatables.net-searchbuilder-dt/css/searchBuilder.dataTables.min.css";
import $ from "jquery";
import { admissionsColumns, customerColumns } from "./columns";

let table, type;

window.loadTable = (json) => {
  const obj = JSON.parse(json);
  const data = obj.data;
  type = obj.type;

  const columns = type === "Customers" ? customerColumns : admissionsColumns;

  table = new DataTable("#dtable", {
    columns, // Use updated column definitions
    data, // Populate the table with data
    pageLength: 10, // Rows per page
    paging: true, // Enable pagination
    ordering: true, // Enable column sorting
    info: true, // Show table information
    responsive: true, // Make table responsive
    dom: "QBfrtip",
    searchBuilder: true,
  });
};

// Add a row click event
$("#dtable").on("click", "tr", function () {
  const row = table.row(this);
  const data = row.data();
  console.log("data: ", data);

  const primaryKey = data.fieldData.PrimaryKey;
  const obj = { primaryKey, type };
  console.log("obj: ", obj);
  FileMaker.PerformScript("Get Data Back", JSON.stringify(obj));
});
