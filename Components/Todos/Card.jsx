import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons"


const t = new Date()
const date = String(t.getDate()).padStart(2, '0')
const month = String(t.getMonth() + 1).padStart(2, '0')
const year = t.getFullYear()
const today = `${year}-${month}-${date}`

const Card = (props) => {
    const [dueDate, setDueDate] = useState()

    return (
        <div className="card">
            <div>
                <FontAwesomeIcon icon={faCheck} className="check" />
            </div>
            <div>
                <p>{props.todo.task}</p>
            </div>
            <div className="cardDate">
                <input
                    type="date"
                    name="due"
                    value={dueDate || props.todo.due}
                    onChange={e => setDueDate(e.target.value)}
                    className="cardForm"
                />
                <div className="completed">
                    <FontAwesomeIcon icon={faTimes} />
                </div>
            </div>
        </div>
    )
}

export default Card
