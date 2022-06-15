function generateTips(mainText) {
  return {
    pending: `${mainText}中...`,
    done: `${mainText}完成`,
    fail: `${mainText}失败`
  }
}

// 下载模板
const DOWNLOAD_TEMPLATE_TIPS = generateTips('下载模板')

// 安装依赖
const INSTALL_DEPENDENCE_TIPS = generateTips('安装依赖')

// 创建项目
const CREATE_PROJECT_TIPS = {
  success: '🎉 完成: 您已成功创建项目'
}

// 交互式问答
const ANSWERS_TIPS = {
  required: '请输入必选项',
  confirmed: '请输入y/yes/n/no',
  projectNameRules: `请输入合法名称：
  规则一：输入的首字符为英文字符
  规则二：尾字符必须为英文或数字
  规则三：字符仅允许-和_两种
  `,
  versionNumberRules: '请输入合法版本号'
}

module.exports = {
  DOWNLOAD_TEMPLATE_TIPS,
  INSTALL_DEPENDENCE_TIPS,
  CREATE_PROJECT_TIPS,
  ANSWERS_TIPS
}
