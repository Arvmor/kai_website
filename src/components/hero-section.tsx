"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"

export function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Trigger animations after component mounts
    const timer = setTimeout(() => setIsLoaded(true), 100)
    
    const video = videoRef.current
    if (video) {
      const playPromise = video.play()
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          video.muted = true
          video.play().catch(() => {})
        })
      }
    }

    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-60">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Stars with enhanced movement */}
        <div className={`absolute top-20 left-20 w-1 h-1 bg-white rounded-full animate-pulse opacity-60 transition-all duration-1000 ${isLoaded ? 'opacity-60' : 'opacity-0'}`} style={{ animation: 'float 6s ease-in-out infinite, pulse 2s ease-in-out infinite' }}></div>
        <div className={`absolute top-32 right-32 w-0.5 h-0.5 bg-white rounded-full transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-40' : 'opacity-0'}`} style={{ animation: 'float 8s ease-in-out infinite 1s, pulse 3s ease-in-out infinite' }}></div>
        <div className={`absolute top-48 left-1/4 w-0.5 h-0.5 bg-white rounded-full transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-50' : 'opacity-0'}`} style={{ animation: 'float 7s ease-in-out infinite 2s, pulse 2.5s ease-in-out infinite' }}></div>
        <div className={`absolute top-64 right-1/3 w-1 h-1 bg-white rounded-full transition-all duration-1000 delay-700 ${isLoaded ? 'opacity-30' : 'opacity-0'}`} style={{ animation: 'float 9s ease-in-out infinite 0.5s, pulse 1.8s ease-in-out infinite' }}></div>
        <div className={`absolute top-96 left-1/3 w-0.5 h-0.5 bg-white rounded-full transition-all duration-1000 delay-900 ${isLoaded ? 'opacity-60' : 'opacity-0'}`} style={{ animation: 'float 5s ease-in-out infinite 1.5s, pulse 2.2s ease-in-out infinite' }}></div>
        <div className={`absolute top-1/3 right-1/4 w-1 h-1 bg-white rounded-full transition-all duration-1000 delay-1100 ${isLoaded ? 'opacity-40' : 'opacity-0'}`} style={{ animation: 'float 10s ease-in-out infinite 0.8s, pulse 3.2s ease-in-out infinite' }}></div>
        <div className={`absolute top-2/3 left-1/5 w-0.5 h-0.5 bg-white rounded-full transition-all duration-1000 delay-1300 ${isLoaded ? 'opacity-50' : 'opacity-0'}`} style={{ animation: 'float 6.5s ease-in-out infinite 2.2s, pulse 2.8s ease-in-out infinite' }}></div>
        <div className={`absolute top-3/4 right-1/5 w-1 h-1 bg-white rounded-full transition-all duration-1000 delay-1500 ${isLoaded ? 'opacity-30' : 'opacity-0'}`} style={{ animation: 'float 7.5s ease-in-out infinite 1.2s, pulse 2.1s ease-in-out infinite' }}></div>
        
        {/* Additional floating stars */}
        <div className={`absolute top-16 right-1/3 w-0.5 h-0.5 bg-blue-300 rounded-full transition-all duration-1000 delay-200 ${isLoaded ? 'opacity-40' : 'opacity-0'}`} style={{ animation: 'float 11s ease-in-out infinite 0.3s, pulse 4s ease-in-out infinite' }}></div>
        <div className={`absolute top-40 left-1/6 w-0.5 h-0.5 bg-cyan-300 rounded-full transition-all duration-1000 delay-400 ${isLoaded ? 'opacity-35' : 'opacity-0'}`} style={{ animation: 'float 8.5s ease-in-out infinite 1.8s, pulse 2.7s ease-in-out infinite' }}></div>
        <div className={`absolute top-80 right-1/6 w-1 h-1 bg-purple-300 rounded-full transition-all duration-1000 delay-600 ${isLoaded ? 'opacity-45' : 'opacity-0'}`} style={{ animation: 'float 9.5s ease-in-out infinite 0.7s, pulse 3.5s ease-in-out infinite' }}></div>
        <div className={`absolute top-1/2 left-1/6 w-0.5 h-0.5 bg-pink-300 rounded-full transition-all duration-1000 delay-800 ${isLoaded ? 'opacity-40' : 'opacity-0'}`} style={{ animation: 'float 7.2s ease-in-out infinite 2.5s, pulse 2.9s ease-in-out infinite' }}></div>
        
        {/* Animated Waves with enhanced movement */}
        <div className={`absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl transition-all duration-1500 delay-500 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`} style={{ animation: 'pulse 4s ease-in-out infinite, float 12s ease-in-out infinite' }}></div>
        <div className={`absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl transition-all duration-1500 delay-700 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`} style={{ animation: 'pulse 6s ease-in-out infinite 1s, float 15s ease-in-out infinite 2s' }}></div>
        <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl transition-all duration-1500 delay-900 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`} style={{ animation: 'pulse 5s ease-in-out infinite 2s, float 18s ease-in-out infinite 1s' }}></div>
        
        {/* Rotating elements */}
        <div className={`absolute top-1/4 right-1/4 w-32 h-32 bg-gradient-to-br from-blue-400/5 to-transparent rounded-full blur-2xl transition-all duration-1500 delay-1100 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`} style={{ animation: 'rotate 20s linear infinite, pulse 8s ease-in-out infinite' }}></div>
        <div className={`absolute bottom-1/4 left-1/4 w-24 h-24 bg-gradient-to-tl from-purple-400/5 to-transparent rounded-full blur-2xl transition-all duration-1500 delay-1300 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`} style={{ animation: 'rotate 25s linear infinite reverse, pulse 7s ease-in-out infinite 3s' }}></div>
        
        {/* Scaling elements */}
        <div className={`absolute top-1/3 left-1/3 w-16 h-16 bg-gradient-to-br from-cyan-400/8 to-transparent rounded-full blur-xl transition-all duration-1500 delay-1500 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`} style={{ animation: 'scale 6s ease-in-out infinite, float 10s ease-in-out infinite 1s' }}></div>
        <div className={`absolute bottom-1/3 right-1/3 w-20 h-20 bg-gradient-to-tl from-pink-400/8 to-transparent rounded-full blur-xl transition-all duration-1500 delay-1700 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`} style={{ animation: 'scale 8s ease-in-out infinite 2s, float 12s ease-in-out infinite 0.5s' }}></div>
        
        {/* Orbital elements */}
        <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full transition-all duration-1500 delay-1900 ${isLoaded ? 'opacity-30' : 'opacity-0'}`} style={{ animation: 'orbit 30s linear infinite' }}></div>
        <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-blue-300 rounded-full transition-all duration-1500 delay-2100 ${isLoaded ? 'opacity-25' : 'opacity-0'}`} style={{ animation: 'orbit 25s linear infinite reverse' }}></div>
        
        {/* Subtle grid pattern with movement */}
        <div className={`absolute inset-0 transition-all duration-2000 delay-2300 ${isLoaded ? 'opacity-5' : 'opacity-0'}`} style={{ animation: 'float 40s ease-in-out infinite' }}>
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

        @keyframes starMove {
          from { background-position: 0 0; }
          to { background-position: 1000px 0; }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes neonGradientMove {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .neon-gradient-text {
          background: linear-gradient(270deg, #3b82f6, #a78bfa, #3b82f6);
          background-size: 200% 200%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          color: transparent;
          animation: neonGradientMove 10s ease-in-out infinite;
        }
      `}</style>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Headline */}
        <div className="mb-8">
          <div className={`transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <Image src="/logo.png" alt="Synps" width={100} height={100} className="mx-auto mb-6" />
          </div>
          
          <div className={`transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Synced with{" "}
              <span className="neon-gradient-text">
                Synps
              </span>
            </h1>
          </div>
          
          <div className={`transition-all duration-1000 delay-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Real-time crypto intelligence with AI-powered analytics. Track trending projects and market insights from Twitter, Bloomberg, and top sources.
            </p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center mb-12 transition-all duration-1000 delay-900 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Button 
            size="xl" 
            variant="primary"
            onClick={() => {
              const tweetText = encodeURIComponent("Looking to get early access to @synps_app \n\nOne platform for market data, sentiment, deal flow, and trends")
              const twitterUrl = `https://twitter.com/intent/tweet?text=${tweetText}`
              window.open(twitterUrl, '_blank')
            }}
            className="group"
          >
            <span className="relative z-10">Get Early Access</span>
            <ArrowRight className="size-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        </div>

        {/* Demo Preview */}
        <div className={`mt-16 relative rounded-md rounded-b-none overflow-hidden border-1 border-b-0 border-muted/90 transition-all duration-1000 delay-1100 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
         
          {/* Video with shadow */}
          <div className="relative">
            <video
              ref={videoRef}
              src="/demo.mp4"
              autoPlay
              muted
              playsInline
              loop
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
} 