import React from 'react'

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

  ]
const ItineraIODark = () => {
  return (
<div id="project" className="overflow-hidden bg-black py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="flex items-center lg:pr-8">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold text-teal-400">Itinera.io</h2>
              <p className="mt-2 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Votes In, Adventure Out.
              </p>
              <p className="mt-6 text-lg text-gray-300">
                Group travel planner that builds itineraries based on votes
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base text-gray-400 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-white">
                      {/* <feature.icon aria-hidden="true" className="absolute top-1 left-1 size-5 text-teal-400" /> */}
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
                           <div className="relative pl-9">
                    <dt className="inline font-semibold text-white">
                     Under Construction
                    </dt>{' '}
                    <dd className="inline"><a href='https://itineraio.vercel.app' target='_blank'>https://itineraio.vercel.app </a></dd>
                  </div>
              </dl>

            </div>
          </div>
          {/* <div className='flex items-center'> */}
          {/* <img
            alt="Itinera screenshot"
            src="../assets/itinera_ss.png"
            width={2432}
            height={1442}
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-white/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
         /> */}
          {/* <div className="flex items-center">.
         <img
  alt="Itinera screenshot"
  src="/assets/itinera_ss.png"
  className="w-full h-auto rounded-xl shadow-xl ring-1 ring-white/10"
/></div> */}
          {/* </div> */}

          {/* Image Gallery Section */}
          <div className="flex flex-col gap-6">
            {/* Top horizontal image */}
            <img
              src="/assets/itinera_ss.png"
              alt="Horizontal Itinerary Screenshot"
              className="w-full h-auto rounded-xl   ring-white/10"
            />

            {/* Bottom two vertical images side-by-side */}
            <div className="grid grid-cols-2 gap-4">
              <img
                src="/assets/itineramobile1_ss.png"
                alt="Mobile mockup 1"
                className="w-full h-auto rounded-xl "
              />
              <img
                src="/assets/itineramobile2_ss.png"
                alt="Mobile mockup 2"
                className="w-full h-auto rounded-xl "
              />
            </div>
          </div>
         
        </div>
      </div>
    </div>
  )
}

export default ItineraIODark