import React, { useRef, useEffect, useState } from 'react'

import ProjectCard from './ProjectCard'
import crayonStoryImage from '../assets/your-crayon-story.png'

const Portfolio = () => {
  const projects = [
    {
      title: 'Your Crayon Story (in progress)',
      description:
        'Your Crayon Story is an interactive web app where children can create and personalize their own coloring books. Built with React, TypeScript, Tailwind CSS, and Supabase, it combines storytelling, creativity, and technology to turn imagination into printable art.',
      imageUrl: crayonStoryImage,
    },
    {
      title: 'CalorieMate',
      description:
        'CalorieMate is a responsive web application designed for tracking nutritional intake. It features a user-friendly interface built with HTML, CSS, and JavaScript, ensuring seamless navigation and interactive functionality. Hosted on GitHub Pages, it showcases skills in frontend development, responsive design, and UI/UX principles, making it easy to monitor and manage daily calorie consumption effectively.',
      websiteUrl: 'https://bibster3.github.io/CalorieMate/',
      iframeUrl: 'https://bibster3.github.io/CalorieMate/',
      githubUrl: 'https://github.com/Bibster3/CalorieMate',
    },
    {
      title: 'WeatherApp',
      description:
        'Weatherly is a modern web application designed to keep you informed about the weather conditions in your area and beyond. Built with React, TypeScript, and Tailwind CSS, Weatherly offers a seamless user experience with real-time updates and intuitive navigation.',
      websiteUrl: 'https://bibster3.github.io/WeatherApp/',
      iframeUrl: 'https://bibster3.github.io/WeatherApp/',
      githubUrl: 'https://github.com/Bibster3/WeatherApp',
    },
  ]

  const [visibleProjects, setVisibleProjects] = useState([])
  const projectRefs = useRef([])

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
      <div className="portfolio">
        <div className="project-list">
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
