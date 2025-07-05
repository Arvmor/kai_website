"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
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
            Build a free website with{" "}
            <span className="text-white">
              Synapse
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Enjoy full design freedom, powerful CMS, built-in SEO, and real-time collaboration. Create professional, fully custom sites with the no-code builder loved by designers and high-performing teams.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button 
            size="lg" 
            className="bg-white hover:bg-gray-100 text-black px-8 py-4 text-lg font-semibold"
          >
            Start for free
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-2 border-gray-600 text-white px-8 py-4 text-lg font-semibold hover:bg-gray-900"
          >
            <Play className="mr-2 w-5 h-5" />
            See it in action
          </Button>
        </div>

        {/* Demo Preview */}
        <div className="mt-16 relative">
          <div className="relative mx-auto max-w-5xl">
            {/* Browser Frame */}
            <div className="bg-gray-900 rounded-lg shadow-2xl border border-gray-700 overflow-hidden">
              {/* Browser Header */}
              <div className="flex items-center space-x-2 p-4 bg-gray-800 border-b border-gray-700">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="flex-1 mx-4">
                  <div className="bg-gray-700 rounded-md px-3 py-1 text-sm text-gray-300">
                    synapse-website.synapse.app
                  </div>
                </div>
              </div>
              
              {/* Demo Content */}
              <div className="aspect-video bg-gray-800 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white rounded-2xl mx-auto mb-4 flex items-center justify-center">
                    <span className="text-black font-bold text-2xl">S</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Synapse Website Builder
                  </h3>
                  <p className="text-gray-400">
                    Beautiful websites, built with Synapse
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 