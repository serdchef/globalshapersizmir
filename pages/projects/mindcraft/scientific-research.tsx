import Head from 'next/head'
import { useState } from 'react'
import Navbar from '@/components/mindcraft/layout/Navbar'
import Footer from '@/components/mindcraft/layout/Footer'
import { modulesData } from '@/utils/mindcraft/modulesData'
import { motion } from 'framer-motion'
import { 
  Microscope, 
  Search, 
  BookOpen, 
  PieChart, 
  Shield, 
  CheckCircle, 
  ArrowRight, 
  Play, 
  Code,
  Brain,
  Database,
  Target,
  Lightbulb,
  Users
} from 'lucide-react'

export default function ScientificResearchPage() {
  const [currentSection, setCurrentSection] = useState(0)
  const [reflectionText, setReflectionText] = useState('')

  const module = modulesData.find(m => m.id === 'scientific-research')
  
  if (!module) return null

  const learningObjectives = [
    "Understand what scientific research is and why it matters",
    "Learn to ask good research questions from everyday observations",
    "Collect and organize data using simple methods",
    "Analyze data to find patterns and draw conclusions",
    "Use AI tools responsibly to support research tasks",
    "Apply ethical principles when conducting research"
  ]

  const aiToolsForResearch = [
    {
      name: "ChatGPT/Claude",
      description: "AI assistants that can help summarize articles, explain concepts, and generate research ideas",
      uses: ["Summarizing long research articles", "Explaining difficult concepts", "Brainstorming research questions"],
      limitations: "May provide incorrect information, always verify facts with reliable sources",
      icon: Brain,
      color: "from-blue-500 to-indigo-500"
    },
    {
      name: "Google Scholar",
      description: "Search engine for academic papers and research studies",
      uses: ["Finding research papers on your topic", "Checking how often studies are cited", "Finding recent research"],
      limitations: "Some papers require subscriptions, need to evaluate source quality",
      icon: Search,
      color: "from-green-500 to-emerald-500"
    },
    {
      name: "Data Visualization Tools",
      description: "AI-powered tools like Tableau, Google Charts, or Canva that help create charts and graphs",
      uses: ["Creating charts from your data", "Making infographics", "Visualizing patterns"],
      limitations: "Need to choose appropriate chart types, ensure data accuracy",
      icon: PieChart,
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Survey Tools",
      description: "Platforms like Google Forms or SurveyMonkey with AI features for data collection",
      uses: ["Creating surveys for data collection", "Analyzing survey responses", "Organizing participant data"],
      limitations: "Need permission for surveys involving people, bias in question wording",
      icon: Users,
      color: "from-orange-500 to-red-500"
    }
  ]

  const researchEthicsPrinciples = [
    {
      title: "Honesty and Accuracy",
      description: "Always report your findings truthfully, even if they don't match what you expected",
      example: "If your plant growth experiment shows no difference between treatments, report that honestly rather than changing data",
      icon: CheckCircle
    },
    {
      title: "Respect for Privacy",
      description: "Protect people's personal information and get permission before collecting data about them",
      example: "If surveying classmates about study habits, don't share individual responses and ask for consent first",
      icon: Shield
    },
    {
      title: "Give Credit to Others",
      description: "Always cite your sources and don't copy other people's work without attribution",
      example: "When using information from a website or study, include the source and put quotes around copied text",
      icon: BookOpen
    },
    {
      title: "Recognize Limitations",
      description: "Be honest about what your study can and cannot prove",
      example: "A survey of 20 students at your school can't represent all teenagers everywhere",
      icon: Target
    }
  ]

  const learningContent = [
    {
      title: "What Is Scientific Research?",
      description: "Discover how scientific thinking helps us understand the world around us",
      icon: Microscope,
      color: "from-indigo-500 to-blue-600",
      content: {
        theory: {
          title: "Understanding Research",
          points: [
            "Research is asking questions and finding evidence-based answers",
            "Scientific method: observe, question, hypothesize, test, conclude",
            "Difference between opinions and evidence-based conclusions",
            "How research helps solve real-world problems",
            "Why curiosity and questioning are important for learning"
          ]
        },
        practice: {
          title: "Practice Activities",
          points: [
            "Turn everyday observations into research questions",
            "Practice distinguishing facts from opinions",
            "Identify research examples in daily life (weather forecasts, medical studies)",
            "Scientific method flowchart exercise",
            "Research vs. random guessing comparison activity"
          ]
        },
        tools: [
          "Research question template",
          "Fact vs. opinion checklist",
          "Scientific method poster",
          "Real-world research examples list"
        ]
      },
      scenarios: [
        "Why do some plants grow taller than others?",
        "Do students perform better on tests in the morning or afternoon?",
        "Which type of music helps people focus while studying?"
      ],
      reflectionQuestions: [
        "What's the difference between a guess and a research-based conclusion?",
        "How can research help solve problems in your school or community?"
      ]
    },
    {
      title: "Formulating Research Questions",
      description: "Learn to turn your curiosity into clear, testable research questions",
      icon: Lightbulb,
      color: "from-purple-500 to-indigo-600",
      content: {
        theory: {
          title: "Question Design",
          points: [
            "Good research questions are specific and testable",
            "Difference between broad curiosity and focused questions",
            "PICO format: Population, Intervention, Comparison, Outcome",
            "Open vs. closed questions in research",
            "How to narrow down a topic that's too broad"
          ]
        },
        practice: {
          title: "Question Workshop",
          points: [
            "Transform broad topics into specific questions",
            "Practice using the 'What, How, Why, When, Where' framework",
            "Evaluate example questions: good vs. problematic",
            "Create testable predictions (hypotheses)",
            "Peer review of research questions"
          ]
        },
        tools: [
          "Question formulation template",
          "Research topic brainstorming sheet",
          "Question quality checklist",
          "Hypothesis writing guide"
        ]
      },
      scenarios: [
        "Bad: 'Are video games good?' Better: 'Do 10th graders who play strategy games for 1 hour daily score higher on problem-solving tests?'",
        "Bad: 'How does food affect people?' Better: 'Does eating breakfast improve attention during first-period classes?'",
        "Bad: 'Is social media bad?' Better: 'Do students who check social media during study time take longer to complete homework?'"
      ],
      reflectionQuestions: [
        "What makes a research question 'testable' versus just interesting?",
        "How can you make a question more specific without losing the interesting parts?"
      ]
    },
    {
      title: "Collecting and Organizing Data",
      description: "Master different ways to gather information and keep it organized",
      icon: Database,
      color: "from-blue-500 to-cyan-600",
      content: {
        theory: {
          title: "Data Collection Methods",
          points: [
            "Quantitative data (numbers) vs. qualitative data (descriptions)",
            "Primary data (you collect) vs. secondary data (others collected)",
            "Observation, surveys, interviews, and simple experiments",
            "Sample size: how many participants do you need?",
            "Avoiding bias in data collection"
          ]
        },
        practice: {
          title: "Data Collection Lab",
          points: [
            "Design and conduct a simple classroom survey",
            "Practice systematic observation techniques",
            "Create data collection sheets and forms",
            "Role-play interview techniques",
            "Organize raw data into tables and spreadsheets"
          ]
        },
        tools: [
          "Survey design template",
          "Data collection sheet",
          "Observation log format",
          "Interview question bank"
        ]
      },
      scenarios: [
        "Survey: How many hours do classmates spend on homework each night?",
        "Observation: Track which study spots in the library are most popular",
        "Experiment: Test which type of music helps concentration during math problems",
        "Interview: Ask teachers about effective study strategies"
      ],
      reflectionQuestions: [
        "When would you use a survey versus observation to collect data?",
        "How can you make sure your data collection is fair and unbiased?"
      ]
    },
    {
      title: "Analyzing Data and Drawing Conclusions",
      description: "Learn to find patterns in your data and decide what they mean",
      icon: PieChart,
      color: "from-green-500 to-blue-600",
      content: {
        theory: {
          title: "Data Analysis Basics",
          points: [
            "Finding patterns: averages, ranges, and trends",
            "Creating charts and graphs to visualize data",
            "What constitutes strong vs. weak evidence",
            "Correlation vs. causation: when things happen together vs. cause each other",
            "Recognizing limitations and potential errors in data"
          ]
        },
        practice: {
          title: "Analysis Workshop",
          points: [
            "Calculate basic statistics (mean, median, mode)",
            "Create bar charts, line graphs, and pie charts",
            "Interpret sample datasets and draw conclusions",
            "Practice identifying correlation vs. causation",
            "Present findings in simple, clear language"
          ]
        },
        tools: [
          "Basic statistics calculator guide",
          "Chart creation tutorials",
          "Data interpretation worksheets",
          "Conclusion writing templates"
        ]
      },
      scenarios: [
        "If students who eat breakfast score 15% higher on morning tests, what can you conclude?",
        "Survey shows 80% of students prefer online learning - but only 20 students responded. Is this reliable?",
        "Plant growth data shows Group A (with fertilizer) averaged 12cm, Group B (no fertilizer) averaged 8cm over 3 weeks"
      ],
      reflectionQuestions: [
        "How do you know if your sample size is big enough to draw conclusions?",
        "What's the difference between 'correlation' and 'causation' - why does it matter?"
      ]
    },
    {
      title: "Research Ethics and AI Tools",
      description: "Learn to conduct research responsibly and use AI tools effectively",
      icon: Shield,
      color: "from-purple-500 to-pink-600",
      content: {
        theory: {
          title: "Ethical Research Practice",
          points: [
            "Informed consent: getting permission from research participants",
            "Protecting privacy and confidential information",
            "Honest reporting: sharing results even when they're unexpected",
            "Plagiarism prevention and proper citation",
            "Using AI tools responsibly in research"
          ]
        },
        practice: {
          title: "Ethics in Action",
          points: [
            "Design consent forms for research participants",
            "Practice proper citation and source attribution",
            "Evaluate AI-generated summaries for accuracy",
            "Role-play ethical dilemmas and solutions",
            "Create research integrity checklists"
          ]
        },
        tools: [
          "Consent form templates",
          "Citation guide and examples",
          "AI tool evaluation rubric",
          "Research ethics decision tree"
        ]
      },
      scenarios: [
        "You want to survey classmates about personal habits - how do you protect their privacy?",
        "ChatGPT gives you a great summary of a research paper - how do you verify it's accurate?",
        "Your experiment results don't match your hypothesis - should you report them anyway?"
      ],
      reflectionQuestions: [
        "Why is it important to get permission before collecting data about people?",
        "How can you use AI tools to help your research without letting them do the thinking for you?"
      ]
    }
  ];

  const researchActivities = [
    {
      title: "Question Detective",
      description: "Practice turning everyday observations into testable research questions",
      icon: Search,
      difficulty: "Beginner"
    },
    {
      title: "Data Collection Challenge",
      description: "Design and conduct a mini-survey or observation study",
      icon: Database,
      difficulty: "Intermediate"
    },
    {
      title: "Chart Creator",
      description: "Turn sample data into clear, informative charts and graphs",
      icon: PieChart,
      difficulty: "Intermediate"
    },
    {
      title: "AI Research Assistant",
      description: "Learn to use AI tools effectively for research tasks",
      icon: Brain,
      difficulty: "Advanced"
    },
    {
      title: "Ethics Decision Maker",
      description: "Navigate research ethics scenarios and make responsible choices",
      icon: Shield,
      difficulty: "Intermediate"
    },
    {
      title: "Conclusion Judge",
      description: "Evaluate whether conclusions are supported by the evidence",
      icon: Target,
      difficulty: "Advanced"
    }
  ];

  return (
    <>
      <Head>
        <title>Scientific Research Methods - Mindcraft</title>
        <meta name="description" content="Learn scientific research methodologies and develop your research skills." />
      </Head>
      
      <Navbar />
      
      <main className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-50">
        {/* Hero Section */}
        <section className="pt-32 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-3xl flex items-center justify-center">
                  <Microscope className="w-10 h-10 text-white" />
                </div>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="gradient-text bg-gradient-to-r from-indigo-600 to-blue-600">
                  Scientific Research Methods
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
                {module.description}
              </p>
              
              {/* Learning Objectives */}
              <div className="bg-white rounded-2xl p-8 border border-indigo-200 shadow-lg mb-8 max-w-4xl mx-auto">
                <h3 className="text-2xl font-bold text-indigo-600 mb-4 text-center">What You'll Learn</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {learningObjectives.map((objective, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{objective}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                <div className="bg-white px-4 py-2 rounded-full border border-indigo-200">
                  <span className="text-indigo-600 font-medium">{module.duration}</span>
                </div>
                <div className="bg-white px-4 py-2 rounded-full border border-indigo-200">
                  <span className="text-indigo-600 font-medium">{module.ageRange} years</span>
                </div>
                <div className="bg-white px-4 py-2 rounded-full border border-indigo-200">
                  <span className="text-indigo-600 font-medium">5 Main Sections</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Learning Content Sections */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text bg-gradient-to-r from-indigo-600 to-blue-600">
                Learning Modules
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Learn every aspect of the scientific research process comprehensively
              </p>
            </div>

            <div className="grid gap-8">
              {learningContent.map((section, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className={`h-2 bg-gradient-to-r ${section.color}`}></div>
                  
                  <div className="p-8 lg:p-12">
                    <div className="flex items-start gap-6 mb-8">
                      <div className={`w-16 h-16 bg-gradient-to-br ${section.color} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                        <section.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl md:text-3xl font-bold mb-3 text-gray-900">
                          {section.title}
                        </h3>
                        <p className="text-lg text-gray-600">
                          {section.description}
                        </p>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                      {/* Theory */}
                      <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <Brain className="w-6 h-6 text-indigo-600" />
                          <h4 className="text-lg font-semibold text-gray-900">
                            {section.content.theory.title}
                          </h4>
                        </div>
                        <ul className="space-y-2">
                          {section.content.theory.points.map((point, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-indigo-500 mt-1 flex-shrink-0" />
                              <span className="text-sm text-gray-700">{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Practice */}
                      <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <Target className="w-6 h-6 text-green-600" />
                          <h4 className="text-lg font-semibold text-gray-900">
                            {section.content.practice.title}
                          </h4>
                        </div>
                        <ul className="space-y-2">
                          {section.content.practice.points.map((point, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <Play className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                              <span className="text-sm text-gray-700">{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Tools */}
                      <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <Code className="w-6 h-6 text-purple-600" />
                          <h4 className="text-lg font-semibold text-gray-900">
                            Tools & Resources
                          </h4>
                        </div>
                        <ul className="space-y-2">
                          {section.content.tools.map((tool, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <Lightbulb className="w-4 h-4 text-purple-500 mt-1 flex-shrink-0" />
                              <span className="text-sm text-gray-700">{tool}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Examples and Reflection */}
                    <div className="mt-8 grid md:grid-cols-2 gap-6">
                      {/* Real-world examples */}
                      <div className="bg-yellow-50 rounded-xl p-6 border border-yellow-200">
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">Examples in Action:</h4>
                        <ul className="space-y-2">
                          {section.scenarios?.map((scenario, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-gray-700 text-sm">{scenario}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Reflection Questions */}
                      <div className="bg-indigo-50 rounded-xl p-6 border border-indigo-200">
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">Think About This:</h4>
                        <div className="space-y-2">
                          {section.reflectionQuestions?.map((question, i) => (
                            <p key={i} className="text-gray-700 text-sm italic">• {question}</p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Tools for Research */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text bg-gradient-to-r from-indigo-600 to-blue-600">
                AI Tools for Young Researchers
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover how artificial intelligence can help you with research tasks
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {aiToolsForResearch.map((tool, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`w-12 h-12 bg-gradient-to-br ${tool.color} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                      <tool.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{tool.name}</h3>
                      <p className="text-gray-600">{tool.description}</p>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">How it helps with research:</h4>
                    <ul className="space-y-2">
                      {tool.uses.map((use, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{use}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-yellow-50 rounded-xl p-4 border border-yellow-200">
                    <h4 className="font-semibold text-yellow-800 mb-2">Important Limitations:</h4>
                    <p className="text-sm text-yellow-700">{tool.limitations}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Research Ethics */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-indigo-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text bg-gradient-to-r from-indigo-600 to-blue-600">
                Research Ethics for Young Scientists
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Learn the important principles that guide responsible research
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {researchEthicsPrinciples.map((principle, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <principle.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{principle.title}</h3>
                      <p className="text-gray-600 mb-4">{principle.description}</p>
                      
                      <div className="bg-indigo-50 rounded-lg p-4 border border-indigo-200">
                        <h4 className="font-semibold text-indigo-800 mb-2">Example:</h4>
                        <p className="text-sm text-indigo-700">{principle.example}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Research Activities */}
        <section className="py-20 bg-gradient-to-br from-indigo-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text bg-gradient-to-r from-indigo-600 to-blue-600">
                Research Laboratory
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Apply your research skills in practice with interactive activities
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {researchActivities.map((activity, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-xl flex items-center justify-center mb-4">
                    <activity.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">{activity.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{activity.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full">
                      {activity.difficulty}
                    </span>
                    <ArrowRight className="w-4 h-4 text-indigo-500" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Research Challenge */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="bg-gradient-to-br from-indigo-600 to-blue-700 rounded-3xl p-8 lg:p-12 text-white text-center"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Mindcraft Research Challenge
              </h2>
              
              <p className="text-xl mb-8 opacity-95 leading-relaxed">
                {module.mindcraftChallenge}
              </p>
              
              <motion.button
                className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold hover:bg-opacity-90 transition-all duration-300 shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Join the Challenge
              </motion.button>
            </motion.div>
          </div>
        </section>

        {/* Quick Reference Tools */}
        <section className="py-20 bg-gradient-to-br from-indigo-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text bg-gradient-to-r from-indigo-600 to-blue-600">
                Quick Reference Tools
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Handy checklists and guides you can use for any research project
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-6">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Research Question Checklist</h3>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex gap-2"><span className="text-green-500">✓</span> Is it specific and clear?</li>
                  <li className="flex gap-2"><span className="text-green-500">✓</span> Can it be tested or answered?</li>
                  <li className="flex gap-2"><span className="text-green-500">✓</span> Is it interesting to you?</li>
                  <li className="flex gap-2"><span className="text-green-500">✓</span> Can you collect data to answer it?</li>
                  <li className="flex gap-2"><span className="text-green-500">✓</span> Is it ethical and respectful?</li>
                </ul>
              </motion.div>

              <motion.div
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mb-6">
                  <Database className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Data Collection Tips</h3>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex gap-2"><span className="text-blue-500">•</span> Plan before you collect</li>
                  <li className="flex gap-2"><span className="text-blue-500">•</span> Keep detailed notes</li>
                  <li className="flex gap-2"><span className="text-blue-500">•</span> Be consistent in your methods</li>
                  <li className="flex gap-2"><span className="text-blue-500">•</span> Double-check for accuracy</li>
                  <li className="flex gap-2"><span className="text-blue-500">•</span> Respect privacy and consent</li>
                </ul>
              </motion.div>

              <motion.div
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-6">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">AI Research Tool Guide</h3>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex gap-2"><span className="text-purple-500">→</span> Use AI to summarize long articles</li>
                  <li className="flex gap-2"><span className="text-purple-500">→</span> Ask AI to explain difficult concepts</li>
                  <li className="flex gap-2"><span className="text-purple-500">→</span> Get help creating charts and graphs</li>
                  <li className="flex gap-2"><span className="text-purple-500">→</span> Always verify AI information</li>
                  <li className="flex gap-2"><span className="text-purple-500">→</span> Cite AI assistance in your work</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Reflection Section */}
        <section className="py-20 bg-gradient-to-br from-indigo-50 to-blue-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4 gradient-text bg-gradient-to-r from-indigo-600 to-blue-600">
                  My Research Learning Journey
                </h2>
                <p className="text-lg text-gray-600">
                  Reflect on what you've learned about scientific research and how you'll apply it
                </p>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-lg font-medium text-gray-700 mb-3">
                    Before this module: What I thought research was
                  </label>
                  <textarea
                    className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none"
                    rows={3}
                    placeholder="I used to think research was only for scientists in labs..."
                  />
                </div>
                
                <div>
                  <label className="block text-lg font-medium text-gray-700 mb-3">
                    After this module: How I will use research skills in my life
                  </label>
                  <textarea
                    value={reflectionText}
                    onChange={(e) => setReflectionText(e.target.value)}
                    className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none"
                    rows={3}
                    placeholder="Now I understand that I can use research skills to..."
                  />
                </div>
                
                <div>
                  <label className="block text-lg font-medium text-gray-700 mb-3">
                    A question I want to research
                  </label>
                  <textarea
                    className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none"
                    rows={3}
                    placeholder="I'm curious about... and I could research this by..."
                  />
                </div>
                
                <motion.button
                  className="w-full bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-4 rounded-xl font-semibold hover:opacity-90 transition-opacity duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Save My Research Goals
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Navigation */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row gap-6">
              <motion.a
                href="/projects/mindcraft/ai-art-creation"
                className="flex-1 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-8 border border-purple-100 hover:border-purple-200 transition-all"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center">
                    <ArrowRight className="w-6 h-6 text-white transform rotate-180" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Previous Module</h3>
                    <p className="text-gray-600 text-sm">AI Art Creation</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  Revisit AI-powered art creation topics
                </p>
              </motion.a>

              <motion.a
                href="/projects/mindcraft/creative-innovation"
                className="flex-1 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-8 border border-yellow-100 hover:border-yellow-200 transition-all"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center">
                    <ArrowRight className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Next Module</h3>
                    <p className="text-gray-600 text-sm">Creative Innovation</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  Explore creative innovation and global impact topics
                </p>
              </motion.a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}