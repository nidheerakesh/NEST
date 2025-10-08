import { AIAssistantCard } from "../AIAssistantCard";

export default function AIAssistantCardExample() {
  return (
    <AIAssistantCard
      suggestion="You've had back-to-back classes since 10 AM — how about a walk before your next one?"
      onAccept={() => console.log("Suggestion accepted")}
      onDismiss={() => console.log("Suggestion dismissed")}
    />
  );
}
