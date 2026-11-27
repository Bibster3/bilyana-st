import React, { useState } from 'react'
import NavLinks from './ui/Navlinks.jsx'
import ProjectCard from './ProjectCard.jsx'
import ImageModal from './ImageModal.jsx'
import candyForestImage from '../assets/candy-forest.webp'
import dutchShuffleboardImage from '../assets/dutch-shuffleboard.webp'
import friendscapeImage from '../assets/friendscape.webp'

const games = [
  {
    title: 'Candy Forest Dash',
    genre: 'Endless runner',
    file: 'candy-forest-dash.html',
    aspectRatio: '16 / 9',
    description:
      'Guide a unicorn through a candy forest. Jump over gumdrops and candy canes, stay low under gummy bees, and collect peppermints for points.',
    designNotes: [
      'One input: jump or double jump, on keyboard or touch.',
      'Bees punish jumping, so players must read obstacles rather than tap on reflex.',
      'Peppermint arcs guide jumps, with a riskier arc rewarding bolder play.',
      'The speed increases with distance, keeping the opening forgiving.',
    ],
    nextTest: 'Where players first crash, how many retry, and whether the speed curve needs to flatten.',
  },
  {
    title: 'Crystal Cave',
    genre: 'Merge puzzle',
    file: 'crystal-cave.html',
    aspectRatio: '540 / 880',
    description:
      'Drag matching gems together to upgrade them through nine tiers, all the way to the Heart of the Cave. Summon new gems when you need them.',
    designNotes: [
      'A visible next-gem panel always shows what to build toward.',
      'Valid merge targets glow; merges give distinct sound, particle, and score feedback.',
      'A full board creates pressure without a timer, and the game detects when no merges remain.',
      'Reaching the top gem gives a clear win screen, with the option to keep playing.',
    ],
    nextTest: 'How often new gems spawn at tier 2, the board size, and whether an energy or time limit could improve retention without feeling punishing.',
  },
  {
    title: 'Starfall',
    genre: 'Survival shooter',
    file: 'starfall.html',
    aspectRatio: '16 / 9',
    description:
      'Steer a neon ship through growing swarms for a three-minute run. Your ship fires automatically; collect energy and choose from three upgrades at each level-up.',
    designNotes: [
      'Auto-fire keeps movement as the main skill, with a floating touch joystick.',
      'Nine upgrades offer different builds from run to run.',
      'Short, fixed runs are designed for quick sessions, with enemy types introduced gradually.',
      'Enemy color and shape distinguish types, and damage flashes the screen.',
    ],
    nextTest: null,
  },
]

