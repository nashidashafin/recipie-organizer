import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <div>
      <Navbar style={{backgroundColor: "#556b2f"}} >
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://i.postimg.cc/brqMb4VS/360-F-524113966-Eh-QWDTekwvy-TQTCZBw-Hw-U5u-BKxl-Spg9-Z.jpg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Flavor<span>Folio</span>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
