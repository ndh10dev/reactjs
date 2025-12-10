import { useState } from "react";

export default function TodoList() {
  const [list, setList] = useState<string[]>([]);
  const [task, setTask] = useState<string>("");

  const handleAdd = () => {
    if (task.trim() === "") return;
    setList([...list, task]);
    setTask("");
  };

  return (
    <div style={{ margin: "20px", padding: "10px" }}>
      <h2>TodoList</h2>

      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter Work..."
      />

      <button onClick={handleAdd}>Add</button>
      <button onClick={() => setList([])}>Delete</button>

      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
