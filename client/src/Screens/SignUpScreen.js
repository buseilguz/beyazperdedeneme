import React, { useState, useEffect } from "react";
import { Container, Form, Button, FormGroup, Row, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-number-input"
import {  register } from "../axios";
import "react-phone-number-input/style.css";
import toast from 'react-hot-toast'
const SignUpScreen = () => {
  const navigate = useNavigate();
  const[phoneNumber,setPhoneNumber]=useState("")
  const [formData, setFormData] = useState({
    fullname: "",
    password: "",
    correctionPassword:"",
    phoneNumber: phoneNumber,
    email: "",
  });
  const [disabled,setDisabled]=useState(true);
  useEffect(()=>{
    if(formData.password.length>=8 && formData.fullname.length>=3&&formData.phoneNumber.length>=10&& formData.correctionPassword===formData.password){
      setDisabled(false)
    }else{
      setDisabled(true)
    }
  },[formData])


  useEffect(()=>{
    setFormData({...formData,phoneNumber:phoneNumber})
  },[phoneNumber])
  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} md={6}>
          <Form
            onSubmit={(e) => {
              e.preventDefault();

              register(formData)
                .then((res) => {
                  navigate("/signin");
                })
                .catch((err) => toast.error(err.response.data.message));
            }}
          >
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                onChange={(e) =>
                  setFormData({ ...formData, fullname: e.target.value })
                }
                type="name"
                placeholder="Enter your name"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                type="email"
                placeholder="Enter email"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                type="password"
                placeholder="Enter password"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password Again</Form.Label>
              <Form.Control
              onChange={(e)=>{setFormData({...formData,correctionPassword:e.target.value})}}
                type="password"
                placeholder="Enter your password again"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Phone</Form.Label>
              <PhoneInput value={phoneNumber} onChange={setPhoneNumber} defaultCountry="TR"/>
             </Form.Group>
            <Form.Group className="d-grid">
              <Button disabled={disabled} variant="primary" type="submit" className="mt-4">
                <Link className="text-white text-decoration-none" to="/signup">
                  Sign Up
                </Link>
              </Button>
            </Form.Group>
          </Form>
          <div style={{display:"flex",flexDirection:"column",textAlign:"center",marginTop:"10px"}}>
                <p style={{color:"red",display:formData.password.length>=8 && "none"}}>Şifreniz 8 karakterden uzun olmalıdır.</p>
                <p style={{color:"red",display:formData.fullname.length>=8 && "none"}}>İsminiz 8 karakterden uzun olmalıdır.</p>
                <p style={{color:"red",display:formData.correctionPassword===formData.password && "none"}}>Girdiğiniz şifreler aynı olmalıdır.</p>

          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default SignUpScreen;