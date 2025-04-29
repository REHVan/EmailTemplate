'use client'

import { useState } from 'react'

export default function LinkedInTemplates() {
  const [formData, setFormData] = useState({
    templateType: 'referral',
    recipientName: '',
    companyName: '',
    position: '',
    connectionType: 'existing',
    experience: '',
    skills: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement API call to ChatGPT
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Generate LinkedIn Messages</h1>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="templateType" className="block text-sm font-medium text-gray-700">
            Message Type
          </label>
          <select
            id="templateType"
            name="templateType"
            value={formData.templateType}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
          >
            <option value="referral">Referral Request</option>
            <option value="networking">Networking</option>
            <option value="job">Job Application</option>
          </select>
        </div>

        <div>
          <label htmlFor="connectionType" className="block text-sm font-medium text-gray-700">
            Connection Type
          </label>
          <select
            id="connectionType"
            name="connectionType"
            value={formData.connectionType}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
          >
            <option value="existing">Existing Connection</option>
            <option value="new">New Connection</option>
          </select>
        </div>

        <div>
          <label htmlFor="recipientName" className="block text-sm font-medium text-gray-700">
            Recipient Name
          </label>
          <input
            type="text"
            id="recipientName"
            name="recipientName"
            value={formData.recipientName}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
            placeholder="John Doe"
          />
        </div>

        <div>
          <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">
            Company Name
          </label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
            placeholder="Tech Corp"
          />
        </div>

        <div>
          <label htmlFor="position" className="block text-sm font-medium text-gray-700">
            Position
          </label>
          <input
            type="text"
            id="position"
            name="position"
            value={formData.position}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
            placeholder="Senior Software Engineer"
          />
        </div>

        <div>
          <label htmlFor="experience" className="block text-sm font-medium text-gray-700">
            Experience (years)
          </label>
          <input
            type="text"
            id="experience"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
            placeholder="5"
          />
        </div>

        <div>
          <label htmlFor="skills" className="block text-sm font-medium text-gray-700">
            Key Skills
          </label>
          <textarea
            id="skills"
            name="skills"
            value={formData.skills}
            onChange={handleChange}
            rows={3}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
            placeholder="React, Node.js, TypeScript, AWS"
          />
        </div>

        <div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
          >
            Generate Message
          </button>
        </div>
      </form>
    </div>
  )
} 