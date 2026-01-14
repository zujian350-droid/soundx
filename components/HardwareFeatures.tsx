export default function HardwareFeatures() {
  const features = [
    {
      title: '高精度语音识别',
      description: '采用最新的AI语音识别技术，准确率高达95%以上，能够清晰识别不同年龄段的语音特点',
      icon: (
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="6.5" stroke="currentColor" strokeWidth="1.7" />
          <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.7" />
          <circle cx="12" cy="12" r="1.1" fill="currentColor" />
        </svg>
      ),
    },
    {
      title: '智能降噪',
      description: '内置智能降噪算法，自动过滤环境噪音，确保对话内容清晰可辨',
      icon: (
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
          <path
            d="M5 10.5h2.2L12 7v10l-4.8-3.5H5a1.5 1.5 0 0 1-1.5-1.5v-.1A1.4 1.4 0 0 1 5 10.5Z"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinejoin="round"
          />
          <path
            d="M16 9.5a3.5 3.5 0 0 1 0 5"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
          <path
            d="M17.5 6.5 6.5 17.5"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      title: '多语言支持',
      description: '支持中文、英文等多种语言，适应不同家庭的语言环境',
      icon: (
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="7" stroke="currentColor" strokeWidth="1.7" />
          <path
            d="M5.5 10.5h13M5.5 13.5h13"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
          <ellipse
            cx="12"
            cy="12"
            rx="2.7"
            ry="7"
            stroke="currentColor"
            strokeWidth="1.4"
          />
        </svg>
      ),
    },
    {
      title: '离线工作',
      description: '支持离线录音，网络恢复后自动同步，确保数据不丢失',
      icon: (
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
          <path
            d="M7 10.5c1.1-1.5 2.7-2.5 4.6-2.5 1.9 0 3.5 1 4.6 2.5"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
          <path
            d="M8.5 13c.8-1 1.9-1.7 3.1-1.7 1.3 0 2.4.7 3.1 1.7"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
          <circle cx="11.6" cy="16" r="1.4" fill="currentColor" />
        </svg>
      ),
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            硬件特性
          </h2>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:border-gray-200 hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 rounded-full bg-gray-900 text-white flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
