import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
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
  const [name, setName] = useState("");
  const [sector, setSector] = useState("");
  const [date, setDate] = useState(new Date());
  const [item, setItem] = useState("");

  useEffect(() => {
    console.log(date);
  }, [])

  const handleNameChange = (event) => {
    event.preventDefault();
    console.log(event.target.value)
    setName(event.target.value);
  }

  const handleSectorChange = (event) => {
    event.preventDefault();
    console.log(event.target.value)
    setSector(event.target.value);
  }

  const handleItemChange = (event) => {
    event.preventDefault();
    console.log(event.target.value)
    setItem(event.target.value);
  }

  const handleDateChange = (event) => {
    event.preventDefault();
    console.log(event.target.value)
    setDate(event.target.value);
  }

  const makeRequest = () => {
    const newRequest = {
      name: name,
      sector: sector,
      date: date,
      itemList: []
    }

    // TODO: configurar objeto newRequest com todos os dados
    // necessários e registrá-lo com setRequest()

    setRequest(newRequest);
  }

  const eventHandlers = {
    handleNameChange,
    handleSectorChange,
    handleItemChange,
    handleDateChange,
  }

  return (
    <>
      <Header />
      <Container>
        <RequestForm eventHandlers={eventHandlers} date={date} />
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
