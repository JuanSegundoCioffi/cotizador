import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
function Form() {
    const [data, setData] = useState([])

    const [inputs, setInputs] = useState({
        property: "...",
        ubication: "...",
        meters: 20,
        dateTime: "01/01/2023 - 00:00:00",
        price: 0,
    })

    const handleSubmit = (event) => {
        event.preventDefault()

        if(inputs.property.trim() === "..." || inputs.ubication.trim() === "..."){
            return Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
                footer: '<a href="">Why do I have this issue?</a>'
              })
        }


        const date = new Date()
        let hours = date.getHours()
        let minutes = date.getMinutes()
        let seconds = date.getSeconds()

        let dateTime = `${date.getDay().toString().padStart(2,'0')}/${date.getMonth().toString().padStart(2,'0')}/${date.getFullYear()} - ${hours.toString().padStart(2,'0')}:${minutes.toString().padStart(2,'0')}:${seconds.toString().padStart(2,'0')}`
        console.log("submit");

        

       
        setInputs({
            ...inputs, [event.target.name] : event.target.value, dateTime
        })

        console.log(inputs);
    }

    const handleChange = (event) => {
        setInputs({
            ...inputs,
            [event.target.name]: event.target.value
        })
    }

    const showPrice = () => {
        if (inputs.price > 0) return <p className='text-center fs-1'>Total estimado ${inputs.price}</p>
    }

    useEffect(() => {
        fetch("https://642c9adcbf8cbecdb4f3e7fd.mockapi.io/get").then(res => res.json()).then(val => setData(val))
    }, [])


    return (
        <section className='container'>
            <form onSubmit={handleSubmit}>
                <p className='text-center'>Seleccione su propiedad</p>
                <select
                    className='form-select mb-5'
                    name="property"
                    value={inputs.property}
                    onChange={handleChange}>
                    <option disabled value="...">...</option>
                    {
                          data.filter(
                            (el) => el.categoria === "propiedad"
                        ).map((el, index) =>(<option key={index} value={el.tipo}>{el.tipo}</option>))
                    }
                </select>
                <p className='text-center'>Seleccione su ubicacion</p>
                <select
                    className='form-select mb-5'
                    name="ubication"
                    value={inputs.ubication}
                    onChange={handleChange}>
                    <option

                        disabled
                        value="..."

                    >...</option>
                    {
                          data.filter(
                            (el) => el.categoria === "ubicacion"
                        ).map((el, index) =>(<option key={index} value={el.tipo}>{el.tipo}</option>))
                    }
                </select>

                <p className='text-center'>Seleccione los metros cuadrados</p>
                <input
                    className='form-control mb-5'
                    name='meters'
                    placeholder='Indique los metros cuadrados'
                    value={inputs.meters}
                    onChange={handleChange}
                    type="number"
                    required />

                {
                    showPrice()
                }

                <div className='d-flex justify-content-center'>
                    <button className='btn btn-primary' type='submit'>Cotizar</button>
                </div>
            </form>
        </section>

    )
}

export default Form