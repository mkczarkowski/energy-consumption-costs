const { prompt } = require("inquirer");
const validateNumber = require("./helpers/validateNumber");

const addHourlyEnergyCostHandler = devices => {
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

module.exports = addHourlyEnergyCostHandler;
