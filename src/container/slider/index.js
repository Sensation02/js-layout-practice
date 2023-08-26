class Slider {
  static #content = null // тут посилання на елемент нашого контенту
  static #left = null // кнопка вліво
  static #right = null // кнопка вправо
  static #count = 1 // поточна картинка
  static #max = null // максимальна кількість картинок

  static init() {
    this.#content = document.querySelector(
      '.slider__content',
    )
    this.#left = document.querySelector(
      '.slider__button--left',
    )
    this.#right = document.querySelector(
      '.slider__button--right',
    )
    this.#max = this.#content.childElementCount

    this.#left.onclick = () => this.#move('left')
    this.#right.onclick = () => this.#move('right')
  }

  static #move(direction) {
    const offsetWidth = this.#content.offsetWidth // ширина контенту
    const scrollLeft = this.#content.scrollLeft // скільки проскролено вліво
    const scrollWidth = this.#content.scrollWidth // скільки всього можна проскролити
    // це все потрібно для того щоб знати на скільки можна проскролити вліво і вправо

    let scroll = 0 // тут буде зберігатися на скільки потрібно проскролити

    if (direction === 'left') {
      if (this.#count === 1 || scrollLeft === 0) {
        this.#count = this.#max
        scroll = (this.#count - 1) * offsetWidth
      } else {
        this.#count -= 1
        scroll = (this.#count - 1) * offsetWidth
      }
    }

    if (direction === 'right') {
      if (
        this.#count === this.#max ||
        scrollLeft === scrollWidth - offsetWidth
      ) {
        this.#count = 1
        scroll = 0
      } else {
        this.#count += 1
        scroll = (this.#count - 1) * offsetWidth
      }
    }

    this.#content.scrollTo({
      top: 0,
      left: scroll,
      behavior: 'smooth',
    })
  }
}

Slider.init()

window.Slider = Slider
