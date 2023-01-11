import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

export default function Footer() {
  return (
    <Navbar bg="light" expand="lg"  fixed="bottom">
      <Container className='d-flex justify-content-center'>
       <p className="fst-italic fw-lighter">Készítette: Budavári Nikolett</p>
      </Container>
    </Navbar>
  );
}

