"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Zap, Bot, Shield, Rocket, Activity, Network, ChevronRight } from 'lucide-react';
import agentsData from '@/data/agents.json';

export default function Home() {
  const totalAgents = agentsData.reduce((acc, domain) => acc + domain.agents.length, 0);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="bg-[#0a0f1c] min-h-screen font-sans text-gray-100 overflow-hidden">

      {/* Navbar */}
      <header className="absolute inset-x-0 top-0 z-50 border-b border-gray-800/50 bg-[#0a0f1c]/50 backdrop-blur-lg">
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8">
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5 flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center shadow-[0_0_15px_rgba(37,99,235,0.5)]">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-300">
                BirthHub360
              </span>
            </Link>
          </div>
          <div className="hidden lg:flex lg:gap-x-8">
            <a href="#features" className="text-sm font-semibold leading-6 text-gray-300 hover:text-white transition-colors">Features</a>
            <a href="#domains" className="text-sm font-semibold leading-6 text-gray-300 hover:text-white transition-colors">Macro Domains</a>
            <a href="#security" className="text-sm font-semibold leading-6 text-gray-300 hover:text-white transition-colors">Security</a>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link href="/dashboard" className="text-sm font-semibold leading-6 text-white bg-blue-600 hover:bg-blue-500 rounded-full px-5 py-2.5 transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_25px_rgba(37,99,235,0.5)] flex items-center">
              Access Platform <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <div className="relative isolate pt-24">
        {/* Background Gradients */}
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80 pointer-events-none">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blue-600 to-indigo-800 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
        </div>

        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-40">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-blue-900/50 text-blue-300 border border-blue-800 mb-6 backdrop-blur-sm">
                <Rocket className="w-3.5 h-3.5 mr-2" />
                V2.0 Now Available
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-2 text-5xl font-bold tracking-tight text-white sm:text-7xl leading-tight"
            >
              Hyper-Scale your operations with <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">Autonomous Agents</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-lg leading-8 text-gray-400 max-w-xl"
            >
              BirthHub360 is the premier parallel execution platform for enterprise. Deploy, monitor, and scale a synchronized fleet of <strong className="text-white">{totalAgents} specialized AI agents</strong> across {agentsData.length} critical business domains.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-10 flex items-center gap-x-6"
            >
              <Link href="/dashboard" className="rounded-full bg-blue-600 px-8 py-4 text-sm font-semibold text-white shadow-[0_0_30px_rgba(37,99,235,0.4)] hover:bg-blue-500 hover:shadow-[0_0_40px_rgba(37,99,235,0.6)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all flex items-center">
                Launch Dashboard <ChevronRight className="w-4 h-4 ml-2" />
              </Link>
              <a href="#features" className="text-sm font-semibold leading-6 text-gray-300 hover:text-white transition-colors flex items-center">
                Explore Architecture <span aria-hidden="true" className="ml-2">↓</span>
              </a>
            </motion.div>
          </div>

          <div className="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow hidden lg:block">
            <motion.div
              initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
              className="relative mx-auto w-full max-w-lg"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-30 animate-pulse"></div>
              <div className="relative rounded-2xl bg-[#0f172a] ring-1 ring-white/10 p-8 shadow-2xl">
                <div className="flex items-center justify-between border-b border-gray-800 pb-4 mb-4">
                   <div className="flex space-x-2">
                     <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                     <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                     <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                   </div>
                   <div className="text-xs text-gray-500 font-mono">system_status: ACTIVE</div>
                </div>
                <div className="space-y-4 font-mono text-sm">
                  <div className="flex items-center text-blue-400"><span className="text-green-400 mr-2">✓</span> {totalAgents} Agents Initialized</div>
                  <div className="flex items-center text-gray-300"><span className="text-green-400 mr-2">✓</span> Parallel Processing: ON</div>
                  <div className="flex items-center text-gray-300"><span className="text-green-400 mr-2">✓</span> Cross-validation: ENABLED</div>
                  <div className="h-2 w-full bg-gray-800 rounded-full mt-6 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 2, ease: "easeInOut" }}
                      className="h-full bg-gradient-to-r from-blue-500 to-indigo-500"
                    ></motion.div>
                  </div>
                  <div className="text-xs text-gray-500 text-right mt-2">Deploying swarm...</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Feature Section */}
      <div id="features" className="py-24 sm:py-32 relative bg-[#060a14] border-t border-gray-800/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-blue-400">Enterprise Grade</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Parallel Execution Protocol
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-400">
              Designed to eliminate merge conflicts and ensure safe deployment of AI systems through strict cross-validation protocols.
            </p>
          </div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none"
          >
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              <motion.div variants={item} className="flex flex-col bg-[#0f172a] rounded-2xl p-8 border border-gray-800 hover:border-blue-500/50 transition-colors">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white mb-4">
                  <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-blue-600/20 text-blue-400 border border-blue-500/20">
                    <Network className="h-5 w-5" aria-hidden="true" />
                  </div>
                  Parallel Processing
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-400">
                  <p className="flex-auto">Deploy agents simultaneously without blocking. Our architecture guarantees isolation and prevents system lockups during peak execution.</p>
                </dd>
              </motion.div>

              <motion.div variants={item} className="flex flex-col bg-[#0f172a] rounded-2xl p-8 border border-gray-800 hover:border-indigo-500/50 transition-colors">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white mb-4">
                  <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-indigo-600/20 text-indigo-400 border border-indigo-500/20">
                    <Shield className="h-5 w-5" aria-hidden="true" />
                  </div>
                  Cross-Validation Gate
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-400">
                  <p className="flex-auto">No auto-approvals. Every agent's output is rigorously validated against strict contracts, schemas, and guardrails before merging.</p>
                </dd>
              </motion.div>

              <motion.div variants={item} className="flex flex-col bg-[#0f172a] rounded-2xl p-8 border border-gray-800 hover:border-purple-500/50 transition-colors">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white mb-4">
                  <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-purple-600/20 text-purple-400 border border-purple-500/20">
                    <Activity className="h-5 w-5" aria-hidden="true" />
                  </div>
                  Real-time Observability
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-400">
                  <p className="flex-auto">Track unit-effort, success rates, and latencies across {agentsData.length} domains. Full tracing for all agent reasoning loops.</p>
                </dd>
              </motion.div>
            </dl>
          </motion.div>
        </div>
      </div>

      {/* Domains Section */}
      <div id="domains" className="py-24 sm:py-32 relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Platform Coverage</h2>
            <p className="mt-6 text-lg leading-8 text-gray-400">
              {totalAgents} highly specialized agents distributed across 9 critical business verticals.
            </p>
          </div>

          <ul role="list" className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 gap-y-8">
            {agentsData.map((domain, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-[#0f172a] rounded-2xl px-8 py-10 border border-gray-800 group hover:bg-[#15203b] transition-colors shadow-lg"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="h-12 w-12 bg-blue-900/40 rounded-xl flex items-center justify-center text-blue-400 border border-blue-800/50">
                    <Bot className="h-6 w-6" />
                  </div>
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold border ${
                      domain.complexity.includes('Muito Alta') ? 'bg-red-900/30 text-red-400 border-red-800' :
                      domain.complexity.includes('Alta') ? 'bg-orange-900/30 text-orange-400 border-orange-800' :
                      'bg-yellow-900/30 text-yellow-400 border-yellow-800'
                    }`}>
                    {domain.complexity}
                  </span>
                </div>
                <h3 className="mt-4 text-xl font-bold leading-7 text-white tracking-tight">{domain.name.split(',')[0]}</h3>
                <p className="mt-2 text-sm leading-6 text-gray-400 line-clamp-2">{domain.name}</p>

                <div className="mt-6 pt-6 border-t border-gray-800">
                  <div className="flex justify-between text-sm text-gray-500 font-medium mb-3">
                    <span>Capacity</span>
                    <span className="text-blue-400">{domain.agents.length} Agents</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {domain.agents.slice(0, 3).map((agent, i) => (
                      <span key={i} className="text-xs px-2.5 py-1 rounded-md bg-gray-800 text-gray-300 border border-gray-700 truncate max-w-full">
                        {typeof agent === 'string' ? agent : agent.name}
                      </span>
                    ))}
                    {domain.agents.length > 3 && (
                      <span className="text-xs px-2.5 py-1 rounded-md bg-gray-900 text-gray-500 border border-gray-800">
                        +{domain.agents.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>

    </div>
  );
}
