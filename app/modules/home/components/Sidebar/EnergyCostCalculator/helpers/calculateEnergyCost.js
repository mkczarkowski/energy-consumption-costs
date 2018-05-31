import roundToTwo from "./roundTwo";

/**
 * Calculates energy costs of listed devices
 * @param devices - array of devices, each device should be an object with following properties:
 * powerConsumption expressed in Watts
 * timeUsed expressed in h per time unit
 * @param energyPrice - currency/kWh
 * @returns {*}
 */
function calculateEnergyCost(devices, energyPrice) {
  return roundToTwo(
    devices.reduce(
      (acc, cur) =>
        acc + cur.powerConsumption / 1000 * cur.timeUsed * energyPrice,
      0
    )
  );
}

export default calculateEnergyCost;
