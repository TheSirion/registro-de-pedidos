import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Header from "./components/Header";
import ItemsList from "./components/ItemsList";
import RequestForm from "./components/RequestForm";
import "./style.css";

const itemsList = [
  { name: "papel A4", quantity: 3 },
  { name: "envelope grande", quantity: 4 },
  { name: "chocolatinho maneiro", quantity: 0 },
];

export default function App() {
  const [request, setRequest] = useState({});

  return (
    <>
      <Header />
      <Container>
        <RequestForm />
        <ItemsList items={itemsList} />
        <Row className='d-flex justify-content-start align-items-end'>
          <Col>
            <Button variant='primary'>SALVAR</Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}
