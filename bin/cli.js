#! /usr/bin/env node
const program = require('commander')
const pkg = require('../package.json')
const executeCreateProjectCommand = require('../lib/core/create-command')

program.version(pkg.version)

// 创建项目命令
executeCreateProjectCommand(program)

program.parse(process.argv)
