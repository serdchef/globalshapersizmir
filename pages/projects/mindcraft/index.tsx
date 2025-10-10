import Head from 'next/head'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { projects } from '@/data/projects'
import { ArrowLeft } from 'lucide-react'

export default function MindcraftProject() {
  const project = projects.find(p => p.slug === 'mindcraft')!

  return (
    <>
      <Head>
        <title>{project.title} - Global Shapers Izmir Hub</title>
        <meta name="description" content={project.shortDescription} />
      </Head>

      <Navbar />

      <main className="pt-20">
        <section className="bg-gradient-to-br from-gs-blue to-gs-purple py-24">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
            <Link href="/projects" className="inline-flex items-center text-white/80 hover:text-white mb-6">
              <ArrowLeft className="w-5 h-5 mr-2" /> All Projects
            </Link>
            <h1 className="text-5xl font-bold mb-4">{project.title}</h1>
            <p className="text-xl max-w-3xl mb-6">{project.shortDescription}</p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg">
            <div dangerouslySetInnerHTML={{ __html: project.longDescription.replace(/\n\n/g, '</p><p>').replace(/^/, '<p>').replace(/$/, '</p>') }} />
            {project.links?.documentation && (
              <p className="mt-6">
                <a href={project.links.documentation} className="text-gs-blue underline">View curriculum / docs</a>
              </p>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
