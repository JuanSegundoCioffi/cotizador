import React, { useEffect, useState } from 'react'
import Form from '../components/Form'

function Cotizador() {
  const [history, setHistory] = useState(JSON.parse(localStorage.getItem("history")) || [])

  const saveHistory =(inputs)=>{
    setHistory(
      [
         ...history, inputs
      ]
    )
    
  }
  

  useEffect(()=>{
    localStorage.setItem("history", JSON.stringify(history))
  },[history])
  return (
    <main className='container'>
      <h1 className='text-center mt-5'>SEGUROS PARA EL HOGAR</h1>
      <hr />
      <Form cost={localStorage.getItem('cost')} saveHistory={saveHistory}/>
    </main>
  )
}

export default Cotizador