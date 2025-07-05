"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, ExternalLink } from "lucide-react"

export function TemplatesSection() {
  const dashboards = [
    {
      name: "News Intelligence",
      description: "Live crypto news aggregation with AI impact assessment",
      image: "/api/placeholder/400/300",
      category: "Analytics"
    },
    {
      name: "Project Tracking",
      description: "Real-time social and market metrics for Web3 projects",
      image: "/api/placeholder/400/300",
      category: "Monitoring"
    },
    {
      name: "Investment Discovery",
      description: "Seed rounds and funding opportunities with AI scoring",
      image: "/api/placeholder/400/300",
      category: "Investment"
    },
    {
      name: "Trading Analytics",
      description: "Multi-DEX support with live trading metrics",
      image: "/api/placeholder/400/300",
      category: "Trading"
    }
  ]

  const integrations = [
    {
      name: "Twitter",
      users: "Real-time",
      description: "Social sentiment analysis",
      action: "Connect"
    },
    {
      name: "Bloomberg",
      users: "Live",
      description: "Financial news feed",
      action: "Connect"
    },
    {
      name: "DexScreener",
      users: "Multi-DEX",
      description: "Trading data integration",
      action: "Connect"
    },
    {
      name: "CoinGecko",
      users: "Market data",
      description: "Price and volume feeds",
      action: "Connect"
    },
    {
      name: "a16z",
      users: "Investment",
      description: "Deal flow insights",
      action: "Connect"
    },
    {
      name: "Polychain",
      users: "Portfolio",
      description: "Investment tracking",
      action: "Connect"
    }
  ]

  return (
    <section id="templates" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Powerful Dashboards & Integrations
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose from specialized Web3 intelligence dashboards and connect with leading data sources and platforms.
          </p>
        </div>

        {/* Dashboards Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Intelligence Dashboards
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {dashboards.map((dashboard, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-gray-800 hover:bg-gray-700">
                <CardHeader className="pb-4">
                  <div className="aspect-video bg-gray-700 rounded-lg mb-4 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-white rounded-lg mx-auto mb-2 flex items-center justify-center">
                        <span className="text-black font-bold text-lg">W3</span>
                      </div>
                      <p className="text-sm text-gray-400">{dashboard.name}</p>
                    </div>
                  </div>
                  <CardTitle className="text-lg font-semibold text-white">
                    {dashboard.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300 mb-4">
                    {dashboard.description}
                  </CardDescription>
                  <Badge variant="secondary" className="mb-4 bg-gray-700 text-gray-300">
                    {dashboard.category}
                  </Badge>
                  <Button 
                    variant="ghost" 
                    className="w-full justify-between text-white hover:text-gray-300 group-hover:bg-gray-700"
                  >
                    Launch dashboard
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Integrations Grid */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Data Integrations
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {integrations.map((integration, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-gray-800 hover:bg-gray-700">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-lg font-semibold text-white">
                      {integration.name}
                    </CardTitle>
                    <Badge variant="outline" className="text-xs border-gray-600 text-gray-300">
                      {integration.users}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300 mb-4">
                    {integration.description}
                  </CardDescription>
                  <Button 
                    variant="ghost" 
                    className="w-full justify-between text-white hover:text-gray-300 group-hover:bg-gray-700"
                  >
                    {integration.action}
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button 
            size="lg" 
            variant="outline" 
            className="border-2 border-gray-600 text-white px-8 py-4 text-lg font-semibold hover:bg-gray-800"
          >
            Explore All Integrations
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  )
} 