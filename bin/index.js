#!/usr/bin/env node
"use strict";

const program = require("commander");
const devices = [];

const addDeviceHandler = (name, energyConsumption, timeUsed) => {
  devices.push({ name, energyConsumption, timeUsed });
  console.log(devices);
};

program
  .version("0.0.1")
  .command("add-device <name> <energyConsumption> <timeUsed>")
  .description(
    "Add device with its energy consumption and time plugged in per month."
  )
  .action(addDeviceHandler);

program.parse(process.argv);
