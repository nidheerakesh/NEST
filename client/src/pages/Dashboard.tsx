import { useState } from "react";
import { MoodSelector, MoodType } from "@/components/MoodSelector";
import { TaskCard, VibeTag } from "@/components/TaskCard";
import { FriendCard, FriendStatus } from "@/components/FriendCard";
import { AIAssistantCard } from "@/components/AIAssistantCard";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

//todo: remove mock functionality
export default function Dashboard() {
  const [selectedMood, setSelectedMood] = useState<MoodType | undefined>("peaceful");
  const [tasks, setTasks] = useState([
    { id: "1", title: "Complete Data Structures assignment", completed: false, vibeTag: "study" as VibeTag },
    { id: "2", title: "Study for database quiz", completed: false, vibeTag: "study" as VibeTag },
    { id: "3", title: "Evening walk", completed: false, vibeTag: "health" as VibeTag },
  ]);

  const friends = [
    { name: "Sarah Chen", mood: "☀️", status: "free" as FriendStatus },
    { name: "Alex Kumar", mood: "🎯", status: "busy" as FriendStatus, nextFree: "Free at 3 PM" },
    { name: "Maya Johnson", mood: "🌸", status: "in-class" as FriendStatus, nextFree: "Free at 4:30 PM" },
  ];

  const handleToggleTask = (id: string) => {
    setTasks((prev) =>
      prev.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task))
    );
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-accent font-medium mb-2">Good afternoon 🌿</h1>
        <p className="text-muted-foreground">How are you feeling today?</p>
      </div>

      <div className="space-y-4">
        <h2 className="text-lg font-medium">Your Mood</h2>
        <MoodSelector selectedMood={selectedMood} onMoodSelect={setSelectedMood} />
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-medium">Today's Tasks</h2>
              <Button size="sm" data-testid="button-add-task">
                <Plus className="h-4 w-4 mr-2" />
                Add Task
              </Button>
            </div>
            <div className="space-y-2">
              {tasks.map((task) => (
                <TaskCard key={task.id} {...task} onToggle={handleToggleTask} />
              ))}
            </div>
          </div>

          <AIAssistantCard
            suggestion="You've been focused for a while! Maybe take a 10-minute break and check in with friends?"
            onAccept={() => console.log("Suggestion accepted")}
            onDismiss={() => console.log("Suggestion dismissed")}
          />
        </div>

        <div className="space-y-4">
          <h2 className="text-lg font-medium">Friends</h2>
          <div className="space-y-2">
            {friends.map((friend) => (
              <FriendCard key={friend.name} {...friend} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
