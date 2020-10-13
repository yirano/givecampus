import React from 'react'
import Form from "./Todos/Form"
import List from "./Todos/List"
import Header from './Header'

const App = () => {
    return (
        <div className="app">
            <Header />
            <Form />
            <List />
        </div>
    )
}

export default App
