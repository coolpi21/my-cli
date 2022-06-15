const inquirer = require('inquirer')
const chalk = require('chalk')
const figlet = require('figlet')
const config = require('../../config/framework')
const downloadRepo = require('./download-repo')
const answersList = require('../../config/answerList')
const generateDownloadRepoKey = require('../../utils/generateDownloadKey')
const checkSameDirName = require('../../utils/checkSameDirName')

async function executeCreateProjectCommand(pathName, argv) {
  // 判断当前目录是否存在相同的目录名
  const sameDirNameResult = await checkSameDirName(pathName)
  console.log(argv)
  if (sameDirNameResult) return

  const commandOptions = argv

  figlet('YL-CLI', function (err, data) {
    if (err) {
      console.dir(err)
      return
    }
    console.log(chalk.bold.green(data))
    handleInterActiveQuests(pathName)
  })
}

async function handleInterActiveQuests(pathName) {
  // 执行交互式命令
  try {
    const answer = await inquirer.prompt(answersList)
    const {
      framework: userSelectedFramework,
      config: userSelectedConfig,
      projectname: userInputProjectname,
      projectversion: userInputProjectversion
    } = answer

    // 生成模板下载地址的Key值
    // const repoKey = generateDownloadRepoKey(
    //   userSelectedFramework,
    //   userSelectedConfig
    // )

    const repoKey = userSelectedFramework
    downloadRepo(config.frameworkGroup[repoKey], pathName, {
      projectname: userInputProjectname,
      projectversion: userInputProjectversion
    })
  } catch (e) {
    console.log('命令式回答错误', chalk.bold.blue(e))
  }
}

module.exports = executeCreateProjectCommand
