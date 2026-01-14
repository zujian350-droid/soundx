import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: '声绘未来 - 智能亲子对话记录与分析平台',
  description: '面向亲子家庭的AI智能对话记录与分析服务，采用蒙氏教育理念，通过AI硬件被动记录和自动分析，帮助家长更好地了解孩子的成长过程。',
  keywords: '亲子对话,AI记录,蒙氏教育,家庭教育,儿童成长,智能分析',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
