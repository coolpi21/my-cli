const inquirer = require('inquirer')
const config = require('../../config/framework')
const downloadRepo = require('./download-repo')
const answersList = require('../../config/answerList')
const generateDownloadRepoKey = require('../../utils/generateDownloadKey')
const checkSameDirName = require('../../utils/checkSameDirName')

async function executeCreateProjectCommand(pathName, argv) {
  // 判断当前目录是否存在相同的目录名
  const sameDirNameResult = await checkSameDirName(pathName)
  if (sameDirNameResult) return

  const commandOptions = argv

  // 执行交互式命令
  const answer = await inquirer.prompt(answersList)
  const {
    framework: userSelectedFramework,
    config: userSelectedConfig,
    projectname: userInputProjectname,
    projectversion: userInputProjectversion
  } = answer

  // 生成模板下载地址的Key值
  const repoKey = generateDownloadRepoKey(
    userSelectedFramework,
    userSelectedConfig
  )

  downloadRepo(config.frameworkGroup[repoKey], pathName, {
    projectname: userInputProjectname,
    projectversion: userInputProjectversion
  })
}

module.exports = executeCreateProjectCommand
