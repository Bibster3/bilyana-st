import React from 'react'

export default function Navinks() {
  const basePath = import.meta.env.BASE_URL

  return (
    <>
      <nav
        className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-gray-900/95 px-4 py-3 text-white shadow-lg shadow-black/10 backdrop-blur-md"
        aria-label="Main navigation"
        data-site-navigation
      >
        <div className="mx-auto flex max-w-[1120px] flex-wrap items-center justify-start gap-x-4 gap-y-2 text-sm sm:gap-x-6 sm:text-base">
          <a
            href={`${basePath}#about`}
            className="nav-link rounded-sm transition-colors hover:text-pink-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-400"
          >
            Home
          </a>
          <a
            href={`${basePath}#portfolio`}
            className="nav-link rounded-sm transition-colors hover:text-pink-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-400"
          >
            Product Management
          </a>
          <a
            href={`${basePath}games/`}
            className="nav-link rounded-sm transition-colors hover:text-pink-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-400"
          >
            Game Dev
          </a>
          <a
            href={`${basePath}#contact`}
            className="nav-link rounded-sm transition-colors hover:text-pink-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-400"
          >
            Contact
          </a>
        </div>
      </nav>
      <div className="h-[76px] sm:h-14" aria-hidden="true" />
    </>
  )
}
