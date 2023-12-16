// Weather conditions
const weatherConditions = ['sunny', 'rainy', 'cloudy', 'windy'];

// Suggest activities based on weather conditions using if-else statements
weatherConditions.forEach(condition => {
  let activity = '';
if (condition === `sunny`) {
  activity = `Go for a walk`;
} else if( condition === `rainy`){
  activity = `Bring an umbrella`;
} else if( condition === `cloudy`) {
  activity = `Great day for a museum visit`;
} else if (condition === `windy`) {
  activity = `Perfect for flying kites`;
}

  console.log(`When it's ${condition}, you should ${activity}.`);
});
