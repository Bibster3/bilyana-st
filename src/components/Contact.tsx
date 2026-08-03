import React, { useState } from 'react'
import emailjs from '@emailjs/browser'

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    title: '',
    message: '',
  })

  const [status, setStatus] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const isEmailValid = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!isEmailValid(formData.email)) {
      setStatus('Please enter a valid email address.')
      return
    }

    setIsLoading(true)
    setStatus('Sending...')

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    if (!serviceId || !templateId || !publicKey) {
      console.error('Missing EmailJS environment variables.')
      setStatus('❌ Configuration error. Please contact support.')
      setIsLoading(false)
      return
    }

    emailjs
      .send(serviceId, templateId, formData, publicKey)
      .then(
        () => {
          setStatus('✅ Message sent successfully!')
          setFormData({ name: '', email: '', title: '', message: '' })
        },
        (err: any) => {
          console.error('❌ EmailJS error:', err)
          setStatus('❌ Failed to send message. Please try again.')
        }
      )
      .finally(() => {
        setIsLoading(false)
      })
  }

  return (
    <section id="contact" className="bg-gray-900 text-white py-16 px-4">
      <h2 className="text-4xl font-bold text-center mb-4 text-white">
        Let’s talk <span className="text-pink-400">product</span>
      </h2>
      <p className="text-center text-gray-300 max-w-2xl mx-auto mb-8">
        I’m interested in opportunities where I can contribute to product
        strategy, roadmap planning, and delivery with a strong user focus.
      </p>
      <form onSubmit={handleSubmit} className="space-y-6">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 rounded bg-gray-800 border border-pink-500"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 rounded bg-gray-800 border border-pink-500"
        />
        <input
          type="text"
          name="title"
          placeholder="Role or Company"
          value={formData.title}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 rounded bg-gray-800 border border-pink-500"
        />
        <textarea
          name="message"
          rows={5}
          placeholder="Tell me about the team, product, or opportunity."
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 rounded bg-gray-800 border border-pink-500"
        />
        <button
          type="submit"
          disabled={isLoading}
          className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-6 rounded disabled:bg-gray-600 disabled:cursor-not-allowed"
        >
          {isLoading ? 'Sending...' : 'Send Message'}
        </button>
        {status && <p className="mt-2 text-center text-pink-300">{status}</p>}
      </form>
    </section>
  )
}

export default Contact
