import React, { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Send, Bot } from "lucide-react";

const API_KEY = "AIzaSyCPE5_XjEXutzvXm-yPmm_YYuSxTxQdBS8"; 

const AIMentor = () => {
  const [messages, setMessages] = useState<Array<{ id: number; text: string; sender: "user" | "ai" }>>([
    { id: 1, text: "Hi there! I'm your AI Business Mentor. How can I assist you today?", sender: "ai" },
  ]);

  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!inputValue.trim()) return;

    const newUserMessage = { id: messages.length + 1, text: inputValue, sender: "user" as const };
    setMessages((prev) => [...prev, newUserMessage]);
    setInputValue("");
    setLoading(true);

    try {
      const aiResponse = await fetchGeminiResponse(inputValue);
      const newAiMessage = { id: messages.length + 2, text: aiResponse, sender: "ai" as const };
      setMessages((prev) => [...prev, newAiMessage]);
    } catch (error) {
      console.error("API Error:", error);
      setMessages((prev) => [...prev, { id: messages.length + 2, text: "Sorry, I couldn't process your request. Please try again.", sender: "ai" }]);
    }

    setLoading(false);
  };

  const fetchGeminiResponse = async (query: string) => {
    try {
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: query }] }]
        }),
      });

      const data = await response.json();
      console.log("Gemini API Response:", data);

      if (data?.candidates?.[0]?.content?.parts?.[0]?.text) {
        return data.candidates[0].content.parts[0].text;
      } else {
        return "I'm here to assist you with your business queries!";
      }
    } catch (error) {
      console.error("Error fetching Gemini AI response:", error);
      return "Unable to fetch response. Please try again.";
    }
  };

  return (
    <Layout>
      <div className="mt-4 fade-in">
        <h1 className="text-2xl font-bold mb-6">AI Business Mentor</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Chat Section */}
          <div className="lg:col-span-2 slide-up">
            <Card className="h-[calc(100vh-250px)] flex flex-col shadow-lg border rounded-xl">
              <CardContent className="flex-1 overflow-y-auto p-6 space-y-4 bg-gray-50">
                {messages.map((msg) => (
                  <div key={msg.id} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                    {msg.sender === "ai" && (
                      <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center mr-3 text-white">
                        <Bot className="h-4 w-4" />
                      </div>
                    )}
                    <div className={`px-4 py-3 rounded-xl max-w-[80%] whitespace-pre-line text-sm ${
                      msg.sender === "user" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"
                    }`}>
                      {msg.text}
                    </div>
                  </div>
                ))}
              </CardContent>
              <div className="p-4 border-t bg-white">
                <form onSubmit={handleSendMessage} className="flex gap-2">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Ask your business question..."
                    className="flex-1 rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                  <Button type="submit" disabled={!inputValue.trim() || loading} className="bg-blue-500 hover:bg-blue-600 text-white">
                    {loading ? "Thinking..." : <><Send className="h-4 w-4" /> Send</>}
                  </Button>
                </form>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AIMentor;
