const consumptions = [5, 10, 25, 8];
const threshold = 20;
consumptions.forEach(c => {
  console.log(c);
  if (c > threshold) console.warn("Alarm: High consumption!");
});