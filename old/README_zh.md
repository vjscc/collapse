# vjscc-collapse

无任何依赖的折叠组件。

**简体中文** | [English](./README.md)

## 安装

```bash
npm install vjscc-collapse -S
# 或者使用 Yarn
yarn add vjscc-collapse
```

用 `<script>` 标签引入 JS：

```html
<link rel="stylesheet" href="路径/vjscc-collapse.min.css" />
<script src="路径/vjscc-collapse.min.js"></script>
```

你可以从 [Release Page](https://github.com/Gu-Miao/vjscc-collapse/releases) 获取打包后的 `css` 和 `js，当然你也可以使用类似` `jsDelivr` 这样的 CDN 服务。

## 使用

首先，你需要有下面一样的 DOM 结构：

```html
<!-- 容器元素 -->
<div class="vjscc-collapse-container">
  <!-- 可折叠元素 -->
  <div class="vjscc-collapse-item">
    <!-- 头部 -->
    <div class="vjscc-collapse-header">
      <!-- 标题 -->
      <div class="vjscc-collapse-title">some title...</div>
      <!-- 右侧图标 -->
      <i class="vjscc-collapse-icon"></i>
    </div>
    <!-- 主体区域，折叠时隐藏 -->
    <div class="vjscc-collapse-body">
      <!-- 内容区域 -->
      <div class="vjscc-collapse-content">some content...</div>
    </div>
  </div>

  <!-- 这个元素默认已折叠 -->
  <div class="vjscc-collapse-item collapsed">
    <div class="vjscc-collapse-header">
      <div class="vjscc-collapse-title">some title...</div>
      <i class="vjscc-collapse-icon"></i>
    </div>
    <div class="vjscc-collapse-body">
      <div class="vjscc-collapse-content">some content...</div>
    </div>
  </div>
</div>
```

所有可折叠元素默认展开，如果你想某一项默认折叠，你可以给对应的 `.vjscc-collapse-item` 元素添加 `collapsed` 类。

如果你使用 `ES Module` 或者 `Common.js`：

```js
import Gmcollapse from 'vjscc-collapse'
import 'vjscc-collapse/vjscc-collapse.min.css'

// 通过容器元素的选择器创建一个组件实例，容器
// 要有一个 `vjscc-collapse-container` 类名
const instance = Gmcollapse(selector)

// 折叠第一个元素
instance.collapse(0)

// 展开所有元素
instance.uncollapseAll()
```

如果你用 `<script/>` 标签引用 JS，`Gmcollapse` 会挂载到 `window` 上。

> 别忘了引入 CSS 文件。

## API

### Gmcollapse(selector)

创建一个组件实例。

- `selector` **{ string }**

容器元素的选择器。

这个方法会返回一个组件实例，它们的关系为：

```js
instance.__proto__ = Gmcollapse.prototype
```

因而实例可以使用 `GmCollapse` 上的所有原型方法。

实例上的属性：

```js
Gmcollapse {
  container // 容器元素
}
```

> 下文提的 `this` 指使用 `Gmcollapse()` 创建的实例对象。

### this.container

容器元素。

### Gmcollapse.prototype.getItemAndBody(index)

获取一个可折叠元素和他的主体元素。

- `index` **{ number }**

折叠元素的索引。

- `return` **{ IObj }**

返回一个包含可折叠元素和主题元素的对象，接口如下所示：

```ts
interface IObj {
  body: HTMLElement
  collapseItem: HTMLELement
}
```

### Gmcollapse.prototype.getAllItems()

获取所有可折叠元素，这里用了 `element.querySelectorAll()`。

- `return` **{ NodeList }**

返回所有的可折叠元素。

### Gmcollapse.prototype.isCollapsed(index)

判断该元素是否已经折叠。

- `index` **{ number }**

元素索引。

- `return` **{ Boolean }**

是否已折叠。

### Gmcollapse.prototype.collapse(index)

折叠一个元素，如果它已经折叠，那就什么都不做。

- `index` **{ number }**

元素索引

- `return` **{ GmCollapse }**

返回实例本身。

### Gmcollapse.prototype.collapseAll()

折叠所有元素，如果其中有些元素已经折叠，那么已经折叠的不会变化。

- `return` **{ GmCollapse }**

返回实例本身。

### Gmcollapse.prototype.uncollapse(index)

展开一个元素，如果它已经展开，那就什么都不做。

- `index` **{ number }**

元素索引。

- `return` **{ GmCollapse }**

返回实例本身。

### Gmcollapse.prototype.uncollapseAll()

展开所有元素，如果其中有些元素已经展开，那么已经展开的不会变化。

- `return` **{ GmCollapse }**

返回实例本身。

### Gmcollapse.prototype.collapse(index)

切换一个元素的展开/折叠状态。

- `index` **{ number }**

元素索引。

- `return` **{ GmCollapse }**

返回实例本身。

### Gmcollapse.prototype.toggleAll()

切换所有元素的展开/折叠状态。

- `return` **{ GmCollapse }**

返回实例本身。

## 许可证

MIT
