import { FriendCard } from "../FriendCard";

export default function FriendCardExample() {
  return (
    <div className="space-y-2">
      <FriendCard
        name="Sarah Chen"
        mood="☀️"
        status="free"
      />
      <FriendCard
        name="Alex Kumar"
        mood="🎯"
        status="busy"
        nextFree="Free at 3 PM"
      />
      <FriendCard
        name="Maya Johnson"
        mood="🌸"
        status="in-class"
        nextFree="Free at 4:30 PM"
      />
    </div>
  );
}
