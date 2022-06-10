const downloadFn = require("download-git-repo");

downloadFn(
  "direct:https://github.com/coolpi21/vite-vue-template.git#master",
  "./aaa",
  { clone: true },
  (err) => {
    console.log("error", err);
  }
);
