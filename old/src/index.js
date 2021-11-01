const validateIndex = index => {
  if (!index && index !== 0) throw new Error(`argument 'index' is required.`)
}

const GmCollapse = selector => {
  let container
  try {
    container = document.querySelector(selector)
    if (!container) throw new Error(`We need a HTMLElement but get ${container}.`)
  } catch (err) {
    throw new Error(err)
  }

  const instance = { container }
  instance.__proto__ = GmCollapse.prototype

  container.querySelectorAll('.gm-collapse-header').forEach((item, index) => {
    item.addEventListener('click', () => {
      instance.toggle(index)
    })
  })

  return instance
}

GmCollapse.prototype.getItemAndBody = function (index) {
  validateIndex(index)
  try {
    const collapseItem = this.container.querySelectorAll('.gm-collapse-item')[index]
    const body = collapseItem.querySelector('.gm-collapse-body')
    return { collapseItem, body }
  } catch (err) {
    console.error(
      `We can't find correct HTMLElement, please check your DOM. And error stack is showing below:`
    )
    throw new Error(err)
  }
}
GmCollapse.prototype.getAllItems = function () {
  try {
    return this.container.querySelectorAll('.gm-collapse-item')
  } catch (err) {
    console.error(
      `We can't find correct HTMLElement, please check your DOM. And error stack is showing below:`
    )
    throw new Error(err)
  }
}
GmCollapse.prototype.isCollapsed = function (index) {
  validateIndex(index)
  const { collapseItem } = this.getItemAndBody(index)
  return collapseItem.classList.contains('collapsed')
}
GmCollapse.prototype.collapse = function (index) {
  validateIndex(index)
  if (this.isCollapsed(index)) return this
  const { collapseItem, body } = this.getItemAndBody(index)
  const { height } = body.getBoundingClientRect()

  body.style.height = height + 'px'
  void body.offsetWidth
  collapseItem.classList.add('collapsed')

  return this
}
GmCollapse.prototype.uncollapse = function (index) {
  validateIndex(index)
  if (!this.isCollapsed(index)) return this
  const { collapseItem, body } = this.getItemAndBody(index)

  collapseItem.classList.remove('collapsed')
  if (!body.style.height || body.style.height === 'auto') {
    body.style.height = 'auto'
    void body.clientWidth

    const { height } = body.getBoundingClientRect()
    body.style.height = 0

    void body.clientWidth

    body.style.height = height + 'px'
  }

  return this
}
GmCollapse.prototype.toggle = function (index) {
  validateIndex(index)
  if (this.isCollapsed(index)) {
    this.uncollapse(index)
  } else {
    this.collapse(index)
  }

  return this
}
GmCollapse.prototype.collapseAll = function () {
  this.getAllItems().forEach((_, index) => this.collapse(index))

  return this
}
GmCollapse.prototype.uncollapseAll = function () {
  this.getAllItems().forEach((_, index) => this.uncollapse(index))

  return this
}
GmCollapse.prototype.toggleAll = function () {
  this.getAllItems().forEach((_, index) => this.toggle(index))

  return this
}

export default GmCollapse
