import React from 'react'






const Box = (props) => {

    console.log('propssssss', props.boxes)


    const boxStyle = {
    // color: props.b
    border: '2px solid black',
    width: '50px',
    height: '50px',
    margin: '0 auto'
    }

    return (
        <>
        { props.boxes.map((boxObj, i) => 
        <div key={i} style={{backgroundColor: boxObj.boxColor, 
                    height:boxObj.boxSize+'px', 
                    width:boxObj.boxSize+'px', 
                    border: '2px solid black',}} > </div> )}
        </>
    )
}

export default Box

