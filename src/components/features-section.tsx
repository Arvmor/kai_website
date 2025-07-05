"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Search, TrendingUp, Rocket, BarChart3, Brain, Zap } from "lucide-react"

export function FeaturesSection() {
  const features = [
    {
      icon: Search,
      title: "Live News",
      description: "Aggregated crypto news from top sources (Twitter, Bloomberg, etc.) with AI-assessed impact (High/Medium/Low) and crypto-focused filtering.",
      color: "bg-white"
    },
    {
      icon: TrendingUp,
      title: "Trending Projects Dashboard",
      description: "Tracks Crypto, NFT, DeFi, Gaming, and AI projects with real-time social + market metrics (mentions, price, volume, TVL).",
      color: "bg-white"
    },
    {
      icon: Rocket,
      title: "Seed Rounds & Investment Discovery",
      description: "Live & upcoming Web3 funding rounds (DeFi, AI/ML, NFTs, etc.) with AI scoring for deal evaluation and investor insights.",
      color: "bg-white"
    },
    {
      icon: BarChart3,
      title: "Real-Time Trading & DEX Analytics",
      description: "Multi-DEX support (DexScreener, BullX, Trojan) with live trading metrics: market cap, price change, unique trader count.",
      color: "bg-white"
    },
    {
      icon: Brain,
      title: "AI-Powered Web3 Analytics",
      description: "Sentiment analysis and signal detection with market impact prediction and risk & momentum scoring.",
      color: "bg-white"
    },
    {
      icon: Zap,
      title: "4-Second Updates",
      description: "Real-time data refresh every 4 seconds ensuring you never miss critical market movements and breaking news.",
      color: "bg-white"
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

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10">
              <CardHeader className="pb-4">
                <div className={`w-12 h-12 rounded-lg ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-6 h-6 text-black" />
                </div>
                <CardTitle className="text-xl font-semibold text-white">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300 text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
                <Button 
                  variant="ghost" 
                  className="mt-4 p-0 h-auto text-white hover:text-gray-300 group-hover:translate-x-1 transition-transform duration-300"
                >
                  Learn more
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
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