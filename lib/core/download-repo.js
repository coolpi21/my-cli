const downloadGitRepo = require('download-git-repo')
const ora = require('ora')
const handleDoneActionsHint = require('../../utils/chalkDoneActions')
const editFile = require('../../utils/editFile')
function downloadRepo(repoUrl, path, { projectname, projectversion }) {
  const spinner = ora({
    text: '下载模板中',
    color: 'blue'
  }).start()

  downloadGitRepo(
    `direct:${repoUrl}`,
    `${process.cwd()}/${path}`,
    { clone: true },
    async (err) => {
      if (!err) {
        await editFile({
          version: projectversion,
          projectName: projectname,
          projectPath: `${process.cwd()}/${path}`
        })
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
