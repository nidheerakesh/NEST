import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Pause, RotateCcw } from "lucide-react";

interface PomodoroTimerProps {
  workMinutes?: number;
  breakMinutes?: number;
}

export function PomodoroTimer({ workMinutes = 25, breakMinutes = 5 }: PomodoroTimerProps) {
  const [timeLeft, setTimeLeft] = useState(workMinutes * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [isBreak, setIsBreak] = useState(false);

  useEffect(() => {
    let interval: number | undefined;

    if (isRunning && timeLeft > 0) {
      interval = window.setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsRunning(false);
      setIsBreak(!isBreak);
      setTimeLeft(isBreak ? workMinutes * 60 : breakMinutes * 60);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRunning, timeLeft, isBreak, workMinutes, breakMinutes]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  const handleReset = () => {
    setIsRunning(false);
    setIsBreak(false);
    setTimeLeft(workMinutes * 60);
  };

  const percentage = isBreak
    ? ((breakMinutes * 60 - timeLeft) / (breakMinutes * 60)) * 100
    : ((workMinutes * 60 - timeLeft) / (workMinutes * 60)) * 100;

  return (
    <Card className="p-8 text-center space-y-6">
      <div className="space-y-2">
        <h3 className="text-lg font-medium text-muted-foreground">
          {isBreak ? "Take a break 🌷" : "Focus time"}
        </h3>
        <div className="relative inline-block">
          <svg className="w-48 h-48 transform -rotate-90">
            <circle
              cx="96"
              cy="96"
              r="88"
              stroke="currentColor"
              strokeWidth="8"
              fill="none"
              className="text-muted"
            />
            <circle
              cx="96"
              cy="96"
              r="88"
              stroke="currentColor"
              strokeWidth="8"
              fill="none"
              strokeLinecap="round"
              className="text-primary transition-all duration-300"
              strokeDasharray={`${2 * Math.PI * 88}`}
              strokeDashoffset={`${2 * Math.PI * 88 * (1 - percentage / 100)}`}
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="font-mono text-4xl font-semibold" data-testid="text-timer">
              {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-2 justify-center">
        <Button
          variant={isRunning ? "outline" : "default"}
          size="icon"
          onClick={() => setIsRunning(!isRunning)}
          data-testid="button-timer-toggle"
        >
          {isRunning ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
        </Button>
        <Button variant="outline" size="icon" onClick={handleReset} data-testid="button-timer-reset">
          <RotateCcw className="h-4 w-4" />
        </Button>
      </div>
      {isBreak && (
        <p className="text-sm text-muted-foreground">
          You're doing great! Take a moment to breathe
        </p>
      )}
    </Card>
  );
}
