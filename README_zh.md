# @vjscc/collapse

原生 JavaScript 弹出层组件。

![npm](https://img.shields.io/npm/v/@vjscc/collapse?logo=npm&style=flat-square)
![npm type definitions](https://img.shields.io/npm/types/@vjscc/collapse?logo=typescript&style=flat-square)
![npm bundle size](https://img.shields.io/bundlephobia/min/@vjscc/collapse?logo=npm&style=flat-square)
![GitHub](https://img.shields.io/github/license/vjscc/collapse?logo=github&style=flat-square)

<!-- ![Codecov](https://img.shields.io/codecov/c/github/vjscc/collapse?logo=codecov&style=flat-square) -->

**简体中文** | [English](./README.md)

# 安装和引入

如果你想和打包工具比如 `webpack` 一起使用并使用 `commonjs` 或 `ESM` 的方式来引入库，你可以用 `npm` 或 `yarn` 来安装。

使用 npm:

```bash
npm install @vjscc/collapse -S
```

或者使用 yarn:

```bash
yarn add @vjscc/collapse
```

接下来引入库和样式:

```javascript
// 使用 commonjs。
const Vjscccollapse = require('@vjscc/collapse')
require('@vjscc/collapse/dist/collapse.min.css')

// 使用 ESM。
import Vjscccollapse from '@vjscc/collapse'
import '@vjscc/collapse/dist/collapse.min.css'
```

> 我们为不同的引入方式提供 3 个版本：`UMD`，`ESM` 和 `browser`，阅读 [package.json](./package.json) 来获取打包后的路径。

如果你想使用 `<link>` 和 `<script>` 标签来引入，你可以从 [Github Release 页面](https://github.com/vjscc/collapse/release) 下载代码或者使用像 [jsdelivr](https://www.jsdelivr.com/) 这样的 CDN。

> `UMD` 版本是未压缩的，`browser` 版本则是压缩过的，通常，我们建议使用 `browser` 版本。`ESM` 版本是非常接近源码，它是给那些支持 ESM 引入的打包工具用的。 `CSS` 只提供压缩版本。

# 许可证

MIT
