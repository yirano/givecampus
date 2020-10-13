import React, { useState } from 'react'
import Card from "./Card"

const List = (props) => {
    console.log('TODO LIST ', props.todos)
    return (
        <div className="list">
            {props.todos.map(todo => <Card todo={todo} key={todo.id} />)}
        </div>
    )
}

export default List
