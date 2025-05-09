import React from 'react'

const features = [
    {
      name: 'Barcode & Image Scanner',
      description:
        'Detects home appliances to assess water usage and efficiency scores.',
      // icon: CloudArrowUpIcon,
    },
    {
      name: 'AI Chatbot',
      description: 'Conversational assistant offering upgrade tips and answers.',
      // icon: LockClosedIcon,
    },
    {
      name: 'Savings Dashboard',
      description: 'Real-time visualizations of potential water + cost savings.',
      // icon: ServerIcon,
    },
    {
      name: 'Rebate Engine',
      description: 'Personalized upgrade plans with incentives based on budget.',
      // icon: ServerIcon,
    },
  ]

const Hackaton = () => {
  return (
    <section id="achievement" className="py-24 px-6 md:px-20 bg-white text-[#0D1117]" >
    <div className="grid md:grid-cols-2 gap-12 ">
      {/* Image Grid */}
      <div className="grid grid-cols-2 gap-4">
        <img
          src="../assets/aqualogic1.png"
          alt="Screen1 - Register"
          className="rounded-xlobject-cover"
        />
        <img
          src="../assets/aqualogic2.png"
          alt="Screen 2- Dashboard"
          className="rounded-xlobject-cover"
        />
        <img
          src="../assets/aqualogic3.png"
          alt="Screen 3 -Upgrades Calculator"
          className="rounded-xl object-cover"
        />
        <img
          src="../assets/aqualogic4.png"
          alt="Screen 4- AI chatbot"
          className="rounded-xl object-cover"
        />
      </div>

      <div className="flex items-center  lg:pr-8">
  <div>
    <h2 className="text-base font-semibold text-[#547EFF]">Achievement </h2>
    <p className="mt-2 text-4xl font-semibold tracking-tight text-black sm:text-5xl ">
      3rd Place Hackaton winner
    </p>

    <div className="lg:max-w-lg">
      <p className="mt-6 text-lg text-gray-700">
        I joined <strong>Team Liquid Logic</strong> to compete in the <em>San Joaquin County H20 Hackathon</em>, where we tackled a challenge focused on sustainable water usage.
        Our goal was to design a solution that helped households upgrade to more efficient appliances—within their budget and with clarity.
      </p>

      <p className="text-gray-700 mt-6 text-lg">
        Over a fast-paced weekend, I participated in the <strong>ideation</strong>, <strong>feature design</strong>, and <strong>UI prototyping in Figma</strong>.
        We built a web app prototype that blended AI-driven guidance with real-time data to empower users.
      </p>
    </div>

    <div className="text-gray-700 mt-10 max-w-xl space-y-8 text-base lg:max-w-none">
      <p className="font-semibold mb-2">Our Idea:</p>

      <dl className="mt-10 max-w-xl space-y-8 text-base text-black-400 lg:max-w-none">
        {features.map((feature) => (
          <div key={feature.name} className="relative pl-9">
            <dt className="inline font-semibold text-black">
              {feature.name}
            </dt>{' '}
            <dd className="inline">{feature.description}</dd>
          </div>
        ))}
      </dl>
    </div>

    <p className="text-lg text-gray-700 pt-10">
      Out of <strong>25+ teams</strong>, we proudly took home <span className="font-semibold">3rd Place</span>.
      It was a proud moment that reinforced my passion for meaningful, practical tech.
    </p>
  </div>
</div>
    </div>
  </section>
  )
}

export default Hackaton