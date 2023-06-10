import React from 'react'

const TodoDisplay = (props) => {


    console.log(props.todoList)



    return (
        <div>
            {
            props.todoList.map((item, i) =>
            <>
                <div key={i} style={{display: 'flex', justifyContent: "center"}}>
                { 
                item.completed === true ? 
                <p style={{textDecoration:'line-through'}} >{item.description}</p> : 
                <p>{item.description}</p> 
                }
                    <input type="checkbox" onClick={() => props.completeListItem(i)} />
                </div>
                <button onClick={ () => props.removeListItem(i)} >Delete</button>
            </>
            ) }
        </div>
    )
}

export default TodoDisplay

//removeListItem
//.filter(i => i.deleted !== false)
