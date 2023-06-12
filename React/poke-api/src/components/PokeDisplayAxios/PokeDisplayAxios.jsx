import React,{useState} from 'react'
import styles from './PokeDisplayAxios.module.css'
import axios from 'axios'
import PokeTable from './PokeTable'




const PokeDisplay = (props) => {

    const [pokeList, setPokeList] = useState('')



    // const fetchPokes = () => {
    //     fetch("https://pokeapi.co/api/v2/pokemon")
    //     .then(response => {
    //       // not the actual JSON response body but the entire HTTP response
    //         return response.json();
    //     }).then(response => {
    //       // we now run another promise to parse the HTTP response into usable JSON
    //         // console.log(response);
    //         setPokeList(response.results)
    //         console.log(response)
    //         // console.log('list',pokeList)
    //     }).catch(err=>{
    //         console.log(err);
    //     });
    // }

    const axiosPokes = () => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
        .then(response => setPokeList(response.data.results))
        console.log(pokeList)
    }
    
    // const capitalize = (str) =>{
    //     const firstLetter = str.charAt(0);
    //     const capFirst = firstLetter.toUpperCase();
    //     const remaining = str.slice(1);
    //     return capFirst + remaining;
    // }



    return (
        <div>
            <h1>Poke API</h1>
            <button onClick={axiosPokes} className='btn btn-info mb-2' > Show All Poke Names</button>
            {pokeList.length > 0 ? <PokeTable pokeList={pokeList} /> : <></>}
            {/* <PokeTable pokeList={pokeList} /> */}
            

        </div>
    )
}

export default PokeDisplay