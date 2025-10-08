import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Edit2 } from "lucide-react";

interface TimetableSlot {
  id: string;
  subject: string;
  startTime: string;
  endTime: string;
  room?: string;
  type?: "lecture" | "lab" | "tutorial";
}

interface TimetableViewProps {
  slots: TimetableSlot[];
  editable?: boolean;
  onEdit?: (id: string) => void;
}

const typeColors = {
  lecture: "bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300",
  lab: "bg-purple-100 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300",
  tutorial: "bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-300",
};

export function TimetableView({ slots, editable = false, onEdit }: TimetableViewProps) {
  return (
    <div className="space-y-2">
      {slots.map((slot) => (
        <Card key={slot.id} className="p-4 hover-elevate transition-all duration-200">
          <div className="flex items-start gap-3">
            <div className="font-mono text-sm text-muted-foreground min-w-[80px]">
              {slot.startTime}
            </div>
            <div className="flex-1">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h4 className="font-medium" data-testid={`text-subject-${slot.id}`}>
                    {slot.subject}
                  </h4>
                  {slot.room && (
                    <p className="text-sm text-muted-foreground">Room {slot.room}</p>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  {slot.type && (
                    <Badge variant="secondary" className={typeColors[slot.type]}>
                      {slot.type}
                    </Badge>
                  )}
                  {editable && onEdit && (
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => onEdit(slot.id)}
                      data-testid={`button-edit-slot-${slot.id}`}
                    >
                      <Edit2 className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
