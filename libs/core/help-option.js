function generateHelpCommandOption(program) {
  program.option("-f --framework <framework>", "设置框架");
}

module.exports = generateHelpCommandOption;
