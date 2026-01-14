'use client'

import Link from 'next/link'
import { useState } from 'react'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const desktopLinkBase =
    'px-3 py-2 rounded-full text-sm font-medium transition-colors duration-200'

  const getDesktopLinkClasses = (href: string) => {
    const isActive =
      href === '/'
        ? pathname === '/'
        : pathname === href || pathname.startsWith(`${href}/`)

    if (isActive) {
      return `${desktopLinkBase} text-gray-900 bg-gray-100`
    }

    return `${desktopLinkBase} text-gray-700 hover:text-primary-600 hover:bg-gray-50`
  }

  const mobileLinkBase =
    'block px-4 py-2 rounded-xl text-sm transition-colors duration-200'

  const getMobileLinkClasses = (href: string) => {
    const isActive =
      href === '/'
        ? pathname === '/'
        : pathname === href || pathname.startsWith(`${href}/`)

    if (isActive) {
      return `${mobileLinkBase} bg-orange-50 text-gray-900 font-medium`
    }

    return `${mobileLinkBase} text-gray-700 hover:bg-orange-50`
  }

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-sm z-50 border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gray-900 rounded-2xl flex items-center justify-center shadow-sm">
              <svg
                className="w-6 h-6 text-white"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <circle cx="9" cy="10" r="3" fill="currentColor" />
                <circle cx="16" cy="8" r="2.2" fill="currentColor" opacity="0.85" />
                <path
                  d="M5.8 18.5C6.4 15.9 8.4 14 11 14c2.3 0 4.1 1.4 5.1 3.5"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-lg font-semibold text-gray-900">声绘未来</span>
              <span className="text-xs text-gray-500">亲子对话 · 温暖记录</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            <Link href="/" className={getDesktopLinkClasses('/')}>
              首页
            </Link>
            <Link href="/about" className={getDesktopLinkClasses('/about')}>
              关于我们
            </Link>
            <Link href="/products" className={getDesktopLinkClasses('/products')}>
              产品
            </Link>
            <Link 
              href="#contact" 
              className="ml-2 inline-flex items-center gap-2 bg-gray-900 text-white px-5 py-2 rounded-full text-sm font-semibold shadow-md hover:shadow-lg hover:bg-gray-800 transition-colors duration-200"
            >
              联系我们
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-full text-gray-700 hover:bg-orange-50 border border-orange-100 transition-colors duration-200"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 border-t border-gray-100 mt-2 pt-3 bg-white">
            <Link 
              href="/" 
              className={getMobileLinkClasses('/')}
              onClick={() => setIsOpen(false)}
            >
              首页
            </Link>
            <Link 
              href="/about" 
              className={getMobileLinkClasses('/about')}
              onClick={() => setIsOpen(false)}
            >
              关于我们
            </Link>
            <Link 
              href="/products" 
              className={getMobileLinkClasses('/products')}
              onClick={() => setIsOpen(false)}
            >
              产品
            </Link>
            <Link 
              href="#contact" 
              className="block px-4 py-2 bg-gradient-to-r from-primary-400 to-accent-400 text-white rounded-xl text-center text-sm font-semibold shadow-md"
              onClick={() => setIsOpen(false)}
            >
              联系我们
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
