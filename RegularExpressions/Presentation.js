/*
let regLiteral = /[A-Za-z]+/g; // range and /g is a flag
let regExp = new RegExp('[A-Za-z]+','g');
let pattern = /abc`/; // \]\]/]/]/]/]/

let text= 'Today is 2015-05-11';
let regex = /\d{4}-\d{2}-\d{02}/g;
let secondReg = new RegExp('\\d{4}-\\d{2}-\\d{02}', 'g')
let containsValidDate = secondReg.test(text);

console.log(containsValidDate);

let textt ='viktor kostadinov';
let regexx = /\w+$/;
let containsValid = regexx.test(textt);
console.log(containsValid);

let texts = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.';
let regPatr= /is/;
let match = texts.match(regPatr);
console.log(match);
*/
/*
let text =' i am born on 30-Dec-1994. My Father is bor on the 9-Jul-1955. 01-July-2000 is no a valid date.';
// kato zadadem global,pri povtorno izvikvane vzimame 2riq obekt
// (?<ime na obekta>)
let pattern = /\d{1,2}-(?<month>[A-Za-z]{3})-(?<year>\d{4})/g; 
let match = pattern.exec(text);
console.log(match);
match = pattern.exec(text);
console.log(match);
*/
/*
let text = 'Peter: 123 Mark: 123, 123, 123,123,123';
//let replacment = 999;
//let regex = /\d{3}/g;
let result = text.replace(/123/g,999);
console.log(result);
*/


