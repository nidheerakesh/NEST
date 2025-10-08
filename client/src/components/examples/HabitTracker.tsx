import { useState } from "react";
import { HabitTracker } from "../HabitTracker";

export default function HabitTrackerExample() {
  const [habits, setHabits] = useState([
    { id: "1", name: "Morning walk", icon: "🚶", completed: true, streak: 5 },
    { id: "2", name: "Drink water", icon: "💧", completed: false, streak: 3 },
    { id: "3", name: "Journal", icon: "📝", completed: false, streak: 2 },
  ]);

  const handleToggle = (id: string) => {
    setHabits((prev) =>
      prev.map((habit) =>
        habit.id === id ? { ...habit, completed: !habit.completed } : habit
      )
    );
  };

  return <HabitTracker habits={habits} onToggle={handleToggle} />;
}
