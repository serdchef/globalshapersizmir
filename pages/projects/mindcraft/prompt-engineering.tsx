import Head from 'next/head'
import { useState } from 'react'
import Navbar from '@/components/mindcraft/layout/Navbar'
import Footer from '@/components/mindcraft/layout/Footer'
import { modulesData } from '@/utils/mindcraft/modulesData'
import { motion } from 'framer-motion'
import { 
  MessageSquare, 
  Target, 
  Zap, 
  AlertTriangle, 
  Palette, 
  CheckCircle, 
  ArrowRight, 
  Play, 
  Code,
  Brain
} from 'lucide-react'

export default function PromptEngineeringPage() {
  const [currentSection, setCurrentSection] = useState(0)
  const [reflectionText, setReflectionText] = useState('')

  const module = modulesData.find(m => m.id === 'prompt-engineering')
  
  if (!module) return null

  const learningContent = [
    {
      title: "What is a Prompt?",
      subtitle: "The Magic Words",
      description: "Understanding how instructions shape AI responses",
      keyPoints: ["Clear Instructions", "Context Setting", "Output Format"],
      interactive: "Build Your First Prompt",
      icon: MessageSquare,
      content: "A prompt is like giving directions to a very smart but literal friend. The clearer and more specific you are, the better results you'll get. Think of it as the bridge between your thoughts and AI's capabilities - every word matters in creating that perfect connection."
    },
    {
      title: "Prompt Anatomy",
      subtitle: "The Perfect Recipe",
      description: "Breaking down effective prompts into essential components",
      keyPoints: ["Role Definition", "Task Specification", "Examples & Context"],
      interactive: "Prompt Dissection Lab",
      icon: Target,
      content: "Every great prompt has ingredients: WHO you want the AI to be (role), WHAT you want it to do (task), and HOW you want it done (format). Like a recipe, getting the proportions right makes the difference between a mediocre and an amazing result."
    },
    {
      title: "Advanced Techniques",
      subtitle: "Pro-Level Strategies",
      description: "Chain-of-thought, few-shot learning, and temperature control",
      keyPoints: ["Chain-of-Thought", "Few-Shot Learning", "Temperature Control"],
      interactive: "Advanced Prompt Builder",
      icon: Zap,
      content: "Advanced prompting is like learning to conduct an orchestra. Chain-of-thought helps AI 'think out loud', few-shot learning provides examples, and temperature controls creativity. Master these techniques to unlock AI's full potential for complex tasks."
    },
    {
      title: "Common Pitfalls",
      subtitle: "What NOT to Do",
      description: "Avoiding ambiguous, biased, or ineffective prompts",
      keyPoints: ["Ambiguity Problems", "Bias Detection", "Context Limits"],
      interactive: "Prompt Debugging Game",
      icon: AlertTriangle,
      content: "Even experts make prompt mistakes! Vague instructions lead to confused AI, biased prompts produce unfair results, and overlong contexts overwhelm the system. Learning what NOT to do is as important as mastering best practices."
    },
    {
      title: "Creative Applications",
      subtitle: "Beyond Basic Chatting",
      description: "Using prompts for art, coding, writing, and problem-solving",
      keyPoints: ["Creative Writing", "Code Generation", "Problem Solving"],
      interactive: "Create Your AI Assistant",
      icon: Palette,
      content: "Prompt engineering transforms AI from a simple chatbot into a creative partner. Whether you're writing stories, generating code, solving math problems, or creating art, the right prompts unlock AI's potential to augment human creativity and productivity."
    }
  ]

  const promptChallenges = [
    {
      title: "The Creative Writing Challenge",
      scenario: "You want AI to write a short story about a robot learning emotions. What's the most effective prompt?",
      options: [
        "Write a story about a robot",
        "You are a creative writer. Write a 500-word story about a robot discovering emotions for the first time. Include dialogue and sensory details.",
        "Robot story with emotions please",
        "Tell me about robots and feelings"
      ],
      correct: 1,
      explanation: "The second option provides role, specific task, word count, and style requirements - all elements of an effective prompt."
    },
    {
      title: "The Code Generation Dilemma",
      scenario: "You need AI to help debug a Python function. Which prompt approach works best?",
      options: [
        "Fix my code",
        "Debug this Python function and explain what's wrong",
        "You are a Python expert. Here's my function: [code]. Please identify bugs, explain the issues, and provide a corrected version with comments.",
        "Python help needed"
      ],
      correct: 2,
      explanation: "Specific role assignment, clear task definition, and requesting explanations with corrections provides the most useful response."
    }
  ]

  return (
    <>
      <Head>
        <title>Prompt Engineering: Mastering AI Communication | Mindcraft</title>
        <meta name="description" content="Learn to communicate effectively with AI systems through advanced prompt engineering techniques. Part of the Mindcraft Global Multiplier Network." />
        <meta name="keywords" content="prompt engineering, AI communication, GPT prompts, machine learning, artificial intelligence education" />
        <meta property="og:title" content="Prompt Engineering: Mastering AI Communication" />
        <meta property="og:description" content="Master the art of communicating with AI systems for amazing results" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-teal-900 to-slate-900">
        <Navbar />
        
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-12"
            >
              {/* MessageSquare Icon */}
              <div className="relative mx-auto mb-8 w-32 h-32">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full animate-pulse"></div>
                <div className="relative w-full h-full bg-white rounded-full flex items-center justify-center shadow-2xl">
                  <MessageSquare className="w-16 h-16 text-emerald-600" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/30 to-teal-400/30 rounded-full blur-xl"></div>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Prompt Engineering
                <span className="block text-3xl md:text-4xl bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent mt-4">
                  Mastering AI Communication
                </span>
              </h1>

              <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-8 border border-emerald-500/30 mb-8">
                <h2 className="text-2xl md:text-3xl text-emerald-300 mb-4 font-semibold">
                  Klaus Schwab's Vision
                </h2>
                <p className="text-xl text-gray-300 italic">
                  "The future belongs to those who can effectively communicate with artificial intelligence"
                </p>
              </div>

              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                {module.description}
              </p>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
            >
              <div className="bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 border border-emerald-500/30">
                <div className="text-3xl font-bold text-emerald-400">5</div>
                <div className="text-gray-300">Learning Sections</div>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 border border-teal-500/30">
                <div className="text-3xl font-bold text-teal-400">Ages 9-18</div>
                <div className="text-gray-300">All Levels</div>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 border border-cyan-500/30">
                <div className="text-3xl font-bold text-cyan-400">Interactive</div>
                <div className="text-gray-300">Hands-on Learning</div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Core Learning Sections */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-16">
              Your Journey to <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">AI Communication Mastery</span>
            </h2>

            <div className="space-y-12">
              {learningContent.map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-8 border border-slate-700/50"
                >
                  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                    <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center">
                          <section.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-white">{section.title}</h3>
                          <p className="text-emerald-300">{section.subtitle}</p>
                        </div>
                      </div>

                      <p className="text-gray-300 text-lg leading-relaxed mb-6">
                        {section.content}
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                        {section.keyPoints.map((point, i) => (
                          <div key={i} className="flex items-center gap-2 text-sm">
                            <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                            <span className="text-gray-300">{point}</span>
                          </div>
                        ))}
                      </div>

                      <button className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-emerald-700 hover:to-teal-700 transition-all">
                        <Play className="w-5 h-5" />
                        {section.interactive}
                      </button>
                    </div>

                    <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                      <div className="bg-gradient-to-br from-emerald-600/20 to-teal-600/20 rounded-2xl p-8 border border-emerald-500/30">
                        <div className="text-center">
                          <section.icon className="w-24 h-24 text-emerald-400 mx-auto mb-4" />
                          <h4 className="text-xl font-semibold text-white mb-2">Interactive Learning</h4>
                          <p className="text-gray-300">{section.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Live Prompt Laboratory */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                  Live Prompt Laboratory
                </span>
              </h2>
              <p className="text-xl text-gray-300">
                Test your prompt engineering skills with real-world scenarios
              </p>
            </div>

            <div className="space-y-8">
              {promptChallenges.map((challenge, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-8 border border-emerald-500/30"
                >
                  <h3 className="text-2xl font-bold text-white mb-4">{challenge.title}</h3>
                  <p className="text-gray-300 text-lg mb-6">{challenge.scenario}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    {challenge.options.map((option, i) => (
                      <button
                        key={i}
                        className="text-left p-4 bg-slate-700/50 hover:bg-emerald-600/30 border border-slate-600 hover:border-emerald-500 rounded-xl transition-all"
                      >
                        <span className="text-white">{option}</span>
                      </button>
                    ))}
                  </div>

                  <div className="bg-emerald-900/30 rounded-xl p-4 border border-emerald-500/50">
                    <h4 className="text-emerald-300 font-semibold mb-2">Expert Analysis</h4>
                    <p className="text-gray-300 text-sm">{challenge.explanation}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Personal Reflection */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-slate-800/50 to-emerald-800/30 backdrop-blur-lg rounded-2xl p-8 border border-emerald-500/30"
            >
              <h2 className="text-3xl font-bold text-white mb-6 text-center">
                My Prompt Engineering Journey
              </h2>
              <p className="text-gray-300 text-lg mb-8 text-center">
                How has learning prompt engineering changed your approach to AI communication?
              </p>

              <div className="space-y-6">
                <div>
                  <label className="block text-white font-semibold mb-2">
                    Before: How I used to talk to AI
                  </label>
                  <textarea
                    placeholder="I used to give AI simple commands like..."
                    className="w-full p-4 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
                    rows={3}
                  />
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">
                    After: My new approach to AI communication
                  </label>
                  <textarea
                    value={reflectionText}
                    onChange={(e) => setReflectionText(e.target.value)}
                    placeholder="Now I understand that effective prompts require..."
                    className="w-full p-4 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
                    rows={3}
                  />
                </div>

                <button className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-emerald-700 hover:to-teal-700 transition-all">
                  Save My Prompt Engineering Commitment
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Next Steps */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Continue Your <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Mindcraft Journey</span>
              </h2>
              <p className="text-xl text-gray-300 mb-12">
                You've mastered AI communication! Ready to explore the next frontier?
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.a
                  href="/projects/mindcraft/coding-automation"
                  className="group bg-gradient-to-br from-emerald-600/20 to-teal-600/20 backdrop-blur-lg rounded-2xl p-8 border border-emerald-500/30 hover:border-emerald-400/50 transition-all"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center">
                      <Code className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-left">
                      <h3 className="text-xl font-bold text-white">Next Module</h3>
                      <p className="text-emerald-300">Coding & Automation</p>
                    </div>
                  </div>
                  <p className="text-gray-300 text-left group-hover:text-white transition-colors">
                    Learn to automate tasks and create solutions with AI-powered coding
                  </p>
                  <ArrowRight className="w-5 h-5 text-emerald-400 ml-auto mt-4 group-hover:translate-x-1 transition-transform" />
                </motion.a>

                <motion.a
                  href="/projects/mindcraft/ai-ethics"
                  className="group bg-gradient-to-br from-slate-600/20 to-purple-600/20 backdrop-blur-lg rounded-2xl p-8 border border-slate-500/30 hover:border-slate-400/50 transition-all"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-slate-500 to-purple-500 rounded-xl flex items-center justify-center">
                      <Brain className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-left">
                      <h3 className="text-xl font-bold text-white">Previous Module</h3>
                      <p className="text-slate-300">AI & Ethics</p>
                    </div>
                  </div>
                  <p className="text-gray-300 text-left group-hover:text-white transition-colors">
                    Revisit cognitive sovereignty and ethical AI thinking
                  </p>
                  <ArrowRight className="w-5 h-5 text-slate-400 ml-auto mt-4 group-hover:translate-x-1 transition-transform" />
                </motion.a>
              </div>

              <div className="mt-8">
                <motion.a
                  href="/projects/mindcraft"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-emerald-700 hover:to-teal-700 transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Brain className="w-5 h-5" />
                  Back to Mindcraft Hub
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}