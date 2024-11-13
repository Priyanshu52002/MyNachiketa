import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { Routes,Route } from 'react-router-dom';

function App() {
  const[data,setData]=useState();
  useEffect(() => {
    fetch('curl https://lichess.org/api/account -H "Authorization: Bearer {lip_afWJyiOgu5PkXefsiJGJ}')
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error(error));
  }, []);

  return (
    
    <div className="App">
      <Routes>
          <Route path='/profile' element={<profile/>}/>
          <Route path='/leaderboards' element={<leaderboards/>}/>
          <Route path='/tournaments' element={<tournaments/>}/>
      </Routes>
    </div>
  
  );
}

export default App;
