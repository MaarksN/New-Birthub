'use client';

import React from 'react';
import { Activity, Users, Zap, Clock, BarChart3, TrendingUp, PieChart } from 'lucide-react';
import Sidebar from '@/components/Sidebar';
import TopNav from '@/components/TopNav';

export default function AnalyticsDashboard() {
  const kpis = [
    { title: 'Total Executions', value: '14,204', change: '+12.5%', isUp: true, icon: Zap },
    { title: 'Active Agents', value: '42', change: '+3', isUp: true, icon: Users },
    { title: 'Avg. Latency', value: '184ms', change: '-12ms', isUp: true, icon: Clock }, // Lower is better
    { title: 'Success Rate', value: '98.2%', change: '+0.4%', isUp: true, icon: Activity },
  ];

  return (
    <div className="flex h-screen bg-[#0A0F1C] overflow-hidden text-slate-300">
      <Sidebar />
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        <TopNav onSearch={() => {}} />

        <main className="flex-1 overflow-y-auto p-4 md:p-8">
          <div className="max-w-7xl mx-auto space-y-8">
            {/* Header */}
            <div>
              <h1 className="text-2xl font-bold text-white flex items-center gap-3">
                <BarChart3 className="w-6 h-6 text-blue-500" />
                Platform Analytics
              </h1>
              <p className="text-sm text-slate-400 mt-1">Monitor real-time performance and usage metrics across all deployed agents.</p>
            </div>

            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {kpis.map((kpi, idx) => (
                <div key={idx} className="bg-[#111827] rounded-xl p-6 border border-slate-800 shadow-xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <kpi.icon className="w-16 h-16 text-blue-500" />
                  </div>
                  <div className="relative z-10">
                    <p className="text-sm font-medium text-slate-400">{kpi.title}</p>
                    <div className="mt-2 flex items-baseline gap-2">
                      <p className="text-3xl font-bold text-white">{kpi.value}</p>
                      <span className={`text-sm font-medium ${kpi.isUp ? 'text-emerald-400' : 'text-rose-400'}`}>
                        {kpi.change}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Main Charts Area */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Main Line Chart Mockup */}
              <div className="lg:col-span-2 bg-[#111827] rounded-xl border border-slate-800 shadow-xl p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-lg font-semibold text-white flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-blue-500" />
                    Executions Over Time (30 Days)
                  </h2>
                  <select className="bg-[#0A0F1C] border border-slate-700 rounded-lg text-sm px-3 py-1.5 text-slate-300 focus:outline-none focus:border-blue-500">
                    <option>Last 30 Days</option>
                    <option>Last 7 Days</option>
                    <option>Today</option>
                  </select>
                </div>

                {/* CSS-based Mock Chart */}
                <div className="h-64 flex items-end justify-between gap-2 pt-4 border-l border-b border-slate-700 pb-2 pl-2">
                  {[40, 60, 45, 80, 55, 90, 70, 85, 65, 100, 75, 95].map((height, i) => (
                    <div key={i} className="w-full relative group">
                      <div
                        className="bg-blue-500/20 hover:bg-blue-500/40 rounded-t-sm w-full transition-all border-t border-blue-500 relative"
                        style={{ height: `${height}%` }}
                      >
                         <div className="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-xs px-2 py-1 rounded shadow-lg text-white pointer-events-none transition-opacity whitespace-nowrap z-20">
                           {Math.floor(height * 142)} reqs
                         </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex justify-between text-xs text-slate-500 mt-2 pl-2">
                  <span>Oct 1</span>
                  <span>Oct 15</span>
                  <span>Oct 30</span>
                </div>
              </div>

              {/* Side Pie Chart / Details Mockup */}
              <div className="bg-[#111827] rounded-xl border border-slate-800 shadow-xl p-6 flex flex-col">
                <h2 className="text-lg font-semibold text-white flex items-center gap-2 mb-6">
                  <PieChart className="w-5 h-5 text-blue-500" />
                  Usage by Domain
                </h2>
                <div className="flex-1 flex flex-col justify-center items-center relative pb-8">
                   {/* CSS Circle Mockup */}
                   <div className="w-48 h-48 rounded-full border-8 border-slate-800 relative flex items-center justify-center">
                     <div className="absolute inset-0 rounded-full border-8 border-blue-500" style={{ clipPath: 'polygon(50% 50%, 100% 0, 100% 100%, 0 100%, 0 50%)' }}></div>
                     <div className="absolute inset-0 rounded-full border-8 border-indigo-500" style={{ clipPath: 'polygon(50% 50%, 0 50%, 0 0, 50% 0)' }}></div>
                     <div className="absolute inset-0 rounded-full border-8 border-cyan-500" style={{ clipPath: 'polygon(50% 50%, 50% 0, 100% 0)' }}></div>
                     <div className="text-center">
                       <span className="block text-2xl font-bold text-white">100%</span>
                       <span className="block text-xs text-slate-400">Total</span>
                     </div>
                   </div>

                   <div className="w-full mt-8 space-y-3">
                     <div className="flex items-center justify-between text-sm">
                       <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-blue-500"></div><span className="text-slate-300">Executivos</span></div>
                       <span className="text-white font-medium">62%</span>
                     </div>
                     <div className="flex items-center justify-between text-sm">
                       <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-indigo-500"></div><span className="text-slate-300">Vendas</span></div>
                       <span className="text-white font-medium">25%</span>
                     </div>
                     <div className="flex items-center justify-between text-sm">
                       <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-cyan-500"></div><span className="text-slate-300">Marketing</span></div>
                       <span className="text-white font-medium">13%</span>
                     </div>
                   </div>
                </div>
              </div>
            </div>

            {/* Recent Activity Table */}
            <div className="bg-[#111827] rounded-xl border border-slate-800 shadow-xl overflow-hidden">
              <div className="px-6 py-4 border-b border-slate-800 flex justify-between items-center bg-[#0A0F1C]/50">
                <h2 className="text-lg font-semibold text-white">Recent Agent Activity</h2>
                <button className="text-sm text-blue-500 hover:text-blue-400 font-medium">View All Logs</button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm text-slate-400">
                  <thead className="bg-[#1A233A] text-slate-300 uppercase text-xs font-semibold">
                    <tr>
                      <th className="px-6 py-3">Agent ID</th>
                      <th className="px-6 py-3">Domain</th>
                      <th className="px-6 py-3">Task</th>
                      <th className="px-6 py-3">Status</th>
                      <th className="px-6 py-3 text-right">Latency</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800">
                    {[
                      { id: 'AG-1', domain: 'Executivos', task: 'Generate Q3 Forecast', status: 'Success', latency: '420ms' },
                      { id: 'AG-45', domain: 'Marketing', task: 'Draft Email Campaign', status: 'Success', latency: '850ms' },
                      { id: 'AG-112', domain: 'Vendas', task: 'Lead Qualification', status: 'Failed', latency: '1.2s' },
                      { id: 'AG-8', domain: 'Financeiro', task: 'Reconcile Invoices', status: 'Success', latency: '210ms' },
                    ].map((log, i) => (
                      <tr key={i} className="hover:bg-[#1A233A]/50 transition-colors">
                        <td className="px-6 py-4 font-mono text-blue-400">{log.id}</td>
                        <td className="px-6 py-4">{log.domain}</td>
                        <td className="px-6 py-4 truncate max-w-xs">{log.task}</td>
                        <td className="px-6 py-4">
                          <span className={`inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-xs font-medium border ${
                            log.status === 'Success'
                              ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                              : 'bg-rose-500/10 text-rose-400 border-rose-500/20'
                          }`}>
                            {log.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right font-mono">{log.latency}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        </main>
      </div>
    </div>
  );
}
