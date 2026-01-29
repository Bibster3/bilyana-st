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
      title: 'Best Shop',
      description:
        'A Vanilla JavaScript e-commerce site featuring dynamic filtering, LocalStorage cart management, and a fully responsive layout. Built to strict professional Figma-to-code standards as an EPAM Campus capstone.',
      imageUrl: bestShopImage,
      websiteUrl: 'https://bibster3.github.io/best-shop/',
      githubUrl: 'https://github.com/Bibster3/best-shop',
      technologies: ['JavaScript', 'SASS', 'HTML', 'GitHub'],
    },
    {
      title: 'Your Crayon Story (in progress)',
      description:
        'Your Crayon Story is an interactive web app where children can create and personalize their own coloring books. Built with React, TypeScript, Tailwind CSS, and Supabase, it combines storytelling, creativity, and technology to turn imagination into printable art.',
      imageUrl: crayonStoryImage,
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
      title: 'CalorieMate',
      description:
        'CalorieMate is a responsive web application designed for tracking nutritional intake. It features a user-friendly interface built with HTML, CSS, and JavaScript, ensuring seamless navigation and interactive functionality. Hosted on GitHub Pages, it showcases skills in frontend development, responsive design, and UI/UX principles, making it easy to monitor and manage daily calorie consumption effectively.',
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
        'WeatherApp is a modern web application designed to keep you informed about the weather conditions in your area and beyond.',
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
        'A whimsical 2D platformer where a charming unicorn journeys through an enchanting candy filled forest.',
      websiteUrl: 'https://bilyanas.itch.io/candy-forest',
      githubUrl: 'https://gitfront.io/r/Bibster/YAVvvmx6zVqW/CForest-SO/',
      imageUrl: candyForestImage,
      technologies: ['Unity', 'CSharp', 'WebGL', 'GitHub', 'Photoshop'],
    },
    {
      title: 'Dutch Shuffleboard',
      description:
        'A whimsical 2D platformer where a charming unicorn journeys through an enchanting candy filled forest.',
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
        'A whimsical 2D platformer where a charming unicorn journeys through an enchanting candy filled forest.',
      websiteUrl: 'https://bilyanas.itch.io/friendscape',
      githubUrl: 'https://gitfront.io/r/Bibster/i8YyuMAT465Z/Friendscape/',
      imageUrl: friendscapeImage,
      technologies: ['Unity', 'CSharp', 'WebGL', 'GitHub', 'Photoshop'],
    },
  ]

  const [visibleProjects, setVisibleProjects] = useState([])
  const projectRefs = useRef([])
  const [selectedImage, setSelectedImage] = useState(null)

  // IntersectionObserver callback function to check if the project is in view
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
      threshold: 0.1, // Adjust as needed based on your layout and visibility needs
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
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          My  <span className="text-pink-400">Portfolio</span>
        </h2>

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
