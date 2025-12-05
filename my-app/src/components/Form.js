//- Tạo một component Form để nhập thông tin
import { useState } from "react";
export function Input({ label, type, value, onChange }) {
  return (
    <div className="input-group">
      <label style={{paddingRight: '10px'}}>{label}</label>
      <input type={type} value={value} onChange={onChange}></input>
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
    <div className="form-info" style={{ padding: '10px'}}>
      <Input label="Name" type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <Input label="Phone" type="number" value={phone} onChange={(e) => setPhone(e.target.value)} />
      <Input label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <button onClick={handleClick}>Send</button>
    </div>
  );
}
