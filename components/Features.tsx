export default function Features() {
  const features = [
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            d="M5 9.5C5 7 7 5 9.7 5H14c1.7 0 3 1.3 3 3v3.2c0 3-2.2 5.5-5.2 5.8"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6.2 18.5c.6-1.9 2.1-3.2 4-3.2 1.9 0 3.4 1.3 4 3.2"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="9.2" cy="10" r="1.2" fill="currentColor" />
          <circle cx="13.8" cy="9" r="1" fill="currentColor" opacity="0.8" />
        </svg>
      ),
      title: '被动记录',
      description: 'AI硬件设备自动记录亲子对话，无需手动操作，自然捕捉每一个珍贵瞬间',
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24">
          <rect
            x="4"
            y="5"
            width="16"
            height="12"
            rx="3"
            stroke="currentColor"
            strokeWidth="1.7"
          />
          <path
            d="M8 9h5M8 12h3.5M15.2 12.2l2 2.1"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
          <circle cx="14" cy="11" r="1.4" stroke="currentColor" strokeWidth="1.4" />
        </svg>
      ),
      title: '深度分析',
      description: '自动分析对话内容，识别语言发展、情感表达和认知能力，用温和的数据给出提示',
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24">
          <rect
            x="4"
            y="6"
            width="16"
            height="12"
            rx="3"
            stroke="currentColor"
            strokeWidth="1.7"
          />
          <path
            d="M8 14c.7.8 1.8 1.3 3 1.3 1.9 0 3.5-1.3 4-3.1"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
          <circle cx="9.1" cy="10" r="1" fill="currentColor" />
          <circle cx="14.9" cy="10" r="1" fill="currentColor" />
        </svg>
      ),
      title: '蒙氏教育理念',
      description: '基于蒙台梭利教育理念，关注孩子的自然发展，尊重个体差异和成长节奏',
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24">
          <rect
            x="3.5"
            y="5.5"
            width="17"
            height="13"
            rx="3"
            stroke="currentColor"
            strokeWidth="1.7"
          />
          <path
            d="M7 15l2.6-2.6 2.1 2.1L16.5 10"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: '成长数据可视化',
      description: '通过直观的图表和报告，清晰展示孩子的语言发展轨迹和成长变化',
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24">
          <rect
            x="5"
            y="9"
            width="14"
            height="9"
            rx="2"
            stroke="currentColor"
            strokeWidth="1.7"
          />
          <path
            d="M9 9V8a3 3 0 0 1 6 0v1"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
        </svg>
      ),
      title: '隐私安全保护',
      description: '严格的数据加密和隐私保护机制，确保家庭对话数据的安全和私密性',
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24">
          <path
            d="M12 19.5s-4.5-2.7-6.7-5.2C3.6 12.4 3.4 10 4.7 8.6 6 7.2 8.1 7.4 9.3 8.7L12 11.5"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 19.5s4.5-2.7 6.7-5.2c1.7-1.9 1.9-4.3.6-5.7-1.3-1.4-3.4-1.2-4.6.1L12 11.5"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: '家庭友好设计',
      description: '简洁易用的界面设计，让家长轻松查看和分析，专注于陪伴孩子成长',
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            为什么选择声绘未来
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            用科技的力量，记录和见证孩子成长的每一个重要时刻
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-white border border-gray-100 hover:border-gray-200 hover:shadow-md transition-all"
            >
              <div className="w-12 h-12 rounded-full bg-gray-900 text-white flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
