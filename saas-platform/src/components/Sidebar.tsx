import Link from 'next/link';
import agentsData from '@/data/agents.json';

export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-900 text-white min-h-screen p-4 sticky top-0 h-screen overflow-y-auto hidden md:block">
      <div className="mb-8">
        <Link href="/">
          <h2 className="text-2xl font-bold tracking-tight text-blue-400">BirthHub360</h2>
        </Link>
        <p className="text-sm text-gray-400 mt-1">AI Agent SaaS</p>
      </div>

      <nav className="space-y-1">
        <Link
          href="/dashboard"
          className="flex items-center px-3 py-2 text-sm font-medium rounded-md hover:bg-gray-800 text-gray-300 hover:text-white mb-4"
        >
          Overview
        </Link>

        <h3 className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
          Domains
        </h3>

        {agentsData.map((domain, idx) => (
          <Link
            key={idx}
            href={`/dashboard#domain-${idx}`}
            className="group flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-300 hover:bg-gray-800 hover:text-white"
          >
            <span className="truncate">{domain.name}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}
