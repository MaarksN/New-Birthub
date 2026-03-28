"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { X, Bot, Activity, BrainCircuit, Play, BarChart3, Settings, Info, Tag, Layers, Server } from 'lucide-react';
import { Agent } from './AgentCard';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  agent: Agent;
  complexity: string;
}

export default function AgentModal({ isOpen, onClose, agent, complexity }: ModalProps) {
  if (!isOpen) return null;

  const statusColor =
    agent.status === 'Active' ? 'bg-green-100 text-green-700' :
    agent.status === 'Draft' ? 'bg-yellow-100 text-yellow-700' :
    'bg-gray-100 text-gray-700';

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-gray-900/60 backdrop-blur-sm transition-opacity"
          onClick={onClose}
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", bounce: 0, duration: 0.3 }}
          className="relative w-full max-w-3xl bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col z-10 max-h-[90vh]"
        >
          {/* Header */}
          <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between sticky top-0 bg-white/80 backdrop-blur-md z-20">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600">
                <BrainCircuit className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900 leading-tight">
                  {agent.name}
                </h2>
                <div className="flex items-center space-x-2 mt-1">
                  <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold ${statusColor}`}>
                    {agent.status}
                  </span>
                  <span className="text-sm text-gray-500 font-medium">ID: {agent.id}</span>
                </div>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-6 overflow-y-auto flex-1">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

              <div className="md:col-span-2 space-y-6">
                <div>
                  <h3 className="text-base font-semibold text-gray-900 flex items-center mb-2">
                    <Info className="w-4 h-4 mr-2 text-blue-500" />
                    About this Agent
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed bg-gray-50 p-4 rounded-xl border border-gray-100">
                    {agent.description}
                  </p>
                </div>

                <div>
                  <h3 className="text-base font-semibold text-gray-900 flex items-center mb-3">
                    <Tag className="w-4 h-4 mr-2 text-blue-500" />
                    Tags & Capabilities
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {agent.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-lg font-medium border border-blue-100">
                        {tag}
                      </span>
                    ))}
                    <span className="px-3 py-1 bg-purple-50 text-purple-700 text-sm rounded-lg font-medium border border-purple-100">
                      Complexity: {complexity}
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                  <h3 className="text-sm font-semibold text-gray-900 flex items-center mb-3 uppercase tracking-wider">
                    <BarChart3 className="w-4 h-4 mr-2 text-gray-500" />
                    Performance
                  </h3>
                  <dl className="space-y-3">
                    <div className="flex justify-between items-center pb-2 border-b border-gray-200 border-dashed">
                      <dt className="text-sm text-gray-500 flex items-center"><Activity className="w-3.5 h-3.5 mr-1" /> Success Rate</dt>
                      <dd className="text-sm font-semibold text-green-600">{agent.metrics.successRate}</dd>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b border-gray-200 border-dashed">
                      <dt className="text-sm text-gray-500 flex items-center"><Server className="w-3.5 h-3.5 mr-1" /> Avg. Latency</dt>
                      <dd className="text-sm font-semibold text-gray-900">{agent.metrics.latency}</dd>
                    </div>
                    <div className="flex justify-between items-center">
                      <dt className="text-sm text-gray-500 flex items-center"><Layers className="w-3.5 h-3.5 mr-1" /> API Calls</dt>
                      <dd className="text-sm font-semibold text-blue-600">{agent.metrics.usage.toLocaleString()}</dd>
                    </div>
                  </dl>
                </div>

                <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
                   <h3 className="text-sm font-semibold text-blue-900 flex items-center mb-2">
                    <Bot className="w-4 h-4 mr-2 text-blue-500" />
                    Role Designation
                  </h3>
                  <p className="text-sm text-blue-800 font-medium">
                    {agent.role}
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Footer */}
          <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 flex justify-end space-x-3 items-center sticky bottom-0">
            <button
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-gray-200"
            >
              Cancel
            </button>
            <button className="px-4 py-2 flex items-center text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1">
              <Play className="w-4 h-4 mr-2" />
              Deploy Agent
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
