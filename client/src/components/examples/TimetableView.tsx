import { TimetableView } from "../TimetableView";

export default function TimetableViewExample() {
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
      subject: "Database Lab",
      startTime: "11:00 AM",
      endTime: "1:00 PM",
      room: "Lab 3",
      type: "lab" as const,
    },
    {
      id: "3",
      subject: "Web Development",
      startTime: "2:00 PM",
      endTime: "3:30 PM",
      room: "B205",
      type: "tutorial" as const,
    },
  ];

  return (
    <TimetableView
      slots={slots}
      editable={true}
      onEdit={(id) => console.log("Edit slot:", id)}
    />
  );
}
