function centuresToMin(centures) {
    let year = centures * 100;
    let days = Math.trunc(year * 365.2422);
    let hours = 24 * days;
    let min = 60 * hours;
    console.log(`${centures} centures = ${year} years = ${days} days = ${hours} hours = ${min} minutes`);
}centuresToMin(1);