import { cn } from "../lib/utils";

interface ChatMessageProps {
  message: {
    role: "user" | "assistant";
    content: string;
  };
}

export function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === "user";
  
  return (
    <div
      className={cn(
        "py-8 px-4 md:px-6 w-full flex flex-col space-y-2 animate-fade-in",
        isUser ? "bg-background" : "bg-secondary-50/5"
      )}
    >
      <div className="container mx-auto max-w-4xl">
        <div className="flex items-start">
          <div
            className={cn(
              "w-8 h-8 rounded-full flex items-center justify-center text-xs",
              isUser ? "bg-primary text-white" : "bg-black text-white"
            )}
          >
            {isUser ? "U" : "AI"}
          </div>
          <div className="ml-4 flex-1">
            <div className="text-sm font-medium mb-1">
              {isUser ? "You" : "Assistant"}
            </div>
            <div className="prose prose-slate dark:prose-invert max-w-none">
              {message.content}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}