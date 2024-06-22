// / components/TODOList.js
import React from "react";

const TODOList = ({ tasks, toggleTask, deleteTask }) => {
  return (
        <div className="container">
            <h2>Task Assigned</h2>
    <ol>
       
      {tasks.map((task) => (
         <li key={task.id}>
         <input
           type="checkbox"
           checked={task.completed}
           onClick={() => toggleTask(task.id)}
         />
          
            <span
            style={{ textDecoration: task.completed ? "line-through" : "none" }}
           
          >
            {task.text}
          </span>
          <button onClick={() => deleteTask(task.id)}>Delete</button>
        </li>
      ))}
    </ol>
      </div>
  );
};

export default TODOList;
