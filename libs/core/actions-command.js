const inquirer = require('inquirer')
const config = require('../../config/framework')
const downloadRepo = require('../core/download-repo')
const generateAnswerList = require('../../config/answerList')

async function executeCreateProjectCommand(projectName, argv) {
  // 自定义对话列表的type参数
  const commandOptions = argv
  const customAnswerType = projectName ? null : 'needProjectName'
  const answersList = generateAnswerList(customAnswerType)
  // 执行交互式命令
  try {
    const answer = await inquirer.prompt(answersList)
    const { framework: userSelectedFramework, config: userSelectedConfig } =
      answer
    console.log(userSelectedFramework, userSelectedConfig)
    downloadRepo(config.frameworkGroup[userSelectedFramework], projectName)
  } catch (e) {
    console.log(e)
  }
}

module.exports = executeCreateProjectCommand
