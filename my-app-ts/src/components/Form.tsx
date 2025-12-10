import { useState } from "react";

interface InputProps {
  label: string;
  type: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

function Input({ label, type, value, onChange, placeholder }: InputProps) {
  return (
    <div className="input-group" style={{ marginBottom: "10px" }}>
      <label style={{ paddingRight: "10px" }}>{label}</label>

      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        style={{ padding: "5px" }}
      />
    </div>
  );
}

export default function Form() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleClick = () => {
    alert("Form submitted!");
  };

  return (
    <div className="form-info" style={{ padding: "10px" }}>
      <Input
        label="Name:"
        type="text"
        placeholder="Enter name..."
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <Input
        label="Phone:"
        type="number"
        placeholder="Enter phone..."
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <Input
        label="Email:"
        type="email"
        placeholder="Enter email..."
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button onClick={handleClick}>Send</button>
    </div>
  );
}
