import { useState } from "react";

export default function UserForm() {
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`Name: ${name}\nAge: ${age}`);
  };

  return (
    <div style={{ margin: "20px" }}>
      <h2>User Information</h2>

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "10px" }}>
          <label>Name: </label>
          <input
            type="text"
            placeholder="Enter name..."
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>Age: </label>
          <input
            type="number"
            placeholder="Enter age..."
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>

        <button type="submit">➕ Add</button>
      </form>
    </div>
  );
}
