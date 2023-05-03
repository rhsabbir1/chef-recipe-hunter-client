import React from 'react';
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='bg-black'>
            <Container >
                <Row xs={1} md={2} className="g-2 py-4">
                    
                        <Col>
                                <h1 className='text-white'>IFC</h1>
                                <p className='text-white mb-0'>Contact US</p>
                                <p className='text-white mb-0'>Phone : +45000510</p>
                                <p className='text-white'>Email : ifc1@gmail.com</p>
                        </Col>
                        <Col>
                            <textarea className='rounded' name="" id="" cols="30" rows="2" placeholder='Please Revied Our Food Coner....'></textarea>
                            <br />
                            <button className='btn btn-danger'>Submit</button>
                        </Col>
                </Row>
                <p className='text-white text-center pb-4'>All Right Reserve</p>
            </Container>
        </div>
    );
};

export default Footer;