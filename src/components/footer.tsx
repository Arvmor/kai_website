"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Brand Section */}
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <Image src="/logo.png" alt="Synps" width={32} height={32}/>
              <span className="text-xl font-bold">Synps</span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-md">
              Real-time crypto intelligence with AI-powered analytics. Track trending projects and market insights from Twitter, Bloomberg, and top sources.
            </p>
            <div className="flex space-x-4">
              <Button 
                size="sm" 
                variant="primary"
                onClick={() => {
                  const tweetText = encodeURIComponent("Looking to get early access to @synps_app \n\nOne platform for market data, sentiment, deal flow, and trends")
                  const twitterUrl = `https://twitter.com/intent/tweet?text=${tweetText}`
                  window.open(twitterUrl, '_blank')
                }}
                className="group"
              >
                <span className="relative z-10">Get Early Access</span>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col justify-center">
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <h4 className="text-gray-300 font-medium mb-2">Platform</h4>
                <ul className="space-y-2 text-sm">
                  <li><span className="text-gray-400">Live News</span></li>
                  <li><span className="text-gray-400">Trending Projects</span></li>
                  <li><span className="text-gray-400">Investment Discovery</span></li>
                  <li><span className="text-gray-400">AI Analytics</span></li>
                </ul>
              </div>
              <div>
                <h4 className="text-gray-300 font-medium mb-2">Features</h4>
                <ul className="space-y-2 text-sm">
                  <li><span className="text-gray-400">ConfluX Detection</span></li>
                  <li><span className="text-gray-400">4-Second Updates</span></li>
                  <li><span className="text-gray-400">Real-time Data</span></li>
                  <li><span className="text-gray-400">Market Intelligence</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-gray-800 mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-6">
            <span className="text-gray-400 text-sm">© 2024 Synps. All rights reserved.</span>
          </div>
          
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-4">
              <span className="text-gray-400 text-sm">Follow us:</span>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => {
                  const tweetText = encodeURIComponent("Looking to get early access to @synps_app \n\nOne platform for market data, sentiment, deal flow, and trends")
                  const twitterUrl = `https://twitter.com/intent/tweet?text=${tweetText}`
                  window.open(twitterUrl, '_blank')
                }}
                className="text-gray-400 hover:text-white p-0 h-auto"
              >
                Twitter
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 