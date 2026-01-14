import Image from 'next/image'
import ProductImage from '../icon/产品.png'

export default function ProductShowcase() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                AI智能硬件设备
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                我们的AI硬件设备采用先进的语音识别技术，能够全天候被动记录家庭对话。
                设备设计简洁美观，完美融入家庭环境，不会干扰日常生活。
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">360度全方位录音，捕捉每一个声音细节</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">低功耗设计，持久续航，无需频繁充电</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">隐私保护模式，一键关闭录音功能</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">云端同步，数据安全加密存储</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-primary-100 to-accent-100 rounded-2xl p-12 flex items-center justify-center">
              <div className="text-center w-full">
                <div className="mx-auto mb-6 bg-white rounded-2xl shadow-2xl overflow-hidden max-w-xl">
                  <Image
                    src={ProductImage}
                    alt="AI智能硬件设备"
                    width={640}
                    height={400}
                    className="w-full h-auto object-contain"
                  />
                </div>
                <p className="text-gray-600 font-medium">AI智能录音设备</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
