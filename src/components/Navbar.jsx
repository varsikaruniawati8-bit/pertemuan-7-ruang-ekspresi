import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-sm fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
        
        <div className="flex items-center gap-2">
          <img src="/assets/Logonav.png" className="w-8" />
          <span className="font-semibold text-gray-700">ruang ekspresi</span>
        </div>
  
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
          <a href="#home" className="hover:text-blue-600">Home</a>
          <a href="#about" className="hover:text-blue-600">About</a>
          <a href="#program" className="hover:text-blue-600">Program</a>
          <a href="#project" className="hover:text-blue-600">Project</a>
          <a href="#testimonials" className="hover:text-blue-600">Testimonials</a>
          <a href="#contact" className="hover:text-blue-600">Contact</a>
        </div>

        <button
          className="md:hidden text-3xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-6 py-4 flex flex-col gap-4 text-gray-700 text-sm font-medium">
          <a href="#home" className="hover:text-blue-600" onClick={() => setIsOpen(false)}>Home</a>
          <a href="#about" className="hover:text-blue-600" onClick={() => setIsOpen(false)}>About</a>
          <a href="#program" className="hover:text-blue-600" onClick={() => setIsOpen(false)}>Program</a>
          <a href="#project" className="hover:text-blue-600" onClick={() => setIsOpen(false)}>Project</a>
          <a href="#testimonials" className="hover:text-blue-600" onClick={() => setIsOpen(false)}>Testimonials</a>
          <a href="#contact" className="hover:text-blue-600" onClick={() => setIsOpen(false)}>Contact</a>
        </div>
      )}
    </nav>
  );
}


