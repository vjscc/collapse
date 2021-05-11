# gm-collapse

Collapse component without any deps.

[简体中文](./README_zh.md) | **English**

## Install

```bash
npm install gm-collapse -S
# Or use yarn
yarn add gm-collapse
```

Or just use `<script>` tag:

```html
<link rel="stylesheet" href="path/to/gm-collapse.min.css" />
<script src="path/to/gm-collapse.min.js"></script>
```

To get dist js and css files, please visit [Releases Page](https://github.com/Gu-Miao/gm-collapse/releases) or use CDN like `jsDelivr`.

## Usage

Firstly, you must have a DOM structure like:

```html
<!-- The container of whole component -->
<div class="gm-collapse-container">
  <!-- Collapse item -->
  <div class="gm-collapse-item">
    <!-- Header -->
    <div class="gm-collapse-header">
      <!-- Title -->
      <div class="gm-collapse-title">some title...</div>
      <!-- Right icon -->
      <i class="gm-collapse-icon"></i>
    </div>
    <!-- Body of item, it will hide when item is collapsed -->
    <div class="gm-collapse-body">
      <!-- Content area -->
      <div class="gm-collapse-content">some content...</div>
    </div>
  </div>

  <!-- This item is collapsed by default -->
  <div class="gm-collapse-item collapsed">
    <div class="gm-collapse-header">
      <div class="gm-collapse-title">some title...</div>
      <i class="gm-collapse-icon"></i>
    </div>
    <div class="gm-collapse-body">
      <div class="gm-collapse-content">some content...</div>
    </div>
  </div>
</div>
```

All the collapse item is not collapsed by default, if you want collapsed item, add className `collapsed` to the right `.gm-collapse-item` element.

If you use `import/require`:

```js
import Gmcollapse from 'gm-collapse'
import 'gm-collapse/gm-collapse.min.css'

// Create an collapse instance with selector of container
// which has a className of `gm-collapse-container`
const instance = Gmcollapse(selector)

// Collapse the first item
instance.collapse(0)

// Uncollapse all
instance.uncollapseAll()
```

If you use `<script/>` tag to import, `Gmcollapse` will be mounted on `window`.

> Don't forget to import css file.

## API

### `Gmcollapse(selector)`

Create a new collapse instance with selector

- `selector` **{ string }**

Selector of container, a string.

It will return an collapse instance, the relationship between them is:

```js
instance.__proto__ = Gmcollapse.prototype
```

So that instance could use all of prototype methods on `Gmcollapse`.

Instance will have those properties:

```js
Gmcollapse {
  container // container HTMLElement
}
```

> The `this` below means the instance created by `Gmcollapse()`.

### `this.container`

The container of whole collapse component.

### `Gmcollapse.prototype.getItemAndBody(index)`

Get collapse item and body element of this item.

- `index` **{ number }**

Serial number of collapse you want get.

- `return` **{ IObj }**

Return a object which has property `collapseItem` and `body`, the interface is showing below:

```ts
interface IObj {
  body: HTMLElement
  collapseItem: HTMLELement
}
```

### `Gmcollapse.prototype.getAllItems()`

Get all collapse items by `element.querySelectorAll()`.

- `return` **{ NodeList }**

Return all collapse items.

### `Gmcollapse.prototype.isCollapsed(index)`

Check if this item is collapsed.

- `index` **{ number }**

Serial number of collapse item you want get.

- `return` **{ Boolean }**

The result of whether it's collapsed or not.

### `Gmcollapse.prototype.collapse(index)`

Collapse a item, if it's already collapsed, then do nothing.

- `index` **{ number }**

Serial number of collapse item you want get.

- `return` **{ GmCollapse }**

Return the instance itself.

### `Gmcollapse.prototype.collapseAll()`

Collapse all the items, if a item is already collapsed, then do nothing to it.

- `return` **{ GmCollapse }**

Return the instance itself.

### `Gmcollapse.prototype.uncollapse(index)`

Unollapse a item, if it's not collapsed, then do nothing.

- `index` **{ number }**

Serial number of collapse item you want get.

- `return` **{ GmCollapse }**

Return the instance itself.

### `Gmcollapse.prototype.uncollapseAll()`

Uncollapse all the items, if a item is not collapsed, then do nothing to it.

- `return` **{ GmCollapse }**

Return the instance itself.

### `Gmcollapse.prototype.collapse(index)`

Toggle a item to collapsed or not.

- `index` **{ number }**

Serial number of collapse item you want get.

- `return` **{ GmCollapse }**

Return the instance itself.

### `Gmcollapse.prototype.toggleAll()`

Toggle all the items.

- `return` **{ GmCollapse }**

Return the instance itself.

## License

MIT
