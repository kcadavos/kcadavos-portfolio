import React from 'react'

const Hackaton = () => {
  return (
    <section id="achievement" className="py-24 px-6 md:px-20 bg-white text-[#0D1117]" >
    <div className="grid md:grid-cols-2 gap-12 items-center">
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

      {/* Text Content */}
      <div>
        <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
          Achievement : <span className="text-[#547EFF]">Hackaton 3rd Place</span>
        </h2>

        <p className="mb-4 text-lg text-gray-700">
          I joined <strong>Team Liquid Logic</strong> to compete in the <em>San Joaquin County H20 Hackathon</em>, where we tackled a challenge focused on sustainable water usage.
          Our goal was to design a solution that helped households upgrade to more efficient appliances—within their budget and with clarity.
        </p>

        <p className="mb-4 text-lg text-gray-700">
          Over a fast-paced weekend, I participated in the <strong>ideation</strong>, <strong>feature design</strong>, 
          and <strong>UI prototyping in Figma</strong>. We built a  web app prototype that blended AI-driven guidance with real-time data to empower users.
        </p>

        <div className="mb-6 text-gray-700">
          <p className="font-semibold mb-2">Our Idea:</p>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Barcode & Image Scanner:</strong> Detects home appliances to assess water usage and efficiency scores.</li>
            <li><strong>Savings Dashboard:</strong> Real-time visualizations of potential water + cost savings.</li>
            <li><strong>Upgrade & Rebate Engine:</strong> Personalized upgrade plans with incentives based on budget.</li>
            <li><strong>AI Chatbot:</strong> Conversational assistant offering water saving tips and answers.</li>
          </ul>
        </div>

        <p className="text-lg text-gray-700">
          Out of <strong>25+ teams</strong>, we proudly took home <span className="font-semibold">3rd Place</span>. 
 It was a proud moment that reinforced my passion 
          for meaningful, practical tech.
        </p>
      </div>
    </div>
  </section>
  )
}

export default Hackaton