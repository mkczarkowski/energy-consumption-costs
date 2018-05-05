#!/usr/bin/env node
"use strict";

const program = require("commander");
const addDeviceHandler =  require("./handlers/addDeviceHandler");

program
  .version("0.0.1")
  .command("start")
  .description("Starts prompting user for devices info")
  .action(addDeviceHandler);

program.parse(process.argv);
