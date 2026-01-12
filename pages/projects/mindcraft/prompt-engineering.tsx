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

  const learningObjectives = [
    "Understand what prompts are and why they matter",
    "Learn how different AI tools respond to prompts",
    "Write clear and effective prompts for various tasks",
    "Use popular AI tools like ChatGPT, DALL-E, and others",
    "Improve prompt quality through testing and refinement",
    "Apply ethical considerations when using AI tools"
  ]

  const popularAITools = [
    {
      name: "ChatGPT",
      description: "A conversational AI that can help with writing, homework, coding, and creative tasks",
      bestFor: "Writing assistance, explanations, problem-solving",
      examplePrompt: "Help me write a short paragraph explaining photosynthesis for a 7th-grade science project. Use simple words and include why it's important for plants.",
      icon: MessageSquare,
      color: "from-green-500 to-emerald-500"
    },
    {
      name: "DALL-E / Midjourney",
      description: "AI tools that create images from text descriptions",
      bestFor: "Art creation, visual projects, illustrations",
      examplePrompt: "A friendly robot teaching children in a colorful classroom, cartoon style, bright lighting",
      icon: Palette,
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Claude",
      description: "An AI assistant focused on helpful, harmless, and honest responses",
      bestFor: "Research assistance, analysis, careful explanations",
      examplePrompt: "Explain the main causes of World War I in a way that's easy to understand, with specific examples and dates.",
      icon: Brain,
      color: "from-blue-500 to-indigo-500"
    },
    {
      name: "Google Gemini/Bard",
      description: "Google's AI that can search the web and provide current information",
      bestFor: "Current events, research, fact-checking",
      examplePrompt: "What are the latest developments in renewable energy technology that might affect my generation?",
      icon: Target,
      color: "from-orange-500 to-red-500"
    }
  ]

  const promptBestPractices = [
    {
      title: "Be Specific",
      description: "Instead of 'write a story,' try 'write a 200-word mystery story about a missing pet'",
      example: "❌ Help with math\n✅ Explain how to solve quadratic equations using the quadratic formula, with step-by-step examples"
    },
    {
      title: "Give Context",
      description: "Tell the AI your grade level, subject, or purpose",
      example: "❌ What is DNA?\n✅ I'm a 10th grader studying biology. Explain DNA structure and function for my upcoming test"
    },
    {
      title: "Ask Step-by-Step",
      description: "Break complex requests into smaller parts",
      example: "❌ Plan my science project\n✅ Help me brainstorm 5 science project ideas about plants, then explain how to test one hypothesis"
    },
    {
      title: "Provide Examples",
      description: "Show the AI what style or format you want",
      example: "❌ Summarize this article\n✅ Summarize this article in 3 bullet points, like this: • Main idea • Supporting detail • Conclusion"
    },
    {
      title: "Test and Refine",
      description: "Try different versions of your prompt to get better results",
      example: "Start simple, then add details if the response isn't what you need"
    }
  ]

  const learningContent = [
    {
      title: "Introduction to Prompt Engineering",
      subtitle: "Lesson 1: Speaking AI's Language",
      description: "Learn what prompts are and why they're the key to getting great results from AI",
      keyPoints: ["What is a Prompt", "Why Quality Matters", "AI Communication Basics"],
      interactive: "Try Your First Prompt",
      icon: MessageSquare,
      content: "A prompt is like giving instructions to a very smart assistant who takes everything literally. Imagine telling your friend to 'get something from the store' versus 'please buy 2 liters of milk from the grocery store on Main Street.' The more specific you are, the more likely you'll get exactly what you want! AI works the same way - clear, detailed prompts lead to much better results.",
      scenarios: [
        "Asking AI to help with homework vs. asking for answers",
        "Getting creative writing help vs. having AI write everything",
        "Using AI for research vs. trusting it blindly"
      ],
      reflectionQuestions: [
        "Think of a time when someone misunderstood your instructions. How could clearer communication have helped?",
        "What's the difference between getting help and having someone do your work?"
      ]
    },
    {
      title: "How AI Tools Respond to Prompts",
      subtitle: "Lesson 2: Understanding AI Behavior",
      description: "Discover how different types of prompts create different AI responses",
      keyPoints: ["Context Importance", "Specificity Effects", "AI Limitations"],
      interactive: "Prompt Comparison Lab",
      icon: Target,
      content: "AI is like a very knowledgeable student who wants to please but needs clear directions. If you ask 'tell me about dogs,' you might get a general essay. But if you ask 'explain why dogs make good pets for families with young children, including care requirements,' you'll get focused, useful information. Context, specificity, and clarity are the three pillars of great prompts.",
      scenarios: [
        "Vague prompt: 'Help with science' vs. Specific: 'Explain photosynthesis for my 8th grade presentation'",
        "No context: 'Write a story' vs. With context: 'Write a 300-word adventure story for a school magazine'",
        "Too broad: 'Math help' vs. Just right: 'Show me how to solve this algebra problem step-by-step'"
      ],
      reflectionQuestions: [
        "How does giving context change the type of help you receive?",
        "What happens when you're too vague vs. too specific in your requests?"
      ]
    },
    {
      title: "Prompt Writing Best Practices",
      subtitle: "Lesson 3: The Formula for Success",
      description: "Master the essential techniques for writing effective prompts",
      keyPoints: ["Structure Templates", "Role Assignment", "Output Formatting"],
      interactive: "Build Perfect Prompts",
      icon: Zap,
      content: "Great prompts follow a simple formula: WHO (give the AI a role) + WHAT (clear task) + HOW (desired format) + WHY (context/purpose). For example: 'You are a friendly tutor (WHO). Explain the water cycle (WHAT) in simple bullet points (HOW) for my 6th-grade science study guide (WHY).' This structure helps AI understand exactly what you need.",
      scenarios: [
        "School project: Getting AI to act as a historical figure for an interview",
        "Creative writing: Asking AI to help brainstorm story ideas with specific themes",
        "Study help: Having AI create practice questions for an upcoming test"
      ],
      reflectionQuestions: [
        "How does giving AI a specific role change its responses?",
        "What's the benefit of specifying the output format you want?"
      ]
    },
    {
      title: "Common Mistakes and How to Fix Them",
      subtitle: "Lesson 4: Learning from Prompt Problems",
      description: "Identify and avoid the most common prompt engineering mistakes",
      keyPoints: ["Vague Language", "Missing Context", "Unrealistic Expectations"],
      interactive: "Prompt Debugging Challenge",
      icon: AlertTriangle,
      content: "Even experienced users make prompt mistakes! Common problems include being too vague ('help me write'), giving no context ('what should I do?'), or expecting AI to read your mind. Learning to spot these issues and fix them is like becoming a detective for better AI communication. Remember: AI is powerful but needs clear guidance.",
      scenarios: [
        "Problem: 'Do my homework' → Solution: 'Help me understand this math concept so I can solve similar problems'",
        "Problem: 'Make it better' → Solution: 'Improve this paragraph by adding specific examples and clearer transitions'",
        "Problem: 'What's the answer?' → Solution: 'Explain how to approach this type of problem and show the thinking process'"
      ],
      reflectionQuestions: [
        "Why is it better to ask for help understanding rather than asking for answers?",
        "How can you tell if your prompt is too vague?"
      ]
    },
    {
      title: "Real-World Applications and Ethics",
      subtitle: "Lesson 5: Using AI Responsibly",
      description: "Apply prompt engineering skills to real situations while maintaining ethical standards",
      keyPoints: ["Academic Integrity", "Creative Collaboration", "Critical Thinking"],
      interactive: "Ethical Prompt Designer",
      icon: Palette,
      content: "Prompt engineering isn't just about getting results - it's about using AI as a learning partner, not a shortcut. Whether you're writing stories, solving problems, or learning new topics, the goal is to enhance your thinking, not replace it. Good prompts help you learn and grow, while poor ones might lead to dependence or academic dishonesty.",
      scenarios: [
        "Acceptable: 'Help me brainstorm essay topics about climate change for my English class'",
        "Not acceptable: 'Write my entire essay about climate change'",
        "Good practice: 'Check my understanding of this math concept and point out any errors'",
        "Poor practice: 'Give me all the answers to this worksheet'"
      ],
      reflectionQuestions: [
        "What's the difference between getting help and cheating when using AI?",
        "How can you use AI to become a better learner rather than becoming dependent on it?"
      ]
    }
  ]

  const promptChallenges = [
    {
      title: "Homework Help Challenge",
      scenario: "You're struggling with a science assignment about the solar system. Which prompt will help you learn without cheating?",
      options: [
        "Do my science homework",
        "What are the planets?",
        "I'm working on a solar system project for 7th grade. Can you explain what makes each planet unique and help me organize this information for a poster?",
        "Give me facts about space"
      ],
      correct: 2,
      explanation: "This prompt asks for understanding and organization help rather than completed work, includes grade level context, and specifies the project format."
    },
    {
      title: "Creative Writing Assistant",
      scenario: "You want to write a short story for your English class. What's the best way to get AI help?",
      options: [
        "Write my story",
        "I need to write a 300-word mystery story for English class. Can you help me brainstorm interesting plot ideas and suggest how to create suspense?",
        "Give me a story",
        "Help with writing"
      ],
      correct: 1,
      explanation: "This prompt asks for brainstorming and guidance rather than a finished product, includes specific requirements, and focuses on learning writing techniques."
    },
    {
      title: "Study Buddy Challenge",
      scenario: "You're preparing for a history test about World War II. How should you prompt AI for the best study help?",
      options: [
        "Tell me about World War II",
        "What should I know for my test?",
        "I have a test on WWII causes and major events. Can you create 5 practice questions with explanations to help me study?",
        "Help me study"
      ],
      correct: 2,
      explanation: "This prompt specifies the test topic, asks for active study materials (practice questions), and focuses on understanding rather than memorization."
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

              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
                {module.description}
              </p>

              {/* Learning Objectives */}
              <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-8 border border-teal-500/30 mb-8">
                <h3 className="text-2xl font-bold text-teal-300 mb-4 text-center">What You'll Master</h3>
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
              <div className="bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 border border-emerald-500/30">
                <div className="text-3xl font-bold text-emerald-400">5</div>
                <div className="text-gray-300">Learning Lessons</div>
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

                      {/* Real-world scenarios */}
                      <div className="bg-slate-700/30 rounded-xl p-4 mb-6">
                        <h4 className="text-white font-semibold mb-3">Examples in Action:</h4>
                        <ul className="space-y-2">
                          {section.scenarios?.map((scenario, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
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
                      <div className="bg-teal-900/20 rounded-xl p-4 mb-6">
                        <h4 className="text-teal-300 font-semibold mb-3">Think About This:</h4>
                        <div className="space-y-2">
                          {section.reflectionQuestions?.map((question, i) => (
                            <p key={i} className="text-gray-300 text-sm italic">• {question}</p>
                          ))}
                        </div>
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

        {/* Popular AI Tools */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                  Popular AI Tools You Can Use
                </span>
              </h2>
              <p className="text-xl text-gray-300">
                Learn about different AI tools and how to write great prompts for each one
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {popularAITools.map((tool, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-6 border border-emerald-500/30"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${tool.color} rounded-xl flex items-center justify-center`}>
                      <tool.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{tool.name}</h3>
                      <p className="text-emerald-300 text-sm">{tool.bestFor}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4">{tool.description}</p>
                  
                  <div className="bg-slate-700/50 rounded-lg p-4">
                    <h4 className="text-emerald-300 font-semibold mb-2">Example Prompt:</h4>
                    <p className="text-gray-300 text-sm italic">"{tool.examplePrompt}"</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Best Practices Guide */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
                  Prompt Writing Best Practices
                </span>
              </h2>
              <p className="text-xl text-gray-300">
                Follow these guidelines to write prompts that get great results
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {promptBestPractices.map((practice, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 border border-teal-500/30"
                >
                  <h3 className="text-lg font-bold text-white mb-3">{practice.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{practice.description}</p>
                  <div className="bg-slate-700/50 rounded-lg p-3">
                    <pre className="text-xs text-gray-300 whitespace-pre-wrap font-mono">{practice.example}</pre>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Live Prompt Laboratory */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                  Practice Your Skills
                </span>
              </h2>
              <p className="text-xl text-gray-300">
                Test what you've learned with these real student scenarios
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
                My Prompt Engineering Learning
              </h2>
              <p className="text-gray-300 text-lg mb-8 text-center">
                Reflect on what you've learned about communicating with AI effectively
              </p>

              <div className="space-y-6">
                <div>
                  <label className="block text-white font-semibold mb-2">
                    Before this lesson: How I used to ask AI for help
                  </label>
                  <textarea
                    placeholder="I used to ask AI things like 'help me' or 'do this'..."
                    className="w-full p-4 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
                    rows={3}
                  />
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">
                    After this lesson: How I will write better prompts
                  </label>
                  <textarea
                    value={reflectionText}
                    onChange={(e) => setReflectionText(e.target.value)}
                    placeholder="Now I know that good prompts need context, clear goals, and..."
                    className="w-full p-4 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
                    rows={3}
                  />
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">
                    My go-to prompt template for school
                  </label>
                  <textarea
                    placeholder="For school assignments, I will start my prompts with..."
                    className="w-full p-4 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
                    rows={2}
                  />
                </div>

                <button className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-emerald-700 hover:to-teal-700 transition-all">
                  Save My Prompt Engineering Skills
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