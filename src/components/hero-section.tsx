"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-60">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Stars with enhanced movement */}
        <div className="absolute top-20 left-20 w-1 h-1 bg-white rounded-full animate-pulse opacity-60" style={{ animation: 'float 6s ease-in-out infinite, pulse 2s ease-in-out infinite' }}></div>
        <div className="absolute top-32 right-32 w-0.5 h-0.5 bg-white rounded-full opacity-40" style={{ animation: 'float 8s ease-in-out infinite 1s, pulse 3s ease-in-out infinite' }}></div>
        <div className="absolute top-48 left-1/4 w-0.5 h-0.5 bg-white rounded-full opacity-50" style={{ animation: 'float 7s ease-in-out infinite 2s, pulse 2.5s ease-in-out infinite' }}></div>
        <div className="absolute top-64 right-1/3 w-1 h-1 bg-white rounded-full opacity-30" style={{ animation: 'float 9s ease-in-out infinite 0.5s, pulse 1.8s ease-in-out infinite' }}></div>
        <div className="absolute top-96 left-1/3 w-0.5 h-0.5 bg-white rounded-full opacity-60" style={{ animation: 'float 5s ease-in-out infinite 1.5s, pulse 2.2s ease-in-out infinite' }}></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-white rounded-full opacity-40" style={{ animation: 'float 10s ease-in-out infinite 0.8s, pulse 3.2s ease-in-out infinite' }}></div>
        <div className="absolute top-2/3 left-1/5 w-0.5 h-0.5 bg-white rounded-full opacity-50" style={{ animation: 'float 6.5s ease-in-out infinite 2.2s, pulse 2.8s ease-in-out infinite' }}></div>
        <div className="absolute top-3/4 right-1/5 w-1 h-1 bg-white rounded-full opacity-30" style={{ animation: 'float 7.5s ease-in-out infinite 1.2s, pulse 2.1s ease-in-out infinite' }}></div>
        
        {/* Additional floating stars */}
        <div className="absolute top-16 right-1/3 w-0.5 h-0.5 bg-blue-300 rounded-full opacity-40" style={{ animation: 'float 11s ease-in-out infinite 0.3s, pulse 4s ease-in-out infinite' }}></div>
        <div className="absolute top-40 left-1/6 w-0.5 h-0.5 bg-cyan-300 rounded-full opacity-35" style={{ animation: 'float 8.5s ease-in-out infinite 1.8s, pulse 2.7s ease-in-out infinite' }}></div>
        <div className="absolute top-80 right-1/6 w-1 h-1 bg-purple-300 rounded-full opacity-45" style={{ animation: 'float 9.5s ease-in-out infinite 0.7s, pulse 3.5s ease-in-out infinite' }}></div>
        <div className="absolute top-1/2 left-1/6 w-0.5 h-0.5 bg-pink-300 rounded-full opacity-40" style={{ animation: 'float 7.2s ease-in-out infinite 2.5s, pulse 2.9s ease-in-out infinite' }}></div>
        
        {/* Animated Waves with enhanced movement */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl" style={{ animation: 'pulse 4s ease-in-out infinite, float 12s ease-in-out infinite' }}></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl" style={{ animation: 'pulse 6s ease-in-out infinite 1s, float 15s ease-in-out infinite 2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl" style={{ animation: 'pulse 5s ease-in-out infinite 2s, float 18s ease-in-out infinite 1s' }}></div>
        
        {/* Rotating elements */}
        <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-gradient-to-br from-blue-400/5 to-transparent rounded-full blur-2xl" style={{ animation: 'rotate 20s linear infinite, pulse 8s ease-in-out infinite' }}></div>
        <div className="absolute bottom-1/4 left-1/4 w-24 h-24 bg-gradient-to-tl from-purple-400/5 to-transparent rounded-full blur-2xl" style={{ animation: 'rotate 25s linear infinite reverse, pulse 7s ease-in-out infinite 3s' }}></div>
        
        {/* Scaling elements */}
        <div className="absolute top-1/3 left-1/3 w-16 h-16 bg-gradient-to-br from-cyan-400/8 to-transparent rounded-full blur-xl" style={{ animation: 'scale 6s ease-in-out infinite, float 10s ease-in-out infinite 1s' }}></div>
        <div className="absolute bottom-1/3 right-1/3 w-20 h-20 bg-gradient-to-tl from-pink-400/8 to-transparent rounded-full blur-xl" style={{ animation: 'scale 8s ease-in-out infinite 2s, float 12s ease-in-out infinite 0.5s' }}></div>
        
        {/* Orbital elements */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full opacity-30" style={{ animation: 'orbit 30s linear infinite' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-blue-300 rounded-full opacity-25" style={{ animation: 'orbit 25s linear infinite reverse' }}></div>
        
        {/* Subtle grid pattern with movement */}
        <div className="absolute inset-0 opacity-5" style={{ animation: 'float 40s ease-in-out infinite' }}>
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-20px) translateX(10px); }
          50% { transform: translateY(-10px) translateX(-15px); }
          75% { transform: translateY(-30px) translateX(5px); }
        }
        
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes scale {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.2); }
        }
        
        @keyframes orbit {
          0% { transform: translateX(100px) translateY(0px) rotate(0deg); }
          25% { transform: translateX(0px) translateY(-100px) rotate(90deg); }
          50% { transform: translateX(-100px) translateY(0px) rotate(180deg); }
          75% { transform: translateX(0px) translateY(100px) rotate(270deg); }
          100% { transform: translateX(100px) translateY(0px) rotate(360deg); }
        }
      `}</style>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Headline */}
        <div className="mb-8">
          <Image src="/logo.png" alt="Synapse" width={100} height={100} className="mx-auto mb-6" />
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Synced with{" "}
            <span className="text-white">
              Synapse
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Real-time crypto intelligence with AI-powered analytics. Track trending projects and market insights from Twitter, Bloomberg, and top sources.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button 
            size="lg" 
            variant="glassy"
          >
            Early Access
            <ArrowRight className="size-4" />
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