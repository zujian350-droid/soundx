export default function AICapabilities() {
  const capabilities = [
    {
      title: '语言发展分析',
      description: '追踪词汇量增长、语法复杂度提升、表达能力变化等语言发展指标',
      metrics: ['词汇量统计', '语法复杂度', '表达能力评分'],
    },
    {
      title: '情感表达识别',
      description: '识别和分析孩子的情感表达方式，了解情绪发展状况',
      metrics: ['情绪类型识别', '情感强度分析', '情绪变化趋势'],
    },
    {
      title: '认知能力评估',
      description: '通过对话内容分析孩子的认知发展水平，包括逻辑思维、想象力等',
      metrics: ['逻辑思维评估', '想象力分析', '问题解决能力'],
    },
    {
      title: '社交能力观察',
      description: '观察孩子在家庭对话中的社交表现，包括互动频率、回应方式等',
      metrics: ['互动频率统计', '回应方式分析', '社交技能评估'],
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            智能分析能力
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            运用先进的技术，深入分析孩子的成长数据
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {capabilities.map((capability, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-primary-50 to-accent-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {capability.title}
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {capability.description}
                </p>
                <div className="space-y-2">
                  {capability.metrics.map((metric, i) => (
                    <div key={i} className="flex items-center">
                      <div className="w-2 h-2 bg-primary-600 rounded-full mr-3"></div>
                      <span className="text-gray-700">{metric}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
