import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">声绘</span>
              </div>
              <span className="text-xl font-bold text-white">声绘未来</span>
            </div>
            <p className="text-sm">
              用科技记录成长，用细节见证爱
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">产品</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/products" className="hover:text-primary-400 transition-colors">
                  AI硬件设备
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-primary-400 transition-colors">
                  智能分析平台
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-primary-400 transition-colors">
                  功能特性
                </Link>
              </li>
              <li>
                <a href="#app-download" className="hover:text-primary-400 transition-colors">
                  下载拾光记 App
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">关于</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-primary-400 transition-colors">
                  关于我们
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary-400 transition-colors">
                  蒙氏教育理念
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary-400 transition-colors">
                  我们的使命
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">联系我们</h3>
            <ul className="space-y-2 text-sm">
              <li>邮箱: aigc_edu@163.com</li>
              <li>微信: Ssn_aigc</li>
              <li>
                <Link href="#contact" className="hover:text-primary-400 transition-colors">
                  在线咨询
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; 2026 声绘未来. 保留所有权利.</p>
        </div>
      </div>
    </footer>
  )
}
