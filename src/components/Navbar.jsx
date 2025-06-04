import React from 'react'

export default function Navbar() {
  return (
    <div className="flex justify-between items-center p-4 bg-[#E8E1DC]">
      <h1 className="text-2xl font-bold">Peak Oasis</h1>
      <a
        href="https://forms.gle/your-google-form-link"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
      >
        Book Now
      </a>
    </div>
  )
}