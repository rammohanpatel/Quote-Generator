
import './App.css';
import React, { useEffect, useState } from 'react';
import { fetch_api } from './API/fetch_api'

function App() {

  const [quote, SetQuote] = useState('');
  useEffect(() => {
    fetchQuote();
  }, [])

  const fetchQuote =()=>{
    fetch_api()
      .then((data) =>{ SetQuote(data)
        console.log(data)
      })
      .catch((err) => console.log(err))
  }

  return (
    <div className='container'>         
      <div className='card'>
        <div>{quote && quote.slip.advice}</div>  
        <button className='btn' onClick={fetchQuote}>New Quote</button>  
      </div> 
      <footer className='footer'>
        Build for fun by Ram 
      </footer>    
    </div>
  );
}

export default App;
