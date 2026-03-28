import React from 'react';
import Link from 'next/link';

export default function RegisterPage() {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white mb-2">Create an Account</h2>
        <p className="text-sm text-slate-400">Deploy your first AI agent today</p>
      </div>

      <form className="space-y-6" action="#" method="POST">
        <div>
          <label htmlFor="company" className="block text-sm font-medium leading-6 text-slate-300">
            Company Name
          </label>
          <div className="mt-2">
            <input
              id="company"
              name="company"
              type="text"
              required
              className="block w-full rounded-md border-0 bg-[#0A0F1C] py-2 px-3 text-white shadow-sm ring-1 ring-inset ring-slate-700 placeholder:text-slate-500 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6 transition-all"
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium leading-6 text-slate-300">
            Work Email address
          </label>
          <div className="mt-2">
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="block w-full rounded-md border-0 bg-[#0A0F1C] py-2 px-3 text-white shadow-sm ring-1 ring-inset ring-slate-700 placeholder:text-slate-500 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6 transition-all"
            />
          </div>
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium leading-6 text-slate-300">
            Password
          </label>
          <div className="mt-2">
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="new-password"
              required
              className="block w-full rounded-md border-0 bg-[#0A0F1C] py-2 px-3 text-white shadow-sm ring-1 ring-inset ring-slate-700 placeholder:text-slate-500 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6 transition-all"
            />
          </div>
        </div>

        <div>
          <Link href="/dashboard" passHref>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors"
            >
              Start Free Trial
            </button>
          </Link>
        </div>
      </form>

      <p className="mt-10 text-center text-sm text-slate-400">
        Already have an account?{' '}
        <Link href="/login" className="font-semibold leading-6 text-blue-500 hover:text-blue-400">
          Sign in here
        </Link>
      </p>
    </div>
  );
}
