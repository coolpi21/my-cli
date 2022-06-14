const fs = require('fs')

function editFile({ version, projectName, projectPath }) {
  console.log(version, projectName)

  return new Promise((resolve, reject) => {
    // 读取文件
    fs.readFile(`${projectPath}/package.json`, (err, data) => {
      const fileData = generateNewFileData(data, { projectName, version })
      // 写入文件
      fs.writeFile(`${projectPath}/package.json`, fileData, (err) => {
        if (err) reject(err)
        resolve()
      })
    })
  })
}

function generateNewFileData(data, { projectName, version }) {
  // 获取json数据并修改项目名称和版本号
  const _data = JSON.parse(data.toString())
  _data.name = projectName
  _data.version = version
  return JSON.stringify(_data, null, 4)
}

module.exports = editFile
