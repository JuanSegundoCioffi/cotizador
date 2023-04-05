import React, { useState } from 'react';

const Meters = () => {
    const [cost, setCost] = useState(0)
    const handleChange = (event)=>{
        setCost(
            event.target.value
        )
    }

    const handleSubmit = (event)=>{
        console.log(event.target.name);
        console.log(event.target.value);
        event.preventDefault()

        setCost(
            event.target.value
        )
    }
    return (
        <div className='container'>
            
            <form className='text-center' onSubmit={handleSubmit}>
            <div className='d-flex justify-content-center' >
            <div className="input-group mb-3">
                        <span className="input-group-text">$</span>
                        <input className='form-control' type="number" placeholder='Ingrese el costo de los metros cuadrados' name='cost' value={cost} required onChange={handleChange} /> 
                        <button type='submit' className='btn btn-outline-primary'>OK</button>
                
            </div>
                    
            
            </div>
            </form>
         
           
        </div>
       
    );
}

export default Meters;
