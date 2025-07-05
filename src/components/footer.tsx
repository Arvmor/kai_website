"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export function Footer() {
  const footerSections = [
    {
      title: "Resources",
      links: [
        { label: "Desktop app", href: "#" },
        { label: "Developers", href: "#" },
        { label: "Wallpapers", href: "#" },
        { label: "Community", href: "#" },
        { label: "Meetups", href: "#" },
        { label: "Events", href: "#" },
        { label: "Programs", href: "#" },
      ]
    },
    {
      title: "Solutions",
      links: [
        { label: "Agencies", href: "#" },
        { label: "Students", href: "#" },
        { label: "Creators", href: "#" },
        { label: "Startups", href: "#" },
        { label: "Experts", href: "#" },
        { label: "Switch", href: "#" },
      ]
    },
    {
      title: "Compare",
      links: [
        { label: "Squarespace", href: "#" },
        { label: "Wordpress", href: "#" },
        { label: "Unbounce", href: "#" },
        { label: "Webflow", href: "#" },
        { label: "Figma", href: "#" },
        { label: "Wix", href: "#" },
      ]
    },
    {
      title: "Company",
      links: [
        { label: "Security", href: "#" },
        { label: "Careers", href: "#" },
        { label: "Report", href: "#" },
        { label: "Status", href: "#" },
        { label: "Legal", href: "#" },
        { label: "Brand", href: "#" },
      ]
    }
  ]

  const socialLinks = [
    { label: "Instagram", href: "#" },
    { label: "YouTube", href: "#" },
    { label: "Threads", href: "#" },
    { label: "LinkedIn", href: "#" },
    { label: "TikTok", href: "#" },
    { label: "X", href: "#" },
  ]

  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-lg">S</span>
              </div>
              <span className="text-xl font-bold">Synapse</span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-md">
              Step into the future of design. Join thousands of designers and teams using Synapse to turn ideas into high-performing websites, fast.
            </p>
            <div className="flex space-x-4">
              <Button 
                size="sm" 
                className="bg-white text-black hover:bg-gray-100"
              >
                Start for free
              </Button>
              <Button 
                size="sm" 
                variant="outline" 
                className="border-gray-600 text-white hover:bg-gray-900"
              >
                Start with AI
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
            <span className="text-gray-400 text-sm">© 2024 Synapse. All rights reserved.</span>
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