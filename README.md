# 声绘未来官网

声绘未来是一个面向亲子家庭的AI智能对话记录与分析平台，采用蒙氏教育理念，通过AI硬件被动记录和自动分析，帮助家长更好地了解孩子的成长过程。

## 技术栈

- **框架**: Next.js 14 (App Router)
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **部署**: 支持 Vercel、Netlify 等平台

## 功能特性

- 🎨 现代化的响应式设计
- 📱 移动端友好
- 🚀 基于 Next.js 14 App Router
- 🎯 SEO 优化
- 💫 流畅的动画效果
- 🌈 美观的渐变色彩

## 页面结构

- **首页** (`/`): 展示产品介绍、服务特性、工作原理等
- **关于我们** (`/about`): 介绍公司故事、蒙氏教育理念、价值观
- **产品** (`/products`): 展示AI硬件设备和智能分析功能

## 开始使用

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

在浏览器中打开 [http://localhost:3000](http://localhost:3000) 查看网站。

### 构建生产版本

```bash
npm run build
npm start
```

## 项目结构

```
├── app/
│   ├── layout.tsx          # 根布局
│   ├── page.tsx            # 首页
│   ├── about/              # 关于页面
│   ├── products/           # 产品页面
│   └── globals.css         # 全局样式
├── components/             # React 组件
│   ├── Navbar.tsx          # 导航栏
│   ├── Footer.tsx          # 页脚
│   ├── Hero.tsx            # 首页英雄区
│   ├── Features.tsx         # 特性展示
│   └── ...                 # 其他组件
├── public/                 # 静态资源
└── package.json            # 项目配置
```

## 自定义

### 修改颜色主题

编辑 `tailwind.config.js` 中的 `primary` 和 `accent` 颜色配置。

### 添加新页面

1. 在 `app/` 目录下创建新的文件夹
2. 添加 `page.tsx` 文件
3. 在 `components/Navbar.tsx` 中添加导航链接

## 部署

### Vercel 部署

1. 将代码推送到 GitHub
2. 在 Vercel 中导入项目
3. 自动部署完成

### 其他平台

项目支持部署到任何支持 Next.js 的平台，如 Netlify、AWS Amplify 等。

## 许可证

MIT License
