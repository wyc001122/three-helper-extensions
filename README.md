# ThreeHelper Chrome扩展

这个Chrome扩展可以在网页加载时自动注入ThreeHelper脚本，使其在Three.js应用中可用。

## 功能

- 在页面加载开始时自动注入ThreeHelper脚本
- 提供"🍊🍊🍊"按钮，用于执行window.ThreeHelper()函数
- 为Three.js应用添加辅助工具和UI面板

## 安装步骤

1. 克隆或下载本仓库到本地
2. 打开Chrome浏览器，导航到`chrome://extensions/`
3. 启用右上角的"开发者模式"
4. 点击"加载已解压的扩展程序"
5. 选择本仓库文件夹

## 使用方法

安装后，扩展会在所有网页加载时自动注入ThreeHelper脚本。Three.js应用将自动获得ThreeHelper的功能。

如果您需要执行ThreeHelper，可以点击Chrome工具栏上的ThreeHelper图标，然后点击"🍊🍊🍊"按钮，这将在页面中执行`window.ThreeHelper()`函数。

## 图标文件

扩展需要以下图标文件：
- `icons/icon16.png` (16x16像素)
- `icons/icon48.png` (48x48像素)
- `icons/icon128.png` (128x128像素)

请在使用前创建这些图标文件或替换为你自己的图标。

## 开发

### 项目结构

```
three-helper-extensions/
├── manifest.json        # 扩展配置文件
├── popup.html           # 扩展弹出窗口HTML
├── popup.js             # 弹出窗口脚本
├── content.js           # 内容脚本（注入ThreeHelper）
├── background.js        # 后台脚本
├── lib/                 # 库文件
│   ├── ThreeHelper.umd.cjs  # ThreeHelper库
│   └── style.css            # 样式文件
└── icons/               # 图标文件
    ├── icon16.png
    ├── icon48.png
    └── icon128.png
```

### 调试

1. 通过Chrome扩展页面`chrome://extensions/`安装扩展
2. 点击扩展的"详情"按钮
3. 启用"允许访问文件网址"（如果需要在本地文件上使用）
4. 使用"背景页"链接查看后台脚本的控制台日志
5. 右键点击网页并选择"检查"，然后在控制台中查看内容脚本的日志

## 注意事项

- 扩展需要"<all_urls>"权限才能在所有网站上注入脚本
- 脚本在document_start阶段注入，以确保尽早加载
- 如果目标网站有严格的内容安全策略(CSP)，可能会阻止脚本注入
- "🍊🍊🍊"按钮功能依赖于页面中已存在的ThreeHelper库

## 许可

[添加你的许可信息] 