import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Footer.css'


function Footer() {
  return (
    <div>
      <Row className='text-white ps-4 py-4 ' style={{backgroundColor: "#556b2f"}}>
        <Col>

        <Link to={'/'} style={{textDecoration:'none'}}>
            <div style={{color:'black'}}>
                <img
                        alt=""
                        src="https://i.postimg.cc/brqMb4VS/360-F-524113966-Eh-QWDTekwvy-TQTCZBw-Hw-U5u-BKxl-Spg9-Z.jpg"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                      />{' '}
                      Flavor<span>folio</span>
                      
            </div>
        </Link>

            
            </Col>
       
       
      </Row>
    </div>
  )
}

export default Footer
