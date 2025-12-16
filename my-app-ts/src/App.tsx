import { Routes, Route } from "react-router-dom";
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

      <Routes>
        <Route
          path="/"
          element={
            <>
              <h1>🏠 Trang Chủ</h1>
              <Banner id="👨‍💻" title="Nguyen Duc Hieu" description="Frontend Developer | React & TypeScript" />
              <Banner id="💻" title="Website Features" description="Routing, Form Handling, Reusable Components, State Management" />
              <ClickCounter />
              <UserForm />
            </>
          }/>
        <Route 
          path="/about" 
          element={
            <>
              <h1>ℹ️ Giới Thiệu</h1>
              <OurReputation data={data} />
              <TodoList />
            </>
          } />
        <Route 
          path="/contact" 
          element={
          <>
          <h1>📞 Liên Hệ</h1>
          <Form />
          </>
          } />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;