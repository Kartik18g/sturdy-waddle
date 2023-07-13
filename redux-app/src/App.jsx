import { useSelector } from "react-redux";
import Task from "./components/Task";
import TaskList from "./components/TaskList";

const App = () => {
  const tasks = useSelector((state) => state.tasks);
  // current time formatted in 12 hour format
  const time = new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  return (
    <div className="app">
      <div className="max-w-lg mx-auto my-10 bg-white p-8 rounded-xl shadow shadow-slate-300">
        <div className="flex flex-row justify-between items-center">
          <div>
            <h1 className="text-3xl font-medium">Tasks list</h1>
          </div>
        </div>
        <p className="text-slate-500">Hello, here are your latest tasks</p>
        <br />
        <Task />

        <div id="tass" className="my-5">
          <TaskList />
        </div>
        {tasks.length > 0 && (
          <p className="text-xs text-slate-500 text-center">
            Last updated {time}
          </p>
        )}
      </div>
    </div>
  );
};

export default App;
