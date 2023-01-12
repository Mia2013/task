import { useContext } from "react";
import Spinner from "./Spinner";
import DataTable, { Media } from "react-data-table-component";
import { tableItemsContext } from "../context/tableContext";
import ModalComponent from "../components/modal/ModalComponent";

export default function DataTableComponent({ spinner }) {
  const { items } = useContext(tableItemsContext);

  const columns = [
    {
      name: "Azonosító",
      selector: (row) => row.id,
      sortable: true,
      id: "id",
      hide: Media.MD,
    },
    {
      name: "Márka",
      selector: (row) => row.brand,
      sortable: true,
    },
    {
      name: "Típus",
      selector: (row) => row.type,
      sortable: true,
      wrap: true,
    },
    {
      name: "Méretarány",
      selector: (row) => `1 : ${row.size}`,
      sortable: true,
      hide: Media.SM,
    },
    {
      name: "Készlet",
      selector: (row) => row.stock,
      sortable: true,
      cell: (row) => (
        <progress value={row.stock} max={row.maxStock ? row.maxStock : 100}>
          {row.stock}
        </progress>
      ),
      hide: Media.MD,
    },
    {
      name: "Ár",
      selector: (row) => row.price,
      sortable: true,
      cell: (row) => new Intl.NumberFormat("en-IN").format(row.price) + " $",
      hide: Media.SM,
    },
    {
      cell: (row) => <ModalComponent row={row} />,
    },
  ];

  const paginationComponentOptions = {
    rowsPerPageText: "Megjelenített bejegyzések oldalanként:",
    rangeSeparatorText: "/",
  };

  const customStyles = {
    headCells: {
      style: {
        paddingLeft: "8px",
        paddingRight: "8px",
        minWidth: "50px",
      },
    },
    cells: {
      style: {
        paddingLeft: "8px",
        paddingRight: "8px",
        minWidth: "50px",
      },
    },
  };
  return (
    <DataTable
      columns={columns}
      data={items}
      pagination
      paginationComponentOptions={paginationComponentOptions}
      responsive={true}
      defaultSortFieldId="id"
      highlightOnHover
      progressPending={spinner}
      progressComponent={<Spinner />}
      customStyles={customStyles}
      paginationRowsPerPageOptions={[10, 25, 50, 75, 100]}
    />
  );
}
