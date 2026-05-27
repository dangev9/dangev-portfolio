import AboutMe from "./components/home/about-me"
import Contact from "./components/home/contact"
import EducationSkills from "./components/home/education-skills"
import ExperienceSec from "./components/home/experience-sec"
import HeroSection from "./components/home/hero-section"
import LatestWork from "./components/home/latest-work"

export default function Page() {
  return (
    <main>
      <HeroSection />
      <AboutMe />
      <ExperienceSec />
      <EducationSkills />
      <LatestWork />
      <Contact />
    </main>
  )
}