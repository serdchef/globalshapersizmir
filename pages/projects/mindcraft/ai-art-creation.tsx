import Head from 'next/head'
import { useState } from 'react'
import Navbar from '@/components/mindcraft/layout/Navbar'
import Footer from '@/components/mindcraft/layout/Footer'
import { modulesData } from '@/utils/mindcraft/modulesData'
import { motion } from 'framer-motion'
import { 
  Palette, 
  Sparkles, 
  Eye, 
  Heart, 
  Users, 
  CheckCircle, 
  ArrowRight, 
  Play, 
  Code,
  Brain
} from 'lucide-react'

export default function AIArtCreationPage() {
  const [currentSection, setCurrentSection] = useState(0)
  const [reflectionText, setReflectionText] = useState('')

  const module = modulesData.find(m => m.id === 'ai-art-creation')
  
  if (!module) return null

  const learningObjectives = [
    "Understand what AI art is and how it works",
    "Learn about popular AI art tools and their features",
    "Write effective prompts for creating AI artwork",
    "Create original artworks using AI tools responsibly",
    "Understand ethical considerations in AI art creation",
    "Build a personal digital art portfolio"
  ]

  const popularAIArtTools = [
    {
      name: "DALL-E",
      description: "OpenAI's image generator that creates detailed, realistic images from text descriptions",
      strengths: "High-quality photorealistic images, good at understanding complex scenes",
      limitations: "Limited free usage, requires account",
      examplePrompt: "A friendly dragon reading a book in a cozy library, warm lighting, children's book illustration style",
      icon: Sparkles,
      color: "from-blue-500 to-cyan-500",
      bestFor: "Realistic images, detailed scenes"
    },
    {
      name: "Midjourney",
      description: "Popular AI art platform known for creating stunning artistic and creative images",
      strengths: "Amazing artistic quality, great for creative and fantasy art",
      limitations: "Requires Discord account, subscription needed for full features",
      examplePrompt: "Magical forest with glowing mushrooms, fairy tale style, soft pastel colors, dreamy atmosphere",
      icon: Palette,
      color: "from-purple-500 to-pink-500",
      bestFor: "Artistic images, fantasy art, creative concepts"
    },
    {
      name: "Stable Diffusion",
      description: "Open-source AI art generator that you can run on your own computer",
      strengths: "Free to use, lots of customization options, active community",
      limitations: "Can be complex to set up, requires good computer",
      examplePrompt: "Cute robot helper in a school classroom, cartoon style, bright colors, educational setting",
      icon: Eye,
      color: "from-green-500 to-emerald-500",
      bestFor: "Experimental art, customization, learning AI"
    },
    {
      name: "Leonardo AI",
      description: "User-friendly AI art platform with focus on game and character design",
      strengths: "Great for characters, game art, user-friendly interface",
      limitations: "Limited free credits per day",
      examplePrompt: "Young superhero character with a cape, comic book style, dynamic pose, bright costume",
      icon: Users,
      color: "from-orange-500 to-red-500",
      bestFor: "Character design, game art, comics"
    },
    {
      name: "Craiyon",
      description: "Free and simple AI art generator perfect for beginners",
      strengths: "Completely free, no account needed, easy to use",
      limitations: "Lower image quality, slower generation",
      examplePrompt: "Happy cat wearing a wizard hat, simple cartoon style, colorful background",
      icon: Heart,
      color: "from-yellow-500 to-orange-500",
      bestFor: "Beginners, quick experiments, fun projects"
    }
  ]

  const promptWritingTips = [
    {
      title: "Be Specific and Descriptive",
      description: "Instead of 'dog,' try 'golden retriever puppy playing in a sunny garden'",
      example: "❌: 'Nice landscape'\n✅: 'Mountain lake at sunset with purple sky and reflected trees'"
    },
    {
      title: "Include Art Style",
      description: "Mention the artistic style you want: cartoon, realistic, watercolor, pixel art",
      example: "❌: 'Person drawing'\n✅: 'Young artist drawing, anime style, soft colors, cozy art studio'"
    },
    {
      title: "Set the Mood",
      description: "Add emotions and atmosphere: cheerful, mysterious, peaceful, exciting",
      example: "❌: 'Forest scene'\n✅: 'Magical forest, mysterious atmosphere, glowing fireflies, twilight'"
    },
    {
      title: "Specify Colors and Lighting",
      description: "Describe colors and lighting to get the look you want",
      example: "❌: 'Space scene'\n✅: 'Starry space with bright nebula, purple and blue colors, dramatic lighting'"
    }
  ]

  const ethicalConsiderations = [
    {
      title: "Respect Original Artists",
      description: "Don't copy specific artists' styles without giving credit. Instead, learn from general art movements.",
      guideline: "Say 'impressionist style' instead of 'in the style of [specific artist name]'"
    },
    {
      title: "Avoid Harmful Content",
      description: "Never create images that could hurt, scare, or offend others.",
      guideline: "Focus on positive, creative, and educational content"
    },
    {
      title: "Be Honest About AI Creation",
      description: "Always tell people when your artwork was made with AI help.",
      guideline: "Add 'Created with AI' to your image descriptions or captions"
    },
    {
      title: "Respect Cultural Sensitivity",
      description: "Be careful when creating images of different cultures or traditions.",
      guideline: "Research and approach cultural elements with respect and understanding"
    }
  ]

  const learningContent = [
    {
      title: "What Is AI Art?",
      subtitle: "Lesson 1: Understanding AI Creativity",
      description: "Learn how artificial intelligence creates amazing artworks and what makes them special",
      keyPoints: ["How AI Creates Images", "Types of AI Art", "AI vs Human Creativity"],
      interactive: "AI Art Explorer",
      icon: Sparkles,
      content: "AI art is like having a super-smart art assistant that can paint anything you describe! When you tell an AI 'draw a purple dragon,' it uses millions of example images it learned from to create something new. It's not copying existing art – it's learning patterns and styles to make original creations based on your ideas. Think of it as a collaboration between your imagination and the AI's artistic knowledge.",
      scenarios: [
        "Creating illustrations for school projects and presentations",
        "Designing characters for stories or games you're making",
        "Making posters and artwork for events or clubs",
        "Experimenting with different art styles and techniques"
      ],
      reflectionQuestions: [
        "What's the difference between AI creating art and AI copying art?",
        "How can AI help you express ideas you couldn't draw by hand?"
      ]
    },
    {
      title: "Writing Visual Prompts",
      subtitle: "Lesson 2: Communicating with AI Artists",
      description: "Master the art of describing what you want AI to create",
      keyPoints: ["Descriptive Language", "Style References", "Mood and Atmosphere"],
      interactive: "Prompt Writing Lab",
      icon: Palette,
      content: "Writing prompts for AI art is like being a creative director! The more specific and descriptive you are, the better your results will be. Instead of saying 'make a cat,' try 'a fluffy orange tabby cat sleeping on a windowsill with sunlight streaming through, watercolor painting style.' Include details about colors, lighting, style, and mood to guide the AI toward your vision.",
      scenarios: [
        "Basic prompt: 'Dog' vs Detailed: 'Golden retriever puppy playing in autumn leaves, happy expression, cartoon style'",
        "Vague: 'Fantasy scene' vs Specific: 'Magical castle on floating island, sunset sky, dragons flying, digital art style'",
        "Simple: 'Portrait' vs Rich: 'Friendly young scientist in lab coat, microscope background, bright lighting, educational illustration'"
      ],
      reflectionQuestions: [
        "How does adding style descriptions change your AI artwork?",
        "What happens when you include emotions or moods in your prompts?"
      ]
    },
    {
      title: "Exploring Art Styles",
      subtitle: "Lesson 3: From Realistic to Fantastical",
      description: "Discover different artistic styles and how to achieve them with AI",
      keyPoints: ["Art Movement Styles", "Digital Art Techniques", "Cultural Art Forms"],
      interactive: "Style Transformation Studio",
      icon: Eye,
      content: "AI can recreate almost any art style you can imagine! Want your drawing to look like a cartoon? A realistic painting? Pixel art from a video game? Just add the style to your prompt. You can explore art from different cultures, time periods, and artistic movements. It's like having access to every art technique in history!",
      scenarios: [
        "Cartoon style: 'Friendly robot, Disney animation style, colorful and expressive'",
        "Realistic: 'Mountain landscape, photorealistic, detailed textures, golden hour lighting'",
        "Artistic: 'City street, impressionist painting style, soft brushstrokes, evening atmosphere'",
        "Digital: 'Space battle, pixel art style, retro video game aesthetic, bright colors'"
      ],
      reflectionQuestions: [
        "Which art styles do you find most interesting and why?",
        "How do different styles change the feeling or message of your artwork?"
      ]
    },
    {
      title: "Ethical AI Art Creation",
      subtitle: "Lesson 4: Creating Responsibly",
      description: "Learn how to use AI art tools in ways that respect artists and communities",
      keyPoints: ["Artist Attribution", "Cultural Sensitivity", "Honest Disclosure"],
      interactive: "Ethics Decision Maker",
      icon: Heart,
      content: "Being a responsible AI artist means thinking about how your creations affect others. Always be honest that you used AI to make your art. Respect original artists by learning from general styles rather than copying specific people's work. Be thoughtful about cultural elements and avoid creating anything that could hurt or stereotype others. Good AI artists use technology to create positive, beautiful things!",
      scenarios: [
        "Good practice: 'Created with AI assistance' in your art captions",
        "Respectful: 'Inspired by impressionist painting techniques' rather than copying a specific artist",
        "Thoughtful: Research cultural symbols before including them in your art",
        "Positive: Focus on creating uplifting, educational, or beautiful content"
      ],
      reflectionQuestions: [
        "Why is it important to tell people when you used AI to create art?",
        "How can you be respectful when creating art inspired by other cultures?"
      ]
    },
    {
      title: "Building Your AI Art Portfolio",
      subtitle: "Lesson 5: Sharing Your Creativity",
      description: "Organize and present your AI artwork to show your creative journey",
      keyPoints: ["Portfolio Organization", "Artwork Documentation", "Creative Growth"],
      interactive: "Portfolio Builder",
      icon: Users,
      content: "Your AI art portfolio is like a visual diary of your creativity! Collect your favorite creations, organize them by theme or style, and document what prompts you used. This helps you remember what worked well and shows others your creative growth. Include the prompts you used – it's like showing your 'recipe' for each artwork and can inspire others!",
      scenarios: [
        "Theme collections: Fantasy creatures, space scenes, cartoon characters",
        "Style experiments: Same subject in different artistic styles",
        "Project documentation: Art created for specific school assignments or personal projects",
        "Prompt evolution: How you improved a basic prompt through several iterations"
      ],
      reflectionQuestions: [
        "What themes or subjects do you enjoy creating most?",
        "How has your prompt writing improved since you started?"
      ]
    }
  ]

  const artChallenges = [
    {
      title: "Character Creation Challenge",
      scenario: "Your teacher assigned you to create an original character for a story. Which prompt approach will help you create the most unique and interesting character?",
      options: [
        "'Draw a character'",
        "'Cool superhero'",
        "'Young inventor with steampunk goggles, carrying a toolbag, friendly smile, workshop background, cartoon illustration style'",
        "'Copy a popular character from a movie'"
      ],
      correct: 2,
      explanation: "The detailed prompt creates an original character with specific traits, setting, and style. This gives you a unique creation that's perfect for your story!"
    },
    {
      title: "School Project Illustration",
      scenario: "You need to create an illustration about renewable energy for your science presentation. What's the best approach?",
      options: [
        "'Energy picture'",
        "'Solar panels and wind turbines in a green landscape, bright sunny day, educational poster style, clean and optimistic'",
        "'Copy an image from Google'",
        "'Abstract energy concept'"
      ],
      correct: 1,
      explanation: "This prompt clearly describes renewable energy sources in an educational, positive way that's perfect for a school presentation."
    },
    {
      title: "Art Style Exploration",
      scenario: "You want to experiment with different art styles using the same subject. Which approach helps you learn the most?",
      options: [
        "Use the same vague prompt each time",
        "Create the same subject (like 'friendly robot') in different styles: cartoon, realistic, pixel art, watercolor",
        "Only stick to one style",
        "Copy existing artworks"
      ],
      correct: 1,
      explanation: "Experimenting with the same subject in different styles helps you understand how style affects the mood and message of your artwork."
    }
  ]

  return (
    <>
      <Head>
        <title>AI Art Creation: Digital Creativity Unleashed | Mindcraft</title>
        <meta name="description" content="Create amazing AI-powered artworks using advanced prompt engineering and digital art techniques. Explore creativity in the age of artificial intelligence." />
        <meta name="keywords" content="AI art, digital art, Midjourney, DALL-E, Stable Diffusion, prompt engineering, creative technology, digital creativity" />
        <meta property="og:title" content="AI Art Creation: Digital Creativity Unleashed" />
        <meta property="og:description" content="Master AI-powered art creation and unlock unlimited creative potential" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-pink-900 via-purple-900 to-indigo-900">
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
              {/* Palette Icon */}
              <div className="relative mx-auto mb-8 w-32 h-32">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full animate-pulse"></div>
                <div className="relative w-full h-full bg-white rounded-full flex items-center justify-center shadow-2xl">
                  <Palette className="w-16 h-16 text-pink-600" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-400/30 to-purple-400/30 rounded-full blur-xl"></div>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                AI Art Creation
                <span className="block text-3xl md:text-4xl bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mt-4">
                  Digital Creativity Unleashed
                </span>
              </h1>

              <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-8 border border-pink-500/30 mb-8">
                <h2 className="text-2xl md:text-3xl text-pink-300 mb-4 font-semibold">
                  Klaus Schwab's Vision
                </h2>
                <p className="text-xl text-gray-300 italic">
                  "AI doesn't replace human creativity; it amplifies it. The future belongs to those who can blend human imagination with artificial intelligence"
                </p>
              </div>

              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
                {module.description}
              </p>

              {/* Learning Objectives */}
              <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/30 mb-8">
                <h3 className="text-2xl font-bold text-purple-300 mb-4 text-center">What You'll Create and Learn</h3>
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
              <div className="bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 border border-pink-500/30">
                <div className="text-3xl font-bold text-pink-400">5</div>
                <div className="text-gray-300">Art Lessons</div>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 border border-purple-500/30">
                <div className="text-3xl font-bold text-purple-400">Unlimited</div>
                <div className="text-gray-300">Artistic Potential</div>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 border border-indigo-500/30">
                <div className="text-3xl font-bold text-indigo-400">Hands-on</div>
                <div className="text-gray-300">Art Creation</div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Core Learning Sections */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-16">
              Your Journey to <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">AI Art Mastery</span>
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
                        <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-500 rounded-xl flex items-center justify-center">
                          <section.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-white">{section.title}</h3>
                          <p className="text-pink-300">{section.subtitle}</p>
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
                              <div className="w-1.5 h-1.5 bg-pink-400 rounded-full mt-2 flex-shrink-0"></div>
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

                      <button className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-pink-700 hover:to-purple-700 transition-all">
                        <Play className="w-5 h-5" />
                        {section.interactive}
                      </button>
                    </div>

                    <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                      <div className="bg-gradient-to-br from-pink-600/20 to-purple-600/20 rounded-2xl p-8 border border-pink-500/30">
                        <div className="text-center">
                          <section.icon className="w-24 h-24 text-pink-400 mx-auto mb-4" />
                          <h4 className="text-xl font-semibold text-white mb-2">Creative Learning</h4>
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

        {/* AI Art Tools Overview */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                  Popular AI Art Tools
                </span>
              </h2>
              <p className="text-xl text-gray-300">
                Discover different AI art platforms and learn how to use them
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {popularAIArtTools.map((tool, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 border border-pink-500/30"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 bg-gradient-to-br ${tool.color} rounded-lg flex items-center justify-center`}>
                      <tool.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">{tool.name}</h3>
                      <p className="text-pink-300 text-xs">{tool.bestFor}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 text-sm mb-3">{tool.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="text-xs">
                      <span className="text-green-300 font-medium">Strengths:</span>
                      <span className="text-gray-400 ml-1">{tool.strengths}</span>
                    </div>
                    <div className="text-xs">
                      <span className="text-yellow-300 font-medium">Limitations:</span>
                      <span className="text-gray-400 ml-1">{tool.limitations}</span>
                    </div>
                  </div>
                  
                  <div className="bg-slate-700/50 rounded-lg p-3">
                    <h4 className="text-pink-300 font-semibold text-xs mb-1">Example Prompt:</h4>
                    <p className="text-gray-300 text-xs italic">"{tool.examplePrompt}"</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Prompt Writing Tips */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  How to Write Great Art Prompts
                </span>
              </h2>
              <p className="text-xl text-gray-300">
                Learn the secrets of describing your artistic vision to AI
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {promptWritingTips.map((tip, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 border border-purple-500/30"
                >
                  <h3 className="text-xl font-bold text-white mb-3">{tip.title}</h3>
                  <p className="text-gray-300 mb-4">{tip.description}</p>
                  <div className="bg-slate-700/50 rounded-lg p-3">
                    <pre className="text-sm text-gray-300 whitespace-pre-wrap">{tip.example}</pre>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Ethical Considerations */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                <span className="bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent">
                  Creating AI Art Responsibly
                </span>
              </h2>
              <p className="text-xl text-gray-300">
                Learn how to use AI art tools in ways that respect artists and communities
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {ethicalConsiderations.map((consideration, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 border border-red-500/30"
                >
                  <h3 className="text-lg font-bold text-white mb-3">{consideration.title}</h3>
                  <p className="text-gray-300 text-sm mb-3">{consideration.description}</p>
                  <div className="bg-red-900/20 rounded-lg p-3">
                    <p className="text-red-200 text-sm font-medium">{consideration.guideline}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Art Studio */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                  Practice Your AI Art Skills
                </span>
              </h2>
              <p className="text-xl text-gray-300">
                Test what you've learned with these creative challenges
              </p>
            </div>

            <div className="space-y-8">
              {artChallenges.map((challenge, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-8 border border-pink-500/30"
                >
                  <h3 className="text-2xl font-bold text-white mb-4">{challenge.title}</h3>
                  <p className="text-gray-300 text-lg mb-6">{challenge.scenario}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    {challenge.options.map((option, i) => (
                      <button
                        key={i}
                        className="text-left p-4 bg-slate-700/50 hover:bg-pink-600/30 border border-slate-600 hover:border-pink-500 rounded-xl transition-all"
                      >
                        <span className="text-white">{option}</span>
                      </button>
                    ))}
                  </div>

                  <div className="bg-pink-900/30 rounded-xl p-4 border border-pink-500/50">
                    <h4 className="text-pink-300 font-semibold mb-2">Creative Insight</h4>
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
              className="bg-gradient-to-br from-slate-800/50 to-pink-800/30 backdrop-blur-lg rounded-2xl p-8 border border-pink-500/30"
            >
              <h2 className="text-3xl font-bold text-white mb-6 text-center">
                My AI Art Learning Journey
              </h2>
              <p className="text-gray-300 text-lg mb-8 text-center">
                Reflect on what you've discovered about AI art creation and creativity
              </p>

              <div className="space-y-6">
                <div>
                  <label className="block text-white font-semibold mb-2">
                    Before this lesson: What I thought about creating art
                  </label>
                  <textarea
                    placeholder="I used to think you needed to be naturally talented to create good art..."
                    className="w-full p-4 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:border-pink-500 focus:ring-1 focus:ring-pink-500 transition-all"
                    rows={3}
                  />
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">
                    After this lesson: How AI has changed my view of creativity
                  </label>
                  <textarea
                    value={reflectionText}
                    onChange={(e) => setReflectionText(e.target.value)}
                    placeholder="Now I understand that AI art is a collaboration between my imagination and..."
                    className="w-full p-4 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:border-pink-500 focus:ring-1 focus:ring-pink-500 transition-all"
                    rows={3}
                  />
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">
                    My favorite AI art tool and why
                  </label>
                  <textarea
                    placeholder="I want to try [tool name] because it's good for [type of art] and..."
                    className="w-full p-4 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:border-pink-500 focus:ring-1 focus:ring-pink-500 transition-all"
                    rows={2}
                  />
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">
                    One art project I want to create with AI
                  </label>
                  <textarea
                    placeholder="I would like to create a series of illustrations about..."
                    className="w-full p-4 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:border-pink-500 focus:ring-1 focus:ring-pink-500 transition-all"
                    rows={2}
                  />
                </div>

                <button className="w-full bg-gradient-to-r from-pink-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-pink-700 hover:to-purple-700 transition-all">
                  Save My AI Art Portfolio Plan
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
                Continue Your <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Mindcraft Journey</span>
              </h2>
              <p className="text-xl text-gray-300 mb-12">
                You've unlocked creative potential with AI! Ready to explore more frontiers?
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.a
                  href="/projects/mindcraft"
                  className="group bg-gradient-to-br from-pink-600/20 to-purple-600/20 backdrop-blur-lg rounded-2xl p-8 border border-pink-500/30 hover:border-pink-400/50 transition-all"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-500 rounded-xl flex items-center justify-center">
                      <Sparkles className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-left">
                      <h3 className="text-xl font-bold text-white">More Modules</h3>
                      <p className="text-pink-300">Scientific Research & Innovation</p>
                    </div>
                  </div>
                  <p className="text-gray-300 text-left group-hover:text-white transition-colors">
                    Continue exploring AI applications in science and innovation
                  </p>
                  <ArrowRight className="w-5 h-5 text-pink-400 ml-auto mt-4 group-hover:translate-x-1 transition-transform" />
                </motion.a>

                <motion.a
                  href="/projects/mindcraft/coding-automation"
                  className="group bg-gradient-to-br from-slate-600/20 to-blue-600/20 backdrop-blur-lg rounded-2xl p-8 border border-slate-500/30 hover:border-slate-400/50 transition-all"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-slate-500 to-blue-500 rounded-xl flex items-center justify-center">
                      <Code className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-left">
                      <h3 className="text-xl font-bold text-white">Previous Module</h3>
                      <p className="text-slate-300">Coding & Automation</p>
                    </div>
                  </div>
                  <p className="text-gray-300 text-left group-hover:text-white transition-colors">
                    Revisit programming and automation fundamentals
                  </p>
                  <ArrowRight className="w-5 h-5 text-slate-400 ml-auto mt-4 group-hover:translate-x-1 transition-transform" />
                </motion.a>
              </div>

              <div className="mt-8">
                <motion.a
                  href="/projects/mindcraft"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-pink-700 hover:to-purple-700 transition-all"
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