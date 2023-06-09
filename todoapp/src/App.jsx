import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import CssBaseline from "@mui/material/CssBaseline";
import "./App.css";
import TodoList from "./TodoList";
import TaskDetails from "./TaskDetails";

function App() {
  return (
    <>
      <CssBaseline />
      <TaskDetails />
      <TodoList />
    </>
  );
}

export default App;
