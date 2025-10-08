import { useState } from "react";
import { Button } from "@/components/ui/button";

export type MoodType = "peaceful" | "happy" | "tired" | "focused" | "energized";

interface MoodSelectorProps {
  selectedMood?: MoodType;
  onMoodSelect: (mood: MoodType) => void;
}

const moods = [
  { type: "peaceful" as MoodType, emoji: "🌸", label: "Peaceful" },
  { type: "happy" as MoodType, emoji: "☀️", label: "Happy" },
  { type: "tired" as MoodType, emoji: "🌧️", label: "Tired" },
  { type: "focused" as MoodType, emoji: "🎯", label: "Focused" },
  { type: "energized" as MoodType, emoji: "🔥", label: "Energized" },
];

export function MoodSelector({ selectedMood, onMoodSelect }: MoodSelectorProps) {
  return (
    <div className="flex gap-2 flex-wrap">
      {moods.map((mood) => (
        <Button
          key={mood.type}
          variant={selectedMood === mood.type ? "default" : "outline"}
          size="sm"
          onClick={() => onMoodSelect(mood.type)}
          className="gap-2 transition-all duration-200"
          data-testid={`button-mood-${mood.type}`}
        >
          <span className="text-lg">{mood.emoji}</span>
          <span>{mood.label}</span>
        </Button>
      ))}
    </div>
  );
}
