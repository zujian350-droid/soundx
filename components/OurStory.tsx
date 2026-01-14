export default function OurStory() {
  return (
    <section className="py-20 md:py-28 bg-white relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary-100 mb-6">
              <svg
                className="w-8 h-8 text-primary-600"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                />
              </svg>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              我们的故事
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full" />
          </div>

          <div className="space-y-8 text-lg text-gray-700 leading-relaxed">
            <div className="relative pl-8 border-l-2 border-gray-200">
              <div className="absolute left-0 top-0 w-4 h-4 bg-primary-500 rounded-full -translate-x-[9px]" />
              <p className="text-base md:text-lg">
                声绘未来诞生于一个简单的想法：如何让忙碌的现代父母不错过孩子成长的每一个珍贵瞬间？
                作为一群关注家庭教育和儿童发展的科技工作者，我们深知记录和观察对孩子成长的重要性。
              </p>
            </div>

            <div className="relative pl-8 border-l-2 border-gray-200">
              <div className="absolute left-0 top-0 w-4 h-4 bg-accent-500 rounded-full -translate-x-[9px]" />
              <p className="text-base md:text-lg">
                在深入了解蒙台梭利教育理念后，我们意识到，真正的教育不是干预和塑造，而是观察、理解和支持。
                然而，现代生活的快节奏让很多父母难以有足够的时间和精力去细致观察和记录孩子的成长过程。
              </p>
            </div>

            <div className="relative pl-8 border-l-2 border-gray-200">
              <div className="absolute left-0 top-0 w-4 h-4 bg-primary-400 rounded-full -translate-x-[9px]" />
              <p className="text-base md:text-lg">
                于是，我们决定运用AI技术来解决这个问题。我们开发了被动录音的AI硬件设备，
                让记录变得自然无感；我们构建了智能分析系统，让数据变得有意义；
                我们设计了直观的可视化界面，让洞察变得触手可及。
              </p>
            </div>

            <div className="relative pl-8 border-l-2 border-gray-200">
              <div className="absolute left-0 top-0 w-4 h-4 bg-accent-400 rounded-full -translate-x-[9px]" />
              <p className="text-base md:text-lg">
                但最重要的是，我们始终坚持蒙氏教育理念的核心：尊重孩子的自然发展，关注个体差异，
                通过观察而非干预来支持孩子的成长。声绘未来不是要替代父母的陪伴，
                而是要成为父母理解和支持孩子成长的得力助手。
              </p>
            </div>

            <div className="mt-12 p-8 bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl border border-primary-100">
              <p className="text-primary-700 font-semibold text-xl md:text-2xl leading-relaxed text-center">
                用科技记录成长，用数据见证爱——这就是声绘未来的使命。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
