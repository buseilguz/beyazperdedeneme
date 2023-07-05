import axios from 'axios';
import React, { useState } from 'react'
import {useNavigate} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
const AddTvSeries = () => {
    const [tvSeries,setTvSeries]=useState({
        title:"",
        content:"",
        image:"",
        video:"",
        views:null,
        category:"",
        

});

const navigate=useNavigate()

const handleChange=(e)=>{
    setTvSeries((prev)=>({...prev,[e.target.name]:e.target.value}));
};

const handleClick=async e=>{
    e.preventDefault()
    try {
        await axios.post("https://reactapp-0xe1.onrender.com/tvseries/addtvseries",tvSeries)
        navigate("/tvseries/getall")
    } catch (err) {
        console.log(err)
    }
}

console.log(tvSeries)
  return (
    <div>
        <h3>YENİ Dizi Ekle</h3>
         <Form>
     
        <Form.Group  controlId="formGridEmail">
        <br/><Form.Label>Dizi Başlığını Giriniz</Form.Label><br/>
          <Form.Control type="text" placeholder="Başlığı giriniz" onChange={handleChange} name='title'/>
        </Form.Group>

        <Form.Group  controlId="formGridPassword">
        <br/>  <Form.Label>Dizinin İçeriğini Giriniz</Form.Label><br/>
          <Form.Control type="text" placeholder="Dizi içeriği" onChange={handleChange} name='content'/>
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
        <Form.Label>İzlenme sayısını giriniz</Form.Label>
        <Form.Control type="text" placeholder="izlenme sayısı" onChange={handleChange} name='views'/>
      </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Kategori Seçiniz</Form.Label>
          <Form.Select defaultValue="Dram" onChange={handleChange} name='category'>
            <option>Dram</option>
            <option>Polisiye</option>
            <option>Fantastik</option>
            <option>Aile</option>
          </Form.Select>
        </Form.Group>

      </Row>

   

      <Button variant="primary" type="submit" onClick={handleClick}>
        Ekle
      </Button>
    </Form>
   
    </div>
  )
}


export default AddTvSeries