import axios from 'axios';
import React, { useState } from 'react'
import { useLocation, useNavigate} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image'
import { useEffect } from 'react';
const UpdateNews = () => {
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
const location=useLocation()
const newsId=location.pathname.split("/")[3]

const handleChange=(e)=>{
    setNews((prev)=>({...prev,[e.target.name]:e.target.value}));
};

const handleClick=async e=>{
    e.preventDefault()
    try {
        await axios.patch("https://reactapp-0xe1.onrender.com/news/updatenews/"+newsId,news)
        navigate("/news/getall")
    } catch (err) {
        console.log(err)
    }
}

useEffect(()=>{
 
 
    const fetchAllNews=async ()=>{
        const newsId=location.pathname.split("/")[3]
        console.log(newsId)   
      try { 
        const res=await axios.get("http://localhost:5000/news/getnews/"+newsId)
        setNews(res.data);
        console.log(res)
    } catch (error) {
        console.log(error)
      }  
    }
    fetchAllNews()
},[])
console.log(news)
  return (
    <div>
       <Form>

     <h3>Güncelle</h3>

     <Form.Group  controlId="formGridEmail">
        <br/><Form.Label>Haber Başlığını Giriniz</Form.Label><br/>
          <Form.Control type="text" defaultValue={news.title} onChange={handleChange} name='title'/>
        </Form.Group>

   
        <Form.Group  controlId="formGridPassword">
        <br/>  <Form.Label>Haberin İçeriğini Giriniz</Form.Label><br/>
          <Form.Control type="text" defaultValue={news.content} placeholder="Haber içeriği" onChange={handleChange} name='content'/>
        </Form.Group>
     <Row className='mb-3'>
      <Form.Group as={Col} controlId="formFileMultiple" className="mb-3">
      <br/><Form.Label>Resim Url Giriniz.</Form.Label>
        <Form.Control type="text" defaultValue={news.image} multiple onChange={handleChange} name='image'/>
      </Form.Group>
      <Form.Group as={Col}><br/><br/>
      <Image style={{ width: '18rem',height: '15rem'}} variant="top" src={news.image} /></Form.Group></Row>

      <Form.Group controlId="formFileMultiple" className="mb-3">
      <br/> <Form.Label>Video Url Giriniz.</Form.Label>
        <Form.Control type="text" defaultValue={news.video} multiple onChange={handleChange} name='video'/>
      </Form.Group>


      <Row className="mb-3">
      <Form.Group as={Col} className="mb-3" controlId="formGridAddress1">
        <Form.Label>Tarih Seçiniz</Form.Label>
        <Form.Control type="date" defaultValue={news.date} onChange={handleChange} name='date'/>
      </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Kategori Seçiniz</Form.Label>
          <Form.Select defaultValue={news.category} onChange={handleChange} name='category'>
            <option>Film Haberleri</option>
            <option>Dizi Haberleri</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Yönetmeni Giriniz</Form.Label>
          <Form.Control type="text" defaultValue={news.producer} multiple onChange={handleChange} name='producer'/>
        </Form.Group>
      </Row>

   

      <Button variant="primary" type="submit" onClick={handleClick}>
        Güncelle
      </Button>

    
</Form>


    </div>
  )
}

export default UpdateNews