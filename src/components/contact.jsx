import React, { useState, useRef } from 'react'
import './styles.css'
import emailjs from '@emailjs/browser'

export default function ContactForm() {
  const formRef = useRef()
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [loading, setLoading] = useState(false)
  const handleChange = (e) => {
    const { target } = e
    const { name, value } = target

    setForm({
      ...form,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    emailjs
      .send(
        'valholl_contact_service',
        'valholl_contact_template',
        {
          from_name: form.name,
          to_name: 'surbhit thakur',
          from_email: form.email,
          to_email: 'surbhit.thakur@gmail.com',
          message: form.message,
        },
        'yzi-C5nwS667BQQNk'
      )
      .then(
        () => {
          setLoading(false)
          alert('Thank you, I will get back to you as soon as possible.')

          setForm({
            name: '',
            email: '',
            message: '',
          })
        },
        (error) => {
          setLoading(false)
          console.error(error)

          alert('Ahh, something went wrong. Please try again.')
        }
      )
  }

  return (
    <div className="contact-container  flex items-center justify-center relative">
      <section className="text-gray-700 border border-gray-400 border-solid rounded-3xl">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full">
            <div
              className="flex items-center justify-center sm:text-3xl text-2xl font-medium title-font mb-4 text-white"
              style={{
                fontFamily: 'Skranji, cursive',
              }}
            >
              <span className="ml-4">Query.Me</span>
            </div>
          </div>
          <p className="text-center text-white font-bold xs:text-xs md:text-lg mb-10">
            I will get back to you as soon as I can.
          </p>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="flex flex-wrap -m-2"
            >
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="leading-7 text-sm text-white"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm text-white"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="message"
                    className="leading-7 text-sm text-white"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button
                  type="submit"
                  className="flex bg-primary mx-auto text-white py-2 px-8 rounded-full text-lg"
                >
                  {loading ? 'sending' : 'query'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
