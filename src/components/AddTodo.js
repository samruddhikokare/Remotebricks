import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todosSlice';

const AddTodo = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (text.trim()) {
      dispatch(addTodo(text));
      setText('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a todo"
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default AddTodo;
