import { FriendCard, FriendStatus } from "@/components/FriendCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, UserPlus } from "lucide-react";

//todo: remove mock functionality
export default function Friends() {
  const friends = [
    { name: "Sarah Chen", mood: "☀️", status: "free" as FriendStatus },
    { name: "Alex Kumar", mood: "🎯", status: "busy" as FriendStatus, nextFree: "Free at 3 PM" },
    { name: "Maya Johnson", mood: "🌸", status: "in-class" as FriendStatus, nextFree: "Free at 4:30 PM" },
    { name: "David Lee", mood: "🔥", status: "free" as FriendStatus },
    { name: "Emma Wilson", mood: "🌧️", status: "busy" as FriendStatus, nextFree: "Free at 5 PM" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-accent font-medium mb-2">Your Friends</h1>
        <p className="text-muted-foreground">See who's free and plan together</p>
      </div>

      <div className="flex flex-wrap gap-4">
        <div className="relative flex-1 min-w-[200px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search friends..."
            className="pl-10"
            data-testid="input-search-friends"
          />
        </div>
        <Button data-testid="button-add-friend">
          <UserPlus className="h-4 w-4 mr-2" />
          Add Friend
        </Button>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        {friends.map((friend) => (
          <FriendCard key={friend.name} {...friend} />
        ))}
      </div>
    </div>
  );
}
