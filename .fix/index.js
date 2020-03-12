const path = require('path')
const fs = require('fs')

const config = [
  {
    name: 'Fix Next.js typescript error.',
    file: 'node_modules/next/types/index.d.ts',
    exec: [
      {
        find: 'import React from \'react\'',
        content: 'import * as React from \'react\''
      }
    ]
  }
]

function runReplace (options) {
  if (!options) return
  for (let item of options) {
    let filePath = path.resolve(process.cwd(), item.file)
    if (fs.existsSync(filePath)) {
      console.log('fix:', item.name)
      let oldFileStr = fs.readFileSync(filePath, 'utf-8')
      let newFileStr = oldFileStr
      for (let ele of item.exec) {
        newFileStr = newFileStr.replace(ele.find, ele.content)
      }
      fs.writeFileSync(filePath, newFileStr, 'utf-8')
    }
  }
}

runReplace(config)