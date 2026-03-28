'use client';

import React, { useState } from 'react';
import { Terminal, Key, Copy, Check, Webhook, FileJson } from 'lucide-react';
import Sidebar from '@/components/Sidebar';
import TopNav from '@/components/TopNav';

export default function ApiIntegrations() {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(id);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const codeSnippet = `curl -X POST https://api.birthhub360.ai/v1/agents/execute \\
  -H "Authorization: Bearer sk_prod_xxxx" \\
  -H "Content-Type: application/json" \\
  -d '{
    "agent_id": "AG-1",
    "prompt": "Analyze the latest Q3 sales data and forecast next month.",
    "parameters": {
      "temperature": 0.5
    }
  }'`;

  return (
    <div className="flex h-screen bg-[#0A0F1C] overflow-hidden text-slate-300">
      <Sidebar />
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        <TopNav onSearch={() => {}} />

        <main className="flex-1 overflow-y-auto p-4 md:p-8">
          <div className="max-w-5xl mx-auto space-y-8">
            {/* Header */}
            <div>
              <h1 className="text-2xl font-bold text-white flex items-center gap-3">
                <Terminal className="w-6 h-6 text-blue-500" />
                API & Integrations
              </h1>
              <p className="text-sm text-slate-400 mt-1">Manage your API keys, webhooks, and explore documentation for headless integration.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Column: Keys & Webhooks */}
              <div className="lg:col-span-1 space-y-8">
                {/* API Keys */}
                <div className="bg-[#111827] rounded-xl border border-slate-800 shadow-xl overflow-hidden">
                  <div className="px-6 py-4 border-b border-slate-800 bg-[#0A0F1C]/50 flex items-center gap-2">
                    <Key className="w-4 h-4 text-blue-500" />
                    <h2 className="text-sm font-semibold text-white uppercase tracking-wider">Secret Keys</h2>
                  </div>
                  <div className="p-6 space-y-4">
                    <div>
                      <label className="text-xs font-semibold text-slate-500 uppercase">Production Key</label>
                      <div className="mt-1 flex items-center gap-2 bg-[#0A0F1C] border border-slate-700 rounded-lg p-2">
                        <input
                          type="password"
                          value="sk_prod_xxxxxxxxxxxxxxxxxxxxx"
                          readOnly
                          className="flex-1 bg-transparent text-sm text-white focus:outline-none px-2 font-mono"
                        />
                        <button
                          onClick={() => copyToClipboard('sk_prod_xxxxxxxxxxxxxxxxxxxxx', 'prod')}
                          className="p-1.5 hover:bg-slate-800 rounded transition-colors text-slate-400 hover:text-white"
                        >
                          {copiedKey === 'prod' ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-slate-500 uppercase">Test Key</label>
                      <div className="mt-1 flex items-center gap-2 bg-[#0A0F1C] border border-slate-700 rounded-lg p-2">
                        <input
                          type="password"
                          value="sk_test_yyyyyyyyyyyyyyyyyyyyy"
                          readOnly
                          className="flex-1 bg-transparent text-sm text-white focus:outline-none px-2 font-mono"
                        />
                        <button
                          onClick={() => copyToClipboard('sk_test_yyyyyyyyyyyyyyyyyyyyy', 'test')}
                          className="p-1.5 hover:bg-slate-800 rounded transition-colors text-slate-400 hover:text-white"
                        >
                          {copiedKey === 'test' ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>
                    <button className="w-full py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-sm font-medium transition-colors border border-slate-700">
                      Roll Keys
                    </button>
                  </div>
                </div>

                {/* Webhooks */}
                <div className="bg-[#111827] rounded-xl border border-slate-800 shadow-xl overflow-hidden">
                  <div className="px-6 py-4 border-b border-slate-800 bg-[#0A0F1C]/50 flex items-center gap-2">
                    <Webhook className="w-4 h-4 text-purple-500" />
                    <h2 className="text-sm font-semibold text-white uppercase tracking-wider">Webhooks</h2>
                  </div>
                  <div className="p-6">
                     <p className="text-sm text-slate-400 mb-4">Receive real-time notifications when an agent completes a task.</p>
                     <div className="flex flex-col gap-3">
                       <div className="flex items-center justify-between p-3 border border-slate-700 rounded-lg bg-[#0A0F1C]">
                         <div className="truncate pr-2">
                           <p className="text-xs text-slate-500 mb-0.5">Endpoint URL</p>
                           <p className="text-sm text-white truncate font-mono">https://api.mycompany.com/webhook</p>
                         </div>
                         <span className="flex-shrink-0 w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]"></span>
                       </div>
                       <button className="text-sm text-blue-500 hover:text-blue-400 font-medium text-left">
                         + Add Endpoint
                       </button>
                     </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Documentation */}
              <div className="lg:col-span-2 space-y-8">
                <div className="bg-[#111827] rounded-xl border border-slate-800 shadow-xl overflow-hidden h-full flex flex-col">
                  <div className="px-6 py-4 border-b border-slate-800 bg-[#0A0F1C]/50 flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <FileJson className="w-4 h-4 text-emerald-500" />
                      <h2 className="text-sm font-semibold text-white uppercase tracking-wider">Quickstart Docs</h2>
                    </div>
                    <button className="text-sm text-blue-500 hover:text-blue-400 font-medium">View Full Docs</button>
                  </div>

                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-lg font-medium text-white mb-2">Execute an Agent</h3>
                    <p className="text-sm text-slate-400 mb-6">
                      Trigger a deployed AI agent programmatically by sending a POST request to the <code className="bg-slate-800 px-1.5 py-0.5 rounded text-blue-300">/v1/agents/execute</code> endpoint.
                      You must include your Secret Key in the Authorization header.
                    </p>

                    <div className="relative group flex-1 bg-[#05080f] border border-slate-800 rounded-lg overflow-hidden flex flex-col">
                       <div className="flex items-center px-4 py-2 border-b border-slate-800 bg-[#0A0F1C] text-xs font-mono text-slate-500">
                         bash
                       </div>
                       <pre className="p-4 text-sm font-mono overflow-x-auto flex-1">
                         <code className="text-slate-300">
                           {codeSnippet.split('\n').map((line, i) => (
                             <div key={i} className="table-row">
                               <span className="table-cell pr-4 text-slate-700 select-none text-right">{i + 1}</span>
                               <span className="table-cell">
                                 {line.includes('curl') ? <span className="text-blue-400">{line}</span> :
                                  line.includes('Authorization:') ? <span className="text-emerald-400">{line}</span> :
                                  line}
                               </span>
                             </div>
                           ))}
                         </code>
                       </pre>
                       <button
                        onClick={() => copyToClipboard(codeSnippet, 'code')}
                        className="absolute top-2 right-2 p-2 bg-slate-800/80 hover:bg-slate-700 rounded border border-slate-700 text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        {copiedKey === 'code' ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                      </button>
                    </div>

                    <div className="mt-6 pt-6 border-t border-slate-800">
                      <h4 className="text-sm font-semibold text-white mb-3">Response Object</h4>
                      <div className="bg-[#05080f] border border-slate-800 rounded-lg p-4 font-mono text-xs text-slate-400">
                        {`{
  "status": "success",
  "data": {
    "execution_id": "exe_12345xyz",
    "agent_id": "AG-1",
    "result": "Based on the Q3 data, revenue is projected to grow by 12% in October...",
    "usage": {
      "prompt_tokens": 145,
      "completion_tokens": 82
    }
  }
}`}
                      </div>
                    </div>

                  </div>
                </div>
              </div>

            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
