import { useState } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";
import Login from "./components/Login";
import UserList from "./components/UserList";

function App() {
  const [example, setExample] = useState("toolkit");

  console.log(example);

  return (
    <>
      <h1>Learn about Redux toolkit</h1>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <button
          onClick={() => {
            setExample("toolkit");
          }}
        >
          Toolkit
        </button>
        <button
          onClick={() => {
            setExample("thunk");
          }}
        >
          Thunk
        </button>
        <button
          onClick={() => {
            setExample("saga");
          }}
        >
          Saga
        </button>
      </div>
      <br />

      {example == "toolkit" ? (
        <>
          <AddTodo />
          <Todos />
        </>
      ) : example == "thunk" ? (
        <Login />
      ) : example == "saga" ? (
        <UserList />
      ) : (
        <> </>
      )}
    </>
  );
}

export default App;
