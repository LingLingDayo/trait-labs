# Trait Labs (特质实验室)

Trait Labs 是一个基于 Vue 3 + Vite + TypeScript 构建的高性能、交互式趣味测评平台。通过多维度的算法模型，为用户提供关于性格、兴趣及各种“奇怪”属性的深度剖析。

## 🌟 核心特性

- **多维度测试体系**：内置性格测试、二次元浓度鉴定、混沌程度分析等多种趣味测评。
- **动态稀有度系统**：基于算法生成的动态评价与稀有度标签，让每一次结果都与众不同。
- **极致视觉体验**：采用 Vanilla CSS 打造的流体交互设计，支持平滑的过渡动画与响应式布局。
- **精简架构**：基于 Vite 的极速开发体验，接近零延迟的单页应用交互。

## 🛠 技术栈

- **框架**: [Vue 3](https://vuejs.org/) (Composition API)
- **构建工具**: [Vite](https://vitejs.dev/)
- **语言**: [TypeScript](https://www.typescriptlang.org/)
- **样式**: Vanilla CSS / [Tailwind CSS](https://tailwindcss.com/)
- **类型检查**: vue-tsc / ESLint

## 🚀 快速开始

### 1. 克隆与安装

```bash
# 克隆仓库
git clone https://github.com/LingLingDayo/trait-labs.git

# 进入目录
cd trait-labs

# 安装依赖
npm install
```

### 2. 开发环境运行

```bash
npm run dev
```

### 3. 生成环境构建

```bash
npm run build
```

## 📂 项目结构

```text
src/
├── assets/             # 静态资源（图片、字体等）
├── components/         # 通用业务组件
├── data/               # 核心测评数据配置文件 (Test Definitions)
├── layouts/            # 页面布局容器
├── services/           # 核心逻辑与算法 (Calculator, Utils)
├── types/              # TypeScript 全局类型定义
└── views/              # 页面级组件 (Home, Test, Result)
```

## 🧪 测评算法说明

项目的测评逻辑主要由 `src/services/calculator.ts` 驱动，结果匹配基于分数区间映射与标签权重计算。每个测评文件的 `matchRules` 定义了分值范围与最终结论的对应关系。

---

© 2026 Trait Labs - 记录你的每一份独特特质。
