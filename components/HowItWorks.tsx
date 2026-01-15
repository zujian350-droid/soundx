export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: '设备启用',
      description: '将AI硬件设备放置在家庭环境中，设备会自动开始被动录音',
    },
    {
      number: '02',
      title: '自动记录',
      description: '设备全天候记录亲子对话，无需手动操作，自然捕捉交流瞬间',
    },
    {
      number: '03',
      title: 'AI分析',
      description: '云端AI系统自动分析对话内容，识别语言发展和情感表达',
      titleOverride: '内容分析',
    },
    {
      number: '04',
      title: '查看报告',
      description: '家长通过手机或电脑查看详细的成长报告和教育建议',
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            工作原理
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            简单四步，开启智能成长记录之旅
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Connector line (hidden on last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-20 left-full w-full h-0.5 bg-gradient-to-r from-primary-300 to-accent-300 transform translate-x-4"></div>
                )}
                
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-6 bg-gray-900 rounded-full flex items-center justify-center text-white text-2xl font-semibold shadow-md">
                    <span>{step.number}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {step.titleOverride ?? step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
