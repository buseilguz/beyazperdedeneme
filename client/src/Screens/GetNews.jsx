import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useLocation,useNavigate } from 'react-router-dom';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

const GetNews = () => {
    const [news,setNews]=useState([])

    
   

        const location=useLocation()

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

    const handleDelete=async (id)=>{
      try {
        await axios.delete("http://localhost:5000/news/deletenews/"+id)
        window.location.reload()
      } catch (err) {
        console.log(err)
      }
    }

    const navigate=useNavigate()
     const handleClick=async (id)=>{
       
        try {
           
            navigate("/news/updatenews/"+id)
        } catch (err) {
            console.log(err)
        }
    }

   
    

  return (
    
 <div >
     
   
  
    <div className='news'  key={news._id}>


    <Card className="text-center">
      <Card.Header> <Breadcrumb>
      <Breadcrumb.Item ><Link  href="/news/getall"  style={{textDecoration:'none',textDecoration:'none'}}>Haberler</Link></Breadcrumb.Item>
      <Breadcrumb.Item active>
      {news.title}
      </Breadcrumb.Item>
    
    </Breadcrumb></Card.Header>
     
      <Card.Body> <Card.Img style={{ width: '38rem',height: '25rem'}} variant="top" src={news.image} />
      <Card.Header style={{color:'orange',textTransform:'uppercase'}}>{news.category}</Card.Header>
        <Card.Title>{news.title}</Card.Title>
        <Card.Text>
        {news.content}
        </Card.Text>
      
      </Card.Body>

      <Card.Footer className="text-muted"> <span style={{color:'orange'}}>Yönetmen:</span>{news.producer}<br/>  <span >{news.date}</span>
      </Card.Footer>
      <Card.Footer><Button variant="primary" style={{marginRight:10}} onClick={()=>handleDelete(news._id)}>Sil</Button>
          <Button variant="primary" onClick={()=>handleClick(news._id)} >Güncelle</Button></Card.Footer>
      
    </Card>



</div>
    
    </div>
  )
}

export default GetNews