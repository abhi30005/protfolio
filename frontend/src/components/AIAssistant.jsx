import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, User, Loader2, Sparkles, RefreshCcw } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

const suggestedQuestions = [
  "Tell me about Abhijit",
  "What projects has he built?",
  "What are his AI/ML skills?",
  "Tell me about ATLAS",
  "What technologies does he use?",
  "What's his internship journey?",
  "What makes his projects different?"
];

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: "Hi! 👋 I'm Abhijit's AI portfolio assistant.\n\nI can help you explore his projects, skills, internship journey, education and technical experience.\n\nWhat would you like to know?"
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen, messages]);

  const sendMessage = async (text) => {
    if (!text.trim() || isLoading) return;

    const userMessage = { role: 'user', content: text.trim() };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);
    setError(null);

    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:8000';
      const response = await fetch(`${apiUrl}/api/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          message: text.trim(),
          conversation: messages.slice(1).map(m => ({ role: m.role, content: m.content }))
        })
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || 'Failed to get response');
      }

      setMessages(prev => [...prev, { role: 'assistant', content: data.answer }]);
    } catch (err) {
      console.error("AI Assistant Error:", err);
      setError("I'm having trouble connecting right now. You can still explore Abhijit's projects and skills directly through the portfolio.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  };

  const clearChat = () => {
    setMessages([
      {
        role: 'assistant',
        content: "Hi! 👋 I'm Abhijit's AI portfolio assistant.\n\nI can help you explore his projects, skills, internship journey, education and technical experience.\n\nWhat would you like to know?"
      }
    ]);
    setError(null);
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 w-16 h-16 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-xl shadow-indigo-500/30 flex items-center justify-center z-50 ${isOpen ? 'hidden' : 'flex'}`}
      >
        <div className="relative">
          <MessageSquare size={28} />
          {/* Subtle breathing animation when idle */}
          <div className="absolute top-0 right-0 w-3 h-3 bg-cyan-400 rounded-full border-2 border-indigo-600 animate-pulse" />
        </div>
      </motion.button>

      {/* Chat Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed bottom-0 md:bottom-6 right-0 md:right-6 w-full h-full md:w-[450px] md:h-[650px] bg-white/90 backdrop-blur-xl md:rounded-[2rem] shadow-2xl border border-white z-50 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-slate-100 bg-white/50">
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 shrink-0">
                  <Bot size={24} />
                  {isLoading && (
                    <motion.div 
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                      className="absolute -inset-1 border border-indigo-300 rounded-full border-t-transparent"
                    />
                  )}
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 leading-tight">Abhijit AI</h3>
                  <div className="text-xs text-slate-500 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                    Online
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button onClick={clearChat} className="p-2 text-slate-400 hover:text-slate-600 transition-colors" title="Clear Chat">
                  <RefreshCcw size={18} />
                </button>
                <button onClick={() => setIsOpen(false)} className="p-2 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-full transition-colors">
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Subtitle / Disclaimer */}
            <div className="bg-indigo-50/50 px-4 py-2 text-xs text-indigo-600/70 border-b border-indigo-100/50 flex items-center gap-1.5 justify-center text-center">
              <Sparkles size={12} />
              AI assistant uses portfolio data to answer questions.
            </div>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-6 scroll-smooth">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} gap-3`}>
                  {msg.role === 'assistant' && (
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-violet-500 text-white flex items-center justify-center shrink-0 mt-1 shadow-md">
                      <Bot size={16} />
                    </div>
                  )}
                  
                  <div className={`max-w-[80%] rounded-2xl p-4 ${
                    msg.role === 'user' 
                      ? 'bg-indigo-600 text-white rounded-tr-sm shadow-sm' 
                      : 'bg-white text-slate-700 border border-slate-100 rounded-tl-sm shadow-sm'
                  }`}>
                    {msg.role === 'assistant' ? (
                      <div className="prose prose-sm prose-slate max-w-none prose-a:text-indigo-600 prose-a:font-semibold hover:prose-a:text-indigo-700 prose-p:leading-relaxed">
                        <ReactMarkdown>{msg.content}</ReactMarkdown>
                      </div>
                    ) : (
                      <div className="whitespace-pre-wrap">{msg.content}</div>
                    )}
                  </div>
                </div>
              ))}

              {isLoading && (
                <div className="flex justify-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-violet-500 text-white flex items-center justify-center shrink-0 shadow-md">
                    <Bot size={16} />
                  </div>
                  <div className="bg-white border border-slate-100 rounded-2xl rounded-tl-sm p-4 flex items-center gap-1.5 shadow-sm">
                    <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0 }} className="w-2 h-2 rounded-full bg-indigo-400" />
                    <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }} className="w-2 h-2 rounded-full bg-indigo-400" />
                    <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }} className="w-2 h-2 rounded-full bg-indigo-400" />
                  </div>
                </div>
              )}

              {error && (
                <div className="bg-red-50 text-red-600 border border-red-100 rounded-xl p-4 text-sm text-center">
                  {error}
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Suggested Questions */}
            {messages.length === 1 && !isLoading && (
              <div className="px-4 pb-2 flex gap-2 overflow-x-auto no-scrollbar scroll-smooth">
                {suggestedQuestions.map((q, i) => (
                  <button
                    key={i}
                    onClick={() => sendMessage(q)}
                    className="whitespace-nowrap px-3 py-1.5 bg-slate-50 border border-slate-200 text-slate-600 rounded-full text-xs font-medium hover:bg-indigo-50 hover:text-indigo-600 hover:border-indigo-200 transition-colors shrink-0"
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}

            {/* Input Area */}
            <div className="p-4 bg-white/80 border-t border-slate-100 backdrop-blur-md">
              <div className="relative flex items-end gap-2 bg-slate-50 rounded-2xl border border-slate-200 p-1 focus-within:ring-2 focus-within:ring-indigo-500/20 focus-within:border-indigo-300 transition-all">
                <textarea
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask a question..."
                  className="w-full max-h-32 min-h-[44px] bg-transparent resize-none outline-none px-3 py-2.5 text-sm text-slate-700 placeholder:text-slate-400"
                  rows={1}
                />
                <button
                  onClick={() => sendMessage(input)}
                  disabled={!input.trim() || isLoading}
                  className="shrink-0 p-2.5 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 disabled:opacity-50 disabled:hover:bg-indigo-600 transition-colors mb-0.5 mr-0.5"
                >
                  <Send size={18} />
                </button>
              </div>
              <div className="text-center mt-2 text-[10px] text-slate-400 font-medium">
                AI-generated responses.
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
