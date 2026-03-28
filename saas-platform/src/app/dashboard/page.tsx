"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, Layers, Server, Zap, Compass, Users } from 'lucide-react';
import agentsData from '@/data/agents.json';
import AgentCard from '@/components/AgentCard';

export default function Dashboard() {
  const [searchQuery, setSearchQuery] = useState('');
  const totalAgents = agentsData.reduce((acc, domain) => acc + domain.agents.length, 0);
  const activeDeployments = agentsData.reduce((acc, domain) => acc + domain.agents.filter(a => a.status === 'Active').length, 0);

  const filteredData = agentsData.map(domain => {
    return {
      ...domain,
      agents: domain.agents.filter(agent => {
        const query = searchQuery.toLowerCase();
        return agent.name.toLowerCase().includes(query) ||
               agent.description.toLowerCase().includes(query) ||
               agent.role.toLowerCase().includes(query) ||
               agent.tags.some(tag => tag.toLowerCase().includes(query));
      })
    };
  }).filter(domain => domain.agents.length > 0);

  return (
    <div className="min-h-screen bg-gray-50/50 pb-12">
      <div className="bg-white border-b border-gray-100 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 flex justify-between items-end">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 tracking-tight flex items-center">
              <Compass className="w-8 h-8 mr-3 text-blue-600" />
              Platform Overview
            </h1>
            <p className="mt-2 text-sm text-gray-500 font-medium">
              Orchestrate and deploy your fleet of {totalAgents} specialized AI agents across {agentsData.length} domains.
            </p>
          </div>
          <div className="hidden sm:block">
            <input
              type="text"
              placeholder="Search platform..."
              className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-64 shadow-sm"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mt-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-10">

          <motion.div
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="bg-white overflow-hidden shadow-sm border border-gray-100 rounded-2xl relative group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
            <div className="p-6 relative">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-blue-100 rounded-xl p-3 shadow-inner">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Total Agents</dt>
                    <dd className="text-2xl font-bold text-gray-900 mt-1 flex items-baseline">
                      {totalAgents} <span className="text-xs text-green-600 ml-2 font-medium bg-green-50 px-2 py-0.5 rounded-full">+12% vs last month</span>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="bg-white overflow-hidden shadow-sm border border-gray-100 rounded-2xl relative group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-green-50 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
            <div className="p-6 relative">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-green-100 rounded-xl p-3 shadow-inner">
                  <Layers className="h-6 w-6 text-green-600" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Macro Domains</dt>
                    <dd className="text-2xl font-bold text-gray-900 mt-1 flex items-baseline">
                      {agentsData.length} <span className="text-xs text-gray-500 ml-2 font-medium">Mapped areas</span>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
            className="bg-white overflow-hidden shadow-sm border border-gray-100 rounded-2xl relative group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-50 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
            <div className="p-6 relative">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-purple-100 rounded-xl p-3 shadow-inner">
                  <Zap className="h-6 w-6 text-purple-600" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Active Deployments</dt>
                    <dd className="text-2xl font-bold text-gray-900 mt-1 flex items-baseline">
                      {activeDeployments} <span className="text-xs text-blue-600 ml-2 font-medium bg-blue-50 px-2 py-0.5 rounded-full">Executing now</span>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {filteredData.length === 0 ? (
          <div className="text-center py-24 bg-white rounded-2xl border border-gray-200 shadow-sm">
            <Server className="mx-auto h-12 w-12 text-gray-300" />
            <h3 className="mt-4 text-sm font-semibold text-gray-900">No agents found</h3>
            <p className="mt-2 text-sm text-gray-500">Try adjusting your search query.</p>
          </div>
        ) : (
          <div className="space-y-16">
            {filteredData.map((domain, idx) => (
              <motion.div
                key={idx}
                id={`domain-${idx}`}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4 }}
              >
                <div className="mb-6 flex items-end justify-between border-b border-gray-200 pb-4">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                      {domain.name.split(',')[0]}
                      <span className="ml-3 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-gray-100 text-gray-800 border border-gray-200 shadow-sm">
                        {domain.agents.length} agents
                      </span>
                    </h2>
                    <p className="mt-1 text-sm text-gray-500">{domain.name}</p>
                  </div>
                  <div className="hidden sm:flex items-center space-x-2">
                    <span className="text-xs font-medium text-gray-400 uppercase tracking-widest">Base Risk:</span>
                    <span className={`inline-flex items-center px-3 py-1 rounded-md text-xs font-bold shadow-sm ${
                      domain.complexity.includes('Muito Alta') ? 'bg-red-50 text-red-700 border border-red-200' :
                      domain.complexity.includes('Alta') ? 'bg-orange-50 text-orange-700 border border-orange-200' :
                      'bg-yellow-50 text-yellow-700 border border-yellow-200'
                    }`}>
                      <Activity className="w-3.5 h-3.5 mr-1.5" />
                      {domain.complexity}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  <AnimatePresence>
                    {domain.agents.map((agent) => (
                      <motion.div
                        key={agent.id}
                        layout
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.2 }}
                      >
                        <AgentCard agent={agent} complexity={domain.complexity} />
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
