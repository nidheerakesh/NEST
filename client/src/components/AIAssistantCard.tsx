import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

interface AIAssistantCardProps {
  suggestion: string;
  onAccept?: () => void;
  onDismiss?: () => void;
}

export function AIAssistantCard({ suggestion, onAccept, onDismiss }: AIAssistantCardProps) {
  return (
    <Card className="p-4 bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
      <div className="flex gap-3">
        <div className="mt-1">
          <Sparkles className="h-5 w-5 text-primary" />
        </div>
        <div className="flex-1 space-y-3">
          <p className="text-sm" data-testid="text-ai-suggestion">
            {suggestion}
          </p>
          <div className="flex gap-2">
            {onAccept && (
              <Button size="sm" variant="default" onClick={onAccept} data-testid="button-ai-accept">
                Try it
              </Button>
            )}
            {onDismiss && (
              <Button
                size="sm"
                variant="ghost"
                onClick={onDismiss}
                data-testid="button-ai-dismiss"
              >
                Maybe later
              </Button>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
}
