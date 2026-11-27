import React, { useRef, useEffect, useState } from 'react'

import ProjectCard from './ProjectCard'
import crayonStoryImage from '../assets/your-crayon-story.webp'
import bestShopImage from '../assets/best-shop.webp'
import journeyDiagram from '../assets/journey-diagram.svg'
import useCaseDiagram from '../assets/ycs-use-case.png'
import journeySource from '../assets/your-crayon-story-journey.bpmn?url'
import useCaseSource from '../assets/ycs-use-case.puml?url&no-inline'

import ImageModal from './ImageModal'

const Portfolio = () => {
  const projects = [
    {
      title: 'Your Crayon Story: Product Manager, Concept to Launch',
      caseStudy: {
        challenge:
          "Your Crayon Story needed to go from an idea — a personalized children's storytelling product — to a working, sellable platform, with no existing roadmap, requirements, or customer journey defined. I worked with the founder, in a two-person team, across product, requirements and delivery.",
        approach: [
          'Shaped the product direction and priorities together with the founder, turning a broad concept into a focused first release.',
          "Designed the customer journey from landing page through payment and delivery; simplified the personalization flow (pick a story, then enter the child's name, age and dedication) and added a visual-preview product page.",
          'Defined funnel metrics (CTA-to-creation, personalization completion, story generation success, preview-to-checkout, purchase completion) and defined activation as receiving the personalized story.',
          'Validated the early customer journey through qualitative feedback, as traffic was too low for large-scale A/B tests.',
          'Built the product together with the founder using AI-assisted development, including an AI agent Chrome extension that automates prompts for generating coloring-book images with visual continuity.',
          'Decided to pre-generate coloring-book templates to cut AI token costs and keep every image consistent.',
          'Modeled the end-to-end workflow in BPMN and a UML use case diagram to align the team and explain the product to investors.',
        ],
        outcome:
          'Took the product from an undefined concept to a live platform with a defined customer journey, currently in production.',
        processModels: {
          intro:
            "Two diagrams I created to document how the product works, from the customer's first visit to the downloaded story.",
          items: [
            {
              title: 'BPMN 2.0, customer journey',
              imageUrl: journeyDiagram,
              alt: 'BPMN diagram of the Your Crayon Story customer journey with Customer, Platform and Payment provider lanes.',
              caption:
                'Shows who does what from landing page to downloaded story, including three decision points (story generated, proceed to purchase, payment successful) and the alternative paths: generation failure, leaving at the preview, and payment retry.',
              sourceLabel: 'BPMN source',
              sourceFileName: 'your-crayon-story-journey.bpmn',
              sourceUrl: journeySource,
              isWide: true,
            },
            {
              title: 'UML use case diagram',
              imageUrl: useCaseDiagram,
              alt: 'UML use case diagram showing what a customer can do in Your Crayon Story, and the role of the payment provider.',
              caption:
                'Shows what the product does for its users: choosing a story, personalizing it, previewing, paying, and downloading the finished story.',
              sourceLabel: 'UML source',
              sourceFileName: 'ycs-use-case.puml',
              sourceUrl: useCaseSource,
            },
          ],
        },
      },
      imageUrl: crayonStoryImage,
      websiteUrl: 'https://www.yourcrayonstory.com/',
      imageLinkUrl: 'https://www.yourcrayonstory.com/',
      technologies: [],
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
    <section>
      <ImageModal
        imageUrl={selectedImage}
        onClose={() => setSelectedImage(null)}
      />

      <div className="portfolio max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-6 text-white">
          Selected <span className="text-pink-400">Product Work</span>
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
