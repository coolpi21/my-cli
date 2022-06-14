const config = require('./framework')
const {
  checkRequiredFieldsAnswer,
  checkRequiredAnswer,
  checkProjectVersionIsValid,
  checkProjectNameIsValid
} = require('../utils/checkAnswer')

// 配置对话列表
const interactiveCommandQuestions = [
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
    message: '是否使用定制化配置（y/n/yes/no)',
    validate: function (answer) {
      checkRequiredAnswer(this, answer)
    }
  },
  {
    type: 'input',
    name: 'projectname',
    message: '请输入项目名称',
    validate: function (answer) {
      checkProjectNameIsValid(this, answer)
    }
  },
  {
    type: 'input',
    name: 'projectversion',
    message: '请输入项目版本号',
    default: '1.0.0',
    validate: function (answer) {
      checkProjectVersionIsValid(this, answer)
    }
  }
]

module.exports = interactiveCommandQuestions
