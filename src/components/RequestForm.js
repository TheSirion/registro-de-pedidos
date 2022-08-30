import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import DatePicker from 'react-datepicker';

const RequestForm = () => {
  const [startDate, setStartDate] = useState(new Date());

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
            <Form.Control onClick={setRequestDate} />
          </Col>
          <Col className="d-flex justify-start align-end">
            <Button variant="primary">OK</Button>
          </Col>
        </Row>
      </Form.Group>
    </Form>
  );
};

export default RequestForm;
