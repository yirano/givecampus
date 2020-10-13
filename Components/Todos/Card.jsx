import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons"


const stylePara = {
    fontStyle: 'italic',
    color: "rgb(204, 204, 204)",
    textDecoration: "line-through"

}

const Card = (props) => {
    const [dueDate, setDueDate] = useState()
    console.log(props.todo.id)
    const handleClick = e => {
        const tasks = JSON.parse(localStorage.getItem('todos'))
        const filtered = tasks.filter(task => task.id !== props.todo.id)
        localStorage.setItem('todos', JSON.stringify(filtered))
        window.location.reload()
    }

    const handleComplete = e => {
        const tasks = JSON.parse(localStorage.getItem('todos'))
        const map = tasks.map(task => task.id === props.todo.id ? { ...task, completed: !task.completed } : task)
        localStorage.setItem('todos', JSON.stringify(map))
        window.location.reload()
    }
    return (
        <div className="card">
            <div>
                <FontAwesomeIcon icon={faCheck} className={props.todo.completed ? "completed check" : "check"} onClick={e => handleComplete(e)} />
            </div>
            <div style={props.todo.completed ? stylePara : null}>
                <p>{props.todo.task}</p>
            </div>
            <div className={props.todo.completed ? "completed cardDate" : "cardDate"}>
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
