import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import Container from "react-bootstrap/Container";
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
      </Container>
    </>
  );
}
