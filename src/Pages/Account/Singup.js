import React, { useState } from 'react'
import { Container, Row, Col,Card,Form } from 'react-bootstrap'
import '../../Aseset/css/account.css'
import Auth from '../../Model/Auth.model';
import { Link } from "react-router-dom";
import Accountfootor from '../../Layout/Accountfooter';
function Singup() {
  
    const [formData, setFormData] = useState({
        firstName: '',
        lastName:'',
        contactNumber: '',
        password: '',
        email:''
      
      });
      const handleInputChange = (event) => {
        setFormData({
          ...formData,
          [event.target.name]: event.target.value,
        });
      };
      const handleSubmit = (event) => {
        event.preventDefault();
        Auth.singUp(formData)
          .then((response) => {
            console.log(response.data);
            // Display success message to the user
          })
          .catch((error) => {
            console.log(error);
            // Display error message to the user
          });
      };
  return (
    <div>
        <Container >
            <Row>
              <Col sm={3}> 
              </Col>
              <Col sm={6} className='signup mb-4 mt-5'>
                    
                    <Card className='shadow-3 '>
                        <h2 className='text-center m-5'>Join Now</h2>
                        <div className='m-3'>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control type="text" placeholder="First Name" 
                                    value={formData.fname}
                                    name='firstName'
                                    onChange={handleInputChange}
                                    />

                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control type="text" placeholder="Last Name"
                                     value={formData.lname}
                                     name='lastName'
                                     onChange={handleInputChange}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Phone No / Email Id</Form.Label>
                                    <Form.Control type="text" placeholder="Phone No / Email Id" 
                                     value={formData.contactNumber}
                                     onChange={handleInputChange}
                                     name='contactNumber'
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password"
                                     value={formData.password}
                                     onChange={handleInputChange}
                                     name='password'
                                    />
                                </Form.Group>
                                
                                <button type='submit' className='conatct-button mt-3' style={{width: "-webkit-fill-available"}}><b>CREATE ACCOUNT</b></button>
                                <p  className='text-disable text-center small mt-2'>By clicking create account, you agree to our Terms, Data Policy and Cookie Policy</p>
                                <h6 className='text-center'> <b>Already a member?  <u><Link to='/Account/login'><span className='text-primary' style={{cursor:"default"}}>Login</span></Link></u></b></h6>
                            </Form>
                        </div>
                    </Card>
                </Col>
                <Col sm={3}> 
              </Col>
            </Row>
            
        </Container>


        <div style={{ position: 'fixed',bottom: '0px',left:'0px',right: '0px',marginBottom: '0px'}}><Accountfootor/></div>


        

    </div>
  )
}

export default Singup
