const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Анхны зайг оруулна уу: ', (initialDistance) => {
  const distance = parseFloat(initialDistance);

  const wolfSpeed = 25; 
  const rabbitSpeed = 18; 

  const relativeSpeed = wolfSpeed - rabbitSpeed;

  const timeInHours = distance / relativeSpeed;

  const timeInMinutes = timeInHours * 60;

  const timeInSeconds = timeInMinutes * 60;

  console.log(`Чоно туулайг барих хугацаа : ${Math.floor(timeInSeconds)} секунд`);

  rl.close();
});
