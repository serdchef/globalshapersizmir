import Head from 'next/head'
import { useState, useEffect } from 'react'
import Navbar from '@/components/mindcraft/layout/Navbar'
import Footer from '@/components/mindcraft/layout/Footer'
import { modulesData } from '@/utils/mindcraft/modulesData'
import { motion, AnimatePresence } from 'framer-motion'
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
  Heart,
  Sliders,
  BarChart3,
  Download,
  FileText,
  AlertTriangle,
  ChevronDown,
  ChevronRight,
  Info,
  ShieldCheck,
  Lightbulb,
  Quote,
  BookOpen,
  Cpu,
  AlertCircle,
  Search
} from 'lucide-react'

// Interactive Components
interface HiringAlgorithmState {
  experience: number
  age: number
  genderBalance: boolean
}

interface BiasRadarState {
  currentQuestion: number
  userChoices: string[]
  gameComplete: boolean
}

interface EthicsJourneyState {
  notes: string
  manifesto: string[]
}

export default function AIEthicsPage() {
  const [currentSection, setCurrentSection] = useState(0)
  const [reflectionText, setReflectionText] = useState('')
  
  // Component 1: Interactive Hiring Algorithm
  const [hiringAlgorithm, setHiringAlgorithm] = useState<HiringAlgorithmState>({
    experience: 50,
    age: 30,
    genderBalance: false
  })
  const [diversityScore, setDiversityScore] = useState(50)
  const [showAgeismWarning, setShowAgeismWarning] = useState(false)

  // Component 2: Social Proof Choice Mirroring
  const [carDilemmaChoice, setCarDilemmaChoice] = useState<string | null>(null)
  const [showMoralStats, setShowMoralStats] = useState(false)

  // Component 3: Bias Radar Mini-Game
  const [biasRadar, setBiasRadar] = useState<BiasRadarState>({
    currentQuestion: 0,
    userChoices: [],
    gameComplete: false
  })

  // Component 4: Ethics Journey Tracker
  const [ethicsJourney, setEthicsJourney] = useState<EthicsJourneyState>({
    notes: '',
    manifesto: []
  })

  // Learning moment states
  const [showLearningMoment, setShowLearningMoment] = useState(false)
  const [learningMomentType, setLearningMomentType] = useState('')

  const [expandedAccordion, setExpandedAccordion] = useState<string | null>(null)

  const module = modulesData.find(m => m.id === 'ai-ethics')
  
  if (!module) return null

  // Effect for hiring algorithm calculations
  useEffect(() => {
    const diversityPenalty = hiringAlgorithm.genderBalance ? 0 : 20
    const agePenalty = hiringAlgorithm.age > 50 ? (hiringAlgorithm.age - 50) : 0
    const newDiversityScore = Math.max(0, 100 - diversityPenalty - agePenalty)
    setDiversityScore(newDiversityScore)
    const newAgeismWarning = hiringAlgorithm.age > 80
    setShowAgeismWarning(newAgeismWarning)
    
    // Trigger learning moment when ageism is first detected
    if (newAgeismWarning && !showAgeismWarning) {
      triggerLearningMoment('hiring-bias')
    }
  }, [hiringAlgorithm])

  // Load ethics journey from localStorage on component mount
  useEffect(() => {
    const savedJourney = localStorage.getItem('mindcraft-ethics-journey')
    if (savedJourney) {
      setEthicsJourney(JSON.parse(savedJourney))
    }
  }, [])

  // Save ethics journey to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('mindcraft-ethics-journey', JSON.stringify(ethicsJourney))
  }, [ethicsJourney])

  const biasRadarQuestions = [
    { label: "Mühendis", personas: ["Person A (Genç kadın)", "Person B (Yaşlı erkek)"] },
    { label: "Bakıcı", personas: ["Person A (Genç erkek)", "Person B (Orta yaşlı kadın)"] },
    { label: "Lider", personas: ["Person A (Genç kadın)", "Person B (Orta yaşlı erkek)"] },
    { label: "Öğretmen", personas: ["Person A (Genç erkek)", "Person B (Yaşlı kadın)"] },
    { label: "Doktor", personas: ["Person A (Orta yaşlı kadın)", "Person B (Genç erkek)"] }
  ]

  const handleBiasRadarChoice = (choice: string) => {
    const newChoices = [...biasRadar.userChoices, choice]
    setBiasRadar(prev => ({
      ...prev,
      userChoices: newChoices
    }))

    if (biasRadar.currentQuestion < biasRadarQuestions.length - 1) {
      setBiasRadar(prev => ({
        ...prev,
        currentQuestion: prev.currentQuestion + 1
      }))
    } else {
      setBiasRadar(prev => ({
        ...prev,
        gameComplete: true
      }))
      // Trigger learning moment
      setLearningMomentType('bias-radar')
      setShowLearningMoment(true)
      setTimeout(() => setShowLearningMoment(false), 8000)
    }
  }

  const triggerLearningMoment = (type: string) => {
    setLearningMomentType(type)
    setShowLearningMoment(true)
    setTimeout(() => setShowLearningMoment(false), 6000)
  }

  const calculateBiasRadar = () => {
    // Simple bias calculation based on choices
    const genderBias = biasRadar.userChoices.filter(choice => choice.includes('erkek')).length
    const ageBias = biasRadar.userChoices.filter(choice => choice.includes('Genç')).length
    
    return {
      genderBias: (genderBias / biasRadarQuestions.length) * 100,
      ageBias: (ageBias / biasRadarQuestions.length) * 100,
      diversityAwareness: 100 - ((genderBias + ageBias) / biasRadarQuestions.length) * 50
    }
  }

  const generatePDFManifesto = () => {
    const manifestoContent = `
# Etik Manifestom - ${new Date().toLocaleDateString('tr-TR')}

## Geleceğin AI dünyasında ihtiyaç duyduğum etik kurallar:
${ethicsJourney.notes}

## Kişisel AI Kullanım Prensipllerim:
${ethicsJourney.manifesto.map((principle, i) => `${i + 1}. ${principle}`).join('\n')}

## Bu manifestoyu oluşturan: Mindcraft AI & Ethics Laboratory
Tarih: ${new Date().toLocaleDateString('tr-TR')}
    `
    
    const blob = new Blob([manifestoContent], { type: 'text/plain;charset=utf-8' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = 'etik-manifestom.txt'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
  }

  const addManifestoPrinciple = () => {
    if (ethicsJourney.notes.trim()) {
      setEthicsJourney(prev => ({
        ...prev,
        manifesto: [...prev.manifesto, prev.notes],
        notes: ''
      }))
    }
  }

  const learningObjectives = [
    "Understand AI decision-making processes and bias detection",
    "Recognize ethical dilemmas in AI applications",
    "Develop critical thinking about algorithmic fairness",
    "Create personal ethical frameworks for AI use",
    "Practice hands-on bias detection and mitigation",
    "Build cognitive sovereignty in the Intelligence Age"
  ]

  const interactiveLabs = [
    {
      id: 'hiring-algorithm',
      title: 'İşe Alım Algoritmanı Tasarla',
      description: 'Ağırlıkları değiştirerek algoritmanın kimi \'ideal aday\' olarak gördüğünü keşfet.',
      component: 'HiringAlgorithm'
    },
    {
      id: 'moral-choice',
      title: 'Ahlaki Seçim Aynası',
      description: 'Kararlarını analiz et ve toplumsal tercihlerle karşılaştır.',
      component: 'MoralChoice'
    },
    {
      id: 'bias-radar',
      title: 'Önyargı Radar Oyunu',
      description: 'Bilinçaltı önyargılarını keşfet ve AI\'ın nasıl öğrendiğini anla.',
      component: 'BiasRadar'
    },
    {
      id: 'ethics-journey',
      title: 'Etik Yolculuk Takipçisi',
      description: 'Kişisel etik manifestonu oluştur ve PDF olarak indir.',
      component: 'EthicsJourney'
    }
  ]

  return (
    <>
      <Head>
        <title>AI & Ethics Laboratory: Building Cognitive Sovereignty | Mindcraft</title>
        <meta name="description" content="Interactive AI ethics laboratory with hands-on simulations for bias detection, moral reasoning, and cognitive sovereignty." />
        <meta name="keywords" content="AI ethics, cognitive sovereignty, algorithmic bias, interactive laboratory, moral reasoning" />
        <meta property="og:title" content="AI & Ethics Laboratory: Interactive Learning" />
        <meta property="og:description" content="Master ethical AI thinking through interactive simulations and real-time bias detection" />
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
              className="relative"
            >
              <div className="relative mb-8">
                <div className="relative w-32 h-32 mx-auto mb-8">
                  <div className="relative w-full h-full bg-white rounded-full flex items-center justify-center shadow-2xl">
                    <Brain className="w-16 h-16 text-blue-600" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400/30 to-cyan-400/30 rounded-full blur-xl"></div>
                </div>

                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                  AI & Ethics
                  <span className="block text-3xl md:text-4xl bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mt-4">
                    Bilişsel Egemenlik Okulu
                  </span>
                </h1>

                <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
                  Zeka Çağında navigatör olmayı öğren. AI'ın etik boyutlarını keşfet, önyargıları tespit et, 
                  ve kendi bilişsel kalkanını oluştur.
                </p>

                {/* Klaus Schwab Quote */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="bg-gradient-to-r from-indigo-900/50 to-purple-900/50 backdrop-blur-lg rounded-2xl p-8 border border-indigo-500/30 mb-8"
                >
                  <Quote className="w-12 h-12 text-indigo-400 mx-auto mb-4" />
                  <blockquote className="text-lg md:text-xl text-white italic text-center leading-relaxed">
                    "Zeka Çağına uyurgezer gibi girmemeliyiz. En büyük risk, makinenin insan gibi düşünmesi değil, 
                    insanın zihnini makineye teslim etmesidir."
                  </blockquote>
                  <cite className="block text-indigo-300 text-center mt-4 font-semibold">— Klaus Schwab</cite>
                </motion.div>

                {/* Module Objective */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.7 }}
                  className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-8 border border-cyan-500/30"
                >
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <BookOpen className="w-8 h-8 text-cyan-400" />
                    <h3 className="text-2xl font-bold text-white">Modül Hedefleri</h3>
                  </div>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Bu modül AI tarihi, çalışma prensipleri, algoritmik önyargı ve veri güvenliği konularını 
                    interaktif deneyimlerle öğretir. Her aktivite sonrası <strong>Bilişsel Egemenlik</strong>'in 
                    5 direğini pekiştireceksiniz.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Learning Objectives */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Öğrenme Hedefleri
                </span>
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {learningObjectives.map((objective, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 border border-blue-500/30"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                    <p className="text-gray-300">{objective}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Knowledge Block 1: AI Nasıl Çalışır? */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 backdrop-blur-lg rounded-2xl p-8 border border-blue-500/30"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Cpu className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-3 flex items-center gap-2">
                    <Info className="w-6 h-6 text-blue-400" />
                    Bilgi Bloğu 1: AI Nasıl Çalışır?
                  </h3>
                  <p className="text-blue-200 text-lg">Zeka Çağının temel mekanizmalarını anla</p>
                </div>
              </div>
              
              <div className="space-y-6 text-gray-300">
                <p className="text-lg leading-relaxed">
                  <strong className="text-white">AI, hatalarından öğrenen bir bebek gibidir.</strong> Milyonlarca veri noktasını işleyerek 
                  belirli hedeflere ulaşmaya çalışır. Algoritmaların arkasında gerçek insanların aldığı kararlar vardır.
                </p>
                
                <div className="bg-yellow-900/20 border border-yellow-500/50 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <AlertTriangle className="w-6 h-6 text-yellow-400" />
                    <h4 className="text-yellow-300 font-semibold">Zeka Çağında Eşitsizlik</h4>
                  </div>
                  <p className="text-yellow-100">
                    <strong>Dijital okur-yazarlık</strong> eksikliği, Zeka Çağının yeni eşitsizlik kaynağıdır. 
                    Bu modül, seni teknolojiyi anlayan bir <strong>"Navigator"</strong> haline getirecek.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Component 1: Interactive Hiring Algorithm */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  İşe Alım Algoritmanı Tasarla
                </span>
              </h2>
              <p className="text-xl text-gray-300">
                Ağırlıkları değiştirerek algoritmanın kimi 'ideal aday' olarak gördüğünü keşfet.
              </p>
            </motion.div>

            <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/30">
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Controls */}
                <div className="space-y-6">
                  <div>
                    <label className="flex items-center gap-3 text-white text-lg mb-3">
                      <Sliders className="w-5 h-5" />
                      Deneyim Ağırlığı: {hiringAlgorithm.experience}%
                    </label>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={hiringAlgorithm.experience}
                      onChange={(e) => setHiringAlgorithm(prev => ({ ...prev, experience: Number(e.target.value) }))}
                      className="w-full h-3 bg-slate-700 rounded-lg appearance-none cursor-pointer slider"
                    />
                  </div>

                  <div>
                    <label className="flex items-center gap-3 text-white text-lg mb-3">
                      <Sliders className="w-5 h-5" />
                      Yaş Ağırlığı: {hiringAlgorithm.age}%
                    </label>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={hiringAlgorithm.age}
                      onChange={(e) => setHiringAlgorithm(prev => ({ ...prev, age: Number(e.target.value) }))}
                      className="w-full h-3 bg-slate-700 rounded-lg appearance-none cursor-pointer slider"
                    />
                  </div>

                  <div>
                    <label className="flex items-center gap-3 text-white text-lg">
                      <input
                        type="checkbox"
                        checked={hiringAlgorithm.genderBalance}
                        onChange={(e) => setHiringAlgorithm(prev => ({ ...prev, genderBalance: e.target.checked }))}
                        className="w-5 h-5 text-purple-600"
                      />
                      Cinsiyet Dengesi Kontrolü
                    </label>
                  </div>
                </div>

                {/* Real-time Results */}
                <div className="space-y-6">
                  <div className="bg-slate-700/50 rounded-xl p-6">
                    <h4 className="text-white text-lg mb-4 flex items-center gap-2">
                      <BarChart3 className="w-5 h-5" />
                      Çeşitlilik vs. Verimlilik Metre
                    </h4>
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-300">Çeşitlilik Puanı</span>
                        <span className="text-cyan-400">{diversityScore}%</span>
                      </div>
                      <div className="w-full bg-slate-600 rounded-full h-3">
                        <motion.div
                          className="bg-gradient-to-r from-cyan-400 to-blue-500 h-3 rounded-full"
                          initial={{ width: "50%" }}
                          animate={{ width: `${diversityScore}%` }}
                          transition={{ duration: 0.5 }}
                        />
                      </div>
                    </div>
                  </div>

                  <AnimatePresence>
                    {showAgeismWarning && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="bg-red-900/30 border border-red-500/50 rounded-xl p-4"
                      >
                        <div className="flex items-start gap-3">
                          <AlertTriangle className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" />
                          <div>
                            <h5 className="text-red-400 font-semibold mb-1">Dikkat!</h5>
                            <p className="text-red-200 text-sm">
                              Algoritman yaş ayrımcılığı (ageism) yapmaya başladı. Deneyimli adaylar eleniyor!
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Knowledge Block 2: Algoritmik Önyargı ve Manipülasyon */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/20">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-red-900/30 to-pink-900/30 backdrop-blur-lg rounded-2xl p-8 border border-red-500/30"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <AlertCircle className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-3">
                    📊 Derin Analiz: Algoritmik Önyargı
                  </h3>
                  <p className="text-red-200 text-lg">Şimdi deneyimlediğin simülasyonu analiz edelim</p>
                </div>
              </div>
              
              <div className="bg-red-950/30 border border-red-500/50 rounded-xl p-6 mb-6">
                <h4 className="text-red-300 font-bold text-xl mb-3 flex items-center gap-2">
                  <Search className="w-6 h-6" />
                  Kritik Gerçek
                </h4>
                <p className="text-red-100 text-lg leading-relaxed">
                  <strong>Algoritmalar tarafsız değildir.</strong> Verideki önyargılar, AI tarafından büyütülür ve 
                  işe alım gibi kritik süreçlerde ayrımcılığa yol açabilir. Az önce deneyimlediğin sliderlar, 
                  gerçek dünyadaki AI kararlarının nasıl manipüle edilebileceğini gösteriyor.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-slate-800/50 rounded-xl p-4">
                  <h5 className="text-yellow-400 font-semibold mb-2">Veri Önyargısı</h5>
                  <p className="text-gray-300 text-sm">Eğitim verisindeki önyargılar AI'a aktarılır</p>
                </div>
                <div className="bg-slate-800/50 rounded-xl p-4">
                  <h5 className="text-orange-400 font-semibold mb-2">Algoritma Manipülasyonu</h5>
                  <p className="text-gray-300 text-sm">Ağırlıklar önyargıları pekiştirebilir</p>
                </div>
                <div className="bg-slate-800/50 rounded-xl p-4">
                  <h5 className="text-cyan-400 font-semibold mb-2">Sistem Şeffaflığı</h5>
                  <p className="text-gray-300 text-sm">Karar süreçleri genellikle gizlidir</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Knowledge Block 3: Ahlaki Seçimler ve Sorumluluk */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 backdrop-blur-lg rounded-2xl p-8 border border-green-500/30"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-3">
                    🛡️ Aktif Etik Teorisi
                  </h3>
                  <p className="text-green-200 text-lg">Algoritmik manipülasyona karşı bilişsel kalkan inşa et</p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-green-950/30 border border-green-500/50 rounded-xl p-6">
                  <h4 className="text-green-300 font-bold text-xl mb-3">Pasif Kabulden Aktif Denetime</h4>
                  <p className="text-green-100 text-lg leading-relaxed">
                    Teknolojinin kararlarını sorgulamadan kabul etmek yerine, <strong>"Kritik Denetim"</strong> 
                    yaparak bilişsel egemenliğini koru. Her algoritma kararının arkasında insan tercihi vardır.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-slate-800/50 rounded-xl p-4">
                    <Lightbulb className="w-8 h-8 text-yellow-400 mb-3" />
                    <h5 className="text-white font-semibold mb-2">Sorgulayıcı Zihniyet</h5>
                    <p className="text-gray-300 text-sm">Her AI önerisini "Neden?" sorusuyla karşıla</p>
                  </div>
                  <div className="bg-slate-800/50 rounded-xl p-4">
                    <Shield className="w-8 h-8 text-blue-400 mb-3" />
                    <h5 className="text-white font-semibold mb-2">Bilişsel Egemenlik</h5>
                    <p className="text-gray-300 text-sm">Kararlarının kontrolünü makinelere bırakma</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Component 2: Social Proof Choice Mirroring */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                  Ahlaki Seçim Aynası
                </span>
              </h2>
              <p className="text-xl text-gray-300">
                Kararlarını analiz et ve toplumsal tercihlerle karşılaştır.
              </p>
            </motion.div>

            <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-8 border border-green-500/30">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                Frenleri patlayan otonom araç, yaşlı birini mi yoksa bir çocuğu mu kurtarmalı?
              </h3>

              {!carDilemmaChoice ? (
                <div className="grid md:grid-cols-2 gap-4">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      setCarDilemmaChoice('child')
                      setShowMoralStats(true)
                      triggerLearningMoment('moral-choice')
                    }}
                    className="p-6 bg-green-600/20 hover:bg-green-600/30 border border-green-500/50 rounded-xl transition-all"
                  >
                    <h4 className="text-white font-semibold mb-2">Çocuğu Kurtarmalı</h4>
                    <p className="text-gray-300 text-sm">Genç yaşamı önceliklendirme</p>
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      setCarDilemmaChoice('elderly')
                      setShowMoralStats(true)
                      triggerLearningMoment('moral-choice')
                    }}
                    className="p-6 bg-blue-600/20 hover:bg-blue-600/30 border border-blue-500/50 rounded-xl transition-all"
                  >
                    <h4 className="text-white font-semibold mb-2">Yaşlı Kişiyi Kurtarmalı</h4>
                    <p className="text-gray-300 text-sm">Yaşam deneyimini önceliklendirme</p>
                  </motion.button>
                </div>
              ) : (
                <div className="text-center">
                  <p className="text-white mb-6">
                    Seçimin: <span className="font-bold text-green-400">
                      {carDilemmaChoice === 'child' ? 'Çocuğu Kurtarmalı' : 'Yaşlı Kişiyi Kurtarmalı'}
                    </span>
                  </p>
                </div>
              )}

              <AnimatePresence>
                {showMoralStats && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-8 bg-slate-700/50 rounded-xl p-6"
                  >
                    <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                      <BarChart3 className="w-5 h-5" />
                      Toplumsal Tercih Analizi
                    </h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Çocukları kurtarmayı seçti</span>
                        <span className="text-green-400 font-bold">68%</span>
                      </div>
                      <div className="w-full bg-slate-600 rounded-full h-2">
                        <div className="bg-green-400 h-2 rounded-full w-[68%]"></div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Yaşlıları kurtarmayı seçti</span>
                        <span className="text-blue-400 font-bold">32%</span>
                      </div>
                      <div className="w-full bg-slate-600 rounded-full h-2">
                        <div className="bg-blue-400 h-2 rounded-full w-[32%]"></div>
                      </div>
                    </div>
                    <p className="text-yellow-300 text-sm mt-4 italic">
                      * Öğrencilerin %68'i çocukları kurtarmayı seçti.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* Knowledge Block 4: Dijital Gerçeklik ve Güven */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/20">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-900/30 to-indigo-900/30 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/30"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-3">
                    🔍 Deepfake Tehlikesi
                  </h3>
                  <p className="text-purple-200 text-lg">Dijital gerçeklikle sahte içeriği ayırt etmeyi öğren</p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-purple-950/30 border border-purple-500/50 rounded-xl p-6">
                  <h4 className="text-purple-300 font-bold text-xl mb-3 flex items-center gap-2">
                    <AlertTriangle className="w-6 h-6" />
                    Kritik Uyarı
                  </h4>
                  <p className="text-purple-100 text-lg leading-relaxed mb-4">
                    Deepfake teknolojisi, sahte videolar ve ses kayıtları üreterek toplumsal güveni sarsabilir. 
                    Gördüğün her şeye inanmak, Zeka Çağının en büyük tehlikelerinden biridir.
                  </p>
                  
                  <div className="bg-yellow-900/20 border border-yellow-500/50 rounded-lg p-4">
                    <h5 className="text-yellow-300 font-semibold mb-2">Navigator Kuralı:</h5>
                    <p className="text-yellow-100 font-medium">
                      "Gördüğün her şeye inanma. İnsan imzasını ve doğruluğu ara."
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-slate-800/50 rounded-xl p-4 text-center">
                    <Search className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                    <h5 className="text-white font-semibold mb-2">Doğrula</h5>
                    <p className="text-gray-300 text-sm">Çoklu kaynaklardan kontrol et</p>
                  </div>
                  <div className="bg-slate-800/50 rounded-xl p-4 text-center">
                    <Users className="w-8 h-8 text-green-400 mx-auto mb-3" />
                    <h5 className="text-white font-semibold mb-2">İnsan İmzası</h5>
                    <p className="text-gray-300 text-sm">Güvenilir insan kaynaklarını ara</p>
                  </div>
                  <div className="bg-slate-800/50 rounded-xl p-4 text-center">
                    <Brain className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                    <h5 className="text-white font-semibold mb-2">Eleştirel Düşünce</h5>
                    <p className="text-gray-300 text-sm">Hemen inanma, sorgula</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Component 3: Bias Radar Mini-Game */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                <span className="bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">
                  Önyargı Radar Oyunu
                </span>
              </h2>
              <p className="text-xl text-gray-300">
                Bilinçaltı önyargılarını keşfet ve AI'ın nasıl öğrendiğini anla.
              </p>
            </motion.div>

            <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-8 border border-red-500/30">
              {!biasRadar.gameComplete ? (
                <div>
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {biasRadarQuestions[biasRadar.currentQuestion].label} kimdir?
                    </h3>
                    <p className="text-gray-300">
                      Soru {biasRadar.currentQuestion + 1} / {biasRadarQuestions.length}
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {biasRadarQuestions[biasRadar.currentQuestion].personas.map((persona, index) => (
                      <motion.button
                        key={index}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => handleBiasRadarChoice(persona)}
                        className="p-8 bg-slate-700/50 hover:bg-red-600/20 border border-slate-600 hover:border-red-500 rounded-xl transition-all text-center"
                      >
                        <div className="w-24 h-24 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                          <Users className="w-12 h-12 text-white" />
                        </div>
                        <h4 className="text-white font-semibold">{persona}</h4>
                      </motion.button>
                    ))}
                  </div>
                </div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center"
                >
                  <h3 className="text-2xl font-bold text-white mb-6">Önyargı Radar Sonuçların</h3>
                  
                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-slate-700/50 rounded-xl p-6">
                      <h4 className="text-red-400 font-semibold mb-2">Cinsiyet Önyargısı</h4>
                      <div className="text-3xl font-bold text-white">{Math.round(calculateBiasRadar().genderBias)}%</div>
                    </div>
                    <div className="bg-slate-700/50 rounded-xl p-6">
                      <h4 className="text-yellow-400 font-semibold mb-2">Yaş Önyargısı</h4>
                      <div className="text-3xl font-bold text-white">{Math.round(calculateBiasRadar().ageBias)}%</div>
                    </div>
                    <div className="bg-slate-700/50 rounded-xl p-6">
                      <h4 className="text-green-400 font-semibold mb-2">Çeşitlilik Bilinci</h4>
                      <div className="text-3xl font-bold text-white">{Math.round(calculateBiasRadar().diversityAwareness)}%</div>
                    </div>
                  </div>

                  <div className="bg-yellow-900/20 border border-yellow-500/50 rounded-xl p-6">
                    <h4 className="text-yellow-400 font-semibold mb-3">💡 Anahtar Mesaj</h4>
                    <p className="text-white">
                      AI da tıpkı senin gibi toplumdaki önyargıları (bias) verilerden öğrenir. 
                      Bu sonuçlar AI sistemlerinin nasıl öğrendiğini ve neden adil veriye ihtiyaç duyduğunu gösteriyor.
                    </p>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </section>

        {/* Component 4: Ethics Journey Tracker */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  Kendi Bilişsel Kalkanını Oluştur
                </span>
              </h2>
              <p className="text-xl text-gray-300">
                Etik manifestonu oluştur ve Navigator kimliğini güçlendir
              </p>
            </motion.div>

            <div className="space-y-8">
              <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-8 border border-indigo-500/30">
                <h3 className="text-xl font-bold text-white mb-4">
                  Geleceğin AI dünyasında en çok hangi etik kurala ihtiyaç var?
                </h3>
                <textarea
                  value={ethicsJourney.notes}
                  onChange={(e) => setEthicsJourney(prev => ({ ...prev, notes: e.target.value }))}
                  placeholder="Düşüncelerini buraya yaz... Örn: AI sistemleri şeffaf olmalı, kullanıcılar nasıl çalıştığını anlamalı..."
                  className="w-full p-4 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-gray-400 resize-none focus:border-indigo-500 focus:outline-none"
                  rows={4}
                />
                <button
                  onClick={addManifestoPrinciple}
                  disabled={!ethicsJourney.notes.trim()}
                  className="mt-4 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 disabled:bg-slate-600 disabled:cursor-not-allowed text-white rounded-xl transition-all flex items-center gap-2"
                >
                  <Target className="w-5 h-5" />
                  Manifestoma Ekle
                </button>
              </div>

              {ethicsJourney.manifesto.length > 0 && (
                <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/30">
                  <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                    <FileText className="w-6 h-6" />
                    Etik Manifestom
                  </h3>
                  
                  <div className="space-y-4 mb-6">
                    {ethicsJourney.manifesto.map((principle, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-slate-700/50 rounded-xl p-4 border border-slate-600"
                      >
                        <div className="flex items-start gap-3">
                          <span className="text-purple-400 font-bold">{index + 1}.</span>
                          <p className="text-gray-300">{principle}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={generatePDFManifesto}
                    className="w-full p-4 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white rounded-xl transition-all flex items-center justify-center gap-3 text-lg font-semibold"
                  >
                    <Download className="w-6 h-6" />
                    Etik Manifestomu İndir (PDF)
                  </motion.button>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Next Steps Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-8">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Bilişsel Egemenlik Yolculuğuna Devam Et
                </span>
              </h2>
              
              <motion.a
                href="/mindcraft"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all"
              >
                <Zap className="w-6 h-6" />
                Diğer Modülleri Keşfet
                <ArrowRight className="w-5 h-5" />
              </motion.a>
            </motion.div>
          </div>
        </section>

        <Footer />

        {/* Learning Moments Popup */}
        <AnimatePresence>
          {showLearningMoment && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                className="bg-gradient-to-br from-slate-900 to-purple-900 rounded-2xl p-8 border border-purple-500/30 max-w-2xl w-full shadow-2xl"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center">
                    <Lightbulb className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">🧠 Öğrenme Anı</h3>
                    <p className="text-purple-200">Bilişsel Egemenlik Direği Aktifleştirildi</p>
                  </div>
                </div>

                {learningMomentType === 'bias-radar' && (
                  <div className="space-y-4">
                    <h4 className="text-xl font-semibold text-yellow-300">🎯 Önyargı Tespiti Tamamlandı</h4>
                    <p className="text-gray-300 leading-relaxed">
                      Tebrikler! Az önce kendi bilinçaltı önyargılarını keşfettin. Bu deneyim, AI sistemlerinin 
                      nasıl öğrendiğini ve toplumsal önyargıları nasıl yansıttığını gösteriyor.
                    </p>
                    <div className="bg-purple-900/30 rounded-lg p-4">
                      <p className="text-purple-100 font-medium">
                        <strong>Navigator Becerisi Kazandın:</strong> "Eleştirel Veri Analizi" - 
                        Artık AI kararlarının arkasındaki önyargıları fark edebilirsin.
                      </p>
                    </div>
                  </div>
                )}

                {learningMomentType === 'moral-choice' && (
                  <div className="space-y-4">
                    <h4 className="text-xl font-semibold text-green-300">⚖️ Etik Reasoning Aktif</h4>
                    <p className="text-gray-300 leading-relaxed">
                      Ahlaki seçimin, AI sistemlerinin nasıl programlandığını yansıtıyor. Gerçek dünyada 
                      bu tür kararlar algoritmalarca milisaniyeler içinde alınıyor.
                    </p>
                    <div className="bg-green-900/30 rounded-lg p-4">
                      <p className="text-green-100 font-medium">
                        <strong>Navigator Becerisi Kazandın:</strong> "Algoritmik Empati" - 
                        AI kararlarının arkasındaki değer yargılarını anlayabilirsin.
                      </p>
                    </div>
                  </div>
                )}

                {learningMomentType === 'hiring-bias' && (
                  <div className="space-y-4">
                    <h4 className="text-xl font-semibold text-red-300">🚨 Algoritmik Ayrımcılık Tespit Edildi</h4>
                    <p className="text-gray-300 leading-relaxed">
                      Yaş ağırlığını %80'in üzerine çıkardığında algoritma ayrımcılık yapmaya başladı! 
                      Bu, gerçek dünyada milyonlarca kişiyi etkileyebilecek sistemik önyargıların nasıl oluştuğunu gösteriyor.
                    </p>
                    <div className="bg-red-900/30 rounded-lg p-4">
                      <p className="text-red-100 font-medium">
                        <strong>Navigator Becerisi Kazandın:</strong> "Önyargı Dedektörlüğü" - 
                        Algoritmik ayrımcılığı anında fark edebilir ve müdahale edebilirsin.
                      </p>
                    </div>
                  </div>
                )}

                <button
                  onClick={() => setShowLearningMoment(false)}
                  className="mt-6 w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white py-3 px-6 rounded-xl transition-all flex items-center justify-center gap-2"
                >
                  <CheckCircle className="w-5 h-5" />
                  Navigator Yolculuğuna Devam Et
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: linear-gradient(45deg, #8b5cf6, #3b82f6);
          cursor: pointer;
          box-shadow: 0 0 10px rgba(139, 92, 246, 0.5);
        }

        .slider::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: linear-gradient(45deg, #8b5cf6, #3b82f6);
          cursor: pointer;
          border: none;
          box-shadow: 0 0 10px rgba(139, 92, 246, 0.5);
        }
      `}</style>
    </>
  )
}