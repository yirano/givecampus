import React, { useState } from 'react'

const t = new Date()
const date = String(t.getDate()).padStart(2, '0')
const month = String(t.getMonth() + 1).padStart(2, '0')
const year = t.getFullYear()


const initialForm = {
    task: '',
    due: `${year}-${month}-${date}`,
    completed: false,
    id: Date.now()
}

const Form = (props) => {

    const [form, setForm] = useState(initialForm)
    const list = JSON.parse(localStorage.getItem('todos')) || []

    const handleChange = e => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = () => {
        list.push(form)
        setForm(initialForm)
        localStorage.setItem('todos', JSON.stringify(list))
    }

    return (
        <form onSubmit={e => handleSubmit(e)}>
            <input
                type="text"
                name="task"
                value={form.task}
                onChange={e => handleChange(e)}
                className="taskForm"
                placeholder="Task"
            />
            <input
                type="date"
                name="due"
                value={form.due}
                onChange={e => handleChange(e)}
                className="taskForm"
            />
            <input type="submit" value="Add" disabled={form.task.trim() === '' ? true : false} />
        </form>
    )
}

export default Form
