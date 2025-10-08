import { useState } from "react";
import { TaskCard } from "../TaskCard";

export default function TaskCardExample() {
  const [tasks, setTasks] = useState([
    { id: "1", title: "Complete assignment", completed: false, vibeTag: "study" as const },
    { id: "2", title: "Morning jog", completed: true, vibeTag: "health" as const },
  ]);

  const handleToggle = (id: string) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="space-y-2">
      {tasks.map((task) => (
        <TaskCard key={task.id} {...task} onToggle={handleToggle} />
      ))}
    </div>
  );
}
