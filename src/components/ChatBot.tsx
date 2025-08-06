import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, X, Send } from "lucide-react";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <div className="mb-4 w-80 bg-card rounded-2xl shadow-elegant border border-border">
          <div className="p-4 border-b border-border bg-gradient-hero rounded-t-2xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-primary-foreground/20 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-4 h-4 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary-foreground">CareerWise AI</h3>
                  <p className="text-xs text-primary-foreground/80">Online now</p>
                </div>
              </div>
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => setIsOpen(false)}
                className="text-primary-foreground hover:bg-primary-foreground/20"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          </div>
          
          <div className="p-4 h-64 overflow-y-auto">
            <div className="space-y-4">
              <div className="bg-muted/50 rounded-lg p-3 max-w-[250px]">
                <p className="text-sm text-foreground">
                  Hi! I'm your AI career assistant. How can I help you today?
                </p>
              </div>
              <div className="bg-muted/50 rounded-lg p-3 max-w-[250px]">
                <p className="text-sm text-foreground">
                  I can help with:
                  <br />• Resume analysis
                  <br />• Career guidance
                  <br />• Job matching
                  <br />• Interview prep
                </p>
              </div>
            </div>
          </div>
          
          <div className="p-4 border-t border-border">
            <div className="flex gap-2">
              <input 
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 text-sm bg-muted rounded-lg border-none outline-none"
              />
              <Button size="icon" className="bg-gradient-hero">
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
      
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-gradient-hero hover:opacity-90 shadow-elegant animate-bounce-gentle"
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageCircle className="w-6 h-6" />
        )}
      </Button>
    </div>
  );
};

export default ChatBot;