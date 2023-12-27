import AppName from "./components/AppName";
import AddToDo from "./components/AddToDo";
import TodoItem1 from "./components/TodoItem1";
import TodoItem2 from "./components/TodoItem2";
import "./App.css";
function App() {
  return (
    <div className="todo-container">
      <AppName></AppName>
      <AddToDo></AddToDo>
      <div className="item-container">
        <TodoItem1></TodoItem1>
        <TodoItem2></TodoItem2>
      </div>
    </div>
  );
}

export default App;
