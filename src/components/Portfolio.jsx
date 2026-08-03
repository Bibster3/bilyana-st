import React, { useRef, useEffect, useState } from 'react'

import ProjectCard from './ProjectCard'
import crayonStoryImage from '../assets/your-crayon-story.png'
import candyForestImage from '../assets/candy-forest.png'
import dutchShuffleboardImage from '../assets/dutch-shuffleboard.png'
import friendscapeImage from '../assets/friendscape.png'
import bestShopImage from '../assets/best-shop.png'

import ImageModal from './ImageModal'

const Portfolio = () => {
  const projects = [

    {
      title: 'Your Crayon Story',
      description:
        'An early-stage digital product concept focused on personalization, storytelling, and a simple, engaging user journey for families.',
      imageUrl: crayonStoryImage,
      websiteUrl: 'https://www.yourcrayonstory.com/',
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

  const onIntersection = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const projectIndex = entry.target.getAttribute('data-index')
        setVisibleProjects((prevVisibleProjects) => [
          ...prevVisibleProjects,
          Number(projectIndex),
        ])
      }
    })
  }

  useEffect(() => {
    const observer = new IntersectionObserver(onIntersection, {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    })

    projectRefs.current.forEach((ref) => {
      observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

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

        <div className="project-list grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              ref={(ref) => (projectRefs.current[index] = ref)}
              data-index={index}
            >
              {visibleProjects.includes(index) && (
                <ProjectCard
                  key={index}
                  title={project.title}
                  description={project.description}
                  iframeUrl={project.iframeUrl}
                  imageUrl={project.imageUrl}
                  websiteUrl={project.websiteUrl}
                  githubUrl={project.githubUrl}
                  technologies={project.technologies}
                  onImageClick={setSelectedImage}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
