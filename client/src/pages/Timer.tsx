import { PomodoroTimer } from "@/components/PomodoroTimer";
import { HabitTracker } from "@/components/HabitTracker";
import { useState } from "react";

//todo: remove mock functionality
export default function Timer() {
  const [habits, setHabits] = useState([
    { id: "1", name: "Morning walk", icon: "🚶", completed: true, streak: 5 },
    { id: "2", name: "Drink water", icon: "💧", completed: false, streak: 3 },
    { id: "3", name: "Journal", icon: "📝", completed: false, streak: 2 },
    { id: "4", name: "Stretch", icon: "🧘", completed: false, streak: 1 },
  ]);

  const handleToggleHabit = (id: string) => {
    setHabits((prev) =>
      prev.map((habit) => (habit.id === id ? { ...habit, completed: !habit.completed } : habit))
    );
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-accent font-medium mb-2">Focus & Habits</h1>
        <p className="text-muted-foreground">Stay productive and track your daily habits</p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <PomodoroTimer workMinutes={25} breakMinutes={5} />
        <HabitTracker habits={habits} onToggle={handleToggleHabit} />
      </div>
    </div>
  );
}
