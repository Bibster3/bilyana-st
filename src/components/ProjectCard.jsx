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
  caseStudy,
  iframeUrl,
  imageUrl,
  imageLinkUrl,
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
        {caseStudy ? (
          <div className="text-gray-300 mb-4 leading-relaxed">
            <section className="mb-4">
              <h3 className="text-lg font-semibold text-pink-300 mb-2">
                The challenge
              </h3>
              <p>{caseStudy.challenge}</p>
            </section>

            <section className="mb-4">
              <h3 className="text-lg font-semibold text-pink-300 mb-2">
                My role &amp; approach
              </h3>
              <ul className="space-y-3">
                {caseStudy.approach.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-pink-400" aria-hidden="true">
                      •
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-pink-300 mb-2">
                Outcome
              </h3>
              <p>{caseStudy.outcome}</p>
            </section>

            {caseStudy.processModels && (
              <section className="mt-6 border-t border-gray-700 pt-5">
                <h3 className="text-lg font-semibold text-pink-300 mb-2">
                  Process models
                </h3>
                <p className="mb-4">{caseStudy.processModels.intro}</p>
                <div className="space-y-6">
                  {caseStudy.processModels.items.map((item) => (
                    <figure key={item.title} className="rounded-lg bg-gray-900/60 p-4">
                      <h4 className="text-base font-semibold text-pink-200 mb-3">
                        {item.title}
                      </h4>
                      <div className="w-full overflow-x-auto rounded-md">
                        <a
                          href={item.imageUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-400"
                          aria-label={"Open full-size " + item.title + " diagram in a new tab"}
                        >
                          <img
                            src={item.imageUrl}
                            alt={item.alt}
                            loading="lazy"
                            decoding="async"
                            className={
                              item.isWide
                                ? 'block h-auto w-[1000px] max-w-none rounded-md border border-gray-700 lg:w-full lg:max-w-full'
                                : 'block h-auto max-w-full rounded-md border border-gray-700'
                            }
                          />
                        </a>
                      </div>
                      <figcaption className="mt-3 text-sm text-gray-300">
                        {item.caption}
                      </figcaption>
                      <a
                        href={item.sourceUrl}
                        download={item.sourceFileName}
                        className="mt-3 inline-block text-sm text-pink-300 underline underline-offset-4 hover:text-pink-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-800"
                      >
                        {item.sourceLabel}
                      </a>
                    </figure>
                  ))}
                </div>
              </section>
            )}
          </div>
        ) : (
          <p className="text-gray-300 mb-4">{description}</p>
        )}
      </div>
      <div className="mb-4">
        {iframeUrl ? (
          <div className="project-iframe w-full aspect-video">
            <iframe
              src={iframeUrl}
              title={title}
              loading="lazy"
              className="w-full h-full border-2 border-gray-700 rounded-md"
              allowFullScreen
            />
          </div>
        ) : imageUrl ? (
          imageLinkUrl ? (
            <a
              className="project-image w-full aspect-video block cursor-pointer"
              href={imageLinkUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${title} website`}
            >
              <img
                src={imageUrl}
                alt={title}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover object-top border-2 border-gray-700 rounded-md"
              />
            </a>
          ) : (
            <button
              className="project-image w-full aspect-video block cursor-pointer"
              onClick={() => onImageClick(imageUrl)}
              aria-label={`View larger image for ${title}`}
            >
              <img
                src={imageUrl}
                alt={title}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover object-top border-2 border-gray-700 rounded-md"
              />
            </button>
          )
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
