import { useNavigate } from "react-router-dom"

export default function AboutCard() {
  const navigate = useNavigate()

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-lg">
      {/* Header */}
      <div className="bg-purple-800 p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="../assets/image.png" alt="Profile" className="w-10 h-10 rounded-full" />
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

      {/* Content */}
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">About Us</h2>
        <img src="/src/assets/image.png" alt="About Us" className="w-full h-auto rounded-lg mb-4" />
        <p className="text-gray-600 mb-6">
          We are a team of dedicated professionals driven by creativity, innovation, and a passion for exceptional
          design. With years of expertise in mobile application and website design, we specialize in transforming ideas
          into captivating digital experiences that seamlessly combine functionality and aesthetics.
        </p>
        <button
          onClick={() => navigate("/contact")}
          className="w-full bg-purple-800 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors"
        >
          Contact
        </button>
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

