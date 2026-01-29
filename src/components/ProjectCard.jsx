import React from 'react'
import { FaHtml5 } from '@react-icons/all-files/fa/FaHtml5'
import { FaCss3Alt } from '@react-icons/all-files/fa/FaCss3Alt'
import { FaJsSquare } from '@react-icons/all-files/fa/FaJsSquare'
import { FaReact } from '@react-icons/all-files/fa/FaReact'
import { SiTypescript } from '@react-icons/all-files/si/SiTypescript'
import { SiTailwindcss } from '@react-icons/all-files/si/SiTailwindcss'
import { SiUnity } from '@react-icons/all-files/si/SiUnity'
import { SiCsharp } from '@react-icons/all-files/si/SiCsharp'
import { SiGithub } from '@react-icons/all-files/si/SiGithub'
import { SiAdobephotoshop } from '@react-icons/all-files/si/SiAdobephotoshop'
import { SiWebgl } from '@react-icons/all-files/si/SiWebgl'

const ProjectCard = ({
  title,
  description,
  iframeUrl,
  imageUrl,
  githubUrl,
  websiteUrl,
  technologies = [],
  onImageClick,
}) => {
  const technologyIcons = {
    HTML: <FaHtml5 title="HTML5" />,
    CSS: <FaCss3Alt title="CSS3" />,
    JavaScript: <FaJsSquare title="JavaScript" />,
    React: <FaReact title="React" />,
    TypeScript: <SiTypescript title="TypeScript" />,
    'Tailwind CSS': <SiTailwindcss title="Tailwind CSS" />,
    Unity: <SiUnity title="Unity" />,
    CSharp: <SiCsharp title="C#" />,
    GitHub: <SiGithub title="GitHub" />,
    Photoshop: <SiAdobephotoshop title="Photoshop" />,
    WebGL: <SiWebgl title="WebGL" />,
  }

  const getIcon = (tech) =>
    technologyIcons[tech]
      ? React.cloneElement(technologyIcons[tech], { key: tech })
      : null

  return (
    <div className="project-card bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col transition-transform duration-300 hover:scale-105 hover:shadow-pink-400/20">
      <div className="flex-grow">
        <h2 className="text-2xl font-semibold text-pink-400 mb-2">{title}</h2>
        <p className="text-gray-300 mb-4">{description}</p>
      </div>
      <div className="mb-4">
        {iframeUrl ? (
          <div className="project-iframe w-full aspect-video">
            <iframe
              src={iframeUrl}
              title={title}
              className="w-full h-full border-2 border-gray-700 rounded-md"
              allowFullScreen
            />
          </div>
        ) : imageUrl ? (
          <button
            className="project-image w-full aspect-video block cursor-pointer"
            onClick={() => onImageClick(imageUrl)}
            aria-label={`View larger image for ${title}`}
          >
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-full object-cover border-2 border-gray-700 rounded-md"
            />
          </button>
        ) : null}
      </div>
      {technologies.length > 0 && (
        <div className="mb-4">
          <div className="flex flex-wrap items-center gap-4 text-2xl text-gray-300">
            {technologies.map((tech) => getIcon(tech))}
          </div>
        </div>
      )}
      <div className="flex space-x-4 mt-auto">
        {websiteUrl && (
          <a
            href={websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-md transition"
          >
            View Project
          </a>
        )}
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-md transition"
          >
            View Code
          </a>
        )}
      </div>
    </div>
  )
}

export default ProjectCard
