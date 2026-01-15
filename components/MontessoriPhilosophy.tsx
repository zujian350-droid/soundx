export default function MontessoriPhilosophy() {
  const principles = [
    {
      title: '尊重个体差异',
      description: '每个孩子都是独特的，我们的系统关注每个孩子的个性化发展轨迹，而不是标准化比较。',
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      bgColor: 'bg-primary-50',
      iconColor: 'text-primary-600',
      borderColor: 'border-primary-200',
    },
    {
      title: '观察而非干预',
      description: '被动记录让孩子在自然环境中自由表达，我们只是观察者和记录者，不干扰孩子的自然发展。',
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
      bgColor: 'bg-accent-50',
      iconColor: 'text-accent-600',
      borderColor: 'border-accent-200',
    },
    {
      title: '环境的重要性',
      description: '我们关注家庭对话环境对孩子发展的影响，帮助家长创造更好的交流环境。',
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
          />
        </svg>
      ),
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600',
      borderColor: 'border-green-200',
    },
    {
      title: '爱与理解',
      description: '通过数据洞察，帮助家长更深入地理解孩子，建立更紧密的亲子关系。',
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
          />
        </svg>
      ),
      bgColor: 'bg-orange-50',
      iconColor: 'text-orange-600',
      borderColor: 'border-orange-200',
    },
  ]

  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-gray-50 via-white to-accent-50/30 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent-100 mb-6">
              <svg
                className="w-8 h-8 text-accent-600"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 0 12 20.904a48.62 48.62 0 0 0 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.905 59.905 0 0 1 12 3.493a59.902 59.902 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443a55.381 55.381 0 0 1 5.25 2.882V15m-9 0v-3.675A55.378 55.378 0 0 1 12 8.443a55.381 55.381 0 0 1 5.25 2.882V15"
                />
              </svg>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              蒙氏教育理念
            </h2>
            <p className="text-xl text-gray-600 mb-4">
              尊重孩子的自然发展，关注个体差异
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-accent-500 to-primary-500 mx-auto rounded-full" />
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-10 text-base md:text-lg text-center max-w-3xl mx-auto">
                声绘未来植根于蒙台梭利教育理念，我们相信每个孩子都有自己独特的成长节奏和发展路径。
                我们的AI分析系统不是为了评判或比较，而是为了帮助家长更好地理解和支持孩子的自然发展。
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
                {principles.map((principle, index) => (
                  <div
                    key={index}
                    className={`group p-6 ${principle.bgColor} rounded-2xl border-2 ${principle.borderColor} hover:shadow-lg transition-all duration-300 cursor-pointer hover:-translate-y-1`}
                  >
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${principle.bgColor} border ${principle.borderColor} mb-4 ${principle.iconColor} group-hover:scale-110 transition-transform duration-300`}>
                      {principle.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {principle.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {principle.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-12 p-6 bg-gradient-to-r from-accent-50 to-primary-50 rounded-2xl border border-accent-200">
                <p className="text-gray-700 leading-relaxed text-base md:text-lg text-center">
                  声绘未来不仅仅是一个技术产品，更是我们对蒙氏教育理念的实践和传承。
                  我们希望通过科技的力量，让更多的家庭能够以更科学、更尊重的方式陪伴孩子成长。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
