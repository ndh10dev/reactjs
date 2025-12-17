import { useState } from "react";

interface InputProps {
  label: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

function Input({
  label,
  type,
  value,
  onChange,
  placeholder,
}: InputProps) {
  return (
    <div className="input-group" style={{ marginBottom: "12px" }}>
      <label style={{ display: "block", marginBottom: "4px" }}>
        {label}
      </label>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        style={{ padding: "6px", width: "100%" }}
      />
    </div>
  );
}

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    alert("Message sent successfully!");
  };

  return (
    <div
      className="form-info"
      style={{ maxWidth: "400px", padding: "10px" }}
    >
      <Input
        label="Name"
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <Input
        label="Email"
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <Input
        label="Subject"
        type="text"
        placeholder="Enter subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />

      <div className="input-group" style={{ marginBottom: "12px" }}>
        <label style={{ display: "block", marginBottom: "4px" }}>
          Message
        </label>
        <textarea
          placeholder="Write your message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          style={{ padding: "6px", width: "100%", height: "100px" }}
        />
      </div>

      <button onClick={handleSubmit}>
        Send
      </button>
    </div>
  );
}
