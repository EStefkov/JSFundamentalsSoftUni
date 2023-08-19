function solve(input){

let actions = {
    CastSpell: (heroes, [name, mpCost, spellName]) => {
        let hero = heroes[name];
        mpCost = Number(mpCost);
        if(hero.mp>=mpCost){
            hero.mp -=mpCost;
            console.log(`${name} has successfully cast ${spellName} and now has ${hero.mp}`);
        } else {
            console.log(`${name} does not have enogh mana to cast ${spellName}`);
        }
    } ,
    TakeDamge: (heroes, [name, damage, source]) => {
        let hero = heroes[name];
        damage = Number(damage);
        hero.hp -= damage;
        if(hero.hp>0){
            let hero = heroes[name];
            console.log(`${name} was hit for ${damage} Hp By ${source} and now hase ${hero.hp} HP.`)
        } else {
            console.log(`${name} has been killed by ${source}`);
        }
    } ,
    Reacharge:(heroes, [name, mpAmp]) => {
        let hero = heroes[name];   
        mpAmp = Number(mpAmp);
        if (hero.mp + mpAmp > 200){
            mpAmp = 200 - hero.mp;
        }
        hero.mp = mpAmp;
        //hero.mp+= Math.min(hero.mp +Number(mpAmp), 200);  
        console.log(`${name} recharge mana for ${mpAmp}! `);
    } ,
    Heal: (heroes, [name,hpAmp]) => {
        let hero = heroes[name];
        hpAmp = Number(hpAmp);
        if(hero.hp + hpAmp >100){
            hpAmp = 100 - hero.hp;
        }
        hero.hp +=hpAmp;
        console.log(`${name} healed for ${hpAmp} HP!`);
    }
};    
    // read number of heroes

let n = Number(input.shift());

let heroes = {};

for (let i=0;i<n;i++){
    //parse each hero
   let [name, hp, mp] = input.shift().split(' ');
    heroes[name] = {
        hp: Number(hp),
        mp: Number(mp)
    };
}

//for each commnad until end
while(input[0] != 'End'){
    //-parse and execute command
    let [command, ...args] = input.shift().split(' - ');
    let action= actions[command];
    action(heroes,args)
}

//sort heroes
let sorted = Object.entries(heroes).sort(compareHeroes);

//print result
for (const hero of sorted) {
    console.log(hero[0]);
    console.log(`  HP: ${hero[1].hp}`);
    console.log(`  MP: ${hero[1].mp}`);
}
function compareHeroes (a,b){
    let heroA = a[1];
    let heroB = b[1];
    let result =  heroB.hp - heroA.hp;
    if(result == 0){
        result = a[0].localCompare(b[0]);
    }
    return result;
};

}

solve(['2',
'Solmyr 85 120', 
'Kyrren 99 50',
'Heal - Solmyr - 10',
'Reacharge - Solmyr - 50',
'TakeDamge - Kyrren - 66 - Orc',
'CastSpell - Kyrren - 15 - ViewEarth',
'End'])