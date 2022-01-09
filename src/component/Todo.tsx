import React, { useState } from 'react';
import {observer} from 'mobx-react'
import { TodoStoreImpl } from './TodoStore';

interface TodoProps{
    todoStore:TodoStoreImpl
}

export const Todo: React.FC<TodoProps> = observer(({todoStore}) => {
    const [value, setValue] = useState<string>('')
    const status = todoStore.status;

    return (
        <div>
            <input type="text" value={value} onChange={(e)=>{setValue(e.target.value)}}/>
            <button onClick={()=>{
            if(value) {
                todoStore.addtodo(value);
                setValue('')}
                }}>Submit</button>

                <br/>
                Completed:{status.completed}
                <br/>
                Remaining:{status.remaining}
            <ul>
                {todoStore.todos.map((todo)=>{
                    return(
                        <li onClick={()=>{todoStore.toggletodo(todo.id)}}>[{todo.completed ? 'X': ' '}]{todo.title}</li>
                    )
                })}
            </ul>
        </div>
    )
})

// Link to Folllow the tutorial
// https://www.youtube.com/watch?v=2ejs-uxSbAk