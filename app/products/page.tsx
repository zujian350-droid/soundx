import ProductShowcase from '@/components/ProductShowcase'
import AICapabilities from '@/components/AICapabilities'
import HardwareFeatures from '@/components/HardwareFeatures'

export const metadata = {
  title: '产品介绍 - 声绘未来',
  description: '了解声绘未来的AI硬件设备和智能分析软件',
}

export default function ProductsPage() {
  return (
    <div className="pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">我们的产品</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            AI硬件 + 智能软件，全方位记录和分析亲子对话
          </p>
        </div>
      </div>
      <ProductShowcase />
      <HardwareFeatures />
      <AICapabilities />
    </div>
  )
}
