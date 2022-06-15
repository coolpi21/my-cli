const downloadGitRepo = require('download-git-repo')
const ora = require('ora')
const editFile = require('../../utils/editFile')
const installDependence = require('../../utils/installDependence')
const { DOWNLOAD_TEMPLATE_TIPS } = require('../../config/tipsText')

function downloadRepo(repoUrl, path, { projectname, projectversion }) {
  const spinner = ora({
    text: DOWNLOAD_TEMPLATE_TIPS.pending,
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
        spinner.succeed(DOWNLOAD_TEMPLATE_TIPS.done)
        installDependence(path)
      }
      if (err) {
        spinner.fail(DOWNLOAD_TEMPLATE_TIPS.fail)
        console.log(err)
      }
    }
  )
}

module.exports = downloadRepo
