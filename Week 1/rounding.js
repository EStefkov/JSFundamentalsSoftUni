function rounding(n, preci) {
    let result = 0;
    if (preci > 15) {
        preci = 15;
    }
    // n = n.toFixed(preci);
    //console.log(parseFloat(n));
    n = parseFloat(n.toFixed(preci));

    console.log(n);

} rounding(3.1452532432542345234, 3)