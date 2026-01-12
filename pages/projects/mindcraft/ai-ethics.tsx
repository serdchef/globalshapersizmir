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

  const learningObjectives = [
    "Understand what AI is and how it makes decisions",
    "Recognize bias and unfairness in AI systems",
    "Protect personal privacy when using AI tools",
    "Think critically about AI recommendations",
    "Use AI responsibly in school and daily life",
    "Make ethical choices about AI technology"
  ]

  const learningContent = [
    {
      title: "What Is AI (and What It Is Not)",
      subtitle: "Lesson 1: AI Basics",
      description: "Understanding AI without the hype - what it can and can't actually do",
      keyPoints: ["Pattern Recognition", "Data Processing", "Human vs AI Thinking"],
      interactive: "AI or Not AI Quiz",
      icon: Target,
      content: "AI is like a very smart pattern-finding tool. Think of it like having a friend who's really good at spotting similarities in things. If you show this friend 1000 photos of cats, they'll get really good at recognizing cats in new photos. But they won't understand what it feels like to pet a cat or why cats purr. AI can find patterns in data, but it doesn't truly 'understand' like humans do.",
      scenarios: [
        "Your music app suggests songs you might like",
        "A photo app automatically tags your friends",
        "Your phone's voice assistant answers questions"
      ],
      reflectionQuestions: [
        "Think of an AI tool you use daily. What patterns do you think it learned from?",
        "What's something AI will never be able to do as well as humans?"
      ]
    },
    {
      title: "Bias and Fairness in AI",
      subtitle: "Lesson 2: When AI Gets It Wrong",
      description: "Why AI sometimes makes unfair decisions and how to spot bias",
      keyPoints: ["Algorithmic Bias", "Fair Representation", "Equal Treatment"],
      interactive: "Bias Detective Challenge",
      icon: Eye,
      content: "Imagine you're teaching someone to recognize 'good students' but you only show them photos of students from one school. They might think all good students look a certain way! AI has the same problem. If the data used to train AI doesn't include everyone fairly, the AI might make unfair decisions about people.",
      scenarios: [
        "A hiring AI that prefers certain names over others",
        "A photo recognition system that works better for some skin tones",
        "A loan approval system that discriminates by neighborhood"
      ],
      reflectionQuestions: [
        "Have you ever noticed an app or website treating people differently? How?",
        "If you were designing an AI system, how would you make sure it's fair to everyone?"
      ]
    },
    {
      title: "Privacy and Personal Data",
      subtitle: "Lesson 3: Your Digital Footprint",
      description: "Understanding what data you share and how to protect yourself",
      keyPoints: ["Personal Information", "Data Collection", "Privacy Rights"],
      interactive: "Privacy Settings Workshop",
      icon: Shield,
      content: "Every time you use an app, website, or AI tool, you leave digital breadcrumbs. These breadcrumbs tell a story about you - what you like, where you go, who your friends are. While this helps AI give you better recommendations, it's important to understand what you're sharing and have control over your personal information.",
      scenarios: [
        "A social media app using your photos to train face recognition",
        "A shopping website tracking your browsing to show targeted ads",
        "A study app collecting data about your learning habits"
      ],
      reflectionQuestions: [
        "What personal information do you think your favorite apps know about you?",
        "When is it okay to share personal data, and when should you be careful?"
      ]
    },
    {
      title: "Responsibility and Accountability",
      subtitle: "Lesson 4: Who's in Charge?",
      description: "Understanding who's responsible when AI makes mistakes",
      keyPoints: ["Human Oversight", "AI Limitations", "Responsibility"],
      interactive: "Who's Responsible? Game",
      icon: Users,
      content: "When an AI makes a mistake, who's fault is it? The person who built it? The person using it? Or the AI itself? The answer is: AI is a tool, like a calculator or a car. The humans who build, program, and use AI are responsible for making sure it's used safely and fairly. This means we all need to think carefully about how we use AI.",
      scenarios: [
        "An AI homework helper gives you wrong information for a school project",
        "A delivery robot causes an accident because it was programmed poorly",
        "An AI chatbot gives harmful advice to a user"
      ],
      reflectionQuestions: [
        "If you use AI to help with homework, what's your responsibility as a student?",
        "Who should be held accountable when AI systems cause problems?"
      ]
    },
    {
      title: "Power, Society, and AI",
      subtitle: "Lesson 5: AI's Impact on Everyone",
      description: "How AI affects different people and communities around the world",
      keyPoints: ["Digital Divide", "Global Impact", "Equity"],
      interactive: "AI Impact Mapper",
      icon: Brain,
      content: "AI doesn't affect everyone the same way. Some people have access to the latest AI tools and education, while others don't. Some communities benefit from AI innovations, while others might be left behind or even harmed. Understanding these differences helps us work toward AI that benefits everyone, not just those with the most resources.",
      scenarios: [
        "Students in wealthy schools get AI tutoring tools, while others don't",
        "AI translation helps connect people globally, but only works for major languages",
        "AI job automation affects some workers more than others"
      ],
      reflectionQuestions: [
        "How might AI tools create advantages for some students but not others?",
        "What can young people like you do to help make AI more fair and accessible?"
      ]
    },
    {
      title: "Using AI Responsibly",
      subtitle: "Lesson 6: Your AI Code of Ethics",
      description: "Creating your personal guidelines for ethical AI use",
      keyPoints: ["Ethical Use", "Critical Thinking", "Responsible Creation"],
      interactive: "Create Your AI Ethics Code",
      icon: Heart,
      content: "Now that you understand AI better, it's time to create your own rules for using it responsibly. Think of it like having good manners, but for technology. Just like you wouldn't copy someone else's homework, you need guidelines for using AI fairly, honestly, and in ways that help rather than harm others.",
      scenarios: [
        "Using AI to help brainstorm ideas vs. having AI do your entire assignment",
        "Sharing AI-generated content without labeling it as AI-made",
        "Using AI tools that might have been trained on stolen or private data"
      ],
      reflectionQuestions: [
        "What are your personal rules for using AI in school?",
        "How will you make sure AI helps you learn rather than replacing your thinking?"
      ]
    }
  ]

  const responsibleAIGuidelines = {
    do: [
      "Always verify AI-generated information with reliable sources",
      "Label content when you use AI to create it",
      "Respect others' privacy and don't share personal information with AI",
      "Use AI to enhance your learning, not replace critical thinking",
      "Choose AI tools from companies that are transparent about their practices",
      "Speak up when you see AI being used unfairly"
    ],
    dont: [
      "Don't trust AI blindly - always think for yourself",
      "Don't use AI to cheat on homework or tests",
      "Don't share others' personal photos or information with AI systems",
      "Don't believe everything AI tells you without checking",
      "Don't use AI to create content that could hurt or mislead others",
      "Don't give up your ability to think independently"
    ]
  }

  const ethicalScenarios = [
    {
      title: "AI Homework Helper Dilemma",
      scenario: "You're struggling with a math assignment and your friend suggests using an AI tool that can solve the problems instantly. Your teacher said to show your work and explain your thinking. What do you do?",
      options: [
        "Use AI to get the answers and copy them",
        "Use AI to check your work after solving it yourself",
        "Ask AI to explain the concepts so you can learn",
        "Avoid AI completely and struggle alone"
      ],
      correct: 2,
      explanation: "Using AI to understand concepts helps you learn while being honest about your process. This builds real knowledge instead of just getting grades."
    },
    {
      title: "Biased Photo Tagging",
      scenario: "You notice that the photo app on your phone consistently fails to recognize faces of your friends from different ethnic backgrounds, but it easily recognizes others. What should you do?",
      options: [
        "Ignore it - that's just how technology works",
        "Stop using the app and tell your friends",
        "Report the issue to the app company",
        "Manually tag photos to help improve the system"
      ],
      correct: 2,
      explanation: "Reporting bias helps companies understand and fix problems. Your voice matters in making technology fairer for everyone."
    },
    {
      title: "Personal Data Sharing",
      scenario: "A fun new app wants access to your photos, location, contacts, and browsing history to give you 'personalized experiences.' All your friends are using it. What do you do?",
      options: [
        "Give all permissions - everyone else does it",
        "Don't use the app at all",
        "Only give permissions that seem necessary for the app's function",
        "Lie about your age to avoid giving permissions"
      ],
      correct: 2,
      explanation: "Being selective about permissions protects your privacy while still letting you enjoy apps. You have the right to control your personal data."
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

              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
                {module.description}
              </p>

              {/* Learning Objectives */}
              <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-8 border border-cyan-500/30 mb-8">
                <h3 className="text-2xl font-bold text-cyan-300 mb-4 text-center">What You'll Learn</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {learningObjectives.map((objective, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{objective}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
            >
              <div className="bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 border border-purple-500/30">
                <div className="text-3xl font-bold text-purple-400">6</div>
                <div className="text-gray-300">Learning Lessons</div>
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
              Your Journey to <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Ethical AI Thinking</span>
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

                      {/* Real-world scenarios */}
                      <div className="bg-slate-700/30 rounded-xl p-4 mb-6">
                        <h4 className="text-white font-semibold mb-3">Real-World Examples:</h4>
                        <ul className="space-y-2">
                          {section.scenarios?.map((scenario, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-gray-300 text-sm">{scenario}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                        {section.keyPoints.map((point, i) => (
                          <div key={i} className="flex items-center gap-2 text-sm">
                            <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                            <span className="text-gray-300">{point}</span>
                          </div>
                        ))}
                      </div>

                      {/* Reflection Questions */}
                      <div className="bg-purple-900/20 rounded-xl p-4 mb-6">
                        <h4 className="text-purple-300 font-semibold mb-3">Think About This:</h4>
                        <div className="space-y-2">
                          {section.reflectionQuestions?.map((question, i) => (
                            <p key={i} className="text-gray-300 text-sm italic">• {question}</p>
                          ))}
                        </div>
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

        {/* Responsible AI Guidelines */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                  Your AI Ethics Checklist
                </span>
              </h2>
              <p className="text-xl text-gray-300">
                Simple guidelines for using AI responsibly in your daily life
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* DO List */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-emerald-900/20 backdrop-blur-lg rounded-2xl p-8 border border-emerald-500/30"
              >
                <div className="flex items-center gap-3 mb-6">
                  <CheckCircle className="w-8 h-8 text-emerald-400" />
                  <h3 className="text-2xl font-bold text-white">DO These Things</h3>
                </div>
                <div className="space-y-4">
                  {responsibleAIGuidelines.do.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* DON'T List */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-red-900/20 backdrop-blur-lg rounded-2xl p-8 border border-red-500/30"
              >
                <div className="flex items-center gap-3 mb-6">
                  <Shield className="w-8 h-8 text-red-400" />
                  <h3 className="text-2xl font-bold text-white">DON'T Do These</h3>
                </div>
                <div className="space-y-4">
                  {responsibleAIGuidelines.dont.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Ethics in Action
                </span>
              </h2>
              <p className="text-xl text-gray-300">
                Practice ethical decision-making with real scenarios you might face
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
                My AI Learning Journey
              </h2>
              <p className="text-gray-300 text-lg mb-8 text-center">
                Reflect on what you've learned about AI and ethics
              </p>

              <div className="space-y-6">
                <div>
                  <label className="block text-white font-semibold mb-2">
                    Before this lesson: What I thought about AI
                  </label>
                  <textarea
                    placeholder="I used to think AI was just..."
                    className="w-full p-4 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
                    rows={3}
                  />
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">
                    After this lesson: How I will use AI responsibly
                  </label>
                  <textarea
                    value={reflectionText}
                    onChange={(e) => setReflectionText(e.target.value)}
                    placeholder="Now I understand that I should..."
                    className="w-full p-4 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
                    rows={3}
                  />
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">
                    My personal AI ethics rule
                  </label>
                  <textarea
                    placeholder="The most important thing I'll remember is..."
                    className="w-full p-4 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
                    rows={2}
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
                Ready for <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Your Next Adventure</span>?
              </h2>
              <p className="text-xl text-gray-300 mb-12">
                Great job learning about AI ethics! Now let's discover how to communicate with AI effectively.
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
                    Learn how to give clear instructions to AI and get amazing results
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
                    Explore all learning modules in your Mindcraft journey
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