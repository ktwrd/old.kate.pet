const fs = require('fs')
const path = require('path')

let files = fs.readdirSync('./presets/')
let outputData = {}

for (let file of files) {
    let location = path.join(path.resolve('./presets/'), file)
    if (!file.endsWith('.json')) {
        continue
    }
    outputData[file.replace(/\.json$/, '')] = JSON.parse(fs.readFileSync(location).toString())
}

if (fs.existsSync('./presets.json')) {
    fs.unlinkSync('./presets.json')
}

fs.writeFileSync('./presets.json', JSON.stringify(outputData, null, '    '))
