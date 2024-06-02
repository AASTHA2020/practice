import { useState } from "react";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';

function TodoList() {
  // State variables to manage input value, list of tasks, and edit index
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState([]);
  const [editIndex, setEditIndex] = useState(-1); // Default -1 means no task is being edited

  // Function to handle form submission
  function handleSubmit(e) {
    e.preventDefault(); // Prevent the default form submission behavior
    if (inputValue.trim() !== "") { // Check if the input is not empty
      if (editIndex === -1) {
        // If editIndex is -1, add a new task
        const obj = {
          task: inputValue,
          id: Date.now()
        };
        setTasks([...tasks, obj]);
      } else {
        // If editIndex is not -1, update the existing task at editIndex
        const updatedTasks = [...tasks];
        updatedTasks[editIndex].task = inputValue;
        setTasks(updatedTasks);
        setEditIndex(-1); // Reset editIndex after editing
      }
      setInputValue(""); // Clear the input field after adding/editing the task
    }
  }

  // Function to handle deleting a task
  function handleDelete(index) {
    const newTasks = tasks.filter((task, i) => i !== index); // Filter out the task at the specified index
    setTasks(newTasks); // Update the state with the new list of tasks
    if (editIndex === index) {
      setEditIndex(-1); // Reset editIndex if the deleted task was being edited
    }
  }

  // Function to handle editing a task
  function handleEdit(index) {
    setEditIndex(index); // Set editIndex to the index of the task to be edited
    setInputValue(tasks[index].task); // Set inputValue to the current task text for editing
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
        <button type="submit">{editIndex === -1 ? "Add Task" : "Update Task"}</button>
      </form>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {index === editIndex ? (
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)} // Update the input value during editing
              />
            ) : (
              task.task
            )}
            {/* Delete icon with onClick handler to delete the task */}
            <DeleteOutlineIcon onClick={() => handleDelete(index)} style={{ cursor: 'pointer' }} />
            {/* Edit icon with onClick handler to edit the task */}
            <EditIcon onClick={() => handleEdit(index)} style={{ cursor: 'pointer', marginLeft: '10px' }} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default TodoList;
