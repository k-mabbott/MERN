import React, { useState } from 'react'
import Box from './Box'




const BoxForm = (props) => {

    const [color, setColor] = useState('')
    const [size, setSize] = useState('')





    const colorSubmit = (e) => {
        e.preventDefault()
        let box = {
            boxColor: color,
            boxSize: size
        }
        props.addNewBox(box)
        console.log(box)
        setColor('')
        setSize('')
    }


    return (
        <>
            <p>{color}</p>
            
            <form onSubmit={colorSubmit} >
                <div>
                    <label htmlFor="color">New Box Color:</label>
                    <input type="text" name='color' onChange={ e=>setColor(e.target.value) } value={color} />
                </div>
                <br/>
                <div>
                    <label htmlFor="size">New Box Size:</label>
                    <input type="text" name='size' onChange={ e=>setSize(e.target.value) } value={size} />
                </div>
                <br/>
                <button type='submit' > Submit </button>
            </form>
        </>
    )
}

export default BoxForm