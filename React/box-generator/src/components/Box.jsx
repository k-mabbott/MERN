import React from 'react'






const Box = (props) => {

    console.log('propssssss', props.boxes)



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

