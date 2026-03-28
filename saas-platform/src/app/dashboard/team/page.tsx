'use client';

import React, { useState } from 'react';
import { Users, UserPlus, Mail, Shield, MoreVertical } from 'lucide-react';
import Sidebar from '@/components/Sidebar';
import TopNav from '@/components/TopNav';

export default function TeamManagement() {
  const [members] = useState([
    { id: 1, name: 'Jules Admin', email: 'jules@birthhub360.ai', role: 'Owner', status: 'Active', initials: 'JA', color: 'bg-blue-600' },
    { id: 2, name: 'Alex Developer', email: 'alex@birthhub360.ai', role: 'Admin', status: 'Active', initials: 'AD', color: 'bg-indigo-600' },
    { id: 3, name: 'Sam Data', email: 'sam@birthhub360.ai', role: 'Member', status: 'Pending', initials: 'SD', color: 'bg-cyan-600' },
  ]);

  return (
    <div className="flex h-screen bg-[#0A0F1C] overflow-hidden text-slate-300">
      <Sidebar />
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        <TopNav onSearch={() => {}} />

        <main className="flex-1 overflow-y-auto p-4 md:p-8">
          <div className="max-w-5xl mx-auto">
            {/* Header */}
            <div className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-2xl font-bold text-white flex items-center gap-3">
                  <Users className="w-6 h-6 text-blue-500" />
                  Team Management
                </h1>
                <p className="text-sm text-slate-400 mt-1">Manage workspace members, their roles, and invite new colleagues.</p>
              </div>
              <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium rounded-lg transition-colors shadow-lg shadow-blue-500/20 whitespace-nowrap">
                <UserPlus className="w-4 h-4" />
                Invite Member
              </button>
            </div>

            {/* Content List */}
            <div className="bg-[#111827] rounded-xl border border-slate-800 shadow-xl overflow-hidden">
              <div className="px-6 py-4 border-b border-slate-800 flex justify-between items-center bg-[#0A0F1C]/50">
                <h2 className="text-sm font-semibold text-white uppercase tracking-wider">Active Members ({members.length})</h2>
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <span className="flex items-center gap-1.5"><Shield className="w-4 h-4" /> Role Definitions</span>
                </div>
              </div>

              <div className="divide-y divide-slate-800">
                {members.map((member) => (
                  <div key={member.id} className="p-6 flex items-center justify-between hover:bg-[#1A233A]/30 transition-colors">
                    <div className="flex items-center gap-4">
                      {/* Avatar */}
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm ${member.color}`}>
                        {member.initials}
                      </div>

                      {/* Info */}
                      <div>
                        <p className="text-sm font-medium text-white flex items-center gap-2">
                          {member.name}
                          {member.role === 'Owner' && <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-blue-500/10 text-blue-400 border border-blue-500/20">OWNER</span>}
                        </p>
                        <p className="text-xs text-slate-500 flex items-center gap-1.5 mt-0.5">
                          <Mail className="w-3 h-3" /> {member.email}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      {/* Role Selector (Mock) */}
                      <div className="hidden sm:block">
                        <select
                          disabled={member.role === 'Owner'}
                          className={`bg-[#0A0F1C] border border-slate-700 rounded-lg text-sm px-3 py-1.5 focus:outline-none focus:border-blue-500 ${
                            member.role === 'Owner' ? 'text-slate-500 opacity-50 cursor-not-allowed' : 'text-slate-300'
                          }`}
                          defaultValue={member.role}
                        >
                          <option value="Admin">Admin</option>
                          <option value="Member">Member</option>
                          <option value="Viewer">Viewer</option>
                        </select>
                      </div>

                      {/* Status */}
                      <div className="w-20 text-right">
                        <span className={`inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-[10px] font-medium border uppercase ${
                          member.status === 'Active'
                            ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                            : 'bg-amber-500/10 text-amber-400 border-amber-500/20'
                        }`}>
                          {member.status}
                        </span>
                      </div>

                      {/* Actions */}
                      <button className="text-slate-500 hover:text-white transition-colors p-1 ml-2">
                        <MoreVertical className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Invite Form Section Mockup */}
            <div className="mt-8 p-6 bg-gradient-to-br from-blue-900/10 to-[#111827] border border-blue-500/20 rounded-xl">
              <h3 className="text-lg font-medium text-white mb-2">Quick Invite</h3>
              <p className="text-sm text-slate-400 mb-4">Send an email invitation to collaborate on your AI workspace.</p>

              <form className="flex gap-3" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="colleague@company.com"
                  className="flex-1 bg-[#0A0F1C] border border-slate-700 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all max-w-md"
                />
                <select className="bg-[#0A0F1C] border border-slate-700 rounded-lg text-sm px-4 py-2.5 text-slate-300 focus:outline-none focus:border-blue-500 w-32 hidden sm:block">
                  <option value="Member">Member</option>
                  <option value="Admin">Admin</option>
                </select>
                <button type="submit" className="px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-sm font-medium transition-colors whitespace-nowrap">
                  Send Invite
                </button>
              </form>
            </div>

          </div>
        </main>
      </div>
    </div>
  );
}
