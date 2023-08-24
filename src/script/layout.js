export const createElement = (tag, className, text) => {
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
    "Комм'юніті",
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

const NAV_BUTTONS = [
  { title: 'База знань', isActive: false },
  { title: 'Інформація', isActive: true },
]

export const createMainContent = () => {
  const main = createElement('section', 'main--section')

  // ----- Nav Buttons -----
  const navButtons = createElement('nav', 'nav--buttons')
  NAV_BUTTONS.forEach((button) => {
    const navButton = createElement(
      'a',
      button.isActive ? 'button button__active' : 'button',
      button.title,
    )
    navButtons.append(navButton)
  })
  main.append(navButtons)

  // ----- Main Content -----
  const content = createElement('div', 'main--content')

  // ----- Main Content Image -----
  const contentImage = createElement(
    'div',
    'content--image',
  )
  const image = createElement('img')
  image.src = '/img/main_img.png'
  contentImage.append(image)
  content.append(contentImage)

  // ----- Main Content Text -----
  const contentText = createElement('div', 'content--text')
  const contentTitle = createElement(
    'h2',
    'content--text--title',
    'Що таке база знань?',
  )
  const contentInfo = createElement(
    'p',
    'content--text--info',
    'База знань - база даних, що містить правила виведення та інформацію про людський досвід і знання в деякій предметній галузі. У системах, що самонавчаються, база знань також містить інформацію, що є результатом вирішення попередніх завдань.',
  )
  contentText.append(contentTitle, contentInfo)
  content.append(contentText)

  // ----- Main Content Button -----
  const contentButton = createElement(
    'button',
    'content--button',
    "Перейти до ком'юніті у Телеграм",
  )
  content.append(contentButton)

  main.append(content)
  return main
}
