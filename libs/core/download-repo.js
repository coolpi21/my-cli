const downloadGitRepo = require("download-git-repo");
const ora = require("ora");
function downloadRepo(repoUrl, path) {
  const spinner = ora().start();
  spinner.color = "yellow";
  spinner.text = "下载模板中......";

  downloadGitRepo(
    `direct:${repoUrl}`,
    `${process.cwd()}/${path}`,
    { clone: true },
    (err) => {
      if (!err) {
        spinner.succeed("下载模板完成");
      }
      if (err) {
        spinner.fail("下载模板失败");
      }
      console.log("error", err);
    }
  );
}

module.exports = downloadRepo;
