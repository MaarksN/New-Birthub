"use client";

import { useState } from 'react';
import { Bot, Activity, BrainCircuit, Play, BarChart3, Settings } from 'lucide-react';
import AgentModal from './AgentModal';
import { motion } from 'framer-motion';

export interface Agent {
  id: string;
  name: string;
  description: string;
  status: string;
  role: string;
  metrics: {
    usage: number;
    successRate: string;
    latency: string;
  };
  tags: string[];
}

export default function AgentCard({ agent, complexity }: { agent: Agent, complexity: string }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const statusColor =
    agent.status === 'Active' ? 'bg-green-100 text-green-700 border-green-200' :
    agent.status === 'Draft' ? 'bg-yellow-100 text-yellow-700 border-yellow-200' :
    'bg-gray-100 text-gray-700 border-gray-200';

  return (
    <>
      <motion.div
        whileHover={{ y: -4, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)" }}
        transition={{ duration: 0.2 }}
        className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden flex flex-col h-full cursor-pointer transition-all duration-300 group"
        onClick={() => setIsModalOpen(true)}
      >
        <div className="p-5 flex-1 flex flex-col">
          <div className="flex justify-between items-start mb-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <BrainCircuit className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1" title={agent.name}>
                  {agent.name}
                </h3>
                <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium border ${statusColor} mt-1`}>
                  {agent.status}
                </span>
              </div>
            </div>
          </div>

          <p className="text-sm text-gray-500 line-clamp-2 flex-1 mb-4">
            {agent.description}
          </p>

          <div className="grid grid-cols-2 gap-2 mb-4 text-xs">
            <div className="flex items-center text-gray-500 bg-gray-50 p-2 rounded-md">
              <Activity className="w-3.5 h-3.5 mr-1.5 text-blue-500" />
              <span>{agent.metrics.successRate} success</span>
            </div>
            <div className="flex items-center text-gray-500 bg-gray-50 p-2 rounded-md">
              <Bot className="w-3.5 h-3.5 mr-1.5 text-blue-500" />
              <span className="truncate">{agent.role}</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-1 mb-4">
            <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md font-medium border border-gray-200">
              {complexity}
            </span>
          </div>
        </div>

        <div className="px-5 py-3 bg-gray-50 border-t border-gray-100 flex justify-between items-center group-hover:bg-blue-50 transition-colors">
          <span className="text-xs font-medium text-gray-500 flex items-center group-hover:text-blue-600">
            <BarChart3 className="w-3.5 h-3.5 mr-1" />
            {agent.metrics.usage.toLocaleString()} calls
          </span>
          <button
            className="text-sm font-medium text-blue-600 flex items-center hover:text-blue-800 transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              setIsModalOpen(true);
            }}
          >
            Configure
            <Settings className="w-3.5 h-3.5 ml-1" />
          </button>
        </div>
      </motion.div>

      <AgentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        agent={agent}
        complexity={complexity}
      />
    </>
  );
}
