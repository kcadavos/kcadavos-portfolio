// import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'

const features = [
  {
    name: 'The Challenge',
    description:
      'Planning group travel is chaotic — differing preferences, disjointed tools, and endless back-and-forth.',
    // icon: CloudArrowUpIcon,
  },
  {
    name: 'The Solution',
    description: 'Itinera.IO streamlines group trip planning by letting friends vote on destinations and activities. It builds an itinerary everyone agrees on — democratically and effortlessly.',
    // icon: LockClosedIcon,
  },
  {
    name: 'Tech Stack',
    description: 'React, Next.js, Tailwind CSS, SQL , Rest APIs',
    // icon: ServerIcon,
  },
  {
    name: 'Under Construction',
    description: 'wwww.itineraio.vercel.app',
    // icon: ServerIcon,
  },
]

export default function ItineraIO() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pt-4 lg:pr-8">
            <div className="lg:max-w-lg">
              <h2 className="text-base/7 font-semibold text-teal-500">Itinera.io</h2>
              <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
               Votes In, Adventure Out.
              </p>
              <p className="mt-6 text-lg/8 text-gray-600">
              Group travel planner that builds itineraries based on votes
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      {/* <feature.icon aria-hidden="true" className="absolute top-1 left-1 size-5 text-indigo-600" /> */}
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            alt="Product screenshot"
            src="../assets/itinera_ss.png"
            width={2432}
            height={1442}
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
          />
        </div>
      </div>
    </div>
  )
}
