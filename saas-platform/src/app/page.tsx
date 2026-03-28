import Link from 'next/link';
import agentsData from '@/data/agents.json';

export default function Home() {
  const totalAgents = agentsData.reduce((acc, domain) => acc + domain.agents.length, 0);

  return (
    <div className="bg-white min-h-screen">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">BirthHub360</span>
              <h1 className="text-2xl font-bold tracking-tight text-blue-600">BirthHub360</h1>
            </a>
          </div>
          <div className="flex lg:hidden">
            <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
              <span className="sr-only">Open main menu</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            <a href="#features" className="text-sm font-semibold leading-6 text-gray-900">Features</a>
            <a href="#domains" className="text-sm font-semibold leading-6 text-gray-900">Domains</a>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link href="/dashboard" className="text-sm font-semibold leading-6 text-gray-900 border border-gray-300 rounded-md px-4 py-2 hover:bg-gray-50 transition-colors">
              Go to Dashboard <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </nav>
      </header>

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Scale Your Operations with AI Agents
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              BirthHub360 provides a parallel operational plan for accessing {totalAgents} specialized AI agents across {agentsData.length} macro-domains. Deploy in seconds.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/dashboard"
                className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                Access Dashboard
              </Link>
              <a href="#domains" className="text-sm font-semibold leading-6 text-gray-900">
                View Domains <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div id="domains" className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-blue-600">Comprehensive Suite</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              All the tools you need in {agentsData.length} Domains
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              From Executive management to Fintech compliance, we have a specialized AI agent waiting for your deployment.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {agentsData.map((domain, index) => (
                <div key={index} className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 text-white">
                      <span className="font-bold">{domain.agents.length}</span>
                    </div>
                    {domain.name}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">
                    Complexity Base: <strong className="text-gray-900">{domain.complexity}</strong>
                    <br />
                    Sample agents: {domain.agents.slice(0, 3).join(', ')}...
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
