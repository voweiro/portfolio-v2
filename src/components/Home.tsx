"use client"

export default function Home() {
  return (
    <section
      id="home"
      className="min-h-screen bg-cover bg-center flex items-center text-gray-900 dark:text-white"
      style={{ backgroundImage: "url('/images/background4.png')" }}
    >
      <div className="container mx-auto px-4">
        <div className="mt-20 lg:mt-32">
          <p className="text-2xl mb-4 text-gray-800 dark:text-gray-200">Full Stack  Developer</p>
          <h1 className="text-4xl lg:text-6xl font-bold mb-4">
            Hi, I'm <span className="text-pink-600">Ajenaghonore</span> <br /> Voweiro
          </h1>
        </div>
      </div>
    </section>
  )
}

