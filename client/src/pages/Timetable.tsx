import { useState } from "react";
import { TimetableView } from "@/components/TimetableView";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Edit2 } from "lucide-react";

//todo: remove mock functionality
export default function Timetable() {
  const [selectedDay, setSelectedDay] = useState("monday");
  const [editMode, setEditMode] = useState(false);

  const slots = [
    {
      id: "1",
      subject: "Data Structures",
      startTime: "9:00 AM",
      endTime: "10:30 AM",
      room: "A101",
      type: "lecture" as const,
    },
    {
      id: "2",
      subject: "Database Management",
      startTime: "11:00 AM",
      endTime: "12:30 PM",
      room: "A102",
      type: "lecture" as const,
    },
    {
      id: "3",
      subject: "Database Lab",
      startTime: "2:00 PM",
      endTime: "4:00 PM",
      room: "Lab 3",
      type: "lab" as const,
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-accent font-medium mb-2">Your Timetable</h1>
        <p className="text-muted-foreground">View and edit your class schedule</p>
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <Select value={selectedDay} onValueChange={setSelectedDay}>
          <SelectTrigger className="w-[180px]" data-testid="select-day">
            <SelectValue placeholder="Select day" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="monday">Monday</SelectItem>
            <SelectItem value="tuesday">Tuesday</SelectItem>
            <SelectItem value="wednesday">Wednesday</SelectItem>
            <SelectItem value="thursday">Thursday</SelectItem>
            <SelectItem value="friday">Friday</SelectItem>
          </SelectContent>
        </Select>

        <Button
          variant={editMode ? "default" : "outline"}
          onClick={() => setEditMode(!editMode)}
          data-testid="button-toggle-edit"
        >
          <Edit2 className="h-4 w-4 mr-2" />
          {editMode ? "Done Editing" : "Edit Schedule"}
        </Button>
      </div>

      <TimetableView
        slots={slots}
        editable={editMode}
        onEdit={(id) => console.log("Edit slot:", id)}
      />
    </div>
  );
}
