import React, { lazy, Suspense, useState, useEffect, useRef } from 'react'
import AboutMe from './AboutMe.tsx'
import Footer from './ui/Footer.tsx'
import NavLinks from './ui/NavLinks.jsx'
import AnimatedLogo from './ui/AnimatedLogo.jsx'

const Portfolio = lazy(() => import('./Portfolio.jsx'))
const Contact = lazy(() => import('./Contact.tsx'))
const Spotlight = lazy(() => import('./ui/Spotlight.tsx'))

const Page = () => {
  const [showPortfolio, setShowPortfolio] = useState(false)
  const [showContact, setShowContact] = useState(false)
  const portfolioRef = useRef(null)
  const contactRef = useRef(null)

  // Portfolio observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowPortfolio(true)
          observer.disconnect()
        }
      },
      { rootMargin: '300px', threshold: 0.1 }
    )
    if (portfolioRef.current) observer.observe(portfolioRef.current)
    return () => observer.disconnect()
  }, [])

  // Contact observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowContact(true)
          observer.disconnect()
        }
      },
      { rootMargin: '300px', threshold: 0.1 }
    )
    if (contactRef.current) observer.observe(contactRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <main>
        <Suspense
          fallback={<div className="min-h-[200px]" aria-hidden="true" />}
        >
          <Spotlight />
        </Suspense>
        <div className="relative z-50">
          <NavLinks />
        </div>

        <div className="hidden sm:flex relative justify-center items-center mt-10 sm:mt-16">
          <AnimatedLogo />
        </div>

        {/* About Section */}
        <section id="about" className="py-20">
          <div className="max-w-6xl mx-auto px-4">
            <AboutMe />
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="py-20" ref={portfolioRef}>
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
    </>
  )
}

export default Page
