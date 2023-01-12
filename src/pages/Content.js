import { useEffect, useContext, useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Spinner from "../components/Spinner";
import { tableItemsContext } from "../context/tableContext";
import DataTable from "react-data-table-component";
import Example from "../components/Modal";

export default function Content() {
  const { items, error, getData } = useContext(tableItemsContext);
  const [spinner, setSpinner] = useState(true);


  useEffect(() => {
    getData();
    setSpinner(false);
  }, []);



  const columns = [
    {
      name: "Azonosító",
      selector: (row) => row.id,
      sortable: true,
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
    },
    {
      name: "Méretarány",
      selector: (row) => `1 : ${row.size}`,
      sortable: true,
    },
    {
      name: "Készlet",
      selector: (row) => row.stock,
      sortable: true,
      cell: (row) => (
        <progress value={row.stock} max="100">
          {row.stock}
        </progress>
      ),
    },
    {
      name: "Ár",
      selector: (row) => row.price,
      sortable: true,
      cell: (row) => new Intl.NumberFormat("en-IN").format(row.price) + " $",
    },
    {
      button: true,
      cell: (row) => (
       <Example row={row}/>
      ),
    },
  ];

  const paginationComponentOptions = {
    rowsPerPageText: "Sor/oldal  ",
    rangeSeparatorText: "termék megjelenítve",
    selectAllRowsItem: true,
    selectAllRowsItemText: items?.length,
  };

  return (
    <Container className="my-3">
      <h1>Termékek</h1>
      {items && (
        <DataTable
          columns={columns}
          data={items}
          pagination
          paginationComponentOptions={paginationComponentOptions}
          responsive={true}
          defaultSortFieldId={1}
          highlightOnHover
          // pointerOnHover
          // progressPending={spinner}
          // progressComponent={<Spinner />}
        />
      )}
    </Container>
  );
}
