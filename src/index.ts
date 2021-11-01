import { getElementViaStringOrHTMLElement } from '@vjscc/utils'

const validateIndex = (index: number) => {
  if (!index && index !== 0) throw new Error(`argument 'index' is required.`)
}

type stringOrHTMLElement = string | HTMLElement

interface IVjsccCollapse {
  $container: HTMLElement
  getItemAndBody: (index: number) => { collapseItem: HTMLElement; body: HTMLElement }
}

interface IVjsccCollapseConstructorOptions {
  $container: stringOrHTMLElement
}

class VjsccCollapse implements IVjsccCollapse {
  $container: HTMLElement
  constructor(options: IVjsccCollapseConstructorOptions) {
    const { $container } = options
    const el = getElementViaStringOrHTMLElement($container)
    if (!el) {
      throw new Error(`Can not get correct element, please check out your dom.`)
    }
    this.$container = el

    this.$container.querySelectorAll('.vjscc-collapse-header').forEach((el, index) => {
      el.addEventListener('click', () => this.toggle(index))
    })
  }
  getItemAndBody(index: number): {
    collapseItem: HTMLElement
    body: HTMLElement
  } {
    validateIndex(index)
    try {
      const collapseItem = getElementViaStringOrHTMLElement(
        `.vjscc-collapse-item:nth-child(${index + 1})`,
        this.$container
      )
      if (!collapseItem) {
        throw new Error(`We can't find correct HTMLElement, please check your DOM.`)
      }
      const body = getElementViaStringOrHTMLElement('.vjscc-collapse-body', collapseItem)
      if (!body) {
        throw new Error(`We can't find correct HTMLElement, please check your DOM.`)
      }
      return { collapseItem, body }
    } catch (err) {
      console.error(
        `We can't find correct HTMLElement, please check your DOM. And error stack is showing below:`
      )
      throw new Error(err as string)
    }
  }
  getAllItems(): NodeListOf<Element> {
    try {
      return this.$container.querySelectorAll('.vjscc-collapse-item')
    } catch (err) {
      console.error(
        `We can't find correct HTMLElement, please check your DOM. And error stack is showing below:`
      )
      throw new Error(err as string)
    }
  }
  isCollapsed(index: number): boolean {
    validateIndex(index)
    const { collapseItem } = this.getItemAndBody(index)
    return collapseItem.classList.contains('collapsed')
  }
  collapse(index: number): IVjsccCollapse {
    validateIndex(index)
    if (this.isCollapsed(index)) return this
    const { collapseItem, body } = this.getItemAndBody(index)
    if (!body) return this
    const { height } = body.getBoundingClientRect()

    body.style.height = height + 'px'
    void body.offsetWidth
    collapseItem.classList.add('collapsed')

    return this
  }
  expand(index: number): IVjsccCollapse {
    validateIndex(index)
    if (!this.isCollapsed(index)) return this
    const { collapseItem, body } = this.getItemAndBody(index)

    collapseItem.classList.remove('collapsed')
    if (!body.style.height || body.style.height === 'auto') {
      body.style.height = 'auto'
      void body.clientWidth

      const { height } = body.getBoundingClientRect()
      body.style.height = '0'

      void body.clientWidth

      body.style.height = height + 'px'
    }

    return this
  }
  toggle(index: number): IVjsccCollapse {
    validateIndex(index)
    if (this.isCollapsed(index)) {
      this.expand(index)
    } else {
      this.collapse(index)
    }

    return this
  }
  collapseAll(): IVjsccCollapse {
    this.getAllItems().forEach((_, index) => this.collapse(index))

    return this
  }
  expandAll(): IVjsccCollapse {
    this.getAllItems().forEach((_, index) => this.expand(index))

    return this
  }
  toggleAll(): IVjsccCollapse {
    this.getAllItems().forEach((_, index) => this.toggle(index))

    return this
  }
}

export default VjsccCollapse
