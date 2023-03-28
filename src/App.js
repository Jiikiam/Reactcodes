import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import './App.css';
import TodoList from './TodoList';
import TabApp from "./TabApp";
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <TabApp />
      <div className="App">
    </div>
    </BrowserRouter>
    </div>
  );
}
export default App;