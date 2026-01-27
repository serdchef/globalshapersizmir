import Head from 'next/head'
import React, { useState, useEffect } from 'react'
import Navbar from '@/components/mindcraft/layout/Navbar'
import Footer from '@/components/mindcraft/layout/Footer'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  MessageSquare, 
  Target, 
  Zap, 
  AlertTriangle, 
  Brain,
  CheckCircle, 
  ArrowRight, 
  Play, 
  Code,
  Lightbulb,
  Download,
  Save,
  Copy,
  X,
  Eye,
  Layers,
  User,
  FileText,
  List,
  Filter,
  Edit,
  RotateCcw,
  Sparkles,
  Terminal,
  Search,
  ArrowLeft,
  Plus,
  Minus
} from 'lucide-react'

// TypeScript Interfaces
interface PromptComponent {
  id: string
  name: string
  description: string
  examples: string[]
}

interface LegoPrompt {
  role: string
  context: string
  task: string
  constraint: string
  format: string
}

interface HallucinationQuestion {
  id: string
  category: string
  statements: {
    text: string
    isHallucination: boolean
    explanation: string
  }[]
}

interface UserProgress {
  completedSections: string[]
  promptsBuilt: number
  hallucinationsDetected: number
  lastVisit: string
}

export default function PromptEngineeringPage(): JSX.Element {
  // Core State Management
  const [activeTab, setActiveTab] = useState('foundation')
  const [userProgress, setUserProgress] = useState<UserProgress>({
    completedSections: [],
    promptsBuilt: 0,
    hallucinationsDetected: 0,
    lastVisit: new Date().toISOString()
  })

  // Lego Prompt Builder State
  const [legoPrompt, setLegoPrompt] = useState<LegoPrompt>({
    role: '',
    context: '',
    task: '',
    constraint: '',
    format: ''
  })
  const [generatedPrompt, setGeneratedPrompt] = useState('')
  const [promptAnalysis, setPromptAnalysis] = useState('')

  // Hallucination Hunter State
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showExplanation, setShowExplanation] = useState(false)
  const [hunterScore, setHunterScore] = useState(0)

  // Fix This Prompt State
  const [sliderPosition, setSliderPosition] = useState(0)

  // Load progress from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('mindcraft-prompt-progress')
    if (saved) {
      setUserProgress(JSON.parse(saved))
    }
  }, [])

  // Save progress to localStorage
  const saveProgress = (newProgress: Partial<UserProgress>) => {
    const updated = { ...userProgress, ...newProgress }
    setUserProgress(updated)
    localStorage.setItem('mindcraft-prompt-progress', JSON.stringify(updated))
  }

  // Prompt Engineering Foundation Content
  const foundationContent = {
    title: "Mastering the Dialogue: Prompt Engineering Fundamentals",
    sections: [
      {
        id: "three-cs",
        title: "The 3 C's of Prompt Engineering",
        icon: <Target className="w-6 h-6" />,
        content: [
          {
            name: "Clarity",
            description: "Be precise and unambiguous in your instructions",
            example: "Instead of 'write something about AI', use 'Write a 200-word explanation of how AI impacts education for high school students'"
          },
          {
            name: "Context", 
            description: "Provide relevant background information",
            example: "Include your role, purpose, audience, and constraints"
          },
          {
            name: "Constraints",
            description: "Define boundaries and desired output format",
            example: "Specify length, style, tone, and any limitations"
          }
        ]
      },
      {
        id: "techniques",
        title: "Core Prompting Techniques",
        icon: <Brain className="w-6 h-6" />,
        content: [
          {
            name: "Zero-Shot Prompting",
            description: "Direct instruction without examples",
            example: "Translate the following English text to French: 'Hello, how are you today?'"
          },
          {
            name: "Few-Shot Prompting",
            description: "Learn from examples before performing the task",
            example: "Input: cat → Output: feline animal\nInput: dog → Output: canine animal\nInput: bird → ?"
          },
          {
            name: "Chain of Thought (CoT)",
            description: "Step-by-step reasoning process",
            example: "Think step by step: If a train travels 60 miles in 2 hours, what is its speed?"
          }
        ]
      }
    ]
  }

  // Prompt Components for Lego Builder
  const promptComponents: Record<string, PromptComponent[]> = {
    role: [
      { id: 'expert', name: 'Expert', description: 'Subject matter expert', examples: ['You are a biology expert...', 'As a marketing professional...'] },
      { id: 'teacher', name: 'Teacher', description: 'Educational instructor', examples: ['You are a patient teacher...', 'As an experienced educator...'] },
      { id: 'assistant', name: 'Assistant', description: 'Helpful aide', examples: ['You are a helpful assistant...', 'Acting as a research assistant...'] },
      { id: 'analyst', name: 'Analyst', description: 'Data analyzer', examples: ['You are a data analyst...', 'As a business analyst...'] }
    ],
    context: [
      { id: 'academic', name: 'Academic', description: 'Educational setting', examples: ['For a college-level course...', 'In an academic research context...'] },
      { id: 'business', name: 'Business', description: 'Professional environment', examples: ['In a corporate setting...', 'For business decision-making...'] },
      { id: 'creative', name: 'Creative', description: 'Artistic or innovative', examples: ['For creative brainstorming...', 'In a design thinking session...'] },
      { id: 'technical', name: 'Technical', description: 'Engineering or IT', examples: ['In a software development context...', 'For technical documentation...'] }
    ],
    task: [
      { id: 'analyze', name: 'Analyze', description: 'Break down and examine', examples: ['Analyze the following data...', 'Examine the key factors...'] },
      { id: 'create', name: 'Create', description: 'Generate new content', examples: ['Create a comprehensive plan...', 'Generate innovative ideas...'] },
      { id: 'explain', name: 'Explain', description: 'Clarify and describe', examples: ['Explain the concept clearly...', 'Describe the process step-by-step...'] },
      { id: 'compare', name: 'Compare', description: 'Find similarities/differences', examples: ['Compare and contrast...', 'Evaluate the differences between...'] }
    ],
    constraint: [
      { id: 'length', name: 'Length', description: 'Word/character limits', examples: ['In exactly 100 words...', 'Keep it under 500 characters...'] },
      { id: 'audience', name: 'Audience', description: 'Target demographic', examples: ['For a general audience...', 'Suitable for experts in the field...'] },
      { id: 'tone', name: 'Tone', description: 'Communication style', examples: ['Use a professional tone...', 'Keep it casual and friendly...'] },
      { id: 'accuracy', name: 'Accuracy', description: 'Precision requirements', examples: ['Be factually accurate...', 'Include only verified information...'] }
    ],
    format: [
      { id: 'list', name: 'List', description: 'Bulleted or numbered', examples: ['Present as a bulleted list...', 'Format as numbered steps...'] },
      { id: 'essay', name: 'Essay', description: 'Structured writing', examples: ['Write in essay format...', 'Structure as introduction, body, conclusion...'] },
      { id: 'table', name: 'Table', description: 'Tabular data', examples: ['Present in a table format...', 'Use columns and rows...'] },
      { id: 'code', name: 'Code', description: 'Programming format', examples: ['Provide as code snippet...', 'Format as executable code...'] }
    ]
  }

  // Hallucination Hunter Questions
  const hallucinationQuestions: HallucinationQuestion[] = [
    {
      id: 'history',
      category: 'Historical Facts',
      statements: [
        {
          text: "The Great Wall of China was built in a single dynasty and took exactly 20 years to complete.",
          isHallucination: true,
          explanation: "The Great Wall was built over many dynasties spanning more than 2,000 years, not in a single 20-year period."
        },
        {
          text: "World War II ended in 1945 with Japan's surrender after the atomic bombings.",
          isHallucination: false,
          explanation: "This is accurate. Japan surrendered on August 15, 1945, following the atomic bombings of Hiroshima and Nagasaki."
        },
        {
          text: "The Berlin Wall was constructed in 1961 and divided East and West Berlin.",
          isHallucination: false,
          explanation: "Correct. The Berlin Wall was built in 1961 and served as a barrier between East and West Berlin until 1989."
        }
      ]
    },
    {
      id: 'science',
      category: 'Scientific Claims',
      statements: [
        {
          text: "Water boils at 100°C at sea level under standard atmospheric pressure.",
          isHallucination: false,
          explanation: "This is scientifically accurate. Water's boiling point is 100°C (212°F) at sea level."
        },
        {
          text: "Humans use only 10% of their brain capacity, leaving 90% unused potential.",
          isHallucination: true,
          explanation: "This is a persistent myth. Neuroimaging shows humans use virtually all of their brain, even during simple tasks."
        },
        {
          text: "Photosynthesis converts sunlight, carbon dioxide, and water into glucose and oxygen.",
          isHallucination: false,
          explanation: "Correct. This accurately describes the basic process of photosynthesis in plants."
        }
      ]
    },
    {
      id: 'technology',
      category: 'AI & Technology',
      statements: [
        {
          text: "ChatGPT was trained on internet data up to its knowledge cutoff date.",
          isHallucination: false,
          explanation: "This is accurate. Large language models like ChatGPT are trained on text from the internet up to a specific cutoff date."
        },
        {
          text: "AI systems consume zero energy and have no environmental impact.",
          isHallucination: true,
          explanation: "This is false. AI systems require significant computational power, leading to substantial energy consumption and environmental impact."
        },
        {
          text: "Machine learning algorithms can learn patterns from large datasets.",
          isHallucination: false,
          explanation: "Correct. This is the fundamental principle of how machine learning works."
        }
      ]
    }
  ]

  // Prompt Examples for Fix This Prompt
  const promptExamples = [
    {
      weak: "Write something about climate change.",
      strong: "As an environmental science educator, create a 300-word explanation of how climate change affects ocean ecosystems, written for high school students, including specific examples and actionable solutions they can implement.",
      improvements: [
        "Added specific role (environmental science educator)",
        "Defined clear scope (ocean ecosystems)",
        "Specified target audience (high school students)",
        "Set word limit (300 words)",
        "Requested specific examples and solutions"
      ]
    }
  ]

  // Generate Lego Prompt
  const generateLegoPrompt = () => {
    if (!legoPrompt.role || !legoPrompt.task) return

    const parts = []
    if (legoPrompt.role) parts.push(legoPrompt.role)
    if (legoPrompt.context) parts.push(legoPrompt.context)
    if (legoPrompt.task) parts.push(legoPrompt.task)
    if (legoPrompt.constraint) parts.push(legoPrompt.constraint)
    if (legoPrompt.format) parts.push(legoPrompt.format)

    const generated = parts.join(' ')
    setGeneratedPrompt(generated)
    
    // Simple analysis
    const analysis = `
Prompt Quality: ${parts.length >= 4 ? 'High' : parts.length >= 3 ? 'Medium' : 'Basic'}
Components: ${parts.length}/5
Clarity: ${legoPrompt.task ? '✓' : '✗'}
Context: ${legoPrompt.context ? '✓' : '✗'}
Constraints: ${legoPrompt.constraint ? '✓' : '✗'}
    `
    setPromptAnalysis(analysis)
    
    saveProgress({ promptsBuilt: userProgress.promptsBuilt + 1 })
  }

  // Handle Hallucination Answer
  const handleHallucinationAnswer = (index: number) => {
    setSelectedAnswer(index)
    setShowExplanation(true)
    
    const isCorrect = hallucinationQuestions[currentQuestion].statements[index].isHallucination
    if (isCorrect) {
      setHunterScore(hunterScore + 1)
      saveProgress({ hallucinationsDetected: userProgress.hallucinationsDetected + 1 })
    }
  }

  // Export Progress
  const exportHandbook = () => {
    const handbook = {
      progress: userProgress,
      prompts: generatedPrompt ? [generatedPrompt] : [],
      exportDate: new Date().toISOString(),
      version: '1.0'
    }
    
    const blob = new Blob([JSON.stringify(handbook, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'mindcraft-prompt-engineering-handbook.json'
    a.click()
  }

  return (
    <>
      <Head>
        <title>Interactive Communication Laboratory - Mindcraft</title>
        <meta name="description" content="Master the art of AI communication through hands-on prompt engineering training" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
        <Navbar />
        
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="mx-auto w-20 h-20 bg-emerald-400/20 rounded-2xl flex items-center justify-center mb-8">
                <Terminal className="w-10 h-10 text-emerald-400" />
              </div>

              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
                  Interactive Communication Laboratory
                </span>
              </h1>
              
              <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
                Master the art of AI communication through hands-on training. Learn the science behind effective prompting, 
                detect AI hallucinations, and build your prompt engineering expertise.
              </p>

              <div className="flex flex-wrap justify-center gap-4 mb-12">
                <div className="bg-white/10 backdrop-blur-lg rounded-lg border border-white/20 p-4">
                  <div className="text-emerald-400 text-2xl font-bold">{userProgress.promptsBuilt}</div>
                  <div className="text-white/70 text-sm">Prompts Built</div>
                </div>
                <div className="bg-white/10 backdrop-blur-lg rounded-lg border border-white/20 p-4">
                  <div className="text-blue-400 text-2xl font-bold">{userProgress.hallucinationsDetected}</div>
                  <div className="text-white/70 text-sm">Hallucinations Caught</div>
                </div>
                <div className="bg-white/10 backdrop-blur-lg rounded-lg border border-white/20 p-4">
                  <div className="text-purple-400 text-2xl font-bold">{userProgress.completedSections.length}</div>
                  <div className="text-white/70 text-sm">Sections Completed</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Navigation Tabs */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap justify-center gap-2 mb-8 bg-white/10 backdrop-blur-lg rounded-xl p-2 border border-white/20">
              {[
                { id: 'foundation', label: 'Foundation', icon: <Brain className="w-4 h-4" /> },
                { id: 'builder', label: 'Lego Builder', icon: <Layers className="w-4 h-4" /> },
                { id: 'hunter', label: 'Hallucination Hunter', icon: <AlertTriangle className="w-4 h-4" /> },
                { id: 'fixer', label: 'Prompt Fixer', icon: <Edit className="w-4 h-4" /> }
              ].map((tab) => (
                <motion.button
                  key={tab.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                    activeTab === tab.id
                      ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/25'
                      : 'text-white/70 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {tab.icon}
                  {tab.label}
                </motion.button>
              ))}
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={exportHandbook}
                className="flex items-center gap-2 px-6 py-3 rounded-lg font-semibold bg-purple-500 hover:bg-purple-600 text-white transition-all"
              >
                <Download className="w-4 h-4" />
                Export Handbook
              </motion.button>
            </div>

            {/* Tab Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {activeTab === 'foundation' && (
                  <div className="space-y-8">
                    <div className="bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 p-8">
                      <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                        <Brain className="w-8 h-8 text-emerald-400" />
                        {foundationContent.title}
                      </h2>
                      
                      <div className="grid md:grid-cols-2 gap-8">
                        {foundationContent.sections.map((section) => (
                          <div key={section.id} className="bg-black/30 rounded-xl p-6">
                            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                              <div className="text-emerald-400">{section.icon}</div>
                              {section.title}
                            </h3>
                            
                            <div className="space-y-4">
                              {section.content.map((item, index) => (
                                <div key={index} className="border-l-4 border-emerald-400/50 pl-4">
                                  <h4 className="font-semibold text-emerald-400 mb-2">{item.name}</h4>
                                  <p className="text-white/80 text-sm mb-2">{item.description}</p>
                                  <div className="bg-slate-800/50 rounded-lg p-3 text-white/70 text-sm font-mono">
                                    {item.example}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Energy Consumption Warning */}
                      <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="mt-8 bg-orange-400/20 border border-orange-400/30 rounded-xl p-6"
                      >
                        <h3 className="text-xl font-bold text-orange-400 mb-4 flex items-center gap-3">
                          <AlertTriangle className="w-6 h-6" />
                          Sustainability Alert: AI Energy Impact
                        </h3>
                        <p className="text-white/80 mb-4">
                          Complex AI queries consume significant water and energy. A single ChatGPT conversation can use as much 
                          electricity as powering a home for 30 minutes. Always consider:
                        </p>
                        <ul className="list-disc list-inside text-white/70 space-y-1">
                          <li>Use efficient, specific prompts to reduce computation</li>
                          <li>Avoid unnecessary iterative refinements</li>
                          <li>Batch similar queries together</li>
                          <li>Consider the environmental cost of AI assistance</li>
                        </ul>
                      </motion.div>
                    </div>
                  </div>
                )}

                {activeTab === 'builder' && (
                  <div className="space-y-8">
                    <div className="bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 p-8">
                      <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                        <Layers className="w-8 h-8 text-emerald-400" />
                        Lego Prompt Builder
                      </h2>
                      
                      <div className="grid lg:grid-cols-2 gap-8">
                        <div className="space-y-6">
                          {Object.entries(promptComponents).map(([category, components]) => (
                            <div key={category} className="bg-black/30 rounded-xl p-6">
                              <h3 className="text-lg font-semibold text-white mb-4 capitalize">
                                {category} Component
                              </h3>
                              
                              <div className="grid grid-cols-2 gap-3">
                                {components.map((component) => (
                                  <motion.button
                                    key={component.id}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={() => {
                                      setLegoPrompt(prev => ({
                                        ...prev,
                                        [category]: component.examples[0]
                                      }))
                                    }}
                                    className={`p-3 rounded-lg border text-left transition-all ${
                                      legoPrompt[category as keyof LegoPrompt] === component.examples[0]
                                        ? 'bg-emerald-500/20 border-emerald-400 text-emerald-400'
                                        : 'bg-white/10 border-white/20 text-white/70 hover:bg-white/20'
                                    }`}
                                  >
                                    <div className="font-semibold text-sm">{component.name}</div>
                                    <div className="text-xs opacity-70">{component.description}</div>
                                  </motion.button>
                                ))}
                              </div>
                            </div>
                          ))}
                          
                          <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={generateLegoPrompt}
                            disabled={!legoPrompt.role || !legoPrompt.task}
                            className="w-full py-4 bg-emerald-500 hover:bg-emerald-600 disabled:bg-gray-400 text-white rounded-lg font-semibold transition-all"
                          >
                            Generate Prompt
                          </motion.button>
                        </div>
                        
                        <div className="space-y-6">
                          {generatedPrompt && (
                            <div className="bg-black/30 rounded-xl p-6">
                              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-3">
                                <Code className="w-5 h-5 text-emerald-400" />
                                Generated Prompt
                              </h3>
                              <div className="bg-slate-800 rounded-lg p-4 text-white font-mono text-sm mb-4">
                                {generatedPrompt}
                              </div>
                              <div className="flex gap-2">
                                <button
                                  onClick={() => navigator.clipboard.writeText(generatedPrompt)}
                                  className="flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-sm transition-all"
                                >
                                  <Copy className="w-4 h-4" />
                                  Copy
                                </button>
                                <button
                                  onClick={() => {
                                    setLegoPrompt({role: '', context: '', task: '', constraint: '', format: ''})
                                    setGeneratedPrompt('')
                                    setPromptAnalysis('')
                                  }}
                                  className="flex items-center gap-2 px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-lg text-sm transition-all"
                                >
                                  <RotateCcw className="w-4 h-4" />
                                  Reset
                                </button>
                              </div>
                            </div>
                          )}
                          
                          {promptAnalysis && (
                            <div className="bg-black/30 rounded-xl p-6">
                              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-3">
                                <Target className="w-5 h-5 text-blue-400" />
                                Analysis
                              </h3>
                              <pre className="text-white/80 text-sm whitespace-pre-wrap">{promptAnalysis}</pre>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'hunter' && (
                  <div className="space-y-8">
                    <div className="bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 p-8">
                      <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                        <AlertTriangle className="w-8 h-8 text-emerald-400" />
                        Hallucination Hunter
                      </h2>
                      
                      <div className="mb-6 flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="text-white/70">Question {currentQuestion + 1} of {hallucinationQuestions.length}</div>
                          <div className="text-emerald-400 font-semibold">Score: {hunterScore}</div>
                        </div>
                        <div className="text-white/70 text-sm">
                          Category: {hallucinationQuestions[currentQuestion]?.category}
                        </div>
                      </div>

                      {hallucinationQuestions[currentQuestion] && (
                        <div className="bg-black/30 rounded-xl p-6">
                          <h3 className="text-lg font-semibold text-white mb-6">
                            Identify the hallucination (false statement):
                          </h3>
                          
                          <div className="space-y-4 mb-6">
                            {hallucinationQuestions[currentQuestion].statements.map((statement, index) => (
                              <motion.button
                                key={index}
                                whileHover={{ scale: 1.01 }}
                                whileTap={{ scale: 0.99 }}
                                onClick={() => handleHallucinationAnswer(index)}
                                disabled={selectedAnswer !== null}
                                className={`w-full p-4 rounded-lg border text-left transition-all ${
                                  selectedAnswer === index
                                    ? statement.isHallucination
                                      ? 'bg-green-500/20 border-green-400 text-green-400'
                                      : 'bg-red-500/20 border-red-400 text-red-400'
                                    : 'bg-white/10 border-white/20 text-white/80 hover:bg-white/20'
                                }`}
                              >
                                {statement.text}
                              </motion.button>
                            ))}
                          </div>
                          
                          {showExplanation && selectedAnswer !== null && (
                            <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="bg-slate-800/50 rounded-lg p-4 mb-6"
                            >
                              <h4 className="font-semibold text-white mb-2">Explanation:</h4>
                              <p className="text-white/80">
                                {hallucinationQuestions[currentQuestion].statements[selectedAnswer].explanation}
                              </p>
                            </motion.div>
                          )}
                          
                          {showExplanation && (
                            <div className="flex gap-4">
                              <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => {
                                  if (currentQuestion < hallucinationQuestions.length - 1) {
                                    setCurrentQuestion(currentQuestion + 1)
                                    setSelectedAnswer(null)
                                    setShowExplanation(false)
                                  }
                                }}
                                disabled={currentQuestion >= hallucinationQuestions.length - 1}
                                className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 disabled:bg-gray-400 text-white rounded-lg font-semibold transition-all"
                              >
                                Next Question
                              </motion.button>
                              
                              <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => {
                                  setCurrentQuestion(0)
                                  setSelectedAnswer(null)
                                  setShowExplanation(false)
                                  setHunterScore(0)
                                }}
                                className="px-6 py-3 bg-gray-500 hover:bg-gray-600 text-white rounded-lg font-semibold transition-all"
                              >
                                Reset Quiz
                              </motion.button>
                            </div>
                          )}
                        </div>
                      )}
                      
                      {/* Human Checkpoint Notice */}
                      <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="mt-8 bg-blue-400/20 border border-blue-400/30 rounded-xl p-6"
                      >
                        <h3 className="text-xl font-bold text-blue-400 mb-4 flex items-center gap-3">
                          <User className="w-6 h-6" />
                          Critical: Human Checkpoint Required
                        </h3>
                        <p className="text-white/80">
                          Always verify AI-generated information through human expertise and reliable sources. 
                          AI systems can confidently present false information that appears credible. 
                          Your role as a human in the loop is essential for quality control.
                        </p>
                      </motion.div>
                    </div>
                  </div>
                )}

                {activeTab === 'fixer' && (
                  <div className="space-y-8">
                    <div className="bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 p-8">
                      <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                        <Edit className="w-8 h-8 text-emerald-400" />
                        Fix This Prompt
                      </h2>
                      
                      <div className="bg-black/30 rounded-xl p-6">
                        <div className="mb-6">
                          <label className="block text-white/70 mb-2">
                            Slide to reveal improvements: {sliderPosition}%
                          </label>
                          <input
                            type="range"
                            min="0"
                            max="100"
                            value={sliderPosition}
                            onChange={(e) => setSliderPosition(Number(e.target.value))}
                            className="w-full h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer"
                          />
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h3 className="text-lg font-semibold text-red-400 mb-4">Weak Prompt</h3>
                            <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4 text-white/80">
                              {promptExamples[0].weak}
                            </div>
                          </div>
                          
                          <div>
                            <h3 className="text-lg font-semibold text-emerald-400 mb-4">Master Version</h3>
                            <div className="bg-emerald-900/20 border border-emerald-500/30 rounded-lg p-4 text-white/80 relative overflow-hidden">
                              <div 
                                className="absolute inset-0 bg-black/80 transition-transform duration-500 ease-in-out z-10"
                                style={{ transform: `translateX(${sliderPosition - 100}%)` }}
                              />
                              <div className="relative z-20">
                                {promptExamples[0].strong}
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        {sliderPosition > 50 && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mt-6 bg-slate-800/50 rounded-lg p-4"
                          >
                            <h4 className="font-semibold text-white mb-4">Key Improvements:</h4>
                            <ul className="space-y-2">
                              {promptExamples[0].improvements.map((improvement, index) => (
                                <li key={index} className="flex items-start gap-3 text-white/80">
                                  <CheckCircle className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                                  {improvement}
                                </li>
                              ))}
                            </ul>
                          </motion.div>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}
