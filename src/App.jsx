import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import AboutCard from "./components/AboutCard"
import ContactForm from "./components/Contact"


function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 p-4">
        <Routes>
          <Route path="/" element={<AboutCard/>} />
          <Route path="/contact" element={<ContactForm/>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
