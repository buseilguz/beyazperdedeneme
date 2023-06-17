import React, { useState } from "react";
import {Container,Form,Button,Row,Col, FormGroup} from "react-bootstrap"
import { Link,useNavigate } from "react-router-dom";
import { login } from "../axios";
import toast from 'react-hot-toast'
import resim1 from '../images/Ekran Alıntısı.png'
const SignInScreen=({setUser})=>{
    const navigate=useNavigate();
    const [formData,setFormData]=useState({
        email:"",
        password:""
    })
    return (
    <Container>
       
       
         
      
      
        
        <Row className="justify-content-center">
            <Col> <div className='text-white ' href="#home"> <div class="logo"><img class="header-main-logo-img"
                    src={resim1} width="700"
                    height="1000" alt="beyazperde" style={{position:"relative",left:-355,top:-18}}/></div></div></Col>
       
            <Col xs={12} md={5}>

               
                <form onSubmit={(e)=>{
                    e.preventDefault()
                    login(formData).then((res)=>{
                        localStorage.setItem('user',JSON.stringify(res.data.user))
                        setUser(res.data.user);
                        navigate("/userscreen");

                    })
                    .catch((err)=>{toast.error(err.response.data.message)})
                }} style={{position:"relative",left:-155,top:250}}>
                     <Form.Group className="mb-3"><span border="secondary" style={{fontSize:30,fontWeight:15}}>Oturum Aç</span></Form.Group>  
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Eposta Adresiniz</Form.Label>
                        <Form.Control onChange={(e)=>setFormData({...formData,email:e.target.value})} type="email" placeholder="Eposta Adresinizi Giriniz"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Şifreniz</Form.Label>
                        <Form.Control onChange={(e)=>setFormData({...formData,password:e.target.value})} type="password" placeholder="Şifrenizi Giriniz"/>
                    </Form.Group>
                    <Form.Group className="d-grid"> 
                    <Button disabled={formData.email===""||formData.password===""}  type="submit" variant="primary"  size="lg">Giriş Yap</Button>
                    <Form.Text className="text-center mt-2">Bir hesabınız yok mu?
                     <Link to="/signup">Üye ol</Link>   
                    </Form.Text>
                    </Form.Group>
                </form>
            </Col>
        </Row>
    </Container>)
};

export default SignInScreen;