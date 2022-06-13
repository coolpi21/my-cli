const config = require('./framework')
const { checkRequiredFieldsAnswer } = require('../utils/checkAnswer')

// 配置框架对话列表
const interactiveCommandQuestions = [
  {
    type: 'input',
    name: 'projectname',
    message: '请输入需要创建的项目名',
    default: 'yl-project',
    validate: function (answer) {
      checkRequiredFieldsAnswer(this, answer)
    }
  },
  {
    type: 'list',
    name: 'framework',
    message: '请选择需要使用的框架',
    choices: config.framework,
    validate: function (answer) {
      checkRequiredFieldsAnswer(this, answer)
    }
  },
  {
    type: 'input',
    name: 'config',
    message: '是否使用定制化配置（y/n)',
    validate: function (answer) {
      const answersList = ['yes', 'y', 'no', 'n']
      if (!answersList.includes(answer.toLowerCase())) {
        return '请输入y/yes/no/n'
      }
      return true
    }
  }
]

function generateAnswerList(type = null) {
  return type === 'needProjectName'
    ? interactiveCommandQuestions
    : interactiveCommandQuestions.slice(1)
}

module.exports = generateAnswerList
