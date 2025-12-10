interface User {
  name: string;
  age: number;
}

function App() {
  const user: User = {
    name: "Nguyen Duc Hieu",
    age: 22
  };

  return <div>{user.name}<br></br>{user.age}</div>;
}

export default App;