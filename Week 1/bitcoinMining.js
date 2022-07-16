/*
Write a JavaScript program that calculates the total amount of bitcoins you purchased with the gold you mined during your shift at the mine.
 Your shift consists of a certain number of days where you mine an amount of gold in grams.
  Your program will receive an array with the amount of gold you mined each day, where the first day of your shift is the first index of the array. 
  Also, someone was stealing every third day from the start of your shift 30% from the mined gold for this day. For the different exchanges use these prices:
*/
function mining(day) {
  let days = day.length;
  let dayCounter = 0;
  let index = 0;
  let mined = day[index];
  let sumGold = 0;
  let priceOfBTC = 11949.16;
  let priceOfGold = 67.51;
  let sumGoldInLeva = 0;
  let counterOfBtc = 0;
  let moneyLeft = 0;
  let notEnoghMoney = true;
  let firstDay = 0;
  for (let i = 0; i < days; i++) {
    dayCounter += 1;
    mined = day[index];
    index++;

    if (dayCounter % 3 === 0) {
      mined *= 0.70;
    }
    sumGold += mined;
    sumGoldInLeva = priceOfGold * sumGold;
    counterOfBtc = sumGoldInLeva / priceOfBTC;
    moneyLeft = sumGoldInLeva % priceOfBTC
    if (sumGoldInLeva >= priceOfBTC) {
      while (notEnoghMoney === true) {
        firstDay = i + 1;
        notEnoghMoney = false;
      }
    }

  }
  if(counterOfBtc!==0){
  console.log(`Bought bitcoins: ${Math.floor(counterOfBtc)}`);
  }
  if(firstDay!==0){
    console.log(`Day of the first purchased bitcoin ${firstDay}`);
  }
  if(moneyLeft!==0){
    console.log(`Left money: ${moneyLeft.toFixed(2)} lv.`);
  }
  

} mining([100, 200, 300])