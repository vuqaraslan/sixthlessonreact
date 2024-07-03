import React, { useState } from 'react'

export default function Todos({tasks,onChangeTask,onDeleteTask,onAddTask}) 
{
    const [text,setText]=useState("");

    return (
        <ul>
            {
                tasks.map((task)=>
                (
                    <li key={task.id}>
                        <Task task={task} 
                            onChange={onChangeTask} 
                            onDelete={onDeleteTask}>
                        </Task>
                    </li>
                ))
            }

            <section>
                <input value={text} onChange={(e)=>setText(e.target.value)}></input>
                <button onClick={()=>onAddTask(text)}>Add New Task</button>
            </section>
        </ul>
    )
}


function Task({task,onChange,onDelete}){
    const [isEditing,setIsEditing]=useState(false);
    let taskContent;

    if(isEditing){
        taskContent=(
            <>
                <input value={task.text} onChange={(e)=>{
                    onChange({...task,text:e.target.value})
                }}></input>
                <button onClick={()=>setIsEditing(false)}>Save</button>
            </>
        )
    }
    else{
        taskContent=(
            <>
                {task.text}
                <button onClick={()=>setIsEditing(true)}>Edit</button>
            </>
        )
    }

    return (
        <label>
            <input type='checkbox' checked={task.done} 
                onChange={(e)=>{
                    console.log('checkbox value >> '+e.target.value);
                    onChange({
                        ...task,
                        done:!task.done
                        // done:e.target.value
                    })
                }}></input>
                {taskContent}
                <button onClick={()=>{onDelete(task.id)}}>Delete</button>
        </label>
    )
}