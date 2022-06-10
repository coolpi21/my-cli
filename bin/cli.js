#! /usr/bin/env node

const program = require("commander");

// help option
const generateHelpCommandOption = require("../libs/core/help-option");
generateHelpCommandOption(program);

// dest option
const generateDestCommandOption = require("../libs/core/dest-option");
generateDestCommandOption(program);

// create command
const executeCreateProjectCommand = require("../libs/core/create-command");
executeCreateProjectCommand(program);

program.parse(process.argv);
