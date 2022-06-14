const { readdir } = require('fs/promises')
const chalk = require('chalk')

/**
 *
 * @param {string} dirname - 创建项目的目录名
 */
async function checkSameDirName(dirname) {
  // 当前命令所属目录
  const curDir = process.cwd()
  const files = await readdir(curDir)

  if (files.includes(dirname)) {
    console.log(
      chalk.red.bold('❌: '),
      chalk.red.bold('有相同的目录名，请重新输入项目名称')
    )
    return true
  }
  return false
}

module.exports = checkSameDirName
