import axios, { toFormData } from 'axios'
import React, { useEffect, useState } from 'react'
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const TvSeriesScreen = () => {
    const [tvSeries,setSeries]=useState([])

    useEffect(()=>{
        const fetchAllSeries=async ()=>{
          try { 
            const res=await axios.get("https://reactapp-0xe1.onrender.com/tvseries/getall")
            setSeries(res.data);
           
        } catch (error) {
            console.log(error)
          }  
        }
        fetchAllSeries()
    },[])


  
    const handleClick= ()=>{
       
        try {
            setSeries(tvSeries.filter(
         m=>m.views >=5
         
             ))
             console.log(tvSeries)
             
        } catch (err) {
            console.log(err)
        }
    }
    
   
   


  return (
    
    <div >
    
       <Nav variant="pills" style={{position:'relative',left:250}} defaultActiveKey="/tvseries/getall" expand="lg">
       <Button variant="warning" href='/tvseries/addtvseries' style={{position:'relative',left:-230,borderRadius:'95%'}}>Dizi Ekle</Button>
      <Nav.Item>
        <Nav.Link href="/tvseries/getall">Tüm Diziler</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1" onClick={()=>handleClick()}>En popüler Diziler</Nav.Link>
      </Nav.Item>
     
    </Nav>
    
    
    {tvSeries.map((series)=>(
    <div className='series'  key={series._id}>
       <Card style={{ width: '24rem',height: '33rem',float:'left',margin:10,top:20}}>
      <Card.Img variant="top" src={series.image} />
      <Card.Body>
        <Card.Header style={{color:'orange',textTransform:'uppercase'}}>{series.category}</Card.Header>
        <Card.Title ><Button variant="light" style={{marginRight:10,fontWeight:'bold'}} >{series.title}</Button></Card.Title>
       
        <Card.Text  style={{overflow:'hidden',textOverflow:'ellipsis',height:'6rem'}}>
        {series.content}...
        </Card.Text><Card.Footer>
        <Card.Text  style={{overflow:'hidden',textOverflow:'ellipsis',height:'6rem'}}>
        <span style={{color:'orange'}}>İzlenme Sayısı: </span>{series.views}<br/>
        

        </Card.Text></Card.Footer>
        
      </Card.Body>
    </Card>
    



     
      
      
      

</div>
      
    ))}
    
    </div>

   
  )
}
export default TvSeriesScreen