import React, {useState} from 'react'

const TodoForm = (props) => {


    const [description, setDescription] = useState('')

    const addNewItem = (e) => {
        e.preventDefault()
        let item = {
            description: description,
            completed: false,
        }
        console.log(item)
        props.addListItem(item)

        setDescription('')
    }





    return (
        <form onSubmit={addNewItem}>
            <label htmlFor="item">New item: </label>
            <input id='item' type="text" onChange={e=>setDescription(e.target.value)} />
            <br/>
            <br/>
            <button>Add</button>
        </form>
    )
}

export default TodoForm