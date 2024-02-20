import fs from 'fs'
function createFolderCss() {
    fs.mkdirSync('./styles', () => { 
       
      })
    }
    function createFileCss() {
        fs.writeFileSync('./styles/style.css', `
        * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
       `, (error) => {
          error ? console.log(error) : null
        })
    }
    export { createFolderCss, createFileCss }