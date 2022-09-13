import pt from "date-fns/locale/pt";
import { Formik } from "formik";
import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import * as Yup from "yup";

registerLocale("pt-BR", pt);

const sectorSelect = [
  { name: "GRM / MALOTE", key: "malote" },
  { name: "SSI / 3º", key: "ssi" },
  { name: "SPE / 5º", key: "spe" },
  { name: "PNAD-C / 5º", key: "pnad" },
  { name: "IPC / 7º", key: "ipc" },
  { name: "REGISTRO CIVIL / 7º", key: "civil" },
  { name: "COORD CENSO / 8º", key: "censo" },
  { name: "SRH / 9º", key: "srh-censo" },
  { name: "SRH / 10º", key: "srh" },
  { name: "GRM / 12º", key: "grm" },
  { name: "GAB / 13º", key: "gab" },
  { name: "ACG", key: "acg" },
  { name: "AJA", key: "aja" },
  { name: "AMA", key: "ama" },
  { name: "AME", key: "ame" },
  { name: "ABP", key: "abp" },
  { name: "ACF", key: "acf" },
  { name: "ACP", key: "acp" },
  { name: "ADC", key: "adc" },
  { name: "AIB", key: "aib" },
  { name: "AIT", key: "ait" },
  { name: "AMC", key: "amc" },
  { name: "ANT", key: "ant" },
  { name: "ANF", key: "anf" },
  { name: "ANI", key: "ani" },
  { name: "APT", key: "apt" },
  { name: "ARE", key: "are" },
  { name: "ASG", key: "asg" },
  { name: "AVR", key: "avr" }
];

const RequestForm = props => {
  const { date, addItem, setRequest } = props;

  const initialValues = {
    name: "",
    sector: "",
    date: new Date().getDay(),
    item: "",
    amount: 0
  };

  const schema = Yup.object({
    name: Yup.string()
      .min(3, "O nome deve ter no mínimo 3 caracteres.")
      .max(30, "O nome deve ter no máximo 30 caracteres.")
      .required("O nome é obrigatório."),
    sector: Yup.string().required("O setor é obrigatório."),
    date: Yup.date()
      .default(() => new Date())
      .required("A data do pedido é obrigatória."),
    item: Yup.string()
      .min(3, "O item deve ter no mínimo 3 caracteres.")
      .max(30, "O item deve ter no máximo 30 caracteres.")
      .required("O item é obrigatório."),
    amount: Yup.number()
      .min(1, "A quantidade deve ser maior que 0.")
      .required("A quantidade é obrigatória.")
  });

  const selectSector = () => {
    return sectorSelect.map(sector => (
      <option key={sector.key} value={sector.key}>
        {sector.name}
      </option>
    ));
  };

  const handleFormSubmit = (values, actions) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      actions.setSubmitting(false);
    }, 1000);
    setRequest(values);
  };

  const handleReset = (values, actions) => {
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleFormSubmit}>
      {props => {
        const {
          handleSubmit,
          handleChange,
          handleBlur,
          values,
          errors,
          touched
        } = props;
        return (
          <Form onSubmit={handleSubmit}>
            <Container>
              <Row>
                <Col sm={6}>
                  <Form.Label>Requisitante</Form.Label>
                  <Form.Control
                    type='text'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                    name='name'
                    isValid={touched.name && !errors.name}
                    isInvalid={!!errors.name}
                  />
                  <Form.Control.Feedback type='invalid'>
                    {errors.name}
                  </Form.Control.Feedback>
                </Col>
                <Col sm={6}>
                  <Form.Label>Setor / Área</Form.Label>
                  <Form.Select
                    type='text'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.sector}
                    isValid={
                      touched.sector && !values.sector !== "" && !errors.sector
                    }
                    isInvalid={!!errors.sector}
                    name='sector'>
                    <option value='' key=''>
                      SELECIONE
                    </option>
                    {selectSector()}
                  </Form.Select>
                  <Form.Control.Feedback type='invalid'>
                    {errors.sector}
                  </Form.Control.Feedback>
                </Col>
              </Row>

              <Row>
                <Col>
                  <Form.Label>Data</Form.Label>
                  <Form.Control
                    type='date'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.date}
                    name='date'
                    isValid={touched.date && !errors.date}
                    isInvalid={!!errors.date}
                  />
                  <Form.Control.Feedback type='invalid'>
                    {errors.date}
                  </Form.Control.Feedback>
                </Col>
              </Row>

              <Row>
                <Col>
                  <Form.Label>Item</Form.Label>
                  <Form.Control
                    type='text'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.item}
                    name='item'
                    isValid={touched.item && !errors.item}
                    isInvalid={!!errors.item}
                  />
                  <Form.Control.Feedback type='invalid'>
                    {errors.item}
                  </Form.Control.Feedback>
                </Col>
                <Col>
                  <Form.Label>Quantidade</Form.Label>
                  <Form.Control
                    type='number'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.amount}
                    name='amount'
                    isValid={touched.amount && !errors.amount}
                    isInvalid={!!errors.amount}
                  />
                  <Form.Control.Feedback type='invalid'>
                    {errors.amount}
                  </Form.Control.Feedback>
                </Col>
              </Row>
            </Container>
            <Container className='mt-3'>
              <Row>
                <Col>
                  <Button type='submit'>Enviar</Button>
                </Col>
                <Col>
                  <Button variant='secondary' type='reset'>
                    Apagar
                  </Button>
                </Col>
              </Row>
            </Container>
          </Form>
        );
      }}
    </Formik>
  );
};

export default RequestForm;
