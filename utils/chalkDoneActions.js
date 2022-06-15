const chalk = require('chalk')
const { CREATE_PROJECT_TIPS } = require('../config/tipsText')

function handleDoneActionsHint(projectPath) {
  console.log(`
  ${chalk.green.bold(CREATE_PROJECT_TIPS.success)}

  $ ${chalk.blue(`cd ${projectPath}`)}
  $ ${chalk.blue('yarn serve')}
  `)
}

module.exports = handleDoneActionsHint
