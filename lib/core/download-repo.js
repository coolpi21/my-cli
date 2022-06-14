const downloadGitRepo = require('download-git-repo')
const ora = require('ora')
const handleDoneActionsHint = require('../../utils/chalkDoneActions')

function downloadRepo(repoUrl, path, info) {
  const spinner = ora({
    text: '下载模板中',
    color: 'blue'
  }).start()

  downloadGitRepo(
    `direct:${repoUrl}`,
    `${process.cwd()}/${path}`,
    { clone: true },
    (err) => {
      if (!err) {
        spinner.succeed('下载模板完成')
        handleDoneActionsHint(path)
      }
      if (err) {
        spinner.fail('下载模板失败')
        console.log(err)
      }
    }
  )
}

module.exports = downloadRepo
