export default function ContactForm() {
    return (
      <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-lg">
        {/* Header */}
        <div className="bg-purple-800 p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/avatar-placeholder.png" alt="Profile" className="w-10 h-10 rounded-full" />
            <span className="text-white">Hello, Welcome 👋</span>
          </div>
          <div className="text-white">
            <span className="sr-only">Notifications</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
          </div>
        </div>
  
        {/* Contact Info */}
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">Contact us</h2>
  
          <div className="space-y-4 mb-6">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span>workforeign@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span>+44 (0) XXXX XXX XXX</span>
            </div>
          </div>
  
          {/* Contact Form */}
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                placeholder="Enter your query..."
              ></textarea>
            </div>
          </form>
        </div>
  
       {/* Navigation */}
<div className="flex justify-around items-center border-t p-4 bg-white shadow-md">
  {/* Home */}
  <button className="flex flex-col items-center text-gray-600">
    <span className="sr-only">Home</span>
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
    <span className="text-xs">Home</span>
  </button>

  {/* Compliance */}
  <button className="flex flex-col items-center text-gray-600">
    <span className="sr-only">Compliance</span>
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7 16h10M7 20h10M5 8h14M12 4v4" />
    </svg>
    <span className="text-xs">Compliance</span>
  </button>

  {/* Eligibility */}
  <button className="flex flex-col items-center text-gray-600">
    <span className="sr-only">Eligibility</span>
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7M7 10h10" />
    </svg>
    <span className="text-xs">Eligibility</span>
  </button>

  {/* Resources */}
  <button className="flex flex-col items-center text-gray-600">
    <span className="sr-only">Resources</span>
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h18M3 10h18M3 15h18M3 20h18" />
    </svg>
    <span className="text-xs">Resources</span>
  </button>

  {/* Reminder */}
  <button className="flex flex-col items-center text-gray-600">
    <span className="sr-only">Reminder</span>
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3M5 4h14M5 8h14M5 12h14M5 16h14" />
    </svg>
    <span className="text-xs">Reminder</span>
  </button>
</div>
      </div>
    )
  }
  
  