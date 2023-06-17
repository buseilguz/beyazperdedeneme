
import Container from 'react-bootstrap/esm/Container';
import './App.css';
import Header from './Components/Header'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

import HomeScreen from './Screens/HomeScreen';
import SignUpScreen from './Screens/SignUpScreen';
import { useState,useEffect } from 'react';
import SignInScreen from './Screens/SignInScreen';
import { Toaster } from 'react-hot-toast'
import Newses from './Screens/Newses';
import AddNews from './Screens/AddNews';
import UpdateNews from './Screens/UpdateNews';
import GetNews from './Screens/GetNews'
import UserScreen from './Screens/UserScreen';
import TvSeriesScreen from './Screens/TvSeriesScreen';
import AddTvSeries from './Screens/AddTvSeries';
function App() {
  const [user,setUser]=useState(null);
  return (
   <Router>
    <Header user={user} setUser={setUser}/>
    
    <main className='py-3'>
      <Container>
        <Routes>
          <Route path="/" element={<HomeScreen user={user}/>} exact/>
          <Route path="/news/getall" element={<Newses  />} />
          <Route path="/news/addnews" element={<AddNews  />} />
          <Route path="news/updatenews/:id" element={<UpdateNews  />} />
          <Route path="news/getnews/:id" element={<GetNews  />} />
          <Route path="/signin" element={<SignInScreen setUser={setUser}/>} />
          <Route path="/signup" element={<SignUpScreen/>} />
          <Route path='/userscreen' element={<UserScreen/>}/>
          <Route path='/tvseries/getall' element={<TvSeriesScreen/>}/>
          <Route path='/tvseries/addtvseries' element={<AddTvSeries/>}/>



          


        </Routes>
      </Container>
    </main>
    <Toaster
    position='top-center' 
    toastOptions={2700}/>
    </Router>
    
   
  );
}

export default App;
