import { useState } from 'react';
import { ChatMessage } from './components/chat-message';
import { ChatInput } from './components/chat-input';
import { Sidebar } from './components/sidebar';

// Sample data
const sampleConversations = [
  { id: '1', title: 'Helping with React components' },
  { id: '2', title: 'Explaining async/await in JavaScript' },
  { id: '3', title: 'Building a responsive layout' },
];

const sampleMessages = [
  { role: 'assistant' as const, content: 'Hello! How can I help you today?' },
];

function App() {
  const [darkMode] = useState(true);
  const [conversations] = useState(sampleConversations);
  const [activeConversation, setActiveConversation] = useState('1');
  const [messages, setMessages] = useState(sampleMessages);
  const [loading, setLoading] = useState(false);

  const handleSendMessage = (content: string) => {
    // Add user message
    const userMessage = { role: 'user' as const, content };
    setMessages([...messages, userMessage]);
    
    // Simulate AI response
    setLoading(true);
    setTimeout(() => {
      const aiResponse = { 
        role: 'assistant' as const, 
        content: `I'm a Vercel-inspired AI assistant. This is a simulated response to: "${content}"` 
      };
      setMessages(prev => [...prev, aiResponse]);
      setLoading(false);
    }, 1000);
  };

  const handleNewConversation = () => {
    // In a real app, this would create a new conversation
    setMessages([{ role: 'assistant' as const, content: 'How can I help you with a new topic?' }]);
  };

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="flex h-screen bg-background text-foreground">
        <Sidebar 
          conversations={conversations}
          activeConversation={activeConversation}
          onNewConversation={handleNewConversation}
          onSelectConversation={setActiveConversation}
        />
        
        <div className="flex-1 flex flex-col h-screen overflow-hidden">
          <main className="flex-1 overflow-auto scrollbar-thin">
            {messages.map((message, index) => (
              <ChatMessage key={index} message={message} />
            ))}
            {loading && (
              <div className="py-8 px-4 md:px-6">
                <div className="container mx-auto max-w-4xl">
                  <div className="flex items-center space-x-2 animate-pulse">
                    <div className="w-3 h-3 bg-secondary-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-secondary-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-secondary-500 rounded-full"></div>
                  </div>
                </div>
              </div>
            )}
          </main>
          
          <ChatInput onSend={handleSendMessage} disabled={loading} />
        </div>
      </div>
    </div>
  );
}

export default App;