import { Button } from "./ui/button";
import { PlusIcon, MessageSquareIcon, SettingsIcon } from "lucide-react";
import { cn } from "../lib/utils";

interface SidebarProps {
  conversations: { id: string; title: string }[];
  activeConversation?: string;
  onNewConversation: () => void;
  onSelectConversation: (id: string) => void;
}

export function Sidebar({
  conversations,
  activeConversation,
  onNewConversation,
  onSelectConversation,
}: SidebarProps) {
  return (
    <div className="w-64 h-screen bg-secondary-900 text-white flex flex-col border-r border-border">
      <div className="p-4">
        <Button
          onClick={onNewConversation}
          className="w-full justify-start gap-2 bg-secondary-800 hover:bg-secondary-700"
        >
          <PlusIcon className="h-4 w-4" />
          New Chat
        </Button>
      </div>
      
      <div className="flex-1 overflow-auto scrollbar-thin">
        <div className="px-2 py-2">
          <h2 className="text-xs font-semibold text-secondary-400 px-2 mb-2">Recent chats</h2>
          <div className="space-y-1">
            {conversations.map((conversation) => (
              <button
                key={conversation.id}
                onClick={() => onSelectConversation(conversation.id)}
                className={cn(
                  "w-full text-left px-2 py-2 rounded-md text-sm flex items-center gap-2",
                  activeConversation === conversation.id
                    ? "bg-secondary-800 text-white"
                    : "text-secondary-300 hover:bg-secondary-800/50"
                )}
              >
                <MessageSquareIcon className="h-4 w-4 shrink-0" />
                <span className="truncate">{conversation.title}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
      
      <div className="p-4 border-t border-border">
        <button className="w-full text-left px-2 py-2 rounded-md text-sm flex items-center gap-2 text-secondary-300 hover:bg-secondary-800/50">
          <SettingsIcon className="h-4 w-4" />
          <span>Settings</span>
        </button>
      </div>
    </div>
  );
}