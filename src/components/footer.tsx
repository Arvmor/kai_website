"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import Image from "next/image"

export function Footer() {
  const footerSections = [
    {
      title: "Platform",
      links: [
        { label: "News Intelligence", href: "#" },
        { label: "Project Tracking", href: "#" },
        { label: "Investment Discovery", href: "#" },
        { label: "Trading Analytics", href: "#" },
        { label: "AI Analytics", href: "#" },
        { label: "API Access", href: "#" },
      ]
    },
    {
      title: "Data Sources",
      links: [
        { label: "Twitter", href: "#" },
        { label: "Bloomberg", href: "#" },
        { label: "DexScreener", href: "#" },
        { label: "CoinGecko", href: "#" },
        { label: "a16z", href: "#" },
        { label: "Polychain", href: "#" },
      ]
    },
    {
      title: "Markets",
      links: [
        { label: "DeFi", href: "#" },
        { label: "NFTs", href: "#" },
        { label: "Gaming", href: "#" },
        { label: "AI/ML", href: "#" },
        { label: "Infrastructure", href: "#" },
        { label: "Layer 1s", href: "#" },
      ]
    },
    {
      title: "Company",
      links: [
        { label: "Security", href: "#" },
        { label: "Careers", href: "#" },
        { label: "Status", href: "#" },
        { label: "Legal", href: "#" },
        { label: "Privacy", href: "#" },
        { label: "Contact", href: "#" },
      ]
    }
  ]

  const socialLinks = [
    { label: "Twitter", href: "#" },
    { label: "Discord", href: "#" },
    { label: "Telegram", href: "#" },
    { label: "LinkedIn", href: "#" },
    { label: "GitHub", href: "#" },
    { label: "Blog", href: "#" },
  ]

  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <Image src="/logo.png" alt="Synps" width={32} height={32}/>
              <span className="text-xl font-bold">Synps</span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-md">
              Stay ahead in the Web3 - Synps
            </p>
            <div className="flex space-x-4">
              <Button 
                size="sm" 
                variant="glassy"
              >
                Early Access
              </Button>
              <Button 
                size="sm" 
                variant="glassy"
              >
                View demo
              </Button>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-white mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link 
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="bg-gray-800 mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-6">
            <span className="text-gray-400 text-sm">© 2024 Synps. All rights reserved.</span>
          </div>
          
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-4">
              {socialLinks.map((link) => (
                <Link 
                  key={link.label}
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 