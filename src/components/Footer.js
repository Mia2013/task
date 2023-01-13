import Container from "react-bootstrap/Container";
import TypeIt from "typeit-react";

export default function Footer() {
  return (
    <div id="footer">
      <Container className="d-flex justify-content-center align-items-center ">
        <p className="fst-italic fw-lighter my-1">
          Készítette:{" "}
          <TypeIt options={{ loop: true }}>Budavári Nikolett</TypeIt>
        </p>
      </Container>
    </div>
  );
}
