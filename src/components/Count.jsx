"use client"
import React from "react"
import CountUp from "./CountUp"

const Count = () => {
  const stats = [
    { to: 20, label: "Years Experience" },
    { to: 750, label: "Cases Won" },
    { to: 2015, label: "Founded" },
  ]

  return (
    <div className="w-full bg-white text-[#0b1526] py-8 md:py-10">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-8 text-center px-6 overflow-x-hidden">
        {stats.map((stat, i) => (
          <div key={i}>
            <CountUp
              from={0}
              to={stat.to}

              direction="up"
              duration={2}
              className="text-4xl md:text-5xl font-bold text-[#C5A25A]"
            />
            <p className="mt-2 text-base text-gray-600">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Count