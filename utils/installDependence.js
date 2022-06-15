const { exec } = require('child_process')
const ora = require('ora')
const handleDoneActionsHint = require('./chalkDoneActions')
const { INSTALL_DEPENDENCE_TIPS } = require('../config/tipsText')

/**
 *
 * @param {String} path - 项目目录名
 */
function installDependence(path) {
  const spinner = ora({
    text: INSTALL_DEPENDENCE_TIPS.pending,
    color: 'blue'
  }).start()
  const initGitCmd = `git init --initial-branch=master`
  const yarnDepCmd = `yarn`
  const npmDepCmd = `npm install`
  const cdDirCmd = `cd ${path}`
  const cmd = `${cdDirCmd} && ${initGitCmd} && ${npmDepCmd}`
  exec(cmd, function (error, stdout, stderr) {
    // console.log(error)
    // console.log(stdout)
    // console.log(stderr)

    if (error) {
      spinner.fail(INSTALL_DEPENDENCE_TIPS.fail)
    }

    if (!error) {
      spinner.succeed(INSTALL_DEPENDENCE_TIPS.done)
      handleDoneActionsHint(path)
    }
  })
}

module.exports = installDependence
