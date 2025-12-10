import Header from "./components/Header";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import Form from "./components/Form";
import OurReputation, { data } from "./components/Ourreputation";
import ClickCounter from "./components/ClickCounter";
import TodoList from "./components/TodoList";
import UserForm from "./components/UserForm";

function App() {
  return (
    <div className="App">
      <Header />

      <Banner id="1" title="Nguyen Hieu" description="Banner 1" />
      <Banner id="2" title="Test components" description="Banner 222" />

      <Form />

      <OurReputation data={data} />

      <ClickCounter />

      <TodoList />

      <UserForm />

      <Footer />
    </div>
  );
}

export default App;
