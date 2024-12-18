import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateTodo } from '../features/todosSlice';

const UpdateTodo = () => {
  const [text, setText] = useState('');
  const [selectedTodoId, setSelectedTodoId] = useState(null);

  const todos = useSelector((state) => state.todos.items);
  const dispatch = useDispatch();

  const handleSelectTodo = (id, currentText) => {
    setSelectedTodoId(id);
    setText(currentText);
  };

  const handleUpdate = () => {
    if (text.trim() && selectedTodoId !== null) {
      dispatch(updateTodo({ id: selectedTodoId, text }));
      setSelectedTodoId(null); // Reset selection
      setText(''); // Clear the input
    }
  };

  return (
    <div>
      <h2>Update Todo</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => handleSelectTodo(todo.id, todo.text)}>
              Edit
            </button>
          </li>
        ))}
      </ul>

      {selectedTodoId !== null && (
        <div>
          <h3>Editing Todo</h3>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Update todo"
          />
          <button onClick={handleUpdate}>Update</button>
          <button onClick={() => setSelectedTodoId(null)}>Cancel</button>
        </div>
      )}
    </div>
  );
};

export default UpdateTodo;
