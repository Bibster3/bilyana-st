import React, { useRef, useEffect, useState } from 'react'

import ProjectCard from './ProjectCard'
import crayonStoryImage from '../assets/your-crayon-story.webp'
import candyForestImage from '../assets/candy-forest.webp'
import dutchShuffleboardImage from '../assets/dutch-shuffleboard.webp'
import friendscapeImage from '../assets/friendscape.webp'
import bestShopImage from '../assets/best-shop.webp'

import ImageModal from './ImageModal'

const Portfolio = () => {
  const projects = [
    {
      title: 'Your Crayon Story — Product Owner, Concept to Launch',
      caseStudy: {
        challenge:
          "Your Crayon Story needed to go from an idea — a personalized children's storytelling product — to a working, sellable platform, with no existing roadmap, requirements, or customer journey defined. I owned the product end to end: strategy, requirements, delivery, and go-to-market.",
        approach: [
          'Defined the product vision and built the initial roadmap, translating a broad concept into a prioritized backlog based on customer value, delivery effort, and business goals.',
          'Wrote product requirements and specifications for engineering, working directly with the development team on scope for APIs, authentication, payments, and third-party integrations.',
          'Designed the complete customer journey from landing page through payment and digital delivery, identifying and removing friction points along the way.',
          'Set pricing, positioning, and the monetization model, balancing customer willingness to pay against margin and delivery cost.',
          'Ran iterative improvement cycles — testing, gathering user feedback, and refining the backlog based on what customers actually did, not just what they said they wanted.',
          'Built the analytics and SEO strategy behind customer acquisition, so growth decisions were grounded in data rather than guesswork.',
        ],
        outcome:
          'Took the product from an undefined concept to a live, functioning platform with a defined customer journey, pricing model, and ongoing improvement process — currently in production and iterating based on real customer usage.',
      },
      imageUrl: crayonStoryImage,
      websiteUrl: 'https://www.yourcrayonstory.com/',
      imageLinkUrl: 'https://www.yourcrayonstory.com/',
      technologies: [
        'React',
        'TypeScript',
        'Tailwind CSS',
        'HTML',
        'Supabase',
        'GitHub',
        'Photoshop',
      ],
    },
    {
      title: 'Best Shop',
      description:
        'A responsive e-commerce experience shaped around clear user flows, conversion-focused UX, and polished interaction design.',
      imageUrl: bestShopImage,
      websiteUrl: 'https://bibster3.github.io/best-shop/',
      githubUrl: 'https://github.com/Bibster3/best-shop',
      technologies: ['JavaScript', 'SASS', 'HTML', 'GitHub'],
    },
    {
      title: 'CalorieMate',
      description:
        'A nutrition-tracking experience designed around usability, clear feedback, and everyday user habits in a modern web app.',
      websiteUrl: 'https://bibster3.github.io/CalorieMate/',
      iframeUrl: 'https://bibster3.github.io/CalorieMate/',
      githubUrl: 'https://github.com/Bibster3/CalorieMate',
      technologies: [
        'React',
        'TypeScript',
        'Tailwind CSS',
        'HTML',
        'CSS',
        'JavaScript',
        'Supabase',
        'GitHub',
        'Photoshop',
      ],
    },
    {
      title: 'WeatherApp',
      description:
        'A practical product experience focused on delivering timely information in a clear, user-friendly interface.',
      websiteUrl: 'https://bibster3.github.io/WeatherApp/',
      iframeUrl: 'https://bibster3.github.io/WeatherApp/',
      githubUrl: 'https://github.com/Bibster3/WeatherApp',
      technologies: [
        'React',
        'TypeScript',
        'Tailwind CSS',
        'HTML',
        'CSS',
        'JavaScript',
        'Supabase',
        'GitHub',
        'Photoshop',
      ],
    },
    {
      title: 'Candy Forest',
      description:
        'A game experience built with a strong emphasis on engagement, visual clarity, and enjoyable interaction design.',
      websiteUrl: 'https://bilyanas.itch.io/candy-forest',
      githubUrl: 'https://gitfront.io/r/Bibster/YAVvvmx6zVqW/CForest-SO/',
      imageUrl: candyForestImage,
      technologies: ['Unity', 'CSharp', 'WebGL', 'GitHub', 'Photoshop'],
    },
    {
      title: 'Dutch Shuffleboard',
      description:
        'A playful product experience with clearly structured game logic, smooth interaction, and a strong sense of flow.',
      websiteUrl: 'https://bilyanas.itch.io/dutch-shuffleboard-2',
      githubUrl:
        'https://gitfront.io/r/Bibster/iag86sqqZCam/Dutch-Shuffleboard/',
      imageUrl: dutchShuffleboardImage,
      technologies: [
        'Unity',
        'CSharp',
        'WebGL',
        'GitHub',
        'Photoshop',
        '3DSMax',
      ],
    },
    {
      title: 'Friendscape',
      description:
        'A puzzle experience designed to balance challenge, usability, and memorable interaction for players.',
      websiteUrl: 'https://bilyanas.itch.io/friendscape',
      githubUrl: 'https://gitfront.io/r/Bibster/i8YyuMAT465Z/Friendscape/',
      imageUrl: friendscapeImage,
      technologies: ['Unity', 'CSharp', 'WebGL', 'GitHub', 'Photoshop'],
    },
  ]

  const [visibleProjects, setVisibleProjects] = useState([])
  const projectRefs = useRef([])
  const [selectedImage, setSelectedImage] = useState(null)
  const [showOtherProjects, setShowOtherProjects] = useState(false)
  const featuredProject = projects[0]
  const otherProjects = projects.slice(1)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const projectIndex = Number(
              entry.target.getAttribute('data-index')
            )

            setVisibleProjects((previousProjects) =>
              previousProjects.includes(projectIndex)
                ? previousProjects
                : [...previousProjects, projectIndex]
            )
          }
        })
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    )

    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [showOtherProjects])

  const handleOtherProjectsToggle = (event) => {
    const isOpen = event.currentTarget.open
    setShowOtherProjects(isOpen)

    if (!isOpen) {
      setVisibleProjects((previousProjects) =>
        previousProjects.filter((projectIndex) => projectIndex === 0)
      )
    }
  }

  const renderProject = (project, index) => (
    <div
      key={project.title}
      ref={(ref) => (projectRefs.current[index] = ref)}
      data-index={index}
    >
      {visibleProjects.includes(index) && (
        <ProjectCard
          title={project.title}
          description={project.description}
          caseStudy={project.caseStudy}
          iframeUrl={project.iframeUrl}
          imageUrl={project.imageUrl}
          websiteUrl={project.websiteUrl}
          imageLinkUrl={project.imageLinkUrl}
          githubUrl={project.githubUrl}
          technologies={project.technologies}
          onImageClick={setSelectedImage}
        />
      )}
    </div>
  )

  return (
    <section id="portfolio">
      <ImageModal
        imageUrl={selectedImage}
        onClose={() => setSelectedImage(null)}
      />

      <div className="portfolio max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-6 text-white">
          Selected <span className="text-pink-400">Product & UX Work</span>
        </h2>
        <p className="text-center text-gray-300 max-w-3xl mx-auto mb-12">
          These projects highlight my approach to building thoughtful digital
          experiences, supporting product delivery, and balancing user needs
          with practical execution.
        </p>

        <div className="project-list">{renderProject(featuredProject, 0)}</div>

        <details className="mt-10" onToggle={handleOtherProjectsToggle}>
          <summary className="cursor-pointer text-2xl font-semibold text-pink-400">
            Other Projects
          </summary>
          {showOtherProjects && (
            <div className="project-list grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
              {otherProjects.map((project, index) =>
                renderProject(project, index + 1)
              )}
            </div>
          )}
        </details>
      </div>
    </section>
  )
}

export default Portfolio
