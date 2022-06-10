const inquirer = require("inquirer");
const config = require("../../config/framework");
const downloadRepo = require("../core/download-repo");

async function executeCreateProjectCommand(projectName, argv) {
  // const projectName = projectName;
  const commandOptions = argv;

  // 交互式命令
  const interactiveCommandQuestions = [
    {
      type: "list",
      name: "framework",
      message: "请选择需要使用的框架",
      choices: config.framework,
      validate(answer) {
        if (!answer) {
          return "必填项";
        }
        return true;
      },
    },
  ];

  // 执行交互式命令
  const answer = await inquirer.prompt(interactiveCommandQuestions);
  const { framework: userSelectedFramework } = answer;
  downloadRepo(config.frameworkGroup[userSelectedFramework], projectName);
}

module.exports = executeCreateProjectCommand;
