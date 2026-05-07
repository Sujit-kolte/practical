import React, { useState } from "react";

function TodoApp() {
  const [task, setTask] = useState("");
  const [items, setItems] = useState([]);

  const addItem = () => {
    if (task) {
      setItems([...items, task]);
      setTask(""); // Clear input
    }
  };

  const deleteItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Practical Exam: To-Do List</h2>
      <input
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter task..."
      />
      <button onClick={addItem}>Add</button>

      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item} <button onClick={() => deleteItem(index)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
