export default function Services() {
  const services = [
    {
      title: '对话记录',
      description: 'AI硬件设备全天候被动记录亲子对话，自动识别和分类不同类型的交流场景',
      icon: (
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
          <rect
            x="8"
            y="4"
            width="8"
            height="11"
            rx="3"
            stroke="currentColor"
            strokeWidth="1.7"
          />
          <path
            d="M7 11.5C7 13.9 8.8 16 11.2 16h1.6C15.2 16 17 13.9 17 11.5"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
          <path
            d="M10.5 19h3"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      title: '智能分析',
      description: '运用自然语言处理和机器学习技术，分析孩子的语言发展、词汇量增长和表达能力',
      icon: (
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
          <rect
            x="4"
            y="6"
            width="16"
            height="11"
            rx="3"
            stroke="currentColor"
            strokeWidth="1.7"
          />
          <path
            d="M8 10h5M8 13h3.8"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
          <circle cx="15.5" cy="12" r="1.5" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      ),
    },
    {
      title: '成长报告',
      description: '定期生成详细的成长报告，包括语言里程碑、情感表达趋势和认知发展评估',
      icon: (
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
          <rect
            x="4"
            y="5"
            width="16"
            height="14"
            rx="3"
            stroke="currentColor"
            strokeWidth="1.7"
          />
          <path
            d="M8 15.5v-4M12 15.5v-2.5M16 15.5v-5"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      title: '教育建议',
      description: '基于蒙氏教育理念，提供个性化的教育建议和活动推荐，促进孩子全面发展',
      icon: (
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
          <path
            d="M9 17.5c-.1-.7-.5-1.2-.9-1.7A5 5 0 1 1 16 7.6c.7.8 1.1 1.8 1.1 2.9 0 1.4-.6 2.6-1.6 3.4-.4.3-.7.8-.8 1.3"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <rect
            x="9"
            y="17.5"
            width="6"
            height="3"
            rx="1.3"
            stroke="currentColor"
            strokeWidth="1.7"
          />
        </svg>
      ),
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            我们的服务
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            全方位支持亲子家庭的成长记录和教育需求
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative p-8 rounded-2xl bg-white border border-gray-100 hover:border-gray-200 hover:shadow-md transition-all"
            >
              <div className="w-14 h-14 rounded-full bg-gray-900 text-white flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
