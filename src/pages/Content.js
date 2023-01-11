import { useEffect, useContext, useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Spinner from "../components/Spinner";
import { tableItemsContext } from "../context/tableContext";

export default function Content() {
  const { items, error, getData } = useContext(tableItemsContext);
  const [spinner, setSpinner] = useState(true);

  useEffect( () => {
   getData();
    setSpinner(false);
    console.log(items);
  }, []);

  return (
    <Container className="my-3">
      <h1>Termékek</h1>
      {spinner && <Spinner />}

      
    </Container>
  );
}



