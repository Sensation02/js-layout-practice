const createElement = (tag, className, text) => {
  const element = document.createElement(tag)
  if (className) {
    element.className = className
  }
  if (text) {
    element.innerHTML = text
  }
  return element
}

const HEADER_BUTTONS = [
  {
    width: 24,
    height: 24,
    src: '/svg/back-arrow.svg',
  },
  {
    width: 24,
    height: 24,
    src: '/img/IMG_4737 1.png',
  },
]

export const createNav = () => {
  const nav = createElement('nav', 'nav--icons')

  HEADER_BUTTONS.forEach((params) => {
    const button = createElement('button', 'button')
    const img = createElement('img')

    Object.entries(params).forEach(([key, value]) => {
      img[key] = value
    })

    button.insertAdjacentElement('beforeend', img)
    nav.insertAdjacentElement('beforeend', button)
  })

  return nav
}

export const createHeader = () => {
  const header = createElement('header', 'header')
  const headerTitle = createElement(
    'h1',
    'header--title',
    'Мій блог',
  )
  header.append(headerTitle)
  return header
}

const CARD_LIST = [
  {
    category: [
      { text: 'Important', id: 1 },
      { text: 'New', id: 2 },
    ],
    info: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    date: '12.12.2020',
    viewed: false,
  },
  {
    category: [{ text: 'Important', id: 1 }],
    info: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    date: '13.10.2020',
    viewed: true,
  },
]

export const createCard = () => {
  const main = createElement('section', 'main--section')

  CARD_LIST.forEach((cardData) => {
    // ====== Card ======
    const card = createElement(
      'div',
      cardData.viewed ? 'card card__viewed' : 'card',
    )

    // ====== Card Header ======
    const cardHeader = createElement('div', 'card--header')
    const cardBadges = createElement(
      'div',
      'card--header--badges',
    )
    cardData.category.forEach((category) => {
      const cardCategory = createElement(
        'span',
        `badge category--${category.id}`,
        category.text,
      )
      cardBadges.append(cardCategory)
    })
    const cardDate = createElement(
      'div',
      'card--header--date',
      cardData.date,
    )
    cardHeader.append(cardBadges, cardDate)

    // ====== Card Content ======
    const cardContent = createElement(
      'div',
      'card--content',
      cardData.info,
    )
    card.append(cardHeader, cardContent)

    main.append(card)
  })
  return main
}
