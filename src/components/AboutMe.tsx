import React from 'react'
import { LazyMotion, domAnimation, motion } from 'framer-motion'
import ResumeDownloadButton from './ResumeDownloadButton'

const SkillTag = ({
  icon,
  label,
}: {
  icon: React.ReactNode
  label: string
}) => (
  <div className="flex items-center gap-2 bg-pink-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-md whitespace-nowrap">
    {icon}
    <span>{label}</span>
  </div>
)

export default function AboutMe() {
  return (
    <LazyMotion features={domAnimation}>
      <section
        id="about"
        className="min-h-screen bg-gray-900 text-white flex items-start justify-center pt-20 px-6 sm:px-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-5xl text-center px-4"
        >
          <h2 className="text-4xl font-bold text-center mb-12 mt-16 text-white">
            Hi <span className="text-pink-400">there!</span>
          </h2>
          <p className="text-lg leading-relaxed text-gray-300">
            I'm{' '}
            <span className="text-pink-400 font-semibold">
              Bilyana Stefanova
            </span>
            , a product-oriented professional with a background in software
            development, digital marketing, and business administration. I enjoy
            turning ideas into digital products that solve real customer
            problems and deliver measurable business value.
          </p>

          <p className="text-lg leading-relaxed text-gray-300 mt-4">
            Most recently, I created{' '}
            <span className="text-pink-400 font-semibold">
              Your Crayon Story
            </span>
            , where I took the product from concept to production by defining
            the product vision, researching the market, designing the customer
            journey, writing product requirements, and continuously improving
            the platform based on user feedback.
          </p>

          <p className="text-lg leading-relaxed text-gray-300 mt-4">
            My technical background allows me to collaborate effectively with
            engineering teams, while my experience in marketing and
            customer-facing roles helps me balance business goals, user needs,
            and technical feasibility. I actively use AI-assisted workflows to
            accelerate product discovery, documentation, and software delivery.
          </p>

          <p className="font-semibold text-center mt-8 text-pink-300">
            Looking for Product Owner and Product Manager opportunities where I
            can help shape product strategy and deliver customer-focused
            solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-10 pt-10">
            <SkillTag
              icon={<span className="text-sm font-semibold">•</span>}
              label="Product Strategy"
            />
            <SkillTag
              icon={<span className="text-sm font-semibold">•</span>}
              label="User Research"
            />
            <SkillTag
              icon={<span className="text-sm font-semibold">•</span>}
              label="Roadmap Planning"
            />
            <SkillTag
              icon={<span className="text-sm font-semibold">•</span>}
              label="Cross-functional Collaboration"
            />
            <SkillTag
              icon={<span className="text-sm font-semibold">•</span>}
              label="Agile Delivery"
            />
            <SkillTag
              icon={<span className="text-sm font-semibold">•</span>}
              label="React & TypeScript"
            />
            <SkillTag
              icon={<span className="text-sm font-semibold">•</span>}
              label="Jira & ClickUp"
            />
            <SkillTag
              icon={<span className="text-sm font-semibold">•</span>}
              label="UX & Design Thinking"
            />
          </div>
        </motion.div>
      </section>
    </LazyMotion>
  )
}
