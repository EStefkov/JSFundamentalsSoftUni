function pyra(base, increment) {
    let start = base;
    let stone = 0;
    let marble = 0;
    let lazuli = 0;
    let gold = 0;
    let Height = 0;
    let allStones = 0;
    let sumMarble = 0;
    let sumStones=0;
    let stones = 0;
    for (let i = start; i >= 0; i -= 2) {
        Height += 1;
        if (Height <= 4) {
            allStones = i * i;
            marble = (4 * i) - 4;
            sumMarble += marble;
            stones = allStones - marble;

        } if (Height % 5 === 0) {
            lazuli = (4 * i) - 4;

            stones = allStones - marble - lazuli;
            console.log(`lazulia is ${allStones}`);
        }
        sumStones+=stones;
        console.log(sumStones);
    }
} pyra(11);