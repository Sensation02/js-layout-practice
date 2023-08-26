class Header {
  static #height = null
  static #wrapper = null
  static #button = null

  static #isOpen = false

  static init() {
    this.#wrapper = document.querySelector(
      '.header__wrapper',
    )
    this.#button = document.querySelector('.header__button')
    this.#height = document.querySelector(
      '.header__bottom',
    ).offsetHeight

    this.#button.onclick = this.#toggle
  }

  static #toggle = () => {
    if (this.#isOpen) {
      this.#button.classList.replace(
        'header__button--close',
        'header__button--open',
      )
      this.#wrapper.style.height = '0px'
    } else {
      this.#button.classList.replace(
        'header__button--open',
        'header__button--close',
      )
      this.#wrapper.style.height = `${this.#height}px`
    }

    this.#isOpen = !this.#isOpen
  }
}

Header.init()
