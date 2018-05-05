const validateNumber = input => {
  let valid = true;
  const numericalInput = Number(input);
  if (!Number.isFinite(numericalInput)) {
    console.log("You need to provide a number");
    valid = false;
  }

  return valid;
};

module.exports = validateNumber;