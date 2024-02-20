import fs from 'fs'
function deliting() {

        fs.unlink('./styles/style.css', () => { });
        fs.rmdir('./styles', () => { });
        fs.unlink('./indexxx.html', () => { });
      }
      
    export default deliting