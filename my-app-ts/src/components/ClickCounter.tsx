//- Tạo một component đếm số lần click của người dùng và hiển thị kết quả.

import { useState } from "react";

export default function ClickCounter() {
  const [count, setCount] = useState<number>(0);

  return (
    <div style={{ margin: "20px", padding: "10px" }}>
      <h2>ClickCounter</h2>
      <p>Number of Clicks: {count} times</p>

      <button onClick={() => setCount(count + 1)}>Click</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}
