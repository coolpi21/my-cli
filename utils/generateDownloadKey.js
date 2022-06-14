/**
 *
 * @param {String} framework - 选择的框架类型
 * @param {String} needConfigStr - 是否需要配置的字符串 y/yes/n/no
 * @return {string} downloadRepoKey - 下载框架的key值
 */
function generateDownloadRepoKey(framework, needConfigStr) {
  let downloadRepoKey

  if (['y', 'yes'].includes(needConfigStr)) {
    downloadRepoKey = `${framework}-custom`
  }

  if (['n', 'no'].includes(needConfigStr)) {
    downloadRepoKey = `${framework}-basic`
  }

  return downloadRepoKey
}

module.exports = generateDownloadRepoKey
