import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons"


// quick snippet of inline code to change the color of the checkmark
const stylePara = {
    fontStyle: 'italic',
    color: "rgb(204, 204, 204)",
    textDecoration: "line-through"

}

// Individual tasks
const Card = (props) => {
    const [dueDate, setDueDate] = useState()

    // deletes task --> takes item from localStorage and filters tasks that doesn't match ID
    const handleClick = () => {
        const tasks = JSON.parse(localStorage.getItem('todos'))
        const filtered = tasks.filter(task => task.id !== props.todo.id)
        localStorage.setItem('todos', JSON.stringify(filtered))
        window.location.reload()
    }

    // toggles the checkmark --> maps through tasks stored in localStorage to toggle completed? bool value
    const handleComplete = () => {
        const tasks = JSON.parse(localStorage.getItem('todos'))
        const map = tasks.map(task => task.id === props.todo.id ? { ...task, completed: !task.completed } : task)
        localStorage.setItem('todos', JSON.stringify(map))
        window.location.reload()
    }
    return (
        <div className="card">
            {/* Task completed? checkmark */}
            <div>
                <FontAwesomeIcon icon={faCheck} className={props.todo.completed ? "completed check" : "check"} onClick={e => handleComplete(e)} />
            </div>

            {/* Dynamically changes task description based on completed? bool value */}
            <div style={props.todo.completed ? stylePara : null}>
                <p>{props.todo.task}</p>
            </div>

            {/*  */}
            <div className="cardDate">
                <input
                    type="date"
                    name="due"
                    value={dueDate || props.todo.due}
                    onChange={e => setDueDate(e.target.value)}
                    className="cardForm"
                />
                <div className="delete">
                    <FontAwesomeIcon icon={faTimes} onClick={e => handleClick(e)} />
                </div>
            </div>
        </div>
    )
}

export default Card
