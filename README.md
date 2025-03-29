# Home Assistant 中文文档翻译项目

![Home Assistant Logo](https://www.home-assistant.io/images/home-assistant-logo.svg)

这是 Home Assistant 官方文档的中文翻译项目，旨在为中文用户提供更好的 Home Assistant 使用体验。

## 项目介绍

本项目基于 [Docusaurus](https://docusaurus.io/) 构建，是一个现代化的静态网站生成器。我们致力于将 Home Assistant 的官方文档准确、专业地翻译成中文，让更多中文用户能够轻松使用 Home Assistant。

## 本地开发环境搭建

### 前提条件

- Node.js 16.14 或更高版本
- pnpm 包管理器

### 安装步骤

1. 克隆仓库
```bash
git clone https://github.com/your-username/home-assistant-website.git
cd home-assistant-website
```

2. 安装依赖
```bash
pnpm install
```

3. 启动开发服务器
```bash
pnpm start
```

启动后，开发服务器会自动打开浏览器窗口。大多数更改都会实时反映，无需重启服务器。

## 构建项目

要生成静态内容，运行：

```bash
pnpm build
```

构建后的内容将生成在 `build` 目录中，可以使用任何静态内容托管服务进行部署。

## 贡献指南

我们欢迎任何形式的贡献！无论是翻译文档、修复错误还是改进现有内容，都是对项目的宝贵支持。

### 如何贡献

1. Fork 本项目
2. 创建你的特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交你的更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启一个 Pull Request

### 翻译规范

- 保持专业术语的准确性
- 使用简洁明了的中文表达
- 保持与原文格式的一致性
- 注意标点符号的使用规范


## 致谢

感谢所有为这个项目做出贡献的开发者们！特别感谢 Home Assistant 团队创建了如此优秀的智能家居平台。
