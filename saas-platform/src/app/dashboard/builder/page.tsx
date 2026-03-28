'use client';

import React, { useState } from 'react';
import { Settings2, Cpu, Rocket, BookOpen, SlidersHorizontal, ArrowRight, Check } from 'lucide-react';
import Sidebar from '@/components/Sidebar';
import TopNav from '@/components/TopNav';

export default function AgentBuilder() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    role: 'Analyst',
    model: 'gpt-4-turbo',
    systemPrompt: '',
    temperature: 0.7,
  });

  const handleNext = () => setStep(s => Math.min(s + 1, 3));
  const handlePrev = () => setStep(s => Math.max(s - 1, 1));

  const isLastStep = step === 3;

  return (
    <div className="flex h-screen bg-[#0A0F1C] overflow-hidden text-slate-300">
      <Sidebar />
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        <TopNav onSearch={() => {}} />

        <main className="flex-1 overflow-y-auto p-4 md:p-8">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="mb-8 flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-white flex items-center gap-3">
                  <Rocket className="w-6 h-6 text-blue-500" />
                  Agent Builder
                </h1>
                <p className="text-sm text-slate-400 mt-1">Configure, train, and deploy a custom AI agent tailored to your workflow.</p>
              </div>
              <div className="flex items-center gap-2 text-sm font-medium">
                {[1, 2, 3].map((s) => (
                  <div key={s} className="flex items-center">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                      step === s ? 'bg-blue-600 text-white shadow-[0_0_15px_rgba(37,99,235,0.5)]' :
                      step > s ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' :
                      'bg-slate-800 text-slate-500 border border-slate-700'
                    }`}>
                      {step > s ? <Check className="w-4 h-4" /> : s}
                    </div>
                    {s !== 3 && <div className={`w-8 h-px mx-2 ${step > s ? 'bg-emerald-500/30' : 'bg-slate-700'}`} />}
                  </div>
                ))}
              </div>
            </div>

            {/* Content Form */}
            <div className="bg-[#111827] rounded-xl border border-slate-800 shadow-xl overflow-hidden min-h-[500px] flex flex-col">
              <div className="p-8 flex-1">
                {step === 1 && (
                  <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <div>
                      <h2 className="text-xl font-semibold text-white flex items-center gap-2">
                        <BookOpen className="w-5 h-5 text-blue-500" />
                        Basic Information
                      </h2>
                      <p className="text-sm text-slate-400 mt-1 mb-6">Define the identity and primary role of your agent.</p>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">Agent Name</label>
                      <input
                        type="text"
                        placeholder="e.g., Q3 Financial Forecaster"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full bg-[#0A0F1C] border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">Designated Role</label>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {['Analyst', 'Automator', 'Creator'].map(role => (
                          <div
                            key={role}
                            onClick={() => setFormData({...formData, role})}
                            className={`p-4 rounded-lg border cursor-pointer transition-all ${
                              formData.role === role
                                ? 'bg-blue-600/10 border-blue-500 text-blue-400'
                                : 'bg-[#0A0F1C] border-slate-700 text-slate-400 hover:border-slate-500 hover:text-slate-300'
                            }`}
                          >
                            <div className="font-semibold mb-1">{role}</div>
                            <div className="text-xs opacity-70">
                              {role === 'Analyst' && 'Data processing and insights.'}
                              {role === 'Automator' && 'Workflow and task execution.'}
                              {role === 'Creator' && 'Content and code generation.'}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <div>
                      <h2 className="text-xl font-semibold text-white flex items-center gap-2">
                        <Cpu className="w-5 h-5 text-blue-500" />
                        Intelligence Engine
                      </h2>
                      <p className="text-sm text-slate-400 mt-1 mb-6">Select the underlying model and instruct its behavior.</p>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">Base Model</label>
                      <select
                        value={formData.model}
                        onChange={(e) => setFormData({...formData, model: e.target.value})}
                        className="w-full bg-[#0A0F1C] border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-all appearance-none"
                      >
                        <option value="gpt-4-turbo">GPT-4 Turbo (Recommended for Complex Tasks)</option>
                        <option value="gpt-4">GPT-4 (High Accuracy)</option>
                        <option value="gpt-3.5-turbo">GPT-3.5 Turbo (Fast & Cost Effective)</option>
                        <option value="claude-3-opus">Claude 3 Opus (Advanced Reasoning)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">System Prompt (Instructions)</label>
                      <textarea
                        rows={5}
                        placeholder="You are an expert financial analyst. Your job is to process CSV files containing quarterly data and output a summarized markdown report..."
                        value={formData.systemPrompt}
                        onChange={(e) => setFormData({...formData, systemPrompt: e.target.value})}
                        className="w-full bg-[#0A0F1C] border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-all resize-none font-mono text-sm"
                      />
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <div>
                      <h2 className="text-xl font-semibold text-white flex items-center gap-2">
                        <SlidersHorizontal className="w-5 h-5 text-blue-500" />
                        Hyperparameters
                      </h2>
                      <p className="text-sm text-slate-400 mt-1 mb-6">Fine-tune the execution constraints and temperature.</p>
                    </div>

                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <label className="text-sm font-medium text-slate-300">Temperature: {formData.temperature.toFixed(2)}</label>
                        <span className="text-xs text-slate-500 bg-slate-800 px-2 py-1 rounded">
                          {formData.temperature < 0.4 ? 'Deterministic' : formData.temperature > 0.7 ? 'Creative' : 'Balanced'}
                        </span>
                      </div>
                      <input
                        type="range"
                        min="0" max="1" step="0.01"
                        value={formData.temperature}
                        onChange={(e) => setFormData({...formData, temperature: parseFloat(e.target.value)})}
                        className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
                      />
                      <div className="flex justify-between text-xs text-slate-500 mt-2">
                        <span>Precise (0.0)</span>
                        <span>Creative (1.0)</span>
                      </div>
                    </div>

                    <div className="p-4 bg-blue-900/10 border border-blue-500/20 rounded-lg mt-8">
                       <h3 className="text-blue-400 font-medium text-sm mb-2 flex items-center gap-2">
                         <Settings2 className="w-4 h-4" /> Final Review
                       </h3>
                       <div className="grid grid-cols-2 gap-4 text-sm mt-4">
                         <div>
                           <span className="text-slate-500 block">Name:</span>
                           <span className="text-white font-medium">{formData.name || 'Untitled Agent'}</span>
                         </div>
                         <div>
                           <span className="text-slate-500 block">Role:</span>
                           <span className="text-white font-medium">{formData.role}</span>
                         </div>
                         <div>
                           <span className="text-slate-500 block">Model:</span>
                           <span className="text-white font-medium font-mono">{formData.model}</span>
                         </div>
                       </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Footer Actions */}
              <div className="p-6 border-t border-slate-800 bg-[#0A0F1C]/50 flex justify-between items-center">
                <button
                  onClick={handlePrev}
                  disabled={step === 1}
                  className="px-6 py-2.5 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  Back
                </button>
                <button
                  onClick={handleNext}
                  className="px-6 py-2.5 rounded-lg text-sm font-medium bg-blue-600 text-white hover:bg-blue-500 flex items-center gap-2 transition-colors shadow-lg shadow-blue-500/20"
                >
                  {isLastStep ? (
                    <>Deploy Agent <Rocket className="w-4 h-4" /></>
                  ) : (
                    <>Continue <ArrowRight className="w-4 h-4" /></>
                  )}
                </button>
              </div>
            </div>

          </div>
        </main>
      </div>
    </div>
  );
}
