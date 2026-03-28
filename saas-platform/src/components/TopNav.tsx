"use client";

import Link from 'next/link';
import { Search, Bell, Menu, Zap } from 'lucide-react';
import { useState } from 'react';

export default function TopNav({ onSearch }: { onSearch?: (q: string) => void }) {
  const [query, setQuery] = useState('');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    if (onSearch) onSearch(e.target.value);
  };

  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-30 w-full transition-all">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex md:hidden">
            <Link href="/" className="flex items-center space-x-2">
              <Zap className="w-5 h-5 text-blue-600" />
              <h2 className="text-xl font-bold tracking-tight text-gray-900">BirthHub360</h2>
            </Link>
          </div>

          <div className="hidden md:flex flex-1 items-center space-x-4 max-w-lg relative">
             <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-gray-400" />
             </div>
             <input
                type="text"
                placeholder="Search across 332 agents, domains or roles..."
                value={query}
                onChange={handleSearch}
                className="block w-full pl-10 pr-3 py-2 border border-gray-200 rounded-lg leading-5 bg-gray-50 placeholder-gray-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent sm:text-sm transition-all"
             />
             {query && (
               <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                 <span className="text-xs font-medium text-gray-400">Esc to clear</span>
               </div>
             )}
          </div>

          <div className="flex items-center space-x-4 ml-auto">
            <button className="text-gray-400 hover:text-gray-600 relative transition-colors focus:outline-none">
               <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-400 ring-2 ring-white"></span>
               <Bell className="h-5 w-5" />
            </button>
            <div className="relative">
              <div className="flex items-center space-x-3">
                <div className="hidden md:block text-right">
                  <p className="text-sm font-medium text-gray-900 leading-none">Jules Admin</p>
                  <p className="text-xs text-gray-500 mt-1">Platform Orchestrator</p>
                </div>
                <div className="h-9 w-9 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center text-white font-bold text-sm shadow-md ring-2 ring-white cursor-pointer hover:opacity-90 transition-opacity">
                  JA
                </div>
              </div>
            </div>
            <button className="md:hidden text-gray-500 hover:text-gray-700 ml-2">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
