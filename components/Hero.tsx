import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative pt-24 pb-24 bg-white border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
          {/* 左侧文案 */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 border border-gray-200 mb-4">
              <span className="inline-flex w-5 h-5 rounded-full bg-gray-900 items-center justify-center">
                <span className="w-2 h-2 rounded-full bg-white" />
              </span>
              <span className="text-xs font-medium text-gray-700">被动记录 · 温柔陪伴 · 蒙氏理念</span>
            </div>

            <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-gray-900 mb-5 leading-tight tracking-tight">
              记录每一次
              <span className="block text-gray-900">
                珍贵的亲子对话
              </span>
            </h1>

            <p className="text-base md:text-lg text-gray-600 mb-7 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              声绘未来，专为亲子家庭设计的 AI 对话记录与分析助手。
              在不打扰日常生活的前提下，悄悄为你保存每一次笑声、每一次拥抱背后的那句「我爱你」，
              用数据温柔地见证孩子的成长轨迹。
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start items-stretch sm:items-center">
              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-8 py-3 rounded-full text-base font-semibold shadow-sm hover:bg-gray-800 transition-colors"
              >
                了解产品
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 px-8 py-3 rounded-full text-base font-semibold border border-gray-200 hover:bg-gray-50 transition-colors"
              >
                免费试用名额
              </Link>
            </div>

            <p className="mt-4 text-xs md:text-sm text-gray-500">
              已有 <span className="font-semibold text-primary-600">3000+</span> 个家庭加入，用声音记录独一无二的童年。
            </p>
          </div>

          {/* 右侧信息卡片 */}
          <div className="mt-10 lg:mt-0 max-w-xl mx-auto lg:mx-0 w-full">
            <div className="relative rounded-3xl shadow-md overflow-hidden bg-gray-50 p-6 md:p-8 border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center">
                  <svg
                    className="w-10 h-10 text-gray-900"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <circle cx="8.5" cy="10" r="3" fill="currentColor" />
                    <circle cx="15.5" cy="8" r="2.3" fill="currentColor" opacity="0.85" />
                    <path
                      d="M5.3 18.7C5.9 16 8 14 10.9 14c2.4 0 4.2 1.4 5.2 3.5"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      fill="none"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">今晚的睡前故事已记录</p>
                  <p className="text-xs text-gray-500 mt-1">AI 正在为你保存这些温暖的小瞬间</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs md:text-sm mb-4">
                <div className="bg-white rounded-2xl p-3 shadow-sm">
                  <p className="text-gray-500 mb-1">今日亲子对话</p>
                  <p className="text-lg font-semibold text-primary-600">42 句</p>
                  <p className="text-[11px] text-gray-400 mt-1">比最近一周平均多 18%</p>
                </div>
                <div className="bg-white rounded-2xl p-3 shadow-sm">
                  <p className="text-gray-500 mb-1">最常出现的词</p>
                  <p className="text-lg font-semibold text-emerald-600">「谢谢」</p>
                  <p className="text-[11px] text-gray-400 mt-1">情绪表达更积极</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-3 md:p-4 shadow-sm flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center text-white">
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <rect
                      x="5"
                      y="11"
                      width="14"
                      height="9"
                      rx="2"
                      fill="currentColor"
                      opacity="0.9"
                    />
                    <path
                      d="M9 11V9a3 3 0 0 1 6 0v2"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-xs md:text-sm text-gray-800 font-medium">所有录音仅你和家人可见，端到端加密存储</p>
                  <p className="text-[11px] text-gray-400 mt-1">隐私保护通过多重安全审计</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
