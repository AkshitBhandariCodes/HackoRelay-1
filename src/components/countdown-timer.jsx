"use client"

import { useState, useEffect } from "react"

const CountdownTimer = () => {
  // Target date: May 2, 2025 (assuming next year)
  const targetDate = new Date("May 2, 2025 09:00:00").getTime()

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime()
      const difference = targetDate - now

      if (difference <= 0) {
        clearInterval(interval)
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        return
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24))
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((difference % (1000 * 60)) / 1000)

      setTimeLeft({ days, hours, minutes, seconds })
    }, 1000)

    return () => clearInterval(interval)
  }, [targetDate])

  const timeBlocks = [
    { label: "Days", value: timeLeft.days, color: "#EA4335", glowClass: "glow-red" },
    { label: "Hours", value: timeLeft.hours, color: "#FBBC05", glowClass: "glow-yellow" },
    { label: "Minutes", value: timeLeft.minutes, color: "#34A853", glowClass: "glow-green" },
    { label: "Seconds", value: timeLeft.seconds, color: "#4285F4", glowClass: "glow" },
  ]

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {timeBlocks.map((block, index) => (
        <div
          key={index}
          className={`flex flex-col items-center p-4 rounded-lg glass w-24 h-24 justify-center ${block.glowClass}`}
          style={{ borderColor: block.color, borderWidth: "2px" }}
        >
          <span className="text-3xl font-bold" style={{ color: block.color }}>
            {String(block.value).padStart(2, "0")}
          </span>
          <span className="text-xs font-medium text-gray-300">{block.label}</span>
        </div>
      ))}
    </div>
  )
}

export default CountdownTimer
