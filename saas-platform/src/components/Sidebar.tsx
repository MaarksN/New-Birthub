"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, Compass, Settings, Zap, Users, ShieldAlert, BarChart, FileText, Database, Code, Cpu } from 'lucide-react';
import agentsData from '@/data/agents.json';

const icons = [Users, Code, BarChart, Database, FileText, ShieldAlert, Compass, Cpu, Zap];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-[#0a1128] text-white min-h-screen p-4 sticky top-0 h-screen overflow-y-auto hidden md:flex flex-col border-r border-gray-800">
      <div className="mb-10 px-2 mt-2 flex items-center space-x-3">
        <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center shadow-[0_0_15px_rgba(37,99,235,0.5)]">
          <Zap className="w-5 h-5 text-white" />
        </div>
        <Link href="/">
          <h2 className="text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-300">
            BirthHub360
          </h2>
        </Link>
      </div>

      <nav className="space-y-1 flex-1">
        <Link
          href="/dashboard"
          className={`group flex items-center px-3 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 ${
            pathname === '/dashboard' ? 'bg-blue-600/10 text-blue-400' : 'text-gray-400 hover:bg-gray-800/50 hover:text-white'
          }`}
        >
          <LayoutDashboard className={`w-5 h-5 mr-3 ${pathname === '/dashboard' ? 'text-blue-400' : 'text-gray-500 group-hover:text-white'}`} />
          Overview
        </Link>

        <div className="pt-6 pb-2">
          <h3 className="px-3 text-[11px] font-semibold text-gray-500 uppercase tracking-widest">
            Macro Domains
          </h3>
        </div>

        <div className="space-y-0.5">
          {agentsData.map((domain, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <Link
                key={idx}
                href={`/dashboard#domain-${idx}`}
                className="group flex items-center px-3 py-2 text-sm font-medium rounded-lg text-gray-400 hover:bg-gray-800/50 hover:text-white transition-all duration-200"
              >
                <Icon className="w-4 h-4 mr-3 text-gray-500 group-hover:text-blue-400 transition-colors" />
                <span className="truncate">{domain.name.split(',')[0]}</span>
                <span className="ml-auto bg-gray-800 text-gray-300 py-0.5 px-2 rounded-md text-[10px] font-bold group-hover:bg-blue-600/20 group-hover:text-blue-300">
                  {domain.agents.length}
                </span>
              </Link>
            )
          })}
        </div>
      </nav>

      <div className="mt-8 pt-6 border-t border-gray-800/50 px-3">
        <Link href="#" className="flex items-center text-sm font-medium text-gray-400 hover:text-white transition-colors">
          <Settings className="w-5 h-5 mr-3 text-gray-500" />
          Platform Settings
        </Link>
      </div>
    </aside>
  );
}
