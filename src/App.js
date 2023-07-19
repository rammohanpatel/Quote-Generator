
import './App.css';
import React, { useEffect, useState } from 'react';
import { fetch_api } from './API/fetch_api'

function App() {

  const [quote, SetQuote] = useState([]);
  useEffect(() => {
    fetch_api()
      .then((data) => SetQuote(data))
      .catch((err) => console.log(err))
  }, [])

  return (
    <div className='container'>         
      <div className='card'>
        <div>{quote.text}</div>  
        <div>~{quote.author}</div>
        <button className='btn'>New Quote</button>  
      </div>     
    </div>
  );
}

export default App;
