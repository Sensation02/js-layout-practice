import {
  createHeader,
  createNav,
  createMainContent,
} from '../../script/layout'

const page = document.querySelector('.page--content')

const nav = createNav('nav', 'nav--icons')
page.append(nav)

const header = createHeader('header', 'header')
page.append(header)

const mainContent = createMainContent(
  'section',
  'main--section',
)
page.append(mainContent)
