'use client';

import React, { useState } from 'react';
import { User, Key, CreditCard, Bell, Shield, Laptop } from 'lucide-react';
import Sidebar from '@/components/Sidebar';
import TopNav from '@/components/TopNav';

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('profile');

  const tabs = [
    { id: 'profile', name: 'Profile', icon: User },
    { id: 'api-keys', name: 'API Keys', icon: Key },
    { id: 'billing', name: 'Billing', icon: CreditCard },
    { id: 'notifications', name: 'Notifications', icon: Bell },
    { id: 'security', name: 'Security', icon: Shield },
    { id: 'preferences', name: 'Preferences', icon: Laptop },
  ];

  return (
    <div className="flex h-screen bg-[#0A0F1C] overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        <TopNav onSearch={() => {}} />
        <main className="flex-1 overflow-y-auto p-4 md:p-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-2xl font-bold text-white mb-6">Settings</h1>

            <div className="flex flex-col md:flex-row gap-8">
              {/* Settings Navigation */}
              <nav className="w-full md:w-64 flex flex-col gap-1" aria-label="Tabs">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                        activeTab === tab.id
                          ? 'bg-blue-600/10 text-blue-500'
                          : 'text-slate-400 hover:text-white hover:bg-[#1A233A]'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      {tab.name}
                    </button>
                  );
                })}
              </nav>

              {/* Settings Content */}
              <div className="flex-1 bg-[#111827] rounded-xl border border-slate-800 p-6 shadow-xl">
                {activeTab === 'profile' && (
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-lg font-medium text-white">Profile Information</h2>
                      <p className="text-sm text-slate-400 mt-1">Update your account's profile information and email address.</p>
                    </div>
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                      <div>
                        <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-slate-300">First name</label>
                        <input type="text" name="first-name" id="first-name" defaultValue="Jules" className="mt-2 block w-full rounded-md border-0 bg-[#0A0F1C] py-2 px-3 text-white shadow-sm ring-1 ring-inset ring-slate-700 placeholder:text-slate-500 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6" />
                      </div>
                      <div>
                        <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-slate-300">Last name</label>
                        <input type="text" name="last-name" id="last-name" defaultValue="Admin" className="mt-2 block w-full rounded-md border-0 bg-[#0A0F1C] py-2 px-3 text-white shadow-sm ring-1 ring-inset ring-slate-700 placeholder:text-slate-500 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6" />
                      </div>
                      <div className="sm:col-span-2">
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-slate-300">Email address</label>
                        <input type="email" name="email" id="email" defaultValue="jules@birthhub360.ai" className="mt-2 block w-full rounded-md border-0 bg-[#0A0F1C] py-2 px-3 text-white shadow-sm ring-1 ring-inset ring-slate-700 placeholder:text-slate-500 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6" />
                      </div>
                    </div>
                    <div className="pt-4 flex justify-end">
                      <button className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                        Save Changes
                      </button>
                    </div>
                  </div>
                )}

                {activeTab === 'api-keys' && (
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-lg font-medium text-white">API Keys</h2>
                      <p className="text-sm text-slate-400 mt-1">Manage API keys to access BirthHub360 programmatically.</p>
                    </div>
                    <div className="bg-[#0A0F1C] p-4 rounded-lg border border-slate-800 flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-white">Production Key</p>
                        <p className="text-xs text-slate-500 font-mono mt-1">sk_prod_xxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
                      </div>
                      <button className="text-sm text-blue-500 hover:text-blue-400 font-medium">Reveal</button>
                    </div>
                    <div className="bg-[#0A0F1C] p-4 rounded-lg border border-slate-800 flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-white">Test Key</p>
                        <p className="text-xs text-slate-500 font-mono mt-1">sk_test_xxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
                      </div>
                      <button className="text-sm text-blue-500 hover:text-blue-400 font-medium">Reveal</button>
                    </div>
                    <div className="pt-4">
                      <button className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors border border-slate-700">
                        Generate New Key
                      </button>
                    </div>
                  </div>
                )}

                {activeTab === 'billing' && (
                  <div className="space-y-6">
                     <div>
                      <h2 className="text-lg font-medium text-white">Billing Overview</h2>
                      <p className="text-sm text-slate-400 mt-1">Manage your subscription and payment methods.</p>
                    </div>
                    <div className="bg-gradient-to-r from-blue-900/40 to-indigo-900/40 border border-blue-500/20 p-6 rounded-xl">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="text-blue-400 font-semibold mb-1">Professional Plan</p>
                          <p className="text-2xl font-bold text-white">$199<span className="text-sm font-normal text-slate-400">/mo</span></p>
                        </div>
                        <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full font-medium border border-blue-500/30">Active</span>
                      </div>
                      <div className="mt-6 pt-6 border-t border-blue-500/20 flex justify-between items-center">
                        <p className="text-sm text-slate-300">Next billing date: <span className="text-white font-medium">Nov 1, 2024</span></p>
                        <button className="text-sm font-medium text-white hover:text-blue-400 transition-colors">Manage Plan</button>
                      </div>
                    </div>
                  </div>
                )}

                {/* Placeholders for other tabs */}
                {['notifications', 'security', 'preferences'].includes(activeTab) && (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="w-16 h-16 rounded-full bg-slate-800/50 flex items-center justify-center mb-4">
                      <Laptop className="w-8 h-8 text-slate-500" />
                    </div>
                    <h3 className="text-lg font-medium text-white mb-2">Coming Soon</h3>
                    <p className="text-sm text-slate-400 max-w-sm">This section is currently under development. Check back later for updates.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
