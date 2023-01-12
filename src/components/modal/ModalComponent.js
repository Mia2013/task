import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Book } from "react-bootstrap-icons";
import TableForModalBody from "./TableForModalBody";

export default function ModalComponent({ row }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const rowDataToDisplay = [
    {
      title: "Márka",
      data: row.brand,
    },
    {
      title: "Típus",
      data: row.type,
    },
    {
      title: "Méretarány",
      data: "1 : " + row.size,
    },
    {
      title: "Ár",
      data: new Intl.NumberFormat("en-IN").format(row.price) + " $",
    },
    {
      title: "Leírás",
      data: row.description,
    },
  ];

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        <Book />{" "}
        <span className="px-1" id="details">
          Részletek
        </span>
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Részletek</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <TableForModalBody data={rowDataToDisplay} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
