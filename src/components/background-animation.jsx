"use client"

import { useEffect, useRef } from "react"

const BackgroundAnimation = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    let animationFrameId

    // Set canvas dimensions
    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)
    handleResize()

    // Google colors
    const colors = ["#4285F4", "#EA4335", "#FBBC05", "#34A853"]

    // Create particles
    const particlesArray = []
    const numberOfParticles = 80
    const maxDistance = 150

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 5 + 1
        this.baseSize = this.size
        this.speedX = Math.random() * 2 - 1
        this.speedY = Math.random() * 2 - 1
        this.color = colors[Math.floor(Math.random() * colors.length)]
        this.opacity = Math.random() * 0.5 + 0.2
        this.pulseSpeed = 0.01 + Math.random() * 0.02
        this.pulseDirection = 1
        this.angle = Math.random() * Math.PI * 2
        this.angleSpeed = Math.random() * 0.002 + 0.002
        this.orbitRadius = Math.random() * 30 + 50
        this.lastConnectTime = 0
      }

      update() {
        // Orbital movement
        this.angle += this.angleSpeed

        // Add some randomness to movement
        this.x += this.speedX + Math.sin(this.angle) * 0.3
        this.y += this.speedY + Math.cos(this.angle) * 0.3

        // Pulse size
        if (this.size > this.baseSize * 1.5 || this.size < this.baseSize * 0.5) {
          this.pulseDirection *= -1
        }
        this.size += this.pulseDirection * this.pulseSpeed

        // Bounce off edges with some padding
        const padding = 50
        if (this.x < -padding || this.x > canvas.width + padding) {
          this.speedX *= -1
          this.x = Math.max(-padding, Math.min(this.x, canvas.width + padding))
        }
        if (this.y < -padding || this.y > canvas.height + padding) {
          this.speedY *= -1
          this.y = Math.max(-padding, Math.min(this.y, canvas.height + padding))
        }
      }

      draw() {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fillStyle = this.color
        ctx.globalAlpha = this.opacity
        ctx.fill()

        // Add glow effect
        const glow = 20
        const gradient = ctx.createRadialGradient(this.x, this.y, this.size * 0.5, this.x, this.y, this.size * glow)
        gradient.addColorStop(0, this.color)
        gradient.addColorStop(1, "rgba(0, 0, 0, 0)")

        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size * glow, 0, Math.PI * 2)
        ctx.fillStyle = gradient
        ctx.globalAlpha = 0.05
        ctx.fill()

        ctx.globalAlpha = 1
      }
    }

    const init = () => {
      for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle())
      }
    }

    const connectParticles = () => {
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          const dx = particlesArray[a].x - particlesArray[b].x
          const dy = particlesArray[a].y - particlesArray[b].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < maxDistance) {
            // Calculate line opacity based on distance
            const opacity = 1 - distance / maxDistance

            // Draw line between particles
            ctx.beginPath()
            ctx.strokeStyle = particlesArray[a].color
            ctx.globalAlpha = opacity * 0.2
            ctx.lineWidth = 1
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y)
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y)
            ctx.stroke()

            // Reset global alpha
            ctx.globalAlpha = 1
          }
        }
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update()
        particlesArray[i].draw()
      }

      // Connect particles with lines
      connectParticles()

      animationFrameId = requestAnimationFrame(animate)
    }

    init()
    animate()

    return () => {
      window.removeEventListener("resize", handleResize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full z-0" />
}

export default BackgroundAnimation
