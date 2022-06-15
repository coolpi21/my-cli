const executeCreateProjectCommand = require('./actions-command')

function generateCreateProjectCommand(program) {
  program
    .command('create')
    .alias('crt')
    .description('创建项目')
    .argument('<projectname>', '项目名')
    .option('--template <templatename>', '模板名')
    .action(executeCreateProjectCommand)
}

module.exports = generateCreateProjectCommand
