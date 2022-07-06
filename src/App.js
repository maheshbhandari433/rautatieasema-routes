import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [data, setData]= useState(null)
    const fetchData = async () => {
    const response = await fetch("/.netlify/functions/getDataset")
    const responseBody = await response.json()
    setData(responseBody)
    }
      useEffect (() => {
        fetchData()
      }, [])
    
     console.log(data)
        
  return (
    <div className="App">
     
          Hello React!!
       
      
    </div>
  );
}

export default App;
