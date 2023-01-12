import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Book, Table } from "react-bootstrap-icons";

export default function Example({ row }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        <Book /> Részletek
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Részletek</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <table>
          <tbody>
            <tr>
              <td>Márka</td>
              <td>{row.brand}</td>
            </tr>
            <tr>
              <td>Típus</td>
              <td>{row.type}</td>
            </tr>
            <tr>
              <td>Méretarány</td>
              <td>{`1 : ${row.size}`}</td>
            </tr>
            <tr>
              <td>Ár</td>
              <td>{new Intl.NumberFormat("en-IN").format(row.price) + " $"}</td>
            </tr>
            <tr>
              <td>Leírás</td>
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
