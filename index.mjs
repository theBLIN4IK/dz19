import fs from 'fs'

//html file
import createHtml from './modules/createhtml.mjs'
createHtml()
console.log('...html файл создан')
  //css folder
  import { createFolderCss, createFileCss } from './modules/createcss.mjs'
 createFolderCss()
 console.log('...папка styles создана')
//css file
 createFileCss()
 console.log('...css файл создан внутри папки styles')

  //deliting
  import deliting from './modules/deliteall.mjs'
  setTimeout(deliting, 1500)
  console.log('-> папка и файлы удалены')

