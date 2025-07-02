import React, { useState } from 'react'
import './App.css'

const App = () => {

  const [url, setUrl] = useState('')
  const [output, setOutput] = useState('')
  
  const handleArticle = async () => {
    console.log(url)
    const response = await fetch('http://127.0.0.1:8000/summarize/', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({url}),
    })
    const data = await response.json();
    setOutput(data.result);
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

      <textarea 
        readOnly 
        name="output" 
        className='textarea' 
        placeholder='Summary' 
        value={output}
      ></textarea>
    </div>
  )
}

export default App