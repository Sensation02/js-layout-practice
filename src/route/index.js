// Підключаємо роутер до бек-енду
const express = require('express')
const router = express.Router()

// Підключіть файли роутів
const test = require('./test')
// Підключіть інші файли роутів, якщо є
const layoutPractice = require('./layout-practice')
const community = require('./layout-practice-community')

// Об'єднайте файли роутів за потреби
router.use('/', test)
// Використовуйте інші файли роутів, якщо є
router.use('/layout-practice', layoutPractice)
router.use('/layout-practice-community', community)

// Експортуємо глобальний роутер
module.exports = router
