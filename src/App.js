import './styles.css';
// import Task from './components/Task';
import Todos from './components/Todos';

function App() {

  const tasks = [
    {
      id: 1,
      todo: 'Task1',
    },
    {
      id: 2,
      todo: 'Task2',
    },
  ]

  return (
    <div className='text-2xl text-center'>
        <h1>Todo List</h1>
        <Todos number={tasks[0].id} />
        <Todos task={tasks[1].todo} />
        {/* <Task /> */}
    </div>
  );
}

export default App;
