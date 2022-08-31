import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import RequestForm from './components/RequestForm';
import ItemsList from './components/ItemsList';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

const itemsList = [
  { name: 'papel A4', quantity: 3 },
  { name: 'envelope grande', quantity: 4 },
  { name: 'chocolatinho maneiro', quantity: 1 },
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
