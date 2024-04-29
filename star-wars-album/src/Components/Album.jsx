import React, { useState } from 'react';
import { Container, Row, Col, Navbar, Nav, Button } from 'react-bootstrap';
import CardItem from './CardItem';
import darthVaderImage from '../assets/images/Darth Vader.jpg';
import lukeSkywalkerImage from '../assets/images/luke skywalker.jpg';
import './Album.css';

const Album = () => {
  const [darkTheme, setDarkTheme] = useState(false); 

  const albumsData = [
    {
      id: 1,
      title: 'Galáxia Distante: A Saga de Star Wars',
      cards: [
        { id: 1, title: 'Darth Vader', description: 'O lendário vilão Sith.', image: darthVaderImage },
        { id: 2, title: 'Luke Skywalker', description: 'O herói da Rebelião.', image: lukeSkywalkerImage },
        
      ],
    },
  ];

  
  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  return (
    <>
      <Navbar bg={darkTheme ? 'dark' : 'light'} variant={darkTheme ? 'dark' : 'light'} expand="lg">
        <Container>
          <Navbar.Brand href="#home">Álbum de Star Wars</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#about">About</Nav.Link>
            </Nav>
            <Nav className="navbar-right"> {}
              <Nav.Link href="#contact">Contato</Nav.Link>
              <Nav.Link href="https://twitter.com/" target="_blank">Twitter</Nav.Link>
              <Nav.Link href="https://www.facebook.com/" target="_blank">Facebook</Nav.Link>
              <Nav.Link href="mailto:seuemail@example.com">Email</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container className="py-5" style={{ backgroundColor: darkTheme ? '#343a40' : '#f8f9fa' }}>
        <Row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3>
          {albumsData.map((album) => (
            <Col key={album.id}>
              <h3>{album.title}</h3>
              <Row>
                {album.cards.map((card) => (
                  <Col key={card.id}>
                    <CardItem title={card.title} description={card.description} image={card.image} />
                  </Col>
                ))}
              </Row>
            </Col>
          ))}
        </Row>
      </Container>
      <Container className="py-3">
        <Button onClick={toggleTheme}>{darkTheme ? 'Deixar Claro' : 'Deixar Escuro'}</Button>
      </Container>
    </>
  );
};

export default Album;
