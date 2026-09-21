function isValidShift(hours) {
  return hours > 0 && hours <= 24;
}

function calculatePay(hours, hourlyRate) {
  const total = hours * hourlyRate;
  return Math.round(total * 100) / 100;
}

module.exports = { isValidShift, calculatePay };
