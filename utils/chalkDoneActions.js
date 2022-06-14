const chalk = require('chalk')

function handleDoneActionsHint(projectPath) {
  console.log(`
  ==============================
  ${chalk.green.bold('Done: ')}

  - ${chalk.green('cd ' + projectPath)}
  - ${chalk.green('git init --initial-branch=master')}
  - ${chalk.green('npm install')}
  - ${chalk.green('npm run dev')}
  ==============================
  `)
}

module.exports = handleDoneActionsHint
