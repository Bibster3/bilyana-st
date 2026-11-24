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
            Product <span className="text-pink-400">Management</span>
          </h2>

          <p className="text-lg leading-relaxed text-gray-300">
            I&apos;m Bilyana, a <span className="text-pink-400 font-semibold">Product Manager</span> with hands-on experience taking a personalized storytelling SaaS product from concept to launch. At Your Crayon Story I worked with the founder in a two-person team: I designed the customer journey, defined the funnel metrics, modeled the workflow in BPMN, and built the product together with the founder using AI-assisted development, including an AI agent that automates prompts for generating coloring-book images.
          </p>

          <p className="text-lg leading-relaxed text-gray-300 mt-4">
            Earlier I worked in customer support, technical support, call monitoring and training, and as the go-between for a startup owner and its tech team. That gives me a strong customer focus and a practical understanding of how business needs reach engineers.
          </p>

          <p className="font-semibold text-center mt-8">
            Let&apos;s talk about your product goals.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mt-10 pt-10">
            <SkillTag label="Product Discovery & Strategy" />
            <SkillTag label="Customer Journey Mapping" />
            <SkillTag label="Funnel Metrics & Analytics" />
            <SkillTag label="BPMN Process Modeling" />
            <SkillTag label="Backlog Prioritization" />
            <SkillTag label="Agile & Scrum" />
            <SkillTag label="AI-Assisted Development" />
            <SkillTag label="Jira & ClickUp" />
          </div>
        </motion.div>
      </section>
    </LazyMotion>
  )
}
