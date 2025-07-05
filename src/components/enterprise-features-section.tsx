"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Users, Zap, Globe } from "lucide-react"

export function EnterpriseFeaturesSection() {
  const features = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Enterprise-grade security without the complexity.",
      description: "SSO, role-based access, and enterprise-grade compliance keep everything protected. SOC 2 Type 2, ISO 27001, and GDPR compliance ensure your data stays secure. Share projects with confidence, internally or externally.",
      link: "Learn more",
      href: "#infrastructure"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaborate seamlessly across teams.",
      description: "Real-time collaboration with unlimited team members, advanced permissions, and version control. Work together on designs, prototypes, and production sites with full transparency and control.",
      link: "Learn more",
      href: "#collaboration"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Scale with confidence.",
      description: "Built for high-performance teams with unlimited projects, custom domains, and enterprise hosting. Deploy globally with CDN, automatic scaling, and 99.9% uptime SLA.",
      link: "Learn more",
      href: "#scaling"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global infrastructure.",
      description: "Deploy your sites globally with our enterprise-grade infrastructure. Automatic scaling, DDoS protection, and edge computing ensure your sites are fast and reliable worldwide.",
      link: "Learn more",
      href: "#infrastructure"
    }
  ]

  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Built for teams who think big and move fast
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Enterprise-grade features that scale with your team and keep your data secure.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid lg:grid-cols-2 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="group">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 hover:bg-white/10 transition-all duration-300">
                {/* Icon */}
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors">
                  <div className="text-white">
                    {feature.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="mb-6">
                  <h3 className="text-2xl font-semibold text-white mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Link */}
                <div className="flex items-center">
                  <Button 
                    variant="ghost" 
                    className="text-white hover:text-blue-400 p-0 h-auto font-semibold group/link"
                  >
                    {feature.link}
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Ready to get started?
            </h3>
            <p className="text-gray-300 mb-6">
              Talk to our sales team about your enterprise needs and get a custom quote.
            </p>
            <Button 
              size="lg" 
              className="bg-white hover:bg-gray-100 text-black px-8 py-4 text-lg font-semibold rounded-full"
            >
              Contact sales
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
} 