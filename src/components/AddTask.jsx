import React, { useState } from 'react'
import './todo.css'

function AddTask(props) {
    const [inputText, setInputText] = useState('');
    const handleEnterPress = (e) => {
        if (e.keyCode === 13) {
            props.addList(inputText)
            setInputText("");
            e.preventDefault()
        }
    }
    return (
        <div className='sub'>
            <h4>Add Task</h4>
            <form action="">
                <input type="text" placeholder='Start writing your task here...'
                    value={inputText}
                    onChange={e => {
                        setInputText(e.target.value)
                    }}
                    onKeyDown={handleEnterPress}    
                />
                
            </form>
            <div className='sub2'>
                <h5>Tips</h5>
                <ul>
                    <li>To add the task just press enter after describing it.</li>
                    <li>To mark the task complete double click on it.</li>
                    <li>To delete the task just click delete button</li>
                </ul>
            </div>
        </div>
    )
}

export default AddTask