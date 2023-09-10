import React from "react";
import { Container, Row, Col, Card, Form } from 'react-bootstrap'
import '../../Aseset/css/account.css';
import InputGroup from 'react-bootstrap/InputGroup';
import Auth from "../../Model/Auth.model";
import { Link } from "react-router-dom";
import Accountfootor from "../../Layout/Accountfooter";
class Login extends React.Component {

  handleClick = (tab) => {
    this.setState({ activeTab: tab });
  };

  constructor(props) {
    super(props);
    this.state = {
      activeTab: "Tab1",
      // formData:{
      email: '',
      password: ''
      // }
    }
  }

  onSubmit = async () => {
    try {
      let response = await Auth.login(this.state);
     
      if (response.status) {
        if (response.data.status === true) {
          // sessionStorage.setItem("id", response.data.userInfo['userID']);
          localStorage.setItem("id", response.data.userInfo['userID']);

          window.location.replace("/user/dashboard")
        }

      }
    } catch (e) {
      console.log(e);
    }
  }
  onOtp = async () => {
    try {
      let response = await Auth.Otplogin(this.state);
      console.log(response.data);
      if (response.status) {
        if (response.data.status === true) {
          // sessionStorage.setItem("id", response.data.userInfo['userID']);
          localStorage.setItem("id", response.data.userInfo['userID']);

          window.location.replace("/user/dashboard")
        }
      }
    } catch (e) {
      console.log(e);
    }
  }
  render() {
    return (
      <div>
        <Container >
          <Row>
            <Col sm={3}>
            </Col>
            <Col sm={6} className='signup mb-4 mt-5'>
              <Card className="shadow-5 login-card" style={{ boShadow: "0 14px 26px -12px rgb(54 191 244 / 42%), 0 4px 23px 0px rgb(0 0 0 / 12%), 0 8px 10px -5px rgb(54 165 244 / 20%);"}}>
                <h2 className='text-center m-5'><b>Welcome Back</b></h2>
                <div className="tabs-container">
                  <Container className="mb-4 mt-4">
                    <Row>
                      <Col> <div
                        className={`tab  text-center ${this.state.activeTab === "Tab1" ? "active" : ""}`}
                        onClick={() => this.handleClick("Tab1")}
                      >
                        <span className="text-center" style={{ cursor: "grab" }}><b>LOGIN BY PASSWORD</b></span>
                      </div></Col>
                      <Col>
                        <div
                          className={`tab text-center ${this.state.activeTab === "Tab2" ? "active" : ""}`}
                          onClick={() => this.handleClick("Tab2")}
                        >
                          <span className="text-center" style={{ cursor: "grab" }}> <b>LOGIN BY OTP</b></span>
                        </div></Col>
                    </Row>
                  </Container>
                  <div className="tab-content">
                    {this.state.activeTab === "Tab1" && <>
                      <div className='m-3'>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                          <Form.Label>Phone Number or Email</Form.Label>
                          <Form.Control type="email" value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} placeholder="Phone Number or Email" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                          <Form.Label>Password</Form.Label>
                          <Form.Control type="password" value={this.state.password} onChange={(e) => this.setState({ password: e.target.value })} placeholder="Phone Number or Email" />

                        </Form.Group>
                        <button onClick={this.onSubmit} className='conatct-button mt-3' style={{ width: "-webkit-fill-available" }}><b>LOGIN</b></button>                        <p className='text-disable mt-3 text-center  text-primary'><b>Generate new password</b></p>
                        <h6 className='text-center'>Not a member? <Link to='/Account/singup'><span className='text-primary' style={{cursor:"default"}}>Join now</span></Link></h6>
                      </div></>}
                    {this.state.activeTab === "Tab2" && <>
                      <div className='m-3'>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                          <Form.Label>Phone Number or Email</Form.Label>
                          <InputGroup className="mb-3">
                            <Form.Control
                              placeholder="Phone Number or Email"
                              aria-label="Phone Number or Email"
                              aria-describedby="basic-addon2"
                              value={this.state.number} onChange={(e) => this.setState({ number: e.target.value })}
                            />
                            <InputGroup.Text id="basic-addon2" style={{ backgroundColor: "blue" }}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-caret-right-square-fill" viewBox="0 0 16 16">
                              <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.5 10a.5.5 0 0 0 .832.374l4.5-4a.5.5 0 0 0 0-.748l-4.5-4A.5.5 0 0 0 5.5 4v8z" />
                            </svg></InputGroup.Text>
                          </InputGroup>                </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                          <Form.Label>Enter OTP</Form.Label>
                          <Form.Control type="password" value={this.state.otp} onChange={(e) => this.setState({ otp: e.target.value })} placeholder="Enter OTP" />
                        </Form.Group>
                        <button onClick={this.onOtp} className='conatct-button mt-3' style={{ width: "-webkit-fill-available" }}><b>LOGIN BY OTP</b></button>
                        <h6 className='text-center mt-5'>Not a member? <Link to='/Account/singup'><span className='text-primary' style={{cursor:"default"}}>Join now</span></Link></h6>
                      </div></>}
                  </div>
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


}

export default Login
