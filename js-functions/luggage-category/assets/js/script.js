function getCategory(weight) {
  if (weight >= 23) return "Bulky item";
  if (weight >= 10) return "Checked luggage";
  return "Hand luggage";
}
console.log(getCategory(15));