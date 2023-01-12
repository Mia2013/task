import { useEffect, useContext, useState } from "react";
import { Alert } from "react-bootstrap";
import Container from "react-bootstrap/esm/Container";
import { tableItemsContext } from "../context/tableContext";
import Title from "../components/Title";

import DataTableComponent from "../components/DataTable";

export default function Content() {
  const { items, error, getData } = useContext(tableItemsContext);
  const [spinner, setSpinner] = useState(true);

  useEffect(() => {
    getData();
    setSpinner(false);
  }, [getData]);

  return (
    <Container fluid="lg" className="my-3">
      <Title title="Termékek" />
      {items && <DataTableComponent spinner={spinner} />}
      {error && (
        <Alert variant="danger" className="my-5">
          Sajnos a táblázat betöltése közben hiba történt.
        </Alert>
      )}
    </Container>
  );
}
