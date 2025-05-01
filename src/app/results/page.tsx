'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { ClipboardDocumentIcon } from '@heroicons/react/24/outline'

export default function Results() {
  const router = useRouter()
  const [template, setTemplate] = useState('')
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    const generatedTemplate = sessionStorage.getItem('generatedTemplate')
    if (!generatedTemplate) {
      router.push('/')
      return
    }
    setTemplate(generatedTemplate)
  }, [router])

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(template)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy text:', err)
    }
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Generated Template</h1>
        <button
          onClick={handleCopy}
          className="btn-primary flex items-center gap-2"
        >
          <ClipboardDocumentIcon className="h-5 w-5" />
          {copied ? 'Copied!' : 'Copy to Clipboard'}
        </button>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm">
        <pre className="whitespace-pre-wrap font-sans text-gray-800">
          {template}
        </pre>
      </div>

      <div className="mt-8 flex justify-center gap-4">
        <button
          onClick={() => router.push('/email-templates')}
          className="btn-primary"
        >
          Generate Another Email
        </button>
        <button
          onClick={() => router.push('/linkedin-templates')}
          className="btn-primary bg-white text-primary-600 border border-primary-600 hover:bg-primary-50"
        >
          Generate LinkedIn Message
        </button>
      </div>
    </div>
  )
} 