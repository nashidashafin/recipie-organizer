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
            <a href="" className='pt-5' style={{textDecoration:'none',color:'white'}}>Add new recipie</a>
        </Link>

            
            </Col>
       
        <Col lg={4}>
            <h5 style={{color:"black"}}>Contact Us</h5>
            <input type="email" placeholder='Email' className='form-control pe-5' />
            <div className='text-center mt-2'><button className='btn btn-light text-danger'><b>Send</b></button></div>
            <div className='d-flex justify-content-around mt-3'>
            <i class="fa-brands fa-github" ></i>
            <i class="fa-brands fa-linkedin" ></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-instagram" ></i>
            </div>
        </Col>
      </Row>
    </div>
  )
}

export default Footer
