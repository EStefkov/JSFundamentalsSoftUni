function glad(lostFights, helmet, sword, shield, armor) {
    let expenses = 0;
    let counterShield = 0;
    for (let i = 1; i <= lostFights; i++) {
        if (i % 2 == 0) {
            expenses += helmet;
        } if (i % 3 == 0) {
            expenses += sword;
        } if (i % 2 == 0 && i % 3 == 0) {
            expenses += shield;
            counterShield++;
            if (counterShield == 2) {
                expenses += armor;
                counterShield = 0;
            }
        }
    }
    console.log(`Gladiator expenses: ${expenses} aureus`);

} glad(7, 2, 3, 4, 5)