import Head from 'next/head'
import { useState } from 'react'
import Navbar from '@/components/mindcraft/layout/Navbar'
import Footer from '@/components/mindcraft/layout/Footer'
import { modulesData } from '@/utils/mindcraft/modulesData'
import { motion } from 'framer-motion'
import { 
  Brain, 
  Shield, 
  Eye, 
  Users, 
  CheckCircle, 
  ArrowRight, 
  Play, 
  Target,
  Zap,
  Heart
} from 'lucide-react'

export default function AIEthicsPage() {
  const [currentSection, setCurrentSection] = useState(0)
  const [reflectionText, setReflectionText] = useState('')

  const module = modulesData.find(m => m.id === 'ai-ethics')
  
  if (!module) return null

  const learningContent = [
    {
      title: "What is an Algorithm?",
      subtitle: "The Recipe Analogy",
      description: "Understanding AI's step-by-step thinking process through everyday examples",
      keyPoints: ["Pattern Recognition", "Sequential Processing", "Decision Trees"],
      interactive: "Build your own simple algorithm",
      icon: Target,
      content: "Just like following a recipe to bake a cake, algorithms are step-by-step instructions that computers follow. When you tell an AI to recognize a photo of a dog, it follows millions of tiny steps - looking at shapes, colors, and patterns - just like you might follow steps in a recipe to create something amazing."
    },
    {
      title: "How AI Learns",
      subtitle: "Baby Brain Simulation",
      description: "Like babies learning from mistakes, AI learns from data patterns",
      keyPoints: ["Training Data", "Pattern Recognition", "Error Correction"],
      interactive: "Watch AI learn in real-time",
      icon: Brain,
      content: "Imagine a baby learning to recognize faces. At first, they might confuse strangers with their parents. But through millions of examples, they get better. AI learns the same way - by making mistakes, adjusting, and trying again with massive amounts of data until patterns become clear."
    },
    {
      title: "Ethics & Bias",
      subtitle: "Shadows in Data",
      description: "Why AI sometimes makes unfair decisions and how bias creeps in",
      keyPoints: ["Algorithmic Bias", "Data Representation", "Fairness Metrics"],
      interactive: "Bias Detective Game",
      icon: Eye,
      content: "AI is like a mirror - it reflects the biases present in the data it learns from. If historical hiring data shows companies preferred certain backgrounds, AI might perpetuate these unfair patterns. Understanding these 'shadows in data' helps us build fairer AI systems that serve everyone equally."
    },
    {
      title: "Privacy & Security",
      subtitle: "Your Digital Footprint",
      description: "Understanding and protecting personal data in AI systems",
      keyPoints: ["Data Protection", "Digital Rights", "Privacy by Design"],
      interactive: "Privacy Audit Tool",
      icon: Shield,
      content: "Every click, search, and interaction creates your digital DNA. AI systems use this data to learn about you and make predictions. Protecting your privacy means understanding what data you share, why companies want it, and how to maintain control over your digital identity in an AI-powered world."
    },
    {
      title: "Cognitive Sovereignty",
      subtitle: "User or Tool?",
      description: "Critical thinking exercises against algorithmic dependency and 'brainrot'",
      keyPoints: ["Digital Autonomy", "Critical Analysis", "Conscious AI Use"],
      interactive: "Design Your AI Ethics Code",
      icon: Heart,
      content: "Klaus Schwab asks: 'Will you be the Navigator or the Slave of AI?' Cognitive sovereignty means keeping human judgment in charge. It's about using AI as a powerful tool while maintaining your ability to think critically, make independent decisions, and resist algorithmic manipulation of your thoughts and choices."
    }
  ]

  const ethicalScenarios = [
    {
      title: "The Hiring Algorithm Dilemma",
      scenario: "An AI system for hiring shows bias against certain names and backgrounds. As the HR manager, what do you do?",
      options: [
        "Use the AI anyway - it's more efficient",
        "Audit the training data and retrain the AI",
        "Add human oversight to all AI decisions",
        "Abandon AI for hiring completely"
      ],
      correct: 1,
      explanation: "The best approach is to audit and retrain with balanced, representative data while maintaining human oversight."
    },
    {
      title: "The Self-Driving Car Choice",
      scenario: "A self-driving car must choose between hitting one person or swerving to hit three people. How should it be programmed?",
      options: [
        "Always minimize total casualties",
        "Never actively cause harm",
        "Consider age and social value",
        "Let humans decide in real-time"
      ],
      correct: 3,
      explanation: "This is one of AI ethics' hardest questions - there's no perfect answer, highlighting why human judgment remains crucial."
    }
  ]

  return (
    <>
      <Head>
        <title>AI & Ethics: Building Cognitive Sovereignty | Mindcraft</title>
        <meta name="description" content="Learn to navigate the AI age with ethical thinking, bias detection, and cognitive sovereignty. Part of the Mindcraft Global Multiplier Network." />
        <meta name="keywords" content="AI ethics, cognitive sovereignty, algorithmic bias, privacy protection, digital autonomy, Klaus Schwab" />
        <meta property="og:title" content="AI & Ethics: Building Cognitive Sovereignty" />
        <meta property="og:description" content="Master ethical AI thinking and maintain human agency in the Intelligence Age" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
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
              {/* Brain-Circuit Icon */}
              <div className="relative mx-auto mb-8 w-32 h-32">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full animate-pulse"></div>
                <div className="relative w-full h-full bg-white rounded-full flex items-center justify-center shadow-2xl">
                  <Brain className="w-16 h-16 text-blue-600" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/30 to-cyan-400/30 rounded-full blur-xl"></div>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                AI & Ethics
                <span className="block text-3xl md:text-4xl bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mt-4">
                  Building Cognitive Sovereignty
                </span>
              </h1>

              <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-8 border border-blue-500/30 mb-8">
                <h2 className="text-2xl md:text-3xl text-blue-300 mb-4 font-semibold">
                  Klaus Schwab's Challenge
                </h2>
                <p className="text-xl text-gray-300 italic">
                  "Will you be the Navigator or the Slave of AI?"
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
              <div className="bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 border border-purple-500/30">
                <div className="text-3xl font-bold text-purple-400">5</div>
                <div className="text-gray-300">Learning Sections</div>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 border border-blue-500/30">
                <div className="text-3xl font-bold text-blue-400">Ages 9-17</div>
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
              Your Journey to <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Cognitive Sovereignty</span>
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
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                          <section.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-white">{section.title}</h3>
                          <p className="text-blue-300">{section.subtitle}</p>
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

                      <button className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all">
                        <Play className="w-5 h-5" />
                        {section.interactive}
                      </button>
                    </div>

                    <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                      <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-2xl p-8 border border-blue-500/30">
                        <div className="text-center">
                          <section.icon className="w-24 h-24 text-blue-400 mx-auto mb-4" />
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

        {/* Ethical Decision Simulator */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Ethical Decision Simulator
                </span>
              </h2>
              <p className="text-xl text-gray-300">
                Test your ethical thinking with real-world AI dilemmas
              </p>
            </div>

            <div className="space-y-8">
              {ethicalScenarios.map((scenario, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/30"
                >
                  <h3 className="text-2xl font-bold text-white mb-4">{scenario.title}</h3>
                  <p className="text-gray-300 text-lg mb-6">{scenario.scenario}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    {scenario.options.map((option, i) => (
                      <button
                        key={i}
                        className="text-left p-4 bg-slate-700/50 hover:bg-purple-600/30 border border-slate-600 hover:border-purple-500 rounded-xl transition-all"
                      >
                        <span className="text-white">{option}</span>
                      </button>
                    ))}
                  </div>

                  <div className="bg-purple-900/30 rounded-xl p-4 border border-purple-500/50">
                    <h4 className="text-purple-300 font-semibold mb-2">Reflection</h4>
                    <p className="text-gray-300 text-sm">{scenario.explanation}</p>
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
              className="bg-gradient-to-br from-slate-800/50 to-purple-800/30 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/30"
            >
              <h2 className="text-3xl font-bold text-white mb-6 text-center">
                My AI Transformation
              </h2>
              <p className="text-gray-300 text-lg mb-8 text-center">
                After today's learning, how has your perspective on technology changed?
              </p>

              <div className="space-y-6">
                <div>
                  <label className="block text-white font-semibold mb-2">
                    Before: How I see AI now
                  </label>
                  <textarea
                    placeholder="I used to think AI was..."
                    className="w-full p-4 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
                    rows={3}
                  />
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">
                    After: How I will use AI from now on
                  </label>
                  <textarea
                    value={reflectionText}
                    onChange={(e) => setReflectionText(e.target.value)}
                    placeholder="Now I understand that I will..."
                    className="w-full p-4 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
                    rows={3}
                  />
                </div>

                <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all">
                  Save My AI Ethics Commitment
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
                Continue Your <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Mindcraft Journey</span>
              </h2>
              <p className="text-xl text-gray-300 mb-12">
                You've taken the first step toward cognitive sovereignty. Ready for the next module?
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.a
                  href="/projects/mindcraft/prompt-engineering"
                  className="group bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/30 hover:border-purple-400/50 transition-all"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-left">
                      <h3 className="text-xl font-bold text-white">Next Module</h3>
                      <p className="text-purple-300">Prompt Engineering</p>
                    </div>
                  </div>
                  <p className="text-gray-300 text-left group-hover:text-white transition-colors">
                    Master the art of communicating with AI systems for amazing results
                  </p>
                  <ArrowRight className="w-5 h-5 text-purple-400 ml-auto mt-4 group-hover:translate-x-1 transition-transform" />
                </motion.a>

                <motion.a
                  href="/projects/mindcraft"
                  className="group bg-gradient-to-br from-blue-600/20 to-cyan-600/20 backdrop-blur-lg rounded-2xl p-8 border border-blue-500/30 hover:border-blue-400/50 transition-all"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-left">
                      <h3 className="text-xl font-bold text-white">Module Hub</h3>
                      <p className="text-blue-300">All Modules</p>
                    </div>
                  </div>
                  <p className="text-gray-300 text-left group-hover:text-white transition-colors">
                    Explore all 6 modules in the Mindcraft learning journey
                  </p>
                  <ArrowRight className="w-5 h-5 text-blue-400 ml-auto mt-4 group-hover:translate-x-1 transition-transform" />
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