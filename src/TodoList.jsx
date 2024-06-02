
import { useState } from "react";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';

function TodoList() {
  // Create a state variable to hold the input value and another for the list of tasks
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState([]);

  // Function to handle form submission
  function handleSubmit(e) {
    e.preventDefault(); // Prevent the default form submission behavior
    if (inputValue.trim() !== "") { // Check if the input is not empty
      setTasks([...tasks, inputValue]); // Add the new task to the list
      setInputValue(""); // Clear the input field after adding the task
    }
  }
  

  // Function to handle deleting a task
  function handleDelete(index) {
    // Create a new list of tasks without the task at the specified index
    const newTasks = tasks.filter((task, i) => i !== index);
    setTasks(newTasks); // Update the state with the new list of tasks
  }


  function handleEdit(index) {
    // Set editIndex to the index of the task to be edited
    setEditIndex(index);
    // Set inputValue to the current task text for editing
    setInputValue(tasks[index]);
  }

  console.log(tasks); // Log the list of tasks to the console for debugging

  return (
    <>
      <h1>TodoList</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)} // Update the input value as the user types
        />
        <button type="submit">Add Task</button>
      </form>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            {/* Add a delete icon that calls handleDelete when clicked */}
            <DeleteOutlineIcon onClick={() => handleDelete(index)} style={{ cursor: 'pointer' }} />
            <EditIcon onClick={() => handleEdit(index)} style={{ cursor: 'pointer', marginLeft: '10px' }} />

          </li>
        ))}
      </ul>
    </>
  );
}

export default TodoList;
