import Link from 'next/link'

export default function Home() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Professional Templates for Your Career Growth
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Generate customized email and LinkedIn templates to help recruiters find jobs and software engineers get referrals.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/email-templates"
            className="rounded-md bg-primary-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
          >
            Get Started
          </Link>
          <Link href="/linkedin-templates" className="text-sm font-semibold leading-6 text-gray-900">
            Learn more <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>

      {/* Feature Section */}
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-gray-900/5">
          <h3 className="text-lg font-semibold leading-6 text-gray-900">Email Templates</h3>
          <p className="mt-2 text-sm text-gray-600">
            Professional email templates for recruiters and job seekers. Customize them to your needs and increase your response rates.
          </p>
        </div>
        <div className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-gray-900/5">
          <h3 className="text-lg font-semibold leading-6 text-gray-900">LinkedIn Messages</h3>
          <p className="mt-2 text-sm text-gray-600">
            Generate effective LinkedIn messages for networking, job applications, and referral requests.
          </p>
        </div>
        <div className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-gray-900/5">
          <h3 className="text-lg font-semibold leading-6 text-gray-900">AI-Powered</h3>
          <p className="mt-2 text-sm text-gray-600">
            Our templates are generated using advanced AI to ensure they are professional, personalized, and effective.
          </p>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary-50 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900">Ready to Get Started?</h2>
        <p className="mt-4 text-gray-600">
          Choose your template type and start generating professional messages today.
        </p>
        <div className="mt-6 flex justify-center gap-x-4">
          <Link
            href="/email-templates"
            className="rounded-md bg-primary-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-500"
          >
            Email Templates
          </Link>
          <Link
            href="/linkedin-templates"
            className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-primary-600 shadow-sm ring-1 ring-inset ring-primary-300 hover:bg-primary-50"
          >
            LinkedIn Templates
          </Link>
        </div>
      </div>
    </div>
  )
} 