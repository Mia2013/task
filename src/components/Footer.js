import Container from "react-bootstrap/Container";
import TypeIt from "typeit-react";

export default function Footer() {
  return (
    <div id="footer">
      <Container className="d-flex justify-content-center align-items-center ">
        <p className="fst-italic fw-lighter my-1">
          {" "}
          <TypeIt
            options={{
              speed: 250,
              afterComplete: function (instance) {
                instance.destroy();
              },
            }}
          >
            Készítette: Budavári Nikolett
          </TypeIt>
        </p>
      </Container>
    </div>
  );
}