const unityProjects = [
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

const basePath = import.meta.env.BASE_URL

function GameCard({ game, className = '' }) {
  const gameUrl = `${basePath}games/${game.file}`

  return (
    <article
      className={`flex min-w-0 flex-col overflow-hidden rounded-2xl border border-gray-700 bg-gray-800 shadow-xl ${className}`}
    >
      <div className="border-b border-gray-700 bg-gray-950">
        <iframe
          src={gameUrl}
          title={`${game.title} playable preview`}
          loading="lazy"
          allowFullScreen
          className="block w-full border-0"
          style={{ aspectRatio: game.aspectRatio }}
        />
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-pink-300">
          {game.genre}
        </p>
        <h2 className="mb-3 text-2xl font-bold text-white">{game.title}</h2>
        <p className="mb-5 leading-7 text-gray-300">{game.description}</p>
        <details className="mb-6 text-gray-300">
          <summary className="cursor-pointer font-semibold text-pink-300 hover:text-pink-200">
            Design notes
          </summary>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            {game.designNotes.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
          {game.nextTest && (
            <p className="mt-4">
              <span className="font-semibold text-gray-200">
                What I&apos;d test next:
              </span>{' '}
              {game.nextTest}
            </p>
          )}
        </details>
        <a
          href={gameUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto inline-flex w-fit items-center rounded-md bg-pink-500 px-5 py-3 font-semibold text-white transition hover:bg-pink-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-300"
        >
          Play {game.title}
          <span className="ml-2" aria-hidden="true">
            ↗
          </span>
        </a>
      </div>
    </article>
  )
}

function GamePortfolio() {
  const [selectedImage, setSelectedImage] = useState(null)

  return (
    <div className="min-h-screen bg-gray-900 px-4 text-white sm:px-6">
      <ImageModal
        imageUrl={selectedImage}
        onClose={() => setSelectedImage(null)}
      />
      <NavLinks />
      <main className="mx-auto max-w-[1120px] pb-16 pt-10 sm:pb-20 sm:pt-14">
        <section
          id="games-intro"
          className="mb-14 scroll-mt-24 text-center sm:mb-20"
          aria-labelledby="games-title"
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-pink-300 sm:text-sm sm:tracking-[0.3em]">
            Bilyana Stefanova · Interactive experiences
          </p>
          <h1
            id="games-title"
            className="mb-5 text-4xl font-bold sm:mb-6 sm:text-5xl"
          >
            Game <span className="text-pink-400">Development</span>
          </h1>
          <p className="mx-auto max-w-3xl text-base leading-7 text-gray-300 sm:text-lg sm:leading-relaxed">
            My work includes gameplay
            implementation using Unity and C#, UI development, audio integration and collaboration
            within Agile development teams. I also have front-end development
            experience with JavaScript, HTML and CSS.
          </p>
        </section>

        <section
          id="playable-games"
          className="mb-16 scroll-mt-24 sm:mb-20"
          aria-labelledby="prototypes-title"
        >
          <div className="mb-7 flex flex-col gap-3 sm:mb-8 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-pink-300 sm:text-sm">
                Personal prototypes
              </p>
              <h2 id="prototypes-title" className="text-2xl font-bold sm:text-3xl">
                Playable browser games
              </h2>
            </div>
            <p className="max-w-2xl text-sm leading-6 text-gray-400 sm:text-base sm:leading-7">
              Three small games across different genres, prototyped with
              AI-assisted development. I directed the concepts, game feel and
              progression. Each is a self-contained HTML file using Canvas and
              Web Audio; visuals and sounds are generated in code, with no
              external assets.
            </p>
          </div>
          <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-2 md:gap-8">
            <div className="contents md:flex md:flex-col md:gap-8">
              <GameCard game={games[0]} className="order-1" />
              <GameCard game={games[2]} className="order-3" />
            </div>
            <div className="contents md:flex md:flex-col md:gap-8">
              <GameCard game={games[1]} className="order-2" />
            </div>
          </div>
        </section>

        <section
          id="unity-projects"
          className="mb-16 scroll-mt-24 sm:mb-20"
          aria-labelledby="unity-projects-title"
        >
          <div className="mb-8">
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-pink-300 sm:text-sm">
              Unity projects
            </p>
            <h2 id="unity-projects-title" className="text-2xl font-bold sm:text-3xl">
              Game Projects
            </h2>
          </div>
          <div className="grid auto-rows-fr grid-cols-1 items-stretch gap-6 sm:grid-cols-2 sm:gap-7 lg:grid-cols-3 lg:gap-8">
            {unityProjects.map((project) => (
              <ProjectCard
                key={project.title}
                {...project}
                onImageClick={setSelectedImage}
                className="h-full"
              />
            ))}
          </div>
        </section>

        <section
          id="unity-experience"
          className="scroll-mt-24 rounded-2xl border border-gray-700 bg-gray-800 p-5 sm:p-8"
          aria-labelledby="unity-experience-title"
        >
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-pink-300 sm:text-sm">
            Professional experience
          </p>
          <h2 id="unity-experience-title" className="mb-2 text-2xl font-bold sm:text-3xl">
            Unity Game Development
          </h2>
          <h3 className="text-xl font-semibold text-white">
            The Sixth Hammer / Freelance
          </h3>
          <p className="mt-1 text-gray-300">Unity Game Developer</p>
          <div className="mt-5 flex flex-wrap gap-2 sm:mt-6 sm:gap-3" aria-label="Tools and technologies">
            {[
              'Unity',
              'C#',
              'Photon Quantum',
              'FMOD',
              'GitHub',
              'ClickUp',
              'SourceTree',
            ].map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-pink-400/40 bg-gray-900 px-4 py-2 text-sm font-medium text-pink-100"
              >
                {technology}
              </span>
            ))}
          </div>
        </section>
      </main>
      <footer className="border-t border-gray-800 py-8 text-center text-sm text-gray-400">
        <a
          href={`${basePath}#contact`}
          className="text-pink-300 transition hover:text-pink-200"
        >
          Get in touch
        </a>
        <span className="mx-3" aria-hidden="true">
          ·
        </span>
        <a
          href={basePath}
          className="text-pink-300 transition hover:text-pink-200"
        >
          Product Management portfolio
        </a>
      </footer>
    </div>
  )
}

export default GamePortfolio
