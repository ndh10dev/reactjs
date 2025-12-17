import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import Form from "./components/Form";
import OurReputation, { data } from "./components/Ourreputation";
import ClickCounter from "./components/ClickCounter";
import TodoList from "./components/TodoList";
import UserForm from "./components/UserForm";
import PostList from "./pages/PostList";
import PostDetail from "./pages/PostDetail";

function App() {
  return (
    <div className="App">
  <Header />

  <main className="main-content">
    <Routes>
      <Route
        path="/"
        element={
          <>
            <h1>Home</h1>

            <Banner
              id="🧑🏻‍💻"
              title="Nguyen Duc Hieu"
              description="Frontend Developer | React & TypeScript"
            />
            <Banner
              id="💻"
              title="Website Features"
              description="Routing, Form Handling, Reusable Components, State Management"
            />

            <ClickCounter />
            <UserForm />
            <PostList />
          </>
        }
      />

      <Route path="/posts/:postId" element={<PostDetail />} />

      <Route
        path="/about"
        element={
          <>
            <h1>About</h1>
            <OurReputation data={data} />
            <TodoList />
          </>
        }
      />

      <Route
        path="/contact"
        element={
          <>
            <h1>Contact</h1>
            <Form />
          </>
        }
      />
    </Routes>
  </main>

  <Footer />
</div>
  );
}

export default App;
