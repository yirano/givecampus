import React, { useState } from 'react'
import Form from "./Todos/Form"
import List from "./Todos/List"
import Header from './Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const App = () => {
    const [hideForm, setHideForm] = useState(false)
    const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')) || [])

    return (
        <div className="app">
            <Header />

            {/* Toggle input display when user clicks button */}
            <div className="toggleForm">
                <button onClick={() => setHideForm(!hideForm)}>
                    <FontAwesomeIcon icon={faPlus} />Add task
                </button>
                {hideForm ? '' : <Form />}
            </div>

            <List todos={todos} />
        </div>
    )
}

export default App
