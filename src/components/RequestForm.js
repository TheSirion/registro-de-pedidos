import pt from "date-fns/locale/pt";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
registerLocale("pt-BR", pt);

const sectorSelect = [
  { name: "SSI / 3º" },
  { name: "SPE / 4º" },
  { name: "PNAD-C / 5º" },
  { name: "IPC / 7º" },
  { name: "REGISTRO CIVIL / 7º" },
  { name: "COORD CENSO / 8º" },
  { name: "SRH / 9º" },
  { name: "ACG" },
  { name: "AJA" },
  { name: "AMA" },
  { name: "AME" },
  { name: "ABP" },
  { name: "ACF" },
  { name: "ACP" },
  { name: "ADC" },
  { name: "AIB" },
  { name: "AIT" },
  { name: "AMC" },
  { name: "ANT" },
  { name: "ANF" },
  { name: "ANI" },
  { name: "APT" },
  { name: "ARE" },
  { name: "ASG" },
  { name: "AVR" },
];

const RequestForm = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <Form>
      <Form.Group className='mb-3'>
        <Row>
          <Col sm={8}>
            <Form.Label>Requisitante</Form.Label>
            <Form.Control />
          </Col>
          <Col sm={4}>
            <Form.Label>Setor ou agência</Form.Label>
            <Form.Select>
              <option value='' key="">SELECIONE</option>
              {sectorSelect.map(sector => (
                <option key={sector.name} value={sector.name}>{sector.name}</option>
              ))}
            </Form.Select>
          </Col>
        </Row>
        <Row>
          <Col sm={4}>
            <Form.Label>Data</Form.Label>
            <DatePicker
              className='form-control'
              todayButton='Hoje'
              selected={startDate}
              locale={pt}
              dateFormat="dd/MM/yyyy"
              onChange={date => setStartDate(date)}
            />
          </Col>
        </Row>
        <Row className="d-flex align-items-end">
          <Col sm={6}>
            <Form.Label>Item</Form.Label>
            <Form.Control />
          </Col>
          <Col sm={2}>
            <Form.Label>Quantidade</Form.Label>
            <Form.Control />
          </Col>
          <Col sm={3}>
            <Button>ADICIONAR</Button>
          </Col>
        </Row>
      </Form.Group>
    </Form>
  );
};

export default RequestForm;
