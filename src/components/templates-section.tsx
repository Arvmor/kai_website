"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, ExternalLink } from "lucide-react"

export function TemplatesSection() {
  const templates = [
    {
      name: "Startup",
      description: "Perfect for new businesses and startups",
      image: "/api/placeholder/400/300",
      category: "Business"
    },
    {
      name: "Agency",
      description: "Professional agency and service websites",
      image: "/api/placeholder/400/300",
      category: "Business"
    },
    {
      name: "Portfolio",
      description: "Showcase your work and skills",
      image: "/api/placeholder/400/300",
      category: "Personal"
    },
    {
      name: "SaaS",
      description: "Software and app landing pages",
      image: "/api/placeholder/400/300",
      category: "Business"
    }
  ]

  const plugins = [
    {
      name: "Sheets",
      users: "73K",
      description: "Sync with Google",
      action: "Open in"
    },
    {
      name: "Humblytics",
      users: "40K",
      description: "Track your site",
      action: "Open in"
    },
    {
      name: "Lummi",
      users: "85K",
      description: "Beautiful assets",
      action: "Open in"
    },
    {
      name: "Renamer",
      users: "18K",
      description: "Organize your layers",
      action: "Open in"
    },
    {
      name: "Semflow",
      users: "45K",
      description: "SEO tools",
      action: "Open in"
    },
    {
      name: "Dither",
      users: "7K",
      description: "Dither effect for images",
      action: "Open in"
    }
  ]

  return (
    <section id="templates" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Start with a Template, level-up with Plugins
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose from hundreds of beautiful templates and extend your site with powerful plugins.
          </p>
        </div>

        {/* Templates Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Templates
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {templates.map((template, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-gray-800 hover:bg-gray-700">
                <CardHeader className="pb-4">
                  <div className="aspect-video bg-gray-700 rounded-lg mb-4 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-white rounded-lg mx-auto mb-2 flex items-center justify-center">
                        <span className="text-black font-bold text-lg">F</span>
                      </div>
                      <p className="text-sm text-gray-400">{template.name}</p>
                    </div>
                  </div>
                  <CardTitle className="text-lg font-semibold text-white">
                    {template.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300 mb-4">
                    {template.description}
                  </CardDescription>
                  <Badge variant="secondary" className="mb-4 bg-gray-700 text-gray-300">
                    {template.category}
                  </Badge>
                  <Button 
                    variant="ghost" 
                    className="w-full justify-between text-white hover:text-gray-300 group-hover:bg-gray-700"
                  >
                    Use template
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Plugins Grid */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Popular Plugins
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {plugins.map((plugin, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-gray-800 hover:bg-gray-700">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-lg font-semibold text-white">
                      {plugin.name}
                    </CardTitle>
                    <Badge variant="outline" className="text-xs border-gray-600 text-gray-300">
                      {plugin.users} users
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300 mb-4">
                    {plugin.description}
                  </CardDescription>
                  <Button 
                    variant="ghost" 
                    className="w-full justify-between text-white hover:text-gray-300 group-hover:bg-gray-700"
                  >
                    {plugin.action}
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
            Browse the Marketplace
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  )
} 