import "./styles.css";
// import Task from './components/Task';
import Todos from "./components/Todos";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
uuidv4();

function App() {
  // const tasks = [
  //   {
  //     id: 1,
  //     todo: 'Task1',
  //   },
  //   {
  //     id: 2,
  //     todo: 'Task2',
  //   },
  // ]

  const [value, setValue] = useState("");
  const [todo, setTodo] = useState([]);

  const handleClick = (e) => {
    e.preventDefault();
    // console.log(value);
    // const tid = Math.round(Math.random() * 10);
    // console.log(tid);
    // setTodo(oldTodo => [{...oldTodo, id: uuidv4(), value}])
    setTodo(oldTodo => {return[...oldTodo, value]});
    setValue("");
    // console.log(todo);
  };

  return (
    <div className="text-2xl">
      <h1>Todo List</h1>
      <input
        type="text"
        value={value}
        placeholder="Enter todo..."
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={handleClick}>Add todo</button>
      <table>
        <thead>
          <tr>
            <td>id</td>
            <td>Todos</td>
          </tr>
        </thead>
        {/* {todo.map((tid, todo) => {
          return (
            <li>
              {tid}
              {todo}
            </li>
          );
        })} */}
        {/* {todo.map(id, value) = () => {
          <Todos todo={todo} key={id}  />
        }} */}
        <Todos todo={todo} />
        
        {/* <Todos number={tasks[1].id} task={tasks[1].todo} /> */}
      </table>
      {/* <Task /> */}
    </div>
  );
}

export default App;
