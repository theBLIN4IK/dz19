import fs from 'fs'
function createHtml() {
fs.writeFileSync('./indexxx.html', 
`<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
        <link rel="stylesheet" href="./styles/style.css" />
    </head>
    <body>
        <script src="script.js"></script>
    </body>
</html>`,
 (error) => {
    error ? console.log(error) : null
  })
}
export default createHtml