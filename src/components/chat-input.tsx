import { useState } from "react";
import { Button } from "./ui/button";
import { SendIcon } from "lucide-react";

interface ChatInputProps {
  onSend: (message: string) => void;
  disabled?: boolean;
}

export function ChatInput({ onSend, disabled }: ChatInputProps) {
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      onSend(input);
      setInput("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="border-t bg-background py-4 px-4 md:px-6 sticky bottom-0"
    >
      <div className="container mx-auto max-w-4xl">
        <div className="relative flex items-center">
          <input
            type="text"
            placeholder="Message..."
            className="flex-1 h-12 px-4 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={disabled}
          />
          <Button
            type="submit"
            size="icon"
            className="absolute right-1 h-10 w-10 rounded-md"
            disabled={disabled || !input.trim()}
          >
            <SendIcon className="h-5 w-5" />
          </Button>
        </div>
        <div className="mt-2 text-xs text-muted-foreground text-center">
          Vercel AI Assistant is designed to help with your questions.
        </div>
      </div>
    </form>
  );
}