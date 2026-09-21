function isValidShift(hours) {
  return hours > 0 && hours <= 24;
}

function calculatePay(hours, hourlyRate) {
  const REGULAR_HOURS_LIMIT = 8;
  const OVERTIME_MULTIPLIER = 1.5;
  let totalPay = 0;

  if (hours <= REGULAR_HOURS_LIMIT) {
    totalPay = hours * hourlyRate;
  } else {
    const regularPay = REGULAR_HOURS_LIMIT * hourlyRate;
    const overtimeHours = hours - REGULAR_HOURS_LIMIT;
    const overtimePay = overtimeHours * (hourlyRate * OVERTIME_MULTIPLIER);
    totalPay = regularPay + overtimePay;
  }

  return Math.floor(totalPay);
}

module.exports = { isValidShift, calculatePay };
