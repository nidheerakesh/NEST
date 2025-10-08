import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MoreVertical } from "lucide-react";

export type VibeTag = "study" | "chill" | "health" | "social";

interface TaskCardProps {
  id: string;
  title: string;
  completed: boolean;
  vibeTag?: VibeTag;
  onToggle: (id: string) => void;
}

const vibeIcons = {
  study: "🌼",
  chill: "☕",
  health: "🏃‍♀️",
  social: "💬",
};

const vibeColors = {
  study: "bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300",
  chill: "bg-amber-100 dark:bg-amber-900/20 text-amber-700 dark:text-amber-300",
  health: "bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-300",
  social: "bg-purple-100 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300",
};

export function TaskCard({ id, title, completed, vibeTag, onToggle }: TaskCardProps) {
  return (
    <Card className="p-4 hover-elevate transition-all duration-200">
      <div className="flex items-center gap-3">
        <Checkbox
          checked={completed}
          onCheckedChange={() => onToggle(id)}
          data-testid={`checkbox-task-${id}`}
        />
        <div className="flex-1">
          <p
            className={`text-sm ${completed ? "line-through text-muted-foreground" : ""}`}
            data-testid={`text-task-title-${id}`}
          >
            {title}
          </p>
        </div>
        {vibeTag && (
          <Badge variant="secondary" className={vibeColors[vibeTag]}>
            <span className="mr-1">{vibeIcons[vibeTag]}</span>
            {vibeTag}
          </Badge>
        )}
        <Button variant="ghost" size="icon" className="h-8 w-8" data-testid={`button-task-menu-${id}`}>
          <MoreVertical className="h-4 w-4" />
        </Button>
      </div>
    </Card>
  );
}
