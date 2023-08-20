import {
  createHeader,
  createNav,
  createCard,
} from '../../script/layout'

const page = document.querySelector('.page--content')

const nav = createNav('nav', 'nav--icons')
page.append(nav)

const header = createHeader('header', 'header')
page.append(header)

const card = createCard('section', 'main--section')
page.append(card)
