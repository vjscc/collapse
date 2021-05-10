# gm-alert

`gm-alert` 是一个用来制作弹出层的库。它致力于轻量、简洁和高度可定制化。我们提供了非常简洁的实现，你即可以开箱即用，也能轻松定制你想要的效果。

**简体中文** | [English](./README.md)

## 安装

```bash
npm install gm-alert -S
# 或者使用 Yarn
yarn add gm-alert
```

用 `<script>` 标签引入 JS：

```html
<link rel="stylesheet" href="路径/gm-alert.min.css" />
<script src="路径/gm-alert.min.js"></script>
```

你可以从 [Release Page](https://github.com/Gu-Miao/gm-alert/releases) 获取打包后的 `css` 和 `js，当然你也可以使用类似` `jsDelivr` 这样的 CDN 服务。

## 使用

如果你使用 `ES Module` 或者 `Common.js`：

```js
import GmAlert from 'gm-alert'
import 'gm-alert/gm-alert.min.css'

// 创建弹出层实例
const instance = GmAlert({
  // ...一些选项
})

// 显示弹出层
instance.show()

// 隐藏弹出层
instance.hide()
```

> 请别忘了引入 CSS 文件。

如果你用 `<script/>` 标签引入 JS，那么 `GmAlert` 对象会挂载到 `window` 上。

## API

### GmAlert(option)

基于选项创建一个弹出层实例：

| 选项            | 类型                  | 描述                     | 默认值              |
| --------------- | --------------------- | ------------------------ | ------------------- |
| header          | `string\|HTMLElement` | 弹窗层头部               | `''`                |
| headerClassName | `string`              | 弹出层头部元素的额外类名 | `''`                |
| body            | `string\|HTMLElement` | 弹窗层主体               | `''`                |
| bodyClassName   | `string`              | 弹出层主体元素的额外类名 | `''`                |
| showFooter      | `boolean`             | 是否显示弹出层底部       | `true`              |
| footerClassName | `string`              | 弹出层底部元素的额外类名 | `''`                |
| okText          | `string`              | 确定按钮的文本内容       | `'ok'`              |
| onOK            | `function`            | 点击确定按钮的回调函数   | `() => this.hide()` |
| cancelText      | `string`              | 取消按钮的文本内容       | `'cancel'`          |
| onCancel        | `function`            | 点击取消按钮的回调函数   | `() => this.hide()` |
| maskClosAble    | `boolean`             | 点击遮罩是否关闭弹出层   | true                |
| isShow          | `boolean`             | 是否显示弹出层           | false               |

这个函数会返回一个弹出层实例，实例与方法之间的关系为：

```js
instance.__proto = GmAlert.prototype
```

因此你可以用实例去调用 `GmAlert` 上所有的原型方法。

实例上的属性有：

```js
GmAlert {
  $body
  $cancel
  $footer
  $header
  $mask
  $modal
  $ok
  isShow
}
```

以 `$` 开头的属性代表它是一个 HTML 元素，你可以直接操作它的 DOM。在 2.0.0 版本中，我们曾在实例上暴露的所有的选项，但之后我们发现初始化过后，这些选项基本不会再次用到，并且修改选项也不会直接影响弹出层本身（因为不是响应式的），因此，我们移除了它们。

- 我们用 `header` 代替了 `title` 属性，因为在将来我们会添加标题和右上角的关闭按钮：

```
div[data-role='header']
  |
  +--div[data-role='title']
  |
  +--button[data-role='close']
```

显然这样更符合语义化。

- `header` 和 `body` 的参数类型被改为了 `string|HTMLElement` 而不是单纯的 `string`。现在如果你传入一个字符串，我们回改变元素的 `innerHTML`，否则我们会调用 `append()` 方法将内容作为子节点插入。

- `onOK` 和 `onCancel` 会接受弹出层实例本身作为第一个参数。

- 你可以使用 `document.querySelector('gm-alert-' + id)` 来获取弹出层的 html 节点。

> 下面提到的 `this` 均指调用 `GmAlert()` 创建的弹出层实例。

### this.isShow

你可以通过改变 `this.isShow` 来显示/隐藏弹出层，你也用这个字段来判断弹出层的状态。

### GmAlert.prototype.show()

显示弹出层并将 `this.isShow` 修改为 `true`。

### GmAlert.prototype.hide()

隐藏弹出层并将 `this.isShow` 修改为 `false`。

### GmAlert.prototype.setHeader(header[, headerClassName])

设置顶部的内容和额外类名。

- `header` **{ string\|HTMLElement }**

顶部的内容，它可以是一个字符串或是一个 HTML 元素。

- `headerClassName` **{ string }** _可选的_

额外的类名，如果你之前已经有了额外的类名，并且 `headerClassName` 不是一个真值，那么额外类名不会被修改。

### GmAlert.prototype.setBody(body[, bodyClassName])

设置主体的内容和额外类名。

- `body` **{ string\|HTMLElement }**

主体的内容，它可以是一个字符串或是一个 HTML 元素。

- `bodyClassName` **{ string }** _可选的_

额外的类名，如果你之前已经有了额外的类名，并且 `bodyClassName` 不是一个真值，那么额外类名不会被修改。

### GmAlert.prototype.setFooter(showFooter[, footerClassName])

设置底部是否显示和额外类名。

- `showFooter` **{ boolean }**

是否显示底部，我们用 `dispaly: none` 样式去控制他的显隐，因此，底部按钮的设置不会因此而被影响。

- `footerClassName` **{ string }** _可选的_

额外的类名，如果你之前已经有了额外的类名，并且 `footerClassName` 不是一个真值，那么额外类名不会被修改。

### GmAlert.prototype.setOK(okText[, onOK])

设置确定按钮的文本内容和点击按钮的监听函数。

- `okText` **{ string }**

确定按钮显示的文本内容，默认为 `ok`。

- `onOK` **{ function }** _可选的_

点击按钮时的监听函数，它会接受弹出层实例作为第一个参数。

### GmAlert.prototype.setCancel(cancelText[, onCancel])

设置取消按钮的文本内容和点击按钮的监听函数。

- `cancelText` **{ string }**

取消按钮显示的文本内容，默认为 `cancel`。

- `onCancel` **{ function }** _可选的_

点击按钮时的监听函数，它会接受弹出层实例作为第一个参数。另外需要注意的是，`() => this.hide()` 会先于 `onCancel()` 被调用。

## DOM 结构

为了避免类名相同而出现的样式冲突，我们用 `data-role` 属性代替 `class` 属性：

```
div.gm-alert-mask
  |
  +--div[data-role='modal']
       |
       +--div[data-role='header']
       |
       +--div[data-role='body']
       |
       +--div[data-role='footer']
            |
            +--button[data-role='ok']
            |
            +--button[data-role='button']
```

## 历史版本文档

请访问[这里](./docs/history.md)。

## 即将到来

- 原型方法的修改与优化。
- 可以扩展弹出层的 `extend()` 函数。
- 提供钩子函数来监听弹出层状态的改变。
- 插件机制和插件接口。

## 许可证

MIT
