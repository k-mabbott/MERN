import React from 'react'

const PokeTable = (props) => {

    const {pokeList} = props

    const capitalize = (str) =>{
        const firstLetter = str.charAt(0);
        const capFirst = firstLetter.toUpperCase();
        const remaining = str.slice(1);
        return capFirst + remaining;
    }

    
  return (
    <table className='container table table-dark table-hover table-striped'>
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
            </tr>
        </thead>
        <tbody>
        { pokeList.length > 0 && pokeList.map((poke, i) =>{ return(
            <tr>
                <td>{i+1}</td>
                <td>{ capitalize( poke.name)}</td>
            </tr>
        )}
        ) }
        </tbody>
    </table>
  )
}

export default PokeTable