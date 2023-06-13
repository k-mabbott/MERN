import React,{useState} from 'react'
import styles from './PokeDisplay.module.css'




const PokeDisplay = () => {

    const [pokeList, setPokeList] = useState('')

    // const getPokes = (list) => {
    //     setPokeList(list)
    //     // console.log('my pokemon', pokeList)
    // }


    const fetchPokes = () => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
        .then(response => response.json())       
        .then(response => {
          // we now run another promise to parse the HTTP response into usable JSON
            console.log('response = ', response);
            setPokeList(response.results)
            // console.log('list',pokeList)
        }).catch(err=>{
            console.log(err);
        });
    }

    const capitalize = (str) =>{
        const firstLetter = str.charAt(0);
        const capFirst = firstLetter.toUpperCase();
        const remaining = str.slice(1);
        return capFirst + remaining;
    }
    



    return (
        <div>
            <h1>Poke API</h1>
            <button onClick={fetchPokes} > Show All Poke Names</button>
            <ul>
                { pokeList.length > 0 && pokeList.map((poke, i) =>
                <li key={i}><span>Id:</span> <span className={styles.id}>{i+1}</span> | <span>Name:</span> { capitalize( poke.name)}</li>) }
            </ul>

        </div>
    )
}

export default PokeDisplay