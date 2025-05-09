'use client'
import React from 'react'
import { useForm, ValidationError } from '@formspree/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
   
    const [state, handleSubmit] = useForm("movdlwaj")
    if (state.succeeded) {
      return (
        <section className="bg-gray-900 py-24 text-white">
          <div className="text-center px-6">
            <h2 className="text-4xl font-semibold mb-4">Thanks for reaching out!</h2>
            <p className="text-lg text-gray-300">I will get back to you soon.</p>
          </div>
        </section>
      )
    }
  
    return (
      <section id="contact" className="overflow-hidden bg-gray-900 py-24 sm:py-32 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-16 gap-y-16 sm:gap-y-20 lg:max-w-none lg:grid-cols-2">
            
            {/* Left Column - Info & Links */}
            <div className="lg:pt-4">
              <div className="lg:max-w-lg">
                <h2 className="text-base font-semibold text-[#F7B5E1]">Get In Touch</h2>
                <p className="mt-2 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                  Connect With Me
                </p>
                
  
                <ul className="mt-6 space-y-4 text-lg text-gray-300 ps-10">
                  <li ><div className='flex gap-2 items-center'>
                  <FontAwesomeIcon icon={faGithub} style={{color: "#ff9ef7",fontSize:'20px'}} /> 
                  <a
                      href="https://github.com/kcadavos"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#F7B5E1] font-medium"
                    > 
                      GitHub 
                    </a>
                  </div>
                    
                  </li>
                  <li>
                    <div className='flex gap-2 items-center'>
                    <FontAwesomeIcon icon={faLinkedin} style={{color: "#ff9ef7",fontSize:'20px'}} /> 
                    <a
                      href="https://www.linkedin.com/in/kcadavos/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#F7B5E1] font-medium"
                    >
                      LinkedIn
                    </a>
                    </div>
                   
                  </li>
                  <li>
    <div className='flex gap-2 items-center'>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#ff9ef7]" viewBox="0 0 20 20" fill="currentColor">
        <path d="M9 2a1 1 0 00-1 1v1H5a2 2 0 00-2 2v9a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2h-3V3a1 1 0 00-1-1H9zM8 4v1h4V4H8z" />
      </svg>
      <a
        href="Files/KarenCadavos_Resume.pdf" // or your hosted resume URL
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-[#F7B5E1] font-medium"
      >
        View Resume
      </a>
    </div>
  </li>
                </ul>
  
                <p className="mt-10 text-sm text-gray-500">
                  I’ll try to respond within 24–48 hours. Looking forward to connecting!
                </p>
              </div>
            </div>
  
            {/* Right Column - Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-6 lg:pt-4">
              <h3 className="text-base font-semibold text-[#F7B5E1]">Send Me a Message</h3>
  
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  className="mt-1 block w-full rounded-md border border-gray-700 bg-gray-800 px-4 py-2 shadow-sm focus:border-[#FF81C8] focus:ring-[#FF81C8] text-white"
                  placeholder="Your name"
                />
                <ValidationError prefix="Name" field="name" errors={state.errors} />
              </div>
  
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  className="mt-1 block w-full rounded-md border border-gray-700 bg-gray-800 px-4 py-2 shadow-sm focus:border-[#FF81C8] focus:ring-[#FF81C8] text-white"
                  placeholder="you@example.com"
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
              </div>
  
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border border-gray-700 bg-gray-800 px-4 py-2 shadow-sm focus:border-[#FF81C8] focus:ring-[#FF81C8] text-white"
                  placeholder="Write your message here..."
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </div>
  
              <button
                type="submit"
                disabled={state.submitting}
                className="inline-flex items-center rounded-md bg-[#FF81C8] px-6 py-2 text-white font-semibold hover:bg-[#FF98D2] transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    )
    }

export default Contact