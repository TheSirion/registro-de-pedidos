import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Modal from 'react-bootstrap/Modal';
import DatePicker, { registerLocale, setDefaultLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import pt from 'date-fns/locale/pt';
registerLocale('pt', pt);

const RequestForm = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(!show);
  };

  const setRequestDate = () => {
    return (
      <DatePicker
        todayButton="Hoje"
        selected={startDate}
        onChange={(date) => setStartDate(date)}
      />
    );
  };

  return (
    <Form>
      <Form.Group className="mb-3">
        <Row>
          <Col sm={8}>
            <Form.Label>Requisitante</Form.Label>
            <Form.Control />
          </Col>
          <Col sm={4}>
            <Form.Label>Setor ou agência</Form.Label>
            <Form.Control />
          </Col>
        </Row>
        <Row>
          <Col sm={4}>
            <Form.Label>Data</Form.Label>
            <DatePicker
              className="form-control"
              todayButton="Hoje"
              selected={startDate}
              locale="pt"
              onChange={(date) => setStartDate(date)}
            />
          </Col>
          <Col className="d-flex justify-content-start align-items-end">
            <Button variant="primary">SALVAR</Button>
          </Col>
        </Row>
      </Form.Group>
    </Form>
  );
};

export default RequestForm;
