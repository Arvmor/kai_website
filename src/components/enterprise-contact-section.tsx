"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"

export function EnterpriseContactSection() {
  const benefits = [
    "Custom pricing for your team size",
    "Dedicated account manager",
    "Priority support and onboarding",
    "Custom integrations and features",
    "Training and workshops",
    "SLA guarantees"
  ]

  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Get enterprise pricing
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Talk to our sales team about your specific needs. We&apos;ll create a custom plan that fits your team size, budget, and requirements.
            </p>

            {/* Benefits List */}
            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Additional Info */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6">
              <h3 className="text-xl font-semibold text-white mb-3">
                Enterprise trial
              </h3>
              <p className="text-gray-300 mb-4">
                Start with a 30-day enterprise trial. No credit card required, full access to all features.
              </p>
              <Button 
                variant="outline" 
                className="border-white/20 text-white hover:bg-white/10"
              >
                Start trial
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Right Content - Contact Form */}
          <div className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-8">
            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-white mb-2">
                Contact sales
              </h3>
              <p className="text-gray-300">
                Fill out the form below and we&apos;ll get back to you within 24 hours.
              </p>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="First name"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Last name"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Work Email *
                </label>
                <input
                  type="email"
                  required
                  placeholder="you@company.com"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Company *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Company name"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Team Size
                </label>
                <select className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option value="">Select team size</option>
                  <option value="1-10">1-10 people</option>
                  <option value="11-50">11-50 people</option>
                  <option value="51-200">51-200 people</option>
                  <option value="201-500">201-500 people</option>
                  <option value="500+">500+ people</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  How can we help? *
                </label>
                <textarea
                  required
                  placeholder="Tell us about your project, team, and specific needs..."
                  rows={4}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                ></textarea>
              </div>

              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  required
                  className="mt-1 w-4 h-4 bg-white/5 border border-white/10 rounded focus:ring-2 focus:ring-blue-500"
                />
                <label className="text-sm text-gray-300">
                  I agree to receive marketing communications from Synapse. You can unsubscribe at any time.
                </label>
              </div>

              <Button 
                type="submit"
                className="w-full bg-white hover:bg-gray-100 text-black py-3 text-lg font-semibold rounded-full"
              >
                Send message
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-400">
                By submitting this form, you agree to our{" "}
                <a href="#" className="text-blue-400 hover:text-blue-300">Privacy Policy</a>
                {" "}and{" "}
                <a href="#" className="text-blue-400 hover:text-blue-300">Terms of Service</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 