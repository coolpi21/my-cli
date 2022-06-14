#! /usr/bin/env node
const program = require('commander')
const pkg = require('../package.json')

program.version(pkg.version)
// help option
const generateHelpCommandOption = require('../lib/core/help-option')
generateHelpCommandOption(program)

// dest option
const generateDestCommandOption = require('../lib/core/dest-option')
generateDestCommandOption(program)

// 创建项目命令
const executeCreateProjectCommand = require('../lib/core/create-command')
executeCreateProjectCommand(program)

program.parse(process.argv)
