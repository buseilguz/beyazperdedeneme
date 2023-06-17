import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

const Newses = () => {
    const [newses,setNewses]=useState([])

    useEffect(()=>{
        const fetchAllNews=async ()=>{
          try { 
            const res=await axios.get("http://localhost:5000/news/getall")
            setNewses(res.data);
            console.log(res)
        } catch (error) {
            console.log(error)
          }  
        }
        fetchAllNews()
    },[])

   
    const navigate=useNavigate()
     const handleClick=async (id)=>{
       
        try {
           
            navigate("/news/getnews/"+id)
        } catch (err) {
            console.log(err)
        }
    }

  return (
    
    <div >
    
       <Nav variant="pills" style={{position:'relative',left:250}} defaultActiveKey="/news/getall" expand="lg">
       <Button variant="warning" href='/news/addnews' style={{position:'relative',left:-230,borderRadius:'95%'}}>Haber Ekle</Button>
      <Nav.Item>
        <Nav.Link href="/news/getall">Tüm Haberler</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Film Haberleri</Nav.Link>
      </Nav.Item>
      <Nav.Item>
      <Nav.Link eventKey="link-2">Dizi Haberleri</Nav.Link>
      </Nav.Item>
      <Nav.Item>
      <Nav.Link eventKey="link-3">Dosyalar</Nav.Link>
      </Nav.Item>
    </Nav>
      
    
    {newses.map((news)=>(
    <div className='news'  key={news._id}>
       <Card style={{ width: '24rem',height: '33rem',float:'left',margin:10,top:20}}>
      <Card.Img variant="top" src={news.image} />
      <Card.Body>
        <Card.Header style={{color:'orange',textTransform:'uppercase'}}>{news.category}</Card.Header>
        <Card.Title ><Button variant="light" style={{marginRight:10,fontWeight:'bold'}} onClick={()=>handleClick(news._id)}>{news.title}</Button></Card.Title>
       
        <Card.Text  style={{overflow:'hidden',textOverflow:'ellipsis',height:'6rem'}}>
        {news.content}...
        </Card.Text><Card.Footer>
        <Card.Text  style={{overflow:'hidden',textOverflow:'ellipsis',height:'6rem'}}>
        <span style={{color:'orange'}}>Yönetmen:</span>{news.producer}<br/>
        <span >{news.date}</span>

        </Card.Text></Card.Footer>
        
      </Card.Body>
    </Card>



     
      
      
      

</div>
      
    ))}</div>
  )
}

export default Newses