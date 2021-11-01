# @vjscc/collapse

Vanilla JavaScript collapse component.

![npm](https://img.shields.io/npm/v/@vjscc/collapse?logo=npm&style=flat-square)
![npm type definitions](https://img.shields.io/npm/types/@vjscc/collapse?logo=typescript&style=flat-square)
![npm bundle size](https://img.shields.io/bundlephobia/min/@vjscc/collapse?logo=npm&style=flat-square)
![GitHub](https://img.shields.io/github/license/vjscc/collapse?logo=github&style=flat-square)

<!-- ![Codecov](https://img.shields.io/codecov/c/github/vjscc/collapse?logo=codecov&style=flat-square) -->

[简体中文](./README_zh.md) | **English**

# Install and Import

If you want use with bundler like `webpack`, and import library with `commonjs` or `ESM`, you could install it with `npm` or `yarn`.

Use npm:

```bash
npm install @vjscc/collapse -S
```

Or use yarn:

```bash
yarn add @vjscc/collapse
```

Then import libarary and style:

```javascript
// Use commonjs
const Vjscccollapse = require('@vjscc/collapse')
require('@vjscc/collapse/dist/collapse.min.css')

// Use ESM
import Vjscccollapse from '@vjscc/collapse'
import '@vjscc/collapse/dist/collapse.min.css'
```

> We provide 3 versions for different ways to import: `UMD`, `ESM` and `browser`, see [package.json](./package.json) to get the dist path.

If you want import with `<link>` and `<script>` tag, you could download source on [Release Page](https://github.com/vjscc/collapse/releases) or use CDN like [jsdelivr](https://www.jsdelivr.com/).

> `UMD` version is not minified, `browser` is minified, we recommend use `browser` version in usual. `ESM` version is mostly close to source code and for those use bundler support ESM. And `CSS` just have minified version.

# License

MIT
