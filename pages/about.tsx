import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About - Global Shapers Izmir Hub</title>
        <meta name="description" content="About Global Shapers Izmir Hub" />
      </Head>

      <Navbar />

      <main className="pt-20">
        <section className="bg-gradient-to-br from-gs-purple to-gs-blue py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">About</h1>
              <p className="text-xl text-gray-200 max-w-3xl">Global Shapers Izmir Hub is a community of young leaders committed to social impact.</p>
            </motion.div>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gs-navy mb-6">Our Story</h2>
            <p className="text-gray-600 leading-relaxed">We are a group of passionate young people from Izmir and beyond, working to create measurable social impact through education, collaboration, and community projects.</p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
