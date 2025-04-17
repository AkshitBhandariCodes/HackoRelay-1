import { Button } from "@/components/ui/button"
import CountdownTimer from "./countdown-timer"

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-[#4285F4] via-[#EA4335] to-[#34A853] text-transparent bg-clip-text">
            Hack O Relay
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            Join us for an exciting 48-hour hackathon in collaboration with Google
          </p>
          <div className="mb-10">
            <CountdownTimer />
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button className="bg-gradient-to-r from-[#4285F4] to-[#34A853] hover:opacity-90 text-white px-8 py-6 text-lg">
              Register Now
            </Button>
            <Button
              variant="outline"
              className="border-[#EA4335] text-[#EA4335] hover:bg-[#EA4335]/10 px-8 py-6 text-lg"
            >
              Learn More
            </Button>
          </div>
          <div className="text-lg font-medium">
            <p className="mb-2 text-white">May 2-3, 2025</p>
            <p className="text-gray-400">48 Hours of Innovation, Collaboration, and Fun!</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
