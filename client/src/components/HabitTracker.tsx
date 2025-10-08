import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";

interface Habit {
  id: string;
  name: string;
  icon: string;
  completed: boolean;
  streak: number;
}

interface HabitTrackerProps {
  habits: Habit[];
  onToggle: (id: string) => void;
}

export function HabitTracker({ habits, onToggle }: HabitTrackerProps) {
  const completedCount = habits.filter((h) => h.completed).length;
  const progress = (completedCount / habits.length) * 100;

  return (
    <Card className="p-6 space-y-4">
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <h3 className="font-medium">Daily Habits</h3>
          <span className="text-sm text-muted-foreground">
            {completedCount}/{habits.length}
          </span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>
      <div className="space-y-3">
        {habits.map((habit) => (
          <div
            key={habit.id}
            className="flex items-center gap-3 p-2 rounded-lg hover-elevate"
            data-testid={`habit-${habit.id}`}
          >
            <Checkbox
              checked={habit.completed}
              onCheckedChange={() => onToggle(habit.id)}
              data-testid={`checkbox-habit-${habit.id}`}
            />
            <span className="text-lg">{habit.icon}</span>
            <div className="flex-1">
              <p className={`text-sm ${habit.completed ? "line-through text-muted-foreground" : ""}`}>
                {habit.name}
              </p>
            </div>
            {habit.streak > 0 && (
              <span className="text-xs text-muted-foreground font-mono">
                {habit.streak} day{habit.streak > 1 ? "s" : ""}
              </span>
            )}
          </div>
        ))}
      </div>
    </Card>
  );
}
