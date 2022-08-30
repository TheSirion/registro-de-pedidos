import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

export default function App() {
  return (
    <>
      <Header />
      <div>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Nome do requisitante</Form.Label>
            <Form.Control />
            <Form.Label>Setor ou agência</Form.Label>
            <Form.Control />
            <Form.Label>Data</Form.Label>
            <Form.Control />
          </Form.Group>
          <Button variant="primary">OK</Button>
        </Form>
      </div>
      <Footer />
    </>
  );
}
