#!/usr/bin/env node
"use strict";

const program = require("commander");
const { prompt } = require("inquirer");
const devices = [];

const validateNumber = input => {
  let valid = true;
  const numericalInput = Number(input);
  if (!Number.isFinite(numericalInput)) {
    console.log("You need to provide a number");
    valid = false;
  }

  return valid;
};

const addDeviceHandler = () => {
  const questions = [
    {
      type: "input",
      name: "deviceName",
      message: "Enter device name: "
    },
    {
      type: "input",
      name: "energyConsumption",
      message: "Enter energy consumption [kWh]: ",
      validate: validateNumber
    },
    {
      type: "input",
      name: "timeUsed",
      message: "Time used (hours/month): ",
      validate: validateNumber
    },
    {
      type: "confirm",
      name: "addNextDevice",
      message: "Do you want to add next device?"
    }
  ];

  prompt(questions).then(
    ({ deviceName, energyConsumption, timeUsed, addNextDevice }) => {
      devices.push({ name: deviceName, energyConsumption, timeUsed });
      if (addNextDevice) {
        addDeviceHandler();
      } else {
        addHourlyEnergyCostHandler();
      }
    }
  );
};

const addHourlyEnergyCostHandler = () => {
  const questions = [
    {
      type: "input",
      default: 0.57,
      name: "hourlyEnergyConsumptionCost",
      message: "Enter energy consumption cost (zloty per kWh): ",
      validate: validateNumber
    }
  ];

  const calculateEnergyConsumption = hourlyEnergyConsumptionCost => {
    const monthlyEnergyConsumptionCosts = devices.reduce((acc, cur) => {
      return (
        acc + cur.energyConsumption * cur.timeUsed * hourlyEnergyConsumptionCost
      );
    }, 0);

    console.log(
      `Your monthly energy consumption costs is: ${monthlyEnergyConsumptionCosts.toFixed(
        2
      )} zloty`
    );
  };

  prompt(questions).then(({ hourlyEnergyConsumptionCost }) => {
    calculateEnergyConsumption(hourlyEnergyConsumptionCost);
  });
};

program
  .version("0.0.1")
  .command("start")
  .description("Starts prompting user for devices info")
  .action(addDeviceHandler);

program.parse(process.argv);
