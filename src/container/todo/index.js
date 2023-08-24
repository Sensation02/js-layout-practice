class Todo {
  static #NAME = 'Todo'

  static #saveData = () => {
    localStorage.setItem(
      this.#NAME,
      JSON.stringify({
        list: this.#list,
        count: this.#count,
      }),
    )
  }

  static #loadData = () => {
    const data = localStorage.getItem(this.#NAME)

    if (data) {
      const { list, count } = JSON.parse(data)
      this.#list = list
      this.#count = count
    }
  }

  static #list = []
  static #count = 0

  static #createTaskData = (text) => {
    this.#list.push({
      id: ++this.#count,
      text,
      done: false,
    })
  }

  static #block = null
  static #template = null
  static #input = null
  static #button = null

  static init = () => {
    this.#template =
      document.getElementById(
        'todo-template',
      ).content.firstElementChild

    this.#block = document.querySelector('.task__list')
    this.#input = document.querySelector('.form__input')
    this.#button = document.querySelector('.form__button')

    this.#button.onClick = this.#handleAdd

    this.#loadData()

    this.#render()
  }

  static #handleAdd = () => {
    const value = this.#input.value.trim()

    if (value.length > 1) {
      this.#createTaskData(value)
      this.#input.value = ''
      this.#render()
      this.#saveData()
    }
    console.log(this.#list)
  }

  static #render = () => {
    this.#block.innerHTML = ''

    if (this.#list.length === 0) {
      this.#block.innerText = 'Список пустий'
    } else {
      this.#list.forEach((taskData) => {
        const clone = this.#createTaskElement(taskData)
        this.#block.append(clone)
      })
    }

    console.log(this.#list)
  }

  static #createTaskElement = (data) => {
    const el = this.#template.cloneNode(true)

    const [id, text, btnDo, btnDelete] = el.children

    id.innerText = `#${data.id}.`
    text.innerText = data.text
    btnDo.onClick = this.#handleDo(data, btn, el)
    btnDelete.onClick = this.#handleDelete(data)

    if (data.done) {
      el.classList.add('task--done')
      btnDo.classList.remove('task__btn--do')
      btnDo.classList.add('task__btn--done')
    }

    return el
  }

  static #handleDo = (data, btn, el) => {
    const result = this.#toggleDo(data.id)
    if (result === true || result === false) {
      el.classList.toggle('task--done')
      btn.classList.toggle('task__btn--do')
      btn.classList.toggle('task__btn--done')

      this.#saveData()
    }
  }

  static #toggleDo = (id) => {
    this.#list = this.#list.map((task) => {
      if (task.id === id) {
        return (task.done = !task.done)
      } else {
        return (task.done = false)
      }
    })
  }

  static #handleDelete = (event) => {
    if (confirm('Ви впевнені?')) {
      const deleteTask = this.#deleteById(event.id)
      if (deleteTask) {
        this.#render()
        this.#saveData()
      }
    }
  }

  static #deleteById = (id) => {
    this.#list = this.#list.filter((task) => task.id !== id)
    return true
  }
}

Todo.init()

window.todo = Todo
