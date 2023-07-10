import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/esm/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';

const Header =({user,setUser})=>{
  useEffect(()=>{
    if (localStorage.getItem('user')&& !user) {
      setUser(JSON.parse(localStorage.getItem('user')));
    }
  },[user,setUser]);
    return (  <Navbar className="py-4 " bg="primary" expand="lg">
    <Container className='py-1' >
      <Navbar.Brand className='text-white ' href="#home"> <div class="logo"><img class="header-main-logo-img"
                    src="https://assets.beyazperde.com/skin/img/beyazperde/logo-main.e99577c9.svg" width="200"
                    height="23" alt="beyazperde"/></div></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav text-align-center" style={{position:'relative', left:'120px'}}>
      <Form className="d-flex px-5" >
            <Form.Control
              type="search"
              placeholder="Ara"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-secondary">Ara</Button>
          </Form>

        <Nav className="me-auto">
        <Button  style={{backgroundColor:'blue',marginRight:'5px'}}>
          <Nav.Link className='text-white' >Filmler</Nav.Link></Button>
          <Button  style={{backgroundColor:'blue',marginRight:'5px'}}>
          <Nav.Link className='text-white' >Seanslar</Nav.Link>
          </Button>
          <Button  style={{backgroundColor:'blue',marginRight:'5px'}}>
        <Link className='text-white text-decoration-none'  to='/news/getall'>Haberler</Link>
        </Button>  
        <Button  style={{backgroundColor:'blue',marginRight:'5px'}}>       
         <Nav.Link className='text-white' >Fragmanlar</Nav.Link>
         </Button>
         <Button  style={{backgroundColor:'blue',marginRight:'5px'}}>
        <Link className='text-white text-decoration-none'  to='/tvseries/getall'>Tv Dizileri</Link>
        </Button>           
            
         
        </Nav>

        
        {
        user ? <Button variant='outline-light' onClick={(e)=>{
          localStorage.removeItem("user");
          setUser(null)
        }} href='/news/getall'>Çıkış Yap</Button> : [
      <Button variant='success' >
        <Link className='text-white text-decoration-none'  to='/signin'>Giriş Yap</Link>
        </Button>,
         <Button variant='success' >
        <Link className='text-white text-decoration-none'  to='/signup'>Hesap Oluştur</Link>
        </Button>]}
       
      </Navbar.Collapse>
      
    </Container>
  </Navbar>)
};
export default Header;