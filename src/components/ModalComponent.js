import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Book } from "react-bootstrap-icons";

export default function ModalComponent({ row }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        <Book /> <span>Részletek</span>
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Részletek</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <table>
          <tbody>
            <tr>
              <td className="pe-2 py-2 align-top">Márka</td>
              <td>{row.brand}</td>
            </tr>
            <tr>
              <td className="pe-2 py-2 align-top">Típus</td>
              <td>{row.type}</td>
            </tr>
            <tr>
              <td className="pe-2 py-2 align-top">Méretarány</td>
              <td>{`1 : ${row.size}`}</td>
            </tr>
            <tr>
              <td className="pe-2 py-2 align-top">Ár</td>
              <td>{new Intl.NumberFormat("en-IN").format(row.price) + " $"}</td>
            </tr>
            <tr>
              <td className="pe-2 py-2 align-top">Leírás</td>
              <td>{row.description}</td>
            </tr>
            </tbody>
          </table>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
