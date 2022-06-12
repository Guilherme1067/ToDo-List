import { Circle, Trash, CheckCircle } from "phosphor-react";

import styles from "./TaskItem.module.css";

const blue = "#4EA8DE";
const purple = "#5E60CE";

interface TaskDetailProps {
  id: string;
  title: string;
  isTaskCompleted: boolean;
}
interface TasksProps {
  task: TaskDetailProps;
  removeTask: (task: string) => void;
  completeTask: (id: string) => void;
}

export const TaskItem = ({ task, removeTask, completeTask }: TasksProps) => {
  return (
    <div className={styles.itemContainer}>
      <button
        className={styles.circleButton}
        onClick={() => completeTask(task.id)}
      >
        {!task.isTaskCompleted ? (
          <Circle size={25} color={blue} />
        ) : (
          <CheckCircle size={25} color={purple} weight="fill" />
        )}
      </button>
      <span className={`${task.isTaskCompleted && styles.checked}`}>
        {task.title}
      </span>

      <button
        className={styles.trashButton}
        onClick={() => removeTask(task.id)}
      >
        <Trash size={20.5} />
      </button>
    </div>
  );
};
