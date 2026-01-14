import Image from 'next/image'
import MamaAvatar from '../icon/妈妈.png'
import BabaAvatar from '../icon/爸爸.png'
import LaoshiAvatar from '../icon/老师.png'

export default function Testimonials() {
  const testimonials = [
    {
      name: '张妈妈',
      role: '3岁孩子的母亲',
      content:
        '声绘未来让我能够真正了解孩子的语言发展情况。通过AI分析，我发现了很多平时没有注意到的细节，这对孩子的教育非常有帮助。',
      avatar: MamaAvatar,
    },
    {
      name: '李爸爸',
      role: '5岁孩子的父亲',
      content:
        '作为忙碌的职场父母，我们很难记录下孩子成长的每一个瞬间。声绘未来的被动录音功能完美解决了这个问题，让我们不错过任何珍贵的对话。',
      avatar: BabaAvatar,
    },
    {
      name: '王老师',
      role: '蒙氏教育专家',
      content:
        '声绘未来很好地结合了蒙氏教育理念和现代科技。它尊重孩子的自然发展，通过数据分析帮助家长更好地理解孩子的成长节奏。',
      avatar: LaoshiAvatar,
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-primary-50 to-accent-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            用户评价
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            听听家长们怎么说
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all"
            >
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-200 to-accent-200 rounded-full overflow-hidden mr-4 flex items-center justify-center">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={64}
                    height={64}
                    className="rounded-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed italic">
                "{testimonial.content}"
              </p>
              <div className="mt-4 flex text-yellow-400">
                {'★★★★★'.split('').map((star, i) => (
                  <span key={i}>{star}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
