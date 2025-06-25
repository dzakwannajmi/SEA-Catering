const planPrices = {
  "Diet Plan": 30000,
  "Protein Plan": 40000,
  "Royal Plan": 60000,
};

exports.calculateTotal = (plan, mealsCount, daysCount) => {
  const pricePerMeal = planPrices[plan] || 0;
  return pricePerMeal * mealsCount * daysCount * 4.3;
};
