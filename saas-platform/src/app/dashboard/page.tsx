import agentsData from '@/data/agents.json';

export default function Dashboard() {
  const totalAgents = agentsData.reduce((acc, domain) => acc + domain.agents.length, 0);

  return (
    <div className="py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <h1 className="text-2xl font-semibold text-gray-900">Platform Overview</h1>
        <p className="mt-1 text-sm text-gray-500">
          Manage and deploy your fleet of {totalAgents} specialized AI agents.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mt-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-8">
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-blue-500 rounded-md p-3">
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">Total Agents</dt>
                    <dd className="text-lg font-medium text-gray-900">{totalAgents}</dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-green-500 rounded-md p-3">
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">Macro Domains</dt>
                    <dd className="text-lg font-medium text-gray-900">{agentsData.length}</dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-purple-500 rounded-md p-3">
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">Active Deployments</dt>
                    <dd className="text-lg font-medium text-gray-900">0</dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-12">
          {agentsData.map((domain, idx) => (
            <div key={idx} id={`domain-${idx}`} className="pt-6 border-t border-gray-200">
              <div className="mb-6">
                <h2 className="text-xl font-bold text-gray-900">{domain.name}</h2>
                <div className="mt-1 flex items-center">
                  <span className="text-sm text-gray-500 mr-2">Base Complexity:</span>
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    domain.complexity.includes('Muito Alta') ? 'bg-red-100 text-red-800' :
                    domain.complexity.includes('Alta') ? 'bg-orange-100 text-orange-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {domain.complexity}
                  </span>
                  <span className="ml-3 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    {domain.agents.length} agents
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {domain.agents.map((agent, agentIdx) => (
                  <div key={agentIdx} className="bg-white overflow-hidden shadow rounded-lg border border-gray-100 hover:border-blue-300 transition-colors">
                    <div className="px-4 py-5 sm:p-6 flex flex-col h-full">
                      <div className="flex-1">
                        <h3 className="text-sm font-medium text-gray-900 truncate" title={agent}>{agent}</h3>
                        <p className="mt-1 text-xs text-gray-500">
                          {domain.name.split(',')[0]} specialized agent.
                        </p>
                      </div>
                      <div className="mt-4">
                        <button className="w-full inline-flex justify-center items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                          Deploy Agent
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
