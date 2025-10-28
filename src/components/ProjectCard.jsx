import React from 'react'

const ProjectCard = ({
  title,
  description,
  iframeUrl,
  imageUrl,
  githubUrl,
  websiteUrl,
}) => {
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
          <div className="project-image w-full aspect-video">
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-full object-cover border-2 border-gray-700 rounded-md"
            />
          </div>
        ) : null}
      </div>
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
