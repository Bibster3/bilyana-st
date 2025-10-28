import React from 'react';

const ProjectCard = ({ title, description, iframeUrl, githubUrl }) => {
    return (
        <div className="project-card  bg-gray-900 rounded-xl shadow-lg p-6 mb-10">
            <h2 className="text-2xl font-semibold text-pink-400 mb-2">{title}</h2>
            <p className="text-gray-300 mb-4">{description}</p>
            <div className="project-iframe w-full aspect-video mb-4">
                <iframe src={iframeUrl} title={title} className="w-full h-full border-2 border-gray-700 rounded-md" allowFullScreen />
            </div>
            <div className = "flex space-x-4">
            <a
        href={iframeUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-md transition"
      >
        Visit website 
      </a>
           <a
        href={githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-md transition"
      >
        View on GitHub
      </a>
      </div>
        </div>
    );
};

export default ProjectCard;