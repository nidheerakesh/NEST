import { useState } from "react";
import { MoodSelector, MoodType } from "../MoodSelector";

export default function MoodSelectorExample() {
  const [selectedMood, setSelectedMood] = useState<MoodType | undefined>("peaceful");

  return (
    <MoodSelector
      selectedMood={selectedMood}
      onMoodSelect={(mood) => {
        setSelectedMood(mood);
        console.log("Mood selected:", mood);
      }}
    />
  );
}
