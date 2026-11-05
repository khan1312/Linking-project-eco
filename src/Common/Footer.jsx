import React from 'react'

export default function Footer() {
  return (
    <div>
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-6">
          <p className="text-center text-gray-400">
            &copy; {new Date().getFullYear()} EcoLink. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
