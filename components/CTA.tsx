import Link from 'next/link'

export default function CTA() {
  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            开始记录孩子的成长之旅
          </h2>
          <p className="text-xl mb-8 opacity-90">
            加入声绘未来，用科技见证每一次珍贵的对话，用数据记录每一个成长的瞬间
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/products"
              className="bg-white text-gray-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors shadow-sm"
            >
              了解更多
            </Link>
            <Link
              href="mailto:contact@shenghui.com"
              className="bg-transparent border border-white/70 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition-colors"
            >
              联系我们
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
