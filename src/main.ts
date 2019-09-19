import { v4 as uuid } from 'uuid'

function $(selector: string) {
  return document.querySelector(selector)
}

function render(target: Element) {
  target.innerHTML = uuid()
}

window.addEventListener('DOMContentLoaded', () => {
  const uuidElement = $('#uuid')
  if (uuidElement) {
    render(uuidElement)
  }
})
