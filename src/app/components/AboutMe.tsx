// components/AboutMe.tsx

export default function AboutMe() {
    return (
      <div id="aboutme" className="overflow-hidden bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto place-items-center grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <img
              alt="Karen Profile Photo"
              src="../assets/aboutme.png" 
           
             className="  max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 md:-ml-4 lg:-ml-0"
            />
            <div className="lg:pt-4 lg:pr-8">
              <div className="lg:max-w-lg">
                <h2 className="text-base font-semibold text-blue-500"> About Me</h2>
                <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                  The Builder Behind the Code
                </p>
                <p className="mt-6 text-lg text-gray-600">
                  Hey, I’m <strong className="text-gray-900">Karen</strong> — a former QA engineer turned full-stack developer. 
                  After over a decade spent breaking things to make them better, I now build web apps that are functional, intuitive, 
                  and beautiful from the start. I thrive at the intersection of empathy and engineering: where user experience meets 
                  system logic.
                </p>
                <p className="mt-6 text-lg text-gray-600">
                  I specialize in front-end development with an eye for clean, accessible design — but I also enjoy digging into APIs, 
                  databases, and backend flows. Whether I’m sketching wireframes in Figma or writing scalable React components, I care 
                  deeply about creating seamless experiences that make users feel considered.
                </p>
                <p className="mt-6 text-lg text-gray-600">
                  I’m also proud to be a woman in tech, passionate about inclusive design, and always looking for my next challenge.
                </p>
              </div>
            </div>
           
          </div>
        </div>
      </div>
    );
  }