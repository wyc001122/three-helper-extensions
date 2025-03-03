# ThreeHelper 图标指南

您需要创建以下图标文件，以便扩展能在Chrome浏览器中正确显示：

## 所需图标文件

1. `icon16.png` - 16x16像素
2. `icon32.png` - 32x32像素
3. `icon48.png` - 48x48像素
4. `icon128.png` - 128x128像素

所有图标应该是PNG格式，最好带有透明背景，以确保在不同背景下显示良好。

## 获取图标的方式

### 选项1：创建自定义图标

如果您有设计技能，可以使用以下工具创建自定义图标：
- Adobe Illustrator
- Figma
- Sketch
- GIMP
- Photoshop
- Canva

建议先创建一个大尺寸（如128x128）的矢量图标，然后缩小制作其他尺寸，以保持一致性。

### 选项2：使用在线图标生成器

有许多在线工具可以帮助您生成浏览器扩展图标：

1. [Favicon.io](https://favicon.io/) - 可以从文本、图像或表情符号生成图标
2. [RealFaviconGenerator](https://realfavicongenerator.net/) - 生成各种尺寸的图标
3. [Iconify](https://iconify.design/) - 提供多种开源图标库

### 选项3：使用现成的图标

您可以使用以下资源获取免费图标：
- [Flaticon](https://www.flaticon.com/)
- [Iconfinder](https://www.iconfinder.com/)
- [Material Icons](https://fonts.google.com/icons)

## 橙色主题图标建议

由于您的扩展使用了"🍊"表情符号，您可能想要创建橙色主题的图标：

1. 使用橙色渐变作为背景
2. 添加一个简单的白色"TH"或"3H"字母组合
3. 或使用一个简化的立方体或3D网格图形，表示Three.js

## 替换占位符

创建好图标后，请将它们放在此目录（icons/）中，替换掉placeholder.txt文件。确保文件名与manifest.json中指定的名称完全匹配。 