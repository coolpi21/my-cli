const chalk = require('chalk')

function handleDoneActionsHint(projectPath) {
  console.log(`
  ${chalk.green.bold('🎉 Done: 您已成功创建项目')}

  $ ${chalk.blue('cd ' + projectPath)}
  $ ${chalk.blue('git init --initial-branch=master')}
  $ ${chalk.blue('npm install')}
  $ ${chalk.blue('npm run dev')}
  `)
}

module.exports = handleDoneActionsHint
