import React, { lazy, Suspense, useState, useEffect, useRef } from 'react'
import AboutMe from './AboutMe.tsx'
import Footer from './ui/Footer.tsx'
import NavLinks from './ui/Navlinks.jsx'
import AnimatedLogo from './ui/AnimatedLogo.jsx'
import ResumeDownloadButton from './ResumeDownloadButton.tsx'

const Portfolio = lazy(() => import('./Portfolio.jsx'))
const Contact = lazy(() => import('./Contact.tsx'))

const Page = () => {
  const [showPortfolio, setShowPortfolio] = useState(false)
  const [showContact, setShowContact] = useState(false)
  const portfolioRef = useRef(null)
  const contactRef = useRef(null)

  // Portfolio observer
  useEffect(() => {
    const createObserver = (ref, setState) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setState(true)
            observer.disconnect()
          }
        },
        { rootMargin: '300px', threshold: 0.1 }
      )

      if (ref.current) {
        observer.observe(ref.current)
      }
      return observer
    }

    const portfolioObserver = createObserver(portfolioRef, setShowPortfolio)
    const contactObserver = createObserver(contactRef, setShowContact)

    return () => {
      portfolioObserver.disconnect()
      contactObserver.disconnect()
    }
  }, [])

  return (
    <div className="min-h-screen bg-gray-900 text-white justify-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <main>
        <Suspense
          fallback={<div className="min-h-[200px]" aria-hidden="true" />}
        >
        </Suspense>
        <div className="relative z-50">
          <NavLinks />
        </div>

        {/* About Section */}
        <section id="about" className="pt-0 pb-20">
          {' '}
          {/* Reduced pt-62 to pt-32 for better spacing */}
          <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
            {/* Text Content */}
            <div className="flex-1">
              <AboutMe />
            </div>

            {/* Animated Logo on the Right */}
            <div className="hidden sm:flex shrink-0 flex-col items-center justify-center gap-6">
              <div className="flex flex-col items-center">
                <AnimatedLogo />
              </div>

              <div className="mt-4">
                <ResumeDownloadButton />
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="py-5" ref={portfolioRef}>
          <div className="max-w-6xl mx-auto px-4">
            <Suspense
              fallback={
                <div className="min-h-[500px] text-center py-12">
                  Loading portfolio...
                </div>
              }
            >
              {showPortfolio ? (
                <>
                  <Portfolio />
                </>
              ) : (
                <div style={{ height: '500px' }} aria-hidden="true" />
              )}
            </Suspense>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20" ref={contactRef}>
          <div className="max-w-6xl mx-auto px-4">
            <Suspense
              fallback={
                <div className="min-h-[400px] text-center py-12">
                  Loading contact...
                </div>
              }
            >
              {showContact ? (
                <Contact />
              ) : (
                <div style={{ height: '400px' }} aria-hidden="true" />
              )}
            </Suspense>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default Page
