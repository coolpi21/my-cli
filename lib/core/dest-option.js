function generateHelpCommandOption(program) {
  program.option("-d --dest <dest>", "设置框架目录");
}
module.exports = generateHelpCommandOption;
