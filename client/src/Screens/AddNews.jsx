import axios from 'axios';
import React, { useState } from 'react'
import {useNavigate} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
const AddNews = () => {
    const [news,setNews]=useState({
        title:"",
        content:"",
        image:"",
        video:"",
        date:"",
        category:"",
        producer:""

});

const navigate=useNavigate()

const handleChange=(e)=>{
    setNews((prev)=>({...prev,[e.target.name]:e.target.value}));
};

const handleClick=async e=>{
    e.preventDefault()
    try {
        await axios.post("https://reactapp-0xe1.onrender.com/news/addnews",news)
        navigate("/news/getall")
    } catch (err) {
        console.log(err)
    }
}

console.log(news)
  return (
    <div>
        <h3>YENİ HABER EKLE</h3>
         <Form>
     
        <Form.Group  controlId="formGridEmail">
        <br/><Form.Label>Haber Başlığını Giriniz</Form.Label><br/>
          <Form.Control type="text" placeholder="Başlığı giriniz" onChange={handleChange} name='title'/>
        </Form.Group>

        <Form.Group  controlId="formGridPassword">
        <br/>  <Form.Label>Haberin İçeriğini Giriniz</Form.Label><br/>
          <Form.Control type="text" placeholder="Haber içeriği" onChange={handleChange} name='content'/>
        </Form.Group>
     
      <Form.Group controlId="formFileMultiple" className="mb-3">
      <br/><Form.Label>Resim Url Giriniz.</Form.Label>
        <Form.Control type="text" multiple onChange={handleChange} name='image'/>
      </Form.Group>

      <Form.Group controlId="formFileMultiple" className="mb-3">
      <br/> <Form.Label>Video Url Giriniz.</Form.Label>
        <Form.Control type="text" multiple onChange={handleChange} name='video'/>
      </Form.Group>


      <Row className="mb-3">
      <Form.Group as={Col} className="mb-3" controlId="formGridAddress1">
        <Form.Label>Tarih Seçiniz</Form.Label>
        <Form.Control type="date" placeholder="14.06.2023" onChange={handleChange} name='date'/>
      </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Kategori Seçiniz</Form.Label>
          <Form.Select defaultValue="Film Haberleri" onChange={handleChange} name='category'>
            <option>Film Haberleri</option>
            <option>Dizi Haberleri</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Yönetmeni Giriniz</Form.Label>
          <Form.Control type="text" placeholder='Yönetmen' multiple onChange={handleChange} name='producer'/>
        </Form.Group>
      </Row>

   

      <Button variant="primary" type="submit" onClick={handleClick}>
        Ekle
      </Button>
    </Form>
   
    </div>
  )
}

export default AddNews