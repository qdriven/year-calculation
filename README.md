# 干支纪年计算器

基于 React + TypeScript + Vite + Tailwind CSS + shadcn/ui 构建的中国传统干支纪年查询工具。

## 功能特性

- 🔮 查询任意年份的干支纪年
- 🔥 特殊标识丙午年（火气旺盛）
- 📅 显示前后丙午年周期
- 🎨 精美的 UI 设计，使用 shadcn/ui 组件
- 📱 响应式布局，支持移动端

## 技术栈

- **React 18** - UI 框架
- **TypeScript** - 类型安全
- **Vite** - 构建工具
- **Tailwind CSS** - 样式框架
- **shadcn/ui** - UI 组件库
- **Radix UI** - 底层组件基座

## 快速开始

### 安装依赖

```bash
cd ganzhi-calculator
npm install
```

### 开发模式

```bash
npm run dev
```

访问 http://localhost:5173 查看应用。

### 构建生产版本

```bash
npm run build
```

### 预览生产构建

```bash
npm run preview
```

## 项目结构

```
ganzhi-calculator/
├── src/
│   ├── components/ui/     # shadcn/ui 组件
│   ├── lib/
│   │   ├── utils.ts       # 工具函数
│   │   └── ganzhi.ts      # 干支计算逻辑
│   ├── App.tsx            # 主应用组件
│   ├── main.tsx           # 入口文件
│   └── index.css          # 全局样式
├── public/                # 静态资源
├── index.html             # HTML 模板
├── package.json           # 项目配置
├── tailwind.config.js     # Tailwind 配置
├── tsconfig.json          # TypeScript 配置
└── vite.config.ts         # Vite 配置
```

## 干支纪年算法

干支纪年以60年为一个周期（六十甲子），通过天干（10个）和地支（12个）的组合来命名年份。

- **天干**：甲、乙、丙、丁、戊、己、庚、辛、壬、癸
- **地支**：子、丑、寅、卯、辰、巳、午、未、申、酉、戌、亥

以1984年（甲子年）为基准，计算任意年份对应的干支：

```
index = (year - 1984) mod 60
ganzhi = 六十甲子[index]
```

## 丙午年

丙午是六十甲子中的第43个组合：
- **丙**：第3个天干，属阳火
- **午**：第7个地支，属阳火

丙午年被称为"火气很旺"的年份，历史上著名的丙午年包括：1906年、1966年、2026年等。


