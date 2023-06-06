import React, { useState } from 'react';


const PersonCard = (props) => {
    const {firstName, lastName, age, hairColor} = props

    const [stateAge, setStateAge] = useState(age);

    const addBirthday = () => setStateAge(parseInt(stateAge) + 1)

    return (
        <div>
            <h1>{lastName}, {firstName}</h1>
            <p>{stateAge}</p>
            <p>{hairColor}</p>
            <button onClick={addBirthday} >Birthday Button for {firstName} {lastName}</button>
        </div>
    )
}

export default PersonCard