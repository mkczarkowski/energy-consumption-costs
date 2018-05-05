const { prompt } = require("inquirer");
const addHourlyEnergyCostHandler = require("./addHourlyEnergyCostHandler");
const validateNumber = require("./helpers/validateNumber");

const devices = [];

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
        addHourlyEnergyCostHandler(devices);
      }
    }
  );
};

module.exports = addDeviceHandler;
