"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Search, TrendingUp, Rocket, BarChart3, Brain, Zap } from "lucide-react"
import { AppDock } from "./app-dock"

export function FeaturesSection() {
  const features = [
    {
      icon: Search,
      title: "Live News",
      description: "Aggregated crypto news from top sources (Twitter, Bloomberg, etc.) with AI-assessed impact (High/Medium/Low) and crypto-focused filtering.",
      color: "bg-white",
      image: "/demo.mp4" // You can replace with actual images
    },
    {
      icon: TrendingUp,
      title: "Trending Projects Dashboard",
      description: "Tracks Crypto, NFT, DeFi, Gaming, and AI projects with real-time social + market metrics (mentions, price, volume, TVL).",
      color: "bg-white",
      image: "/demo.mp4"
    },
    {
      icon: Rocket,
      title: "Seed Rounds & Investment Discovery",
      description: "Live & upcoming Web3 funding rounds (DeFi, AI/ML, NFTs, etc.) with AI scoring for deal evaluation and investor insights.",
      color: "bg-white",
      image: "/demo.mp4"
    },
    {
      icon: BarChart3,
      title: "Real-Time Trading & DEX Analytics",
      description: "Multi-DEX support (DexScreener, BullX, Trojan) with live trading metrics: market cap, price change, unique trader count.",
      color: "bg-white",
      image: "/demo.mp4"
    },
    {
      icon: Brain,
      title: "AI-Powered Web3 Analytics",
      description: "Sentiment analysis and signal detection with market impact prediction and risk & momentum scoring.",
      color: "bg-white",
      image: "/demo.mp4"
    },
    {
      icon: Zap,
      title: "4-Second Updates",
      description: "Real-time data refresh every 4 seconds ensuring you never miss critical market movements and breaking news.",
      color: "bg-white",
      image: "/demo.mp4"
    }
  ]

  return (
    <section id="features" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Synps Platform
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From live news aggregation to AI-powered analytics, get everything you need to stay ahead in the Web3 ecosystem.
          </p>
        </div>

        <AppDock />

        {/* Alternative Layout Features */}
        <div className="space-y-24 mb-16">
          {features.map((feature, index) => (
            <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}>
              {/* Image/Visual Side */}
              <div className="flex-1 w-full lg:w-1/2">
                <div className="relative group">
                  <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl border border-white/10 overflow-hidden">
                    <video 
                      autoPlay 
                      loop 
                      muted 
                      playsInline
                      className="w-full h-full object-cover"
                    >
                      <source src={feature.image} type="video/mp4" />
                    </video>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                </div>
              </div>

              {/* Content Side */}
              <div className="flex-1 w-full lg:w-1/2 space-y-6">
                <div className="w-16 h-16 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    {feature.description}
                  </p>
                  <Button 
                    variant="ghost" 
                    className="p-0 h-auto text-white hover:text-gray-300 group-hover:translate-x-1 transition-transform duration-300"
                  >
                    Learn more
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                4s
              </div>
              <div className="text-gray-300">Update Interval</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                50+
              </div>
              <div className="text-gray-300">News Sources</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                1000+
              </div>
              <div className="text-gray-300">Tracked Projects</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                AI
              </div>
              <div className="text-gray-300">Powered Analytics</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 