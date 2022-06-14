const semver = require('semver')

// 检查必选项命令
function checkRequiredFieldsAnswer(context, answer) {
  handleAsyncDoneEvent(context, (done) => {
    if (!answer) {
      done('请输入必选项')
      return
    }
  })
}

// 判断是否输入y/n正确的命令
function checkRequiredAnswer(context, answer) {
  handleAsyncDoneEvent(context, (done) => {
    const answersList = ['yes', 'y', 'no', 'n']
    if (!answersList.includes(answer.toLowerCase())) {
      done('请输入y/yes/no/n')
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
      done(`请输入合法名称：
          规则一：输入的首字符为英文字符
          规则二：尾字符必须为英文或数字
          规则三：字符仅允许-和_两种
        `)
      return
    }
  })
}

// 判断版本号是否输入正确
function checkProjectVersionIsValid(context, answer) {
  handleAsyncDoneEvent(context, (done) => {
    if (!semver.valid(answer)) {
      done(`请输入合法版本号`)
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
