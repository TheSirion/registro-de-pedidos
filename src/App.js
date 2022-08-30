import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import RequestForm from './components/RequestForm';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

export default function App() {
  return (
    <>
      <Header />
      <Container>
        <RequestForm />
      </Container>
      <Footer />
    </>
  );
}
