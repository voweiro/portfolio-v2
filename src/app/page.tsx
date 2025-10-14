import Header from "@/components/Header"
import Home from "@/components/Home"
import About from "@/components/About"
import Services from "@/components/Services"
import Portfolio from "@/components/Portfolio"
import Contact from "@/components/Contact"
import FadeInSection from "@/components/FadeInSection"
import SectionDivider from "@/components/SectionDivider"

export default function Page() {
  return (
    <main>
      <Header />
      <FadeInSection triggerOnce={true}>
        <Home />
      </FadeInSection>
      <SectionDivider />
      <FadeInSection triggerOnce={true}>
        <About />
      </FadeInSection>
      <SectionDivider />
      <FadeInSection triggerOnce={true}>
        <Services />
      </FadeInSection>
      <SectionDivider />
      <FadeInSection triggerOnce={true}>
        <Portfolio />
      </FadeInSection>
      <SectionDivider />
      <FadeInSection triggerOnce={true}>
        <Contact />
      </FadeInSection>
    </main>
  )
}

