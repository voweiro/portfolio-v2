import Header from "@/components/Header"
import Home from "@/components/Home"
import About from "@/components/About"
import Services from "@/components/Services"
import Portfolio from "@/components/Portfolio"
import Contact from "@/components/Contact"
import FadeInSection from "@/components/FadeInSection"

export default function Page() {
  return (
    <main>
      <Header />
      <FadeInSection triggerOnce={true}>
        <Home />
      </FadeInSection>
      <FadeInSection triggerOnce={true}>
        <About />
      </FadeInSection>
      <FadeInSection triggerOnce={true}>
        <Services />
      </FadeInSection>
      <FadeInSection triggerOnce={true}>
        <Portfolio />
      </FadeInSection>
      <FadeInSection triggerOnce={true}>
        <Contact />
      </FadeInSection>
    </main>
  )
}

