"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Palette, Zap, Users, Database, Search, Globe } from "lucide-react"

export function FeaturesSection() {
  const features = [
    {
      icon: Palette,
      title: "Design",
      description: "A true design canvas, not just a visual HTML editor.",
      color: "bg-white"
    },
    {
      icon: Zap,
      title: "Animations",
      description: "Make your designs move, without moving mountains.",
      color: "bg-white"
    },
    {
      icon: Users,
      title: "Collaborate",
      description: "Great things happen together. Collaborate live on one canvas.",
      color: "bg-white"
    },
    {
      icon: Database,
      title: "CMS",
      description: "Build a CMS that fits you and your team.",
      color: "bg-white"
    },
    {
      icon: Search,
      title: "SEO",
      description: "SEO that works. Speed that wins.",
      color: "bg-white"
    },
    {
      icon: Globe,
      title: "Publish",
      description: "One button, global reach. Synapse makes it seamless.",
      color: "bg-white"
    }
  ]

  return (
    <section id="features" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Not everything powerful has to look complicated
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Synapse combines powerful features with an intuitive interface, making website creation accessible to everyone.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-gray-900 hover:bg-gray-800">
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
        <div className="bg-gray-900 rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                400
              </div>
              <div className="text-gray-300">Live Visitors</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                1.7M
              </div>
              <div className="text-gray-300">Unique Visitors</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                3.2M
              </div>
              <div className="text-gray-300">Total Pageviews</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                43%
              </div>
              <div className="text-gray-300">Bounce Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 