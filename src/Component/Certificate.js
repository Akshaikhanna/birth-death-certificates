import React, { useEffect, useState } from 'react'
import './Certificate.css'
// import axios from 'axios'

function Certificate() {
  const [data, setDate] = useState("")
  
  useEffect(() => {
    fetch("https://myapi.com/users")
      .then(response => response.json())
      .then(data => setDate(data))
       .catch(response => {
            console.log(response)
          })
  }, [])
         
  return (
    <div className='ct'>
      {data.map((data) => (
        <ul key={data.id}></ul>
      ))}  
      <div className='btn9'>
        
      <button>Download</button>
    
      </div>
    </div>
  )
}


export default Certificate

