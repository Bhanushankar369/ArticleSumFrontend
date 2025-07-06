import React, { useState } from 'react'
import './App.css'

const App = () => {

  const [loading, setLoading] = useState(false);
  const [url, setUrl] = useState('')
  const [output, setOutput] = useState('')
  
  const handleArticle = async () => {
    setLoading(true);
    try{
      const response = await fetch('https://articlebackend-dza5.onrender.com/summarize/', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({url}),
      })
      const data = await response.json();
      setOutput(data.result);
    }catch(err){
      console.log(err);
    }
    setLoading(false);
  }

  return (
    <div className="container">
      <div className="title">Article Summarizer</div>
      <div className="inputs">
        <input 
          className='input' 
          type="text" 
          placeholder='Enter any Article Url'
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />

        <button 
          className='btn' 
          onClick={handleArticle}
        >Submit</button>
      </div>

      {loading ?(
        <div className="spinner">
        </div>
      ):(
        <textarea 
          readOnly 
          name="output" 
          className='textarea' 
          placeholder='Summary' 
          value={output}
        ></textarea>
      )}
    </div>
  )
}

export default App