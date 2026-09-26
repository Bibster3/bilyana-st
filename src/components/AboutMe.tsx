import { LazyMotion, domAnimation, motion } from 'framer-motion'

const SkillTag = ({ label }: { label: string }) => (
  <div className="bg-pink-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-md whitespace-nowrap">
    {label}
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
          <h2 className="text-4xl font-bold text-center mb-12 text-white">
            Product <span className="text-pink-400">Ownership</span>
          </h2>

          <p className="text-lg leading-relaxed text-gray-300">
            I&apos;m Bilyana, a{' '}
            <span className="text-pink-400 font-semibold">
              Product Owner and Product Manager
            </span>{' '}
            with hands-on experience taking a personalized storytelling SaaS
            platform from concept to delivery. I own product vision, roadmap,
            backlog, and priorities, connecting customer value and business
            goals with practical delivery plans.
          </p>

          <p className="text-lg leading-relaxed text-gray-300 mt-4">
            I work closely with stakeholders to gather and clarify
            requirements, then translate them into actionable user stories,
            specifications, and acceptance criteria. I act as a clear bridge
            between business needs and technical implementation, helping teams
            build the right product at the right time.
          </p>

          <p className="text-lg leading-relaxed text-gray-300 mt-4">
            My approach is collaborative and outcome-focused: I partner with
            engineering, design, and QA throughout delivery; facilitate Agile
            ceremonies; and make informed trade-offs across scope, timeline,
            delivery effort, and customer value. I use feedback, analytics,
            and product performance to continuously refine priorities.
          </p>

          <p className="text-lg leading-relaxed text-gray-300 mt-4">
            Earlier experience in stakeholder liaison, customer success, QA,
            process analysis, and training gives me a strong customer focus and
            a practical understanding of change, communication, and smooth
            product delivery.
          </p>

          <p className="font-semibold text-center mt-8">
            Let&apos;s talk about your product goals.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mt-10 pt-10">
            <SkillTag label="Product Vision & Roadmaps" />
            <SkillTag label="Backlog Prioritization" />
            <SkillTag label="Requirements & User Stories" />
            <SkillTag label="Acceptance Criteria" />
            <SkillTag label="Stakeholder Management" />
            <SkillTag label="Agile & Scrum" />
            <SkillTag label="Cross-functional Delivery" />
            <SkillTag label="Customer Journey Mapping" />
            <SkillTag label="Jira & ClickUp" />
            <SkillTag label="Product Analytics" />
          </div>
        </motion.div>
      </section>
    </LazyMotion>
  )
}
