import React from 'react';
import Link from 'next/link';
import { Check, Hexagon, Zap } from 'lucide-react';

const tiers = [
  {
    name: 'Starter',
    id: 'tier-starter',
    href: '/register',
    priceMonthly: '$49',
    description: 'The essentials to provide your best work for clients.',
    features: [
      '5 AI Agents',
      'Up to 10,000 monthly executions',
      'Standard analytics',
      'Community support',
      '48-hour response time',
    ],
    mostPopular: false,
  },
  {
    name: 'Professional',
    id: 'tier-professional',
    href: '/register',
    priceMonthly: '$199',
    description: 'A plan that scales with your rapidly growing business.',
    features: [
      'Unlimited AI Agents',
      'Up to 500,000 monthly executions',
      'Advanced predictive analytics',
      '24/7 dedicated support',
      '1-hour response time',
      'Custom API integrations',
      'Role-based access control',
    ],
    mostPopular: true,
  },
  {
    name: 'Enterprise',
    id: 'tier-enterprise',
    href: '/register',
    priceMonthly: 'Custom',
    description: 'Dedicated support and infrastructure for your company.',
    features: [
      'Everything in Professional',
      'Unlimited monthly executions',
      'On-premise deployment options',
      'Dedicated Customer Success Manager',
      'Custom SLA guarantees',
      'SOC2 compliance reporting',
    ],
    mostPopular: false,
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function PricingPage() {
  return (
    <div className="bg-[#0A0F1C] min-h-screen py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <Link href="/" className="inline-flex items-center justify-center gap-2 mb-8 hover:opacity-80 transition-opacity">
            <div className="w-10 h-10 rounded-xl bg-blue-600/20 flex items-center justify-center border border-blue-500/30">
              <Hexagon className="w-6 h-6 text-blue-500" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
              BirthHub360
            </span>
          </Link>
          <h2 className="text-base font-semibold leading-7 text-blue-500">Pricing</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Scale your AI workforce
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-slate-300">
          Choose the perfect plan to automate your workflows, analyze data, and drive growth. Simple, transparent pricing that grows with you.
        </p>

        <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={classNames(
                tier.mostPopular ? 'ring-2 ring-blue-500 bg-[#111827]' : 'ring-1 ring-slate-800 bg-[#0A0F1C]',
                'rounded-3xl p-8 xl:p-10 relative'
              )}
            >
              {tier.mostPopular ? (
                <div className="absolute top-0 right-6 -translate-y-1/2">
                   <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-500/10 px-3 py-1 text-sm font-semibold leading-6 text-blue-400 ring-1 ring-inset ring-blue-500/20 shadow-sm">
                      <Zap className="h-4 w-4" /> Most popular
                   </span>
                </div>
              ) : null}
              <div className="flex items-center justify-between gap-x-4">
                <h3
                  id={tier.id}
                  className={classNames(
                    tier.mostPopular ? 'text-blue-400' : 'text-white',
                    'text-lg font-semibold leading-8'
                  )}
                >
                  {tier.name}
                </h3>
              </div>
              <p className="mt-4 text-sm leading-6 text-slate-400">{tier.description}</p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight text-white">{tier.priceMonthly}</span>
                {tier.priceMonthly !== 'Custom' && <span className="text-sm font-semibold leading-6 text-slate-400">/month</span>}
              </p>
              <Link
                href={tier.href}
                aria-describedby={tier.id}
                className={classNames(
                  tier.mostPopular
                    ? 'bg-blue-600 text-white shadow-sm hover:bg-blue-500'
                    : 'bg-white/10 text-white hover:bg-white/20',
                  'mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors'
                )}
              >
                {tier.priceMonthly === 'Custom' ? 'Contact sales' : 'Get started today'}
              </Link>
              <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-slate-300">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <Check className="h-6 w-5 flex-none text-blue-500" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
