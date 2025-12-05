import { useState } from "react";

export default function ClickCounter() {
    const [count, setCount] = useState(0);
    return(
        <div style={{margin: "20px", padding: "10px"}}>
            <h2>ClickCounter</h2>
            <p>So lan Click: {count} lan</p>
            <button onClick={() => setCount(count + 1)}>Click</button>
            <button onClick={() => setCount(0)}>Reset</button>
        </div>
    );
}