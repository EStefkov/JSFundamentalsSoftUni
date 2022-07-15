/** the Pyramid of King Djoser
Write a JS program that calculates how much resources will be required for the construction of a pyramid. It is made out of stone, marble, 
lapis lazuli and gold. Your program will receive an integer that will be the base width and length of the pyramid and an increment, that is the height of each step. 
The bulk is made out of stone, while the outer layer is made out of marble. Every fifth step’s outer layer is made out of lapis lazuli instead of marble. 
The final step is made out of gold.
The pyramid is built with 1x1 blocks with height equal to the given increment. The first step of the pyramid has width and length equal to the given base and every next step 
is reduced by 2 blocks (1 from each side). The height of every step equals the given increment. See the drawing for an example. White steps are covered in marble, 
blue steps are covered in lapis lazuli (every fifth layer from the bottom), and yellow steps are made entirely out of gold (top-most step).
Since the outer layer of each step is made of a decorative material, to calculate the required stone for one step, reduce the width and length by 2 blocks (one from each side), 
find it’s area and multiply it by the increment. The rest of the step is made out of lapis lazuli for every fifth step from the bottom and marble for all other steps. 
To find the amount needed, you may, for example, find its perimeter and reduce it by 4 (to compensate for the overlapping corners) and multiply the result by the increment. 
See the drawing for details (grey is stone, white is decoration).
*/

function pyra(base, increment) {
    let start = base;
    let marble = 0;
    let lazuli = 0;
    let gold = 0;
    let Height = 0;
    let allStones = 0;
    let sumMarble = 0;
    let sumStones = 0;
    let sumLapis = 0;
    let stones = 0;
    let sumGold = 0;
    for (let i = start; i > 0; i -= 2) {
        Height += 1;
        if ( Height % 5 !== 0&& i>2) {
            allStones = i * i; // size of  i-floor
            marble = (4 * i) - 4; // like that we find how many marble stones we had outside
            stones = allStones - marble; 
            sumMarble += marble; 
            sumStones += stones;

        } else if(Height% 5 === 0) {
            allStones = i * i;
            lazuli = (4 * i) - 4;
            stones = allStones - lazuli;
            sumLapis += lazuli;
            sumStones += stones;
        }
        if (i <= 2 && i >= 0) {
            let goldfor = i * i
            gold += goldfor;
            sumGold += gold;
            break;
        }
    }
    sumStones *= increment;
    sumMarble *= increment;
    sumLapis *= increment;
    sumGold *= increment;
    Height *= increment
    console.log(`Stone required: ${Math.ceil(sumStones)}`);
    console.log(`Marble required: ${Math.ceil(sumMarble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(sumLapis)}`);
    console.log(`Gold required: ${Math.ceil(sumGold)}`);
    console.log(`Final pyramid height: ${Math.floor(Height)}`);

} pyra(12,
    1
);
/* 
Input 23,0.5
Output 
 Stone required: 886
Marble required: 228
Lapis Lazuli required: 36
Gold required: 1
Final pyramid height: 6
*/