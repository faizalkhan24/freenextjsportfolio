import { Inter } from 'next/font/google'
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import ServicesSection from '@/components/ServicesSection'
import ProjectsSection from '@/components/ProjectsSection'
import BlogSection from '@/components/BlogSection'
import ExperienceSection from '@/components/ExperienceSection'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <HeroSection/>
    <AboutSection/>
    <ServicesSection />
    <ProjectsSection/>
    <BlogSection/>
    <ExperienceSection/>
    </>
  )
}
