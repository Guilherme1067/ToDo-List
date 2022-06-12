import { useState } from "react";
import Clipboard from "../assets/Clipboard.svg";
import { TaskItem } from "./TaskItem";

import styles from "./Tasks.module.css";

interface ElementsProps {
  id: string;
  title: string;
  isTaskCompleted: boolean;
}

interface TaskProps {
  tasks: ElementsProps[];
  removeTask: (task: string) => void;
  completeTask: (id: string) => void;
}

export const Tasks = ({ tasks, removeTask, completeTask }: TaskProps) => {
  const tasksCompleted = tasks.filter((task) => task.isTaskCompleted).length;
  const uncompletedTasks = tasks.length;

  return (
    <div className={styles.mainContainer}>
      <section className={styles.container}>
        <header className={styles.header}>
          <div className={styles.rightSide}>
            <strong>Tarefas Criadas</strong>

            <div className={styles.counter}>{tasks.length}</div>
          </div>

          <div className={styles.leftSide}>
            <strong>Concluídas</strong>
            <div className={styles.counter}>
              {uncompletedTasks !== 0
                ? `${tasksCompleted} de ${uncompletedTasks}`
                : tasksCompleted}
            </div>
          </div>
        </header>

        <div
          className={!tasks.length ? styles.tasks : styles.taskListIsNotEmpty}
        >
          {tasks.length !== 0 ? (
            tasks.map((taskItem) => (
              <TaskItem
                key={taskItem.id}
                task={taskItem}
                removeTask={removeTask}
                completeTask={completeTask}
              />
            ))
          ) : (
            <>
              <img src={Clipboard} />
              <strong>Você ainda não tem tarefas cadastradas</strong>
              <p>Crie tarefas e organize seus itens a fazer</p>{" "}
            </>
          )}
        </div>
      </section>
    </div>
  );
};
