const semver = require('semver')
const { ANSWERS_TIPS } = require('../config/tipsText')

// 检查必选项命令
function checkRequiredFieldsAnswer(context, answer) {
  handleAsyncDoneEvent(context, (done) => {
    if (!answer) {
      done(ANSWERS_TIPS.required)
      return
    }
  })
}

// 判断是否输入y/n正确的命令
function checkRequiredAnswer(context, answer) {
  handleAsyncDoneEvent(context, (done) => {
    const answersList = ['yes', 'y', 'no', 'n']
    if (!answersList.includes(answer.toLowerCase())) {
      done(ANSWERS_TIPS.confirmed)
      return
    }
  })
}

// 判断项目名称是否符合标准
function checkProjectNameIsValid(context, answer) {
  handleAsyncDoneEvent(context, (done) => {
    const projectNameReg =
      /^[a-zA-Z]+([-][a-zA-Z][a-zA-Z0-9]*|[_][a-zA-Z][a-zA-Z0-9]*|[a-zA-Z0-9])*$/
    if (!projectNameReg.test(answer)) {
      done(ANSWERS_TIPS.projectNameRules)
      return
    }
  })
}

// 判断版本号是否输入正确
function checkProjectVersionIsValid(context, answer) {
  handleAsyncDoneEvent(context, (done) => {
    if (!semver.valid(answer)) {
      done(ANSWERS_TIPS.versionNumberRules)
      return
    }
  })
}

// 异步 Done 处理步骤
function handleAsyncDoneEvent(context, cb) {
  const done = context.async()
  setTimeout(function () {
    cb && cb(done)
    done(null, true)
  }, 0)
}

module.exports = {
  checkRequiredFieldsAnswer,
  checkRequiredAnswer,
  checkProjectVersionIsValid,
  checkProjectNameIsValid
}
