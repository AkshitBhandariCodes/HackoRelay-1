import Navbar from "./components/navbar"
import HeroSection from "./components/hero-section"
import BackgroundAnimation from "./components/background-animation"

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <BackgroundAnimation />
      <div className="relative z-10">
        <Navbar />
        <main>
          <HeroSection />
        </main>
      </div>
    </div>
  )
}

export default App
