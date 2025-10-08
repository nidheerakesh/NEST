import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

export type FriendStatus = "free" | "busy" | "in-class";

interface FriendCardProps {
  name: string;
  mood?: string;
  status: FriendStatus;
  avatarUrl?: string;
  nextFree?: string;
}

const statusColors = {
  free: "bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-300",
  busy: "bg-amber-100 dark:bg-amber-900/20 text-amber-700 dark:text-amber-300",
  "in-class": "bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300",
};

const statusLabels = {
  free: "Free",
  busy: "Studying",
  "in-class": "In Class",
};

export function FriendCard({ name, mood, status, avatarUrl, nextFree }: FriendCardProps) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return (
    <Card className="p-4 hover-elevate transition-all duration-200" data-testid={`card-friend-${name}`}>
      <div className="flex items-center gap-3">
        <div className="relative">
          <Avatar>
            <AvatarImage src={avatarUrl} alt={name} />
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>
          {mood && (
            <div className="absolute -top-1 -right-1 text-lg" data-testid={`emoji-mood-${name}`}>
              {mood}
            </div>
          )}
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="font-medium truncate" data-testid={`text-friend-name-${name}`}>
            {name}
          </h4>
          {nextFree && status !== "free" && (
            <p className="text-xs text-muted-foreground truncate">{nextFree}</p>
          )}
        </div>
        <Badge variant="secondary" className={statusColors[status]}>
          {statusLabels[status]}
        </Badge>
      </div>
    </Card>
  );
}
