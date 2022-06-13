// 检查必选项命令
function checkRequiredFieldsAnswer(context, answer) {
  const done = context.async()
  setTimeout(function () {
    if (!answer) {
      done('请输入必选项')
      return
    }
    done(null, true)
  }, 500)
}

// 判断是否输入y/n正确的命令
function checkYesOrNoAnswer(answer) {
  const answersList = ['yes', 'y', 'no', 'n']
  if (!answersList.includes(answer.toLowerCase())) {
    return '请输入y/yes/no/n'
  }
  return true
}

module.exports = {
  checkRequiredFieldsAnswer,
  checkYesOrNoAnswer
}
