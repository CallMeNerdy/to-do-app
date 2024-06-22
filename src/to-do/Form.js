// components/Form.js
import React, { useState } from "react";

const Form = ({ addTask }) => {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      addTask(task);
      setTask("");
    }
  };

  return (
          <div className="container">
      <form onSubmit={handleSubmit}>
      <span><input
        type="text"
        placeholder="Add a new task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        />
      <button type="submit">Add</button>
      </span>
    </form>
    </div>
  );
};

export default Form;