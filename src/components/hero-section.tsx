"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-60">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gray-900 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gray-900 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gray-900 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Headline */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Synced with{" "}
            <span className="text-white">
              Synapse
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Live crypto news intelligence, trending projects dashboard, and AI-powered analytics. Get real-time insights from Twitter, Bloomberg, and top sources with updates every 4 seconds.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button 
            size="lg" 
            className="bg-white hover:bg-gray-100 text-black px-8 py-4 text-lg font-semibold"
          >
            Start exploring
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-2 border-gray-600 text-white px-8 py-4 text-lg font-semibold hover:bg-gray-900"
          >
            <Play className="mr-2 w-5 h-5" />
            Watch demo
          </Button>
        </div>

        {/* Demo Preview */}
        <div className="mt-16 relative rounded-lg overflow-hidden">
          {/* Top gradient shadow */}
          <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-black/60 to-transparent z-10 pointer-events-none"></div>
          
          {/* Bottom gradient shadow */}
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/60 to-transparent z-10 pointer-events-none"></div>
          
          {/* Left gradient shadow */}
          <div className="absolute top-0 left-0 bottom-0 w-16 bg-gradient-to-r from-black/60 to-transparent z-10 pointer-events-none"></div>
          
          {/* Right gradient shadow */}
          <div className="absolute top-0 right-0 bottom-0 w-16 bg-gradient-to-l from-black/60 to-transparent z-10 pointer-events-none"></div>
          
          {/* Video with shadow */}
          <div className="relative shadow-2xl shadow-black/50">
            <video src="/demo.mp4" autoPlay muted loop className="w-full h-full object-cover rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  )
} 