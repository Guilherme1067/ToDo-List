import { useState } from "react";
import { PlusCircle } from "phosphor-react";
import { Header } from "./components/Header";
import { v4 as uuidv4 } from "uuid";
import "./global.css";
import styles from "./App.module.css";
import { Tasks } from "./components/Tasks";

interface TasksProps {
  id: string;
  title: string;
  isTaskCompleted: boolean;
}

function App() {
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState<TasksProps[]>([]);

  const removeTask = (id: string) => {
    setTasks((state) => state.filter((currentTasks) => currentTasks.id != id));
  };

  const completeTask = (id: string) => {
    const updateList = tasks.map((task) => {
      if (task.id === id) {
        task.isTaskCompleted = !task.isTaskCompleted;
      }

      return task;
    });

    setTasks(updateList);
  };

  const handleAddNewTask = () => {
    const newTasks = {
      id: uuidv4(),
      title: newTask,
      isTaskCompleted: false,
    };

    if (newTask) setTasks((oldArr) => [...oldArr, newTasks]);
    setNewTask("");
  };

  return (
    <>
      <Header />
      <main>
        <input
          className={styles.input}
          placeholder="Adicione uma nova tarefa"
          value={newTask}
          onChange={({ target }) => setNewTask(target.value)}
        />
        <div className={styles.buttonContainer}>
          <button onClick={handleAddNewTask} className={styles.button}>
            Criar <PlusCircle size={16} />
          </button>
        </div>
      </main>

      <Tasks
        tasks={tasks}
        removeTask={removeTask}
        completeTask={completeTask}
      />
    </>
  );
}

export default App;
