import React,{ useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'



const PlayerForm = () => {

    const navigate = useNavigate();

    const [formInfo, setFormInfo] = useState({
        playerName: '',
        position: ''
    })

    const [formErrors, setFormErrors] = useState({
        playerName: '',
        position: ''
    })

    const formSubmit = (e) => {
        e.preventDefault();
        console.log(formInfo)
        axios.post('http://localhost:8000/api/player', formInfo)
            .then( res => {
                console.log(res)
                navigate('/players/list')
            } )
            .catch( err => { 
                const errors = err.response.data.errors;
                errors.playerName ? 
                setFormErrors(errs => ({...errs, 'playerName': errors.playerName.message})) 
                : setFormErrors({playerName:''}) 
            })
    }

    const updateForm = e => {
        const {name,value} = e.target
        setFormInfo(currentForm => ({...currentForm, [name]:value}))
    }

    return (
        <div>
            <form onSubmit={formSubmit}>
                <div className='m-3' >
                    <p className='text-danger'>{formErrors.playerName}</p>
                    <label htmlFor="playerName">Player Name: </label>
                    <input onChange={updateForm} name='playerName' value={formInfo.playerName} type="text" />
                </div>
                <div>
                    <label htmlFor="playerName">Preferred Position: </label>
                    <input onChange={updateForm} name='position' value={formInfo.position} type="text" />
                </div>
                { formInfo.playerName.length < 2 ?  
                <button type='submit' disabled className='btn btn-outline-success mt-3 '  >Save</button>
                :
                <button type='submit' className='btn btn-outline-success mt-3 '  >Save</button>
                }
            </form>
        </div>
    )
}

export default PlayerForm