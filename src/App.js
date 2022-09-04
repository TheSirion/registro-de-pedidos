import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Header from "./components/Header";
import ItemsList from "./components/ItemsList";
import RequestForm from "./components/RequestForm";
import "./style.css";

export default function App() {
  const [request, setRequest] = useState({});
  const [name, setName] = useState("");
  const [sector, setSector] = useState("");
  const [date, setDate] = useState(new Date());
  const [item, setItem] = useState("");
  const [itemAmount, setItemAmount] = useState(0);
  const [itemList, setItemList] = useState([]);

  const handleNameChange = event => {
    event.preventDefault();
    setName(event.target.value);
  };

  const handleSectorChange = event => {
    event.preventDefault();
    setSector(event.target.value);
  };

  const handleItemChange = event => {
    event.preventDefault();
    setItem(event.target.value);
  };

  const handleItemAmountChange = event => {
    event.preventDefault();
    setItemAmount(event.target.value);
  };

  const addItem = () => {
    const newItem = {
      name: item,
      amount: itemAmount,
    };

    for (let item in itemList) {
      if (item.name === newItem.name) {
        return;
      }
    }

    if (newItem.name === "") {
      return;
    } else if (newItem.amount === 0) {
      return;
    } else {
      const addToList = itemList.concat(newItem);
      setItemList(addToList);
      setItem("");
      setItemAmount(0);
    }
  };

  const makeRequest = () => {
    const newRequest = {
      name: name,
      sector: sector,
      date: date,
      itemList: itemList,
    };
    setRequest(newRequest);
  };

  const saveRequest = () => {
    makeRequest();
    console.log(request);
  };

  const eventHandlers = {
    handleNameChange,
    handleSectorChange,
    handleItemChange,
    handleItemAmountChange,
    setDate,
  };

  return (
    <>
      <Header />
      <Container>
        <RequestForm
          eventHandlers={eventHandlers}
          date={date}
          addItem={addItem}
        />
        <ItemsList items={itemList} />
        <Row className='d-flex justify-content-start align-items-end'>
          <Col>
            <Button variant='primary' onClick={saveRequest}>
              SALVAR
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}
