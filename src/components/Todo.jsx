import React, { useState } from 'react'
import './todo.css';
import AddTask from './AddTask';
import YourTask from './YourTask';
import Todonav from './Todonav';


function Todo() {
  const [listTodo, setListTodo] = useState([]);
  let addList = (inputText) => {
    if (inputText !== '')
      setListTodo([...listTodo, inputText]);
  }
  const deletListItem = (key) => {
    let newListTodo = [...listTodo];
    newListTodo.splice(key, 1)
    setListTodo([...newListTodo])
  }
  return (
    <div>
      <div className='App'>
        <Todonav />
      </div>
      <div className='main'>
        <div className='sub'>
          <h4>Your Task</h4>
          {listTodo.map((listItem, i) => {
            return (
              <YourTask key={i} index={i} item={listItem} deleteItem={deletListItem} />
            )
          })}
        </div>

        <AddTask addList={addList} />
      </div>

    </div>
  )
}

export default Todo