import React, { useState } from 'react';
import { model } from '../../gemini-config';

const ChatComponent = () => {
  const [input, setInput] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSendMessage = async () => {
    if (!input.trim() || loading) return;

    const userMessage = input.trim();
    setLoading(true);
    setInput("");

    // Add user message to UI
    const newUserMessage = { role: "user", text: userMessage };
    setChatHistory((prev) => [...prev, newUserMessage]);

    try {
      // Send prompt to Gemini AI
      const result = await model.generateContent(userMessage);
      const response = await result.response;
      const aiText = response.text();

      // Add AI response to UI
      setChatHistory((prev) => [...prev, { role: "model", text: aiText }]);
    } catch (error) {
      console.error("Gemini Error:", error);
      setChatHistory((prev) => [...prev, { role: "model", text: "Sorry, I encountered an error. Please try again." }]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="chat-container">
      <div className="messages">
        {chatHistory.length === 0 ? (
          <div className="empty-state">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/>
            </svg>
            <p>Start a conversation with AI</p>
          </div>
        ) : (
          chatHistory.map((msg, index) => (
            <div key={index} className={`message ${msg.role}`}>
              {msg.text}
            </div>
          ))
        )}
        {loading && (
          <div className="message model">
            <span className="loading-spinner"></span>
            Thinking...
          </div>
        )}
      </div>
      <div className="chat-input">
        <input 
          value={input} 
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Type your message..." 
          disabled={loading}
        />
        <button onClick={handleSendMessage} disabled={loading || !input.trim()}>
          {loading ? 'Sending...' : 'Send'}
        </button>
      </div>
    </div>
  );
};

export default ChatComponent;
