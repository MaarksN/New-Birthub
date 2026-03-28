'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Play, Square, Terminal, MessageSquare, Activity, Settings2, CheckCircle2, AlertCircle } from 'lucide-react';
import Sidebar from '@/components/Sidebar';
import TopNav from '@/components/TopNav';
import { useParams } from 'next/navigation';

export default function AgentConsolePage() {
  const params = useParams();
  const agentId = params.id as string;

  const [isRunning, setIsRunning] = useState(false);
  const [activeTab, setActiveTab] = useState('chat');
  const [messages, setMessages] = useState<{ role: 'user' | 'agent' | 'system', content: string }[]>([
    { role: 'system', content: `Agent ${agentId} initialized. Ready for input.` }
  ]);
  const [input, setInput] = useState('');
  const [logs, setLogs] = useState<string[]>([
    '[SYSTEM] Boot sequence initiated...',
    '[SYSTEM] Loading weights and configurations...',
    `[SYSTEM] Agent instance ${agentId} ready.`
  ]);

  const chatEndRef = useRef<HTMLDivElement>(null);
  const logEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll chat and logs
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    logEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [logs]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || !isRunning) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setLogs(prev => [...prev, `[USER] Executing prompt: "${userMessage}"...`]);

    // Simulate Agent response
    setTimeout(() => {
      setMessages(prev => [...prev, {
        role: 'agent',
        content: `Processing your request... As an AI orchestrator, I am simulating the execution for "${userMessage}".`
      }]);
      setLogs(prev => [...prev, '[AGENT] Task completed successfully.', '[METRICS] Latency: 420ms | Tokens: 128']);
    }, 1500);
  };

  const toggleStatus = () => {
    setIsRunning(!isRunning);
    if (!isRunning) {
      setLogs(prev => [...prev, '[SYSTEM] Agent started. Listening for requests...']);
      setMessages(prev => [...prev, { role: 'system', content: 'Agent is now ACTIVE.' }]);
    } else {
      setLogs(prev => [...prev, '[SYSTEM] Agent stopped. Entering standby mode.']);
      setMessages(prev => [...prev, { role: 'system', content: 'Agent is now INACTIVE.' }]);
    }
  };

  return (
    <div className="flex flex-col h-full overflow-hidden text-slate-300">
        <main className="flex-1 flex flex-col p-4 md:p-6 overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between mb-6 shrink-0">
            <div>
              <h1 className="text-2xl font-bold text-white flex items-center gap-3">
                Agent Console: <span className="text-blue-500 font-mono text-xl">{agentId}</span>
                {isRunning ? (
                   <span className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-medium border border-emerald-500/20">
                     <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span> Active
                   </span>
                ) : (
                  <span className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-slate-800 text-slate-400 text-xs font-medium border border-slate-700">
                     <span className="w-2 h-2 rounded-full bg-slate-500"></span> Stopped
                   </span>
                )}
              </h1>
              <p className="text-sm text-slate-400 mt-1">Interact with your deployed agent, monitor logs, and view real-time metrics.</p>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={toggleStatus}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isRunning
                    ? 'bg-rose-500/10 text-rose-500 hover:bg-rose-500/20 border border-rose-500/20'
                    : 'bg-emerald-500/10 text-emerald-500 hover:bg-emerald-500/20 border border-emerald-500/20'
                }`}
              >
                {isRunning ? (
                  <><Square className="w-4 h-4 fill-current" /> Stop Agent</>
                ) : (
                  <><Play className="w-4 h-4 fill-current" /> Start Agent</>
                )}
              </button>
              <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#111827] text-slate-300 border border-slate-800 hover:bg-slate-800 transition-colors text-sm font-medium">
                <Settings2 className="w-4 h-4" /> Configuration
              </button>
            </div>
          </div>

          <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-6 overflow-hidden">
            {/* Left Panel: Chat / Interface */}
            <div className="lg:col-span-2 flex flex-col bg-[#111827] rounded-xl border border-slate-800 overflow-hidden shadow-xl">
              <div className="flex items-center gap-4 px-4 py-3 border-b border-slate-800 bg-[#0A0F1C]/50">
                <button
                  onClick={() => setActiveTab('chat')}
                  className={`flex items-center gap-2 text-sm font-medium px-3 py-1.5 rounded-md transition-colors ${activeTab === 'chat' ? 'bg-blue-600/20 text-blue-400' : 'text-slate-400 hover:text-white hover:bg-slate-800'}`}
                >
                  <MessageSquare className="w-4 h-4" /> Interaction
                </button>
                <button
                  onClick={() => setActiveTab('metrics')}
                  className={`flex items-center gap-2 text-sm font-medium px-3 py-1.5 rounded-md transition-colors ${activeTab === 'metrics' ? 'bg-blue-600/20 text-blue-400' : 'text-slate-400 hover:text-white hover:bg-slate-800'}`}
                >
                  <Activity className="w-4 h-4" /> Live Metrics
                </button>
              </div>

              {activeTab === 'chat' ? (
                <>
                  <div className="flex-1 overflow-y-auto p-4 space-y-4">
                    {messages.map((msg, idx) => (
                      <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                        <div className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm ${
                          msg.role === 'user'
                            ? 'bg-blue-600 text-white rounded-br-none'
                            : msg.role === 'system'
                            ? 'bg-slate-800 text-slate-400 rounded-md text-center w-full mx-8 text-xs font-mono'
                            : 'bg-[#1A233A] text-slate-200 border border-slate-700 rounded-bl-none'
                        }`}>
                          {msg.content}
                        </div>
                      </div>
                    ))}
                    <div ref={chatEndRef} />
                  </div>
                  <div className="p-4 border-t border-slate-800 bg-[#0A0F1C]/50">
                    <form onSubmit={handleSendMessage} className="flex items-center gap-3">
                      <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder={isRunning ? "Type your message or command..." : "Start the agent to interact..."}
                        disabled={!isRunning}
                        className="flex-1 bg-[#1A233A] border border-slate-700 rounded-lg px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
                      />
                      <button
                        type="submit"
                        disabled={!isRunning || !input.trim()}
                        className="bg-blue-600 hover:bg-blue-500 disabled:bg-slate-800 disabled:text-slate-500 text-white p-2.5 rounded-lg transition-colors flex items-center justify-center"
                      >
                        <Play className="w-4 h-4 fill-current" />
                      </button>
                    </form>
                  </div>
                </>
              ) : (
                <div className="flex-1 p-6 flex items-center justify-center text-slate-500">
                  <div className="text-center">
                    <Activity className="w-12 h-12 mx-auto mb-4 opacity-50" />
                    <p>Real-time metrics visualization coming soon.</p>
                  </div>
                </div>
              )}
            </div>

            {/* Right Panel: Terminal Logs */}
            <div className="flex flex-col bg-[#05080f] rounded-xl border border-slate-800 overflow-hidden shadow-xl font-mono text-xs">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-800 bg-[#0A0F1C] text-slate-400">
                <Terminal className="w-4 h-4" />
                <span className="font-semibold uppercase tracking-wider text-[10px]">Execution Logs</span>
              </div>
              <div className="flex-1 p-4 overflow-y-auto space-y-1.5">
                {logs.map((log, idx) => (
                  <div key={idx} className={`${
                    log.includes('[ERROR]') ? 'text-rose-400' :
                    log.includes('[USER]') ? 'text-blue-400' :
                    log.includes('[AGENT]') ? 'text-emerald-400' :
                    'text-slate-500'
                  }`}>
                    <span className="opacity-50 select-none mr-2">{new Date().toLocaleTimeString('en-US', { hour12: false, hour: "numeric", minute: "numeric", second: "numeric" })}</span>
                    {log}
                  </div>
                ))}
                <div ref={logEndRef} />
              </div>
            </div>
          </div>
        </main>
    </div>
  );
}
