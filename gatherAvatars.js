const path = require('path')
const fs = require('fs')
const glob = require('glob')

glob(path.join(__dirname, './src/statics/avatars/*.png'), {}, (_err, files) => {
  const avatarList = []
  files.forEach(file => {
    const filename = file.match(/[0-9a-zA-Z_-]+\.png$/ig)[0]
    avatarList.push(`/statics/avatars/${filename}`)
  })
  fs.writeFileSync(path.join(__dirname, './src/components/avatars.json'), JSON.stringify(avatarList), 'utf8')
})
