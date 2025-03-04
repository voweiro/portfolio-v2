"use client"

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
      <FadeInSection>
        <Home />
      </FadeInSection>
      <FadeInSection>
        <About />
      </FadeInSection>
      <FadeInSection>
        <Services />
      </FadeInSection>
      <FadeInSection>
        <Portfolio />
      </FadeInSection>
      <FadeInSection>
        <Contact />
      </FadeInSection>
    </main>
  )
}

