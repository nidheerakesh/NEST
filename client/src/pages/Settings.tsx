import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ThemeToggle } from "@/components/ThemeToggle";

//todo: remove mock functionality
export default function Settings() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-accent font-medium mb-2">Settings</h1>
        <p className="text-muted-foreground">Manage your profile and preferences</p>
      </div>

      <div className="space-y-6 max-w-2xl">
        <Card className="p-6 space-y-4">
          <h2 className="text-lg font-medium">Profile Information</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" defaultValue="Student Name" data-testid="input-name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="roll">Roll Number</Label>
              <Input id="roll" defaultValue="2024001" data-testid="input-roll" />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="batch">Batch</Label>
                <Select defaultValue="2024">
                  <SelectTrigger id="batch" data-testid="select-batch">
                    <SelectValue placeholder="Select batch" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="2024">2024</SelectItem>
                    <SelectItem value="2023">2023</SelectItem>
                    <SelectItem value="2022">2022</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="year">Year</Label>
                <Select defaultValue="2">
                  <SelectTrigger id="year" data-testid="select-year">
                    <SelectValue placeholder="Select year" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1st Year</SelectItem>
                    <SelectItem value="2">2nd Year</SelectItem>
                    <SelectItem value="3">3rd Year</SelectItem>
                    <SelectItem value="4">4th Year</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="course">Course</Label>
              <Input id="course" defaultValue="Computer Science" data-testid="input-course" />
            </div>
          </div>
        </Card>

        <Card className="p-6 space-y-4">
          <h2 className="text-lg font-medium">Appearance</h2>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Theme</p>
              <p className="text-sm text-muted-foreground">Choose light or dark mode</p>
            </div>
            <ThemeToggle />
          </div>
        </Card>

        <div className="flex justify-end">
          <Button data-testid="button-save-settings">Save Changes</Button>
        </div>
      </div>
    </div>
  );
}
