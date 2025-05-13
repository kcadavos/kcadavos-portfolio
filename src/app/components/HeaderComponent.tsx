import { IconDefinition, faAward, faEnvelope, faFolderClosed, faUser } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
type LinkItem = {
  name: string
  href: string
  icon: IconDefinition
  hoverColor: string 
}
const links: LinkItem[] = [
  { name: 'About', href: '#aboutme',icon:faUser, hoverColor:'hover:text-blue-500' },
  { name: 'Project', href: '#project',icon:faFolderClosed, hoverColor:'hover:text-teal-400' },
  { name: 'Achievement', href: '#achievement',icon:faAward,hoverColor:'hover:text-[#547EFF]' },
  { name: 'Connect', href: '#contact',icon:faEnvelope, hoverColor:'hover:text-[#ff9ef7]' },
]
const stats = [
  { name: 'Years of Tech Industry Experience', value: '10' },
  { name: 'Hrs of Project-based Application Development Training', value: '1000+' },
  { 
    name: (
      <>
        Place Hackathon  Winner
      </>
    ), 
    value: '3rd' 
  },

  { name: 'Lines of Code Written on Full-Stack Personal Project', value: '25000+' },
]

export default function HeaderComponent() {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
      <img
        alt=""
         src ="../assets/computer01.jpg"
        className="absolute   inset-0 -z-10 size-full object-cover object-right md:object-center"
      />
      <div
        aria-hidden="true"
        className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="aspect-1097/845 w-[68.5625rem] bg-linear-to-tr from-[#ff4694] to-[#776fff] opacity-20"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="aspect-1097/845 w-[68.5625rem] bg-linear-to-tr from-[#ff4694] to-[#776fff] opacity-20"
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl">Karen Cadavos</h2>
          <p className="mt-8 text-lg font-medium text-pretty text-gray-300 sm:text-xl/8">
          UI/UX obsessed.  Front-end inclined. Back-end reliable. Full-stack capable.
          </p>
          <p className="mt-1 text-medium font-medium text-pretty text-gray-400 sm:text-l/8">
          After a decade of breaking things as a test engineer, I am now building thoughtful, user-centric web apps from scratch.
          </p>
        </div>
        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base/7 font-semibold text-white sm:grid-cols-2 md:flex lg:gap-x-10">
            {links.map((link) => (
              <a key={link.name} href={link.href} 
              className={`flex items-center gap-2 transition-colors duration-200 ${link.hoverColor || ''}`}>
                {link.name} <span aria-hidden="true"><FontAwesomeIcon icon={link.icon}/></span>
              </a>
            ))}
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-6 items-start">
            {stats.map((stat,index) => (
              <div key={index} className="flex flex-col-reverse gap-1 ">
                <div  className=" text-xl text-blue-200">{stat.name}</div>
                <div className=" text-4xl font-semibold tracking-tight text-white">{stat.value}</div>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
