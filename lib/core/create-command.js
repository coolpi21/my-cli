const executeCreateProjectCommand = require('./actions-command')

function generateCreateProjectCommand(program) {
  program
    .command('create <projectname> [...others]')
    .alias('crt')
    .description('创建项目')
    .action(executeCreateProjectCommand)
}

module.exports = generateCreateProjectCommand