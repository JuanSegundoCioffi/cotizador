import React, { useState } from 'react';

const Meters = () => {
    const [cost, setCost] = useState(0)
    const handleChange = (event)=>{
       

        setCost(
            event.target.value
        )
    }

    const handleSubmit = (event)=>{
        event.preventDefault()

        localStorage.setItem("cost", cost)
        window.location = '/cotizador'

    }

    const showError = ()=>{
        if(cost<10)return <span className='errorMeters'>El minimo de costo por metro cuadrado es $10</span>
    }
    return (
        <div className='container mt-5'>
            
            <form className='text-center' onSubmit={handleSubmit}>
            <div className='d-flex justify-content-center' >
            <div className="input-group mb-3">
                        <span className="input-group-text">$</span>
                        <input className='form-control' min={10} max={100} type="number" placeholder='Ingrese el costo de los metros cuadrados' name='cost' value={cost} required onChange={handleChange} /> 
                       
                        <button type='submit' className='btn btn-outline-primary'>OK</button>
                
            </div>
           
    
            </div>
                {
                   showError()
                    
                }      
            </form>
         
           
        </div>
       
    );
}

export default Meters;
