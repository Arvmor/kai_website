"use client"


import { Button } from "@/components/ui/button"
import { ArrowRight, FileText, LineChart, DollarSign, Activity } from "lucide-react"
import { AppDock } from "./app-dock"
import Image from "next/image"

export function FeaturesSection() {
  const features = [
    {
      icon: FileText,
      title: "Live News",
      description: "Stay ahead with our comprehensive crypto news aggregation system. We monitor Twitter, Bloomberg, CoinDesk, and 50+ other premium sources in real-time. Our AI engine assesses each piece of news for market impact (High/Medium/Low) and filters out noise to deliver only the most relevant crypto-focused content. Never miss breaking news that could affect your portfolio.",
      color: "bg-white",
      image: "/app_news.png" // You can replace with actual images
    },
    {
      icon: LineChart,
      title: "Trending Projects Dashboard",
      description: "Track the pulse of the entire Web3 ecosystem with our comprehensive dashboard. Monitor Crypto, NFT, DeFi, Gaming, and AI projects across multiple chains. Get real-time social metrics including mention volume, sentiment analysis, and community growth. Combined with market data like price movements, trading volume, and TVL changes, you'll have a complete picture of what's trending and why.",
      color: "bg-white",
      image: "/app_trend.png"
    },
    {
      icon: DollarSign,
      title: "Seed Rounds & Investment Discovery",
      description: "Discover the next big thing before it goes mainstream. Our platform tracks live and upcoming Web3 funding rounds across DeFi, AI/ML, NFTs, Gaming, and Infrastructure sectors. Each deal is scored by our AI using multiple factors including team background, market opportunity, and investor interest. Get detailed insights into deal terms, participating investors, and market positioning to make informed investment decisions.",
      color: "bg-white",
      image: "/app_seeds.png"
    },
    {
      icon: Activity,
      title: "ConfluX - Real-Time Confluence Detection",
      description: "Introducing ConfluX - our revolutionary AI-powered confluence detection engine. It tracks thousands of wallets across Ethereum, Polygon, BSC, and other major chains simultaneously. The system identifies critical moments when multiple unique buyers act in synchronized patterns on specific tokens, signaling potential breakout opportunities. Our advanced algorithms filter out noise and focus on genuine confluence patterns, helping you spot early momentum before it becomes mainstream and capitalize on emerging trends.",
      color: "bg-white",
      image: "/app_trades.png"
    },
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
              <div className="ring-2 ring-white/10 rounded-xl overflow-hidden">
              <Image src={feature.image} alt={feature.title} width={500} height={500} />
              </div>

              {/* Content Side */}
              <div className="flex-1 w-full lg:w-1/2 space-y-8">
                <div className="space-y-6">
                  <div className="w-16 h-16 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 text-lg md:text-xl leading-relaxed font-light">
                      {feature.description}
                    </p>
                  </div>
                </div>
                
                <Button 
                  variant="ghost" 
                  className="p-0 h-auto text-white hover:text-gray-300 group-hover:translate-x-1 transition-transform duration-300 text-lg font-medium group"
                >
                  <span className="relative z-10">Learn more</span>
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
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