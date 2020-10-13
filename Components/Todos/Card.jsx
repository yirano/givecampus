import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons"


// const t = new Date()
// const date = String(t.getDate()).padStart(2, '0')
// const month = String(t.getMonth() + 1).padStart(2, '0')
// const year = t.getFullYear()
// const today = `${year}-${month}-${date}`

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
            <div>
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
