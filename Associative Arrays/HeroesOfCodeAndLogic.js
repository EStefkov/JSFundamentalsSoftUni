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
        hero.mp+= Math.min(hero.mp +Number(mpAmp), 200);  
        console.log(`${name} recharge mana for ${mpAmp}! `);
    } ,
    Heal: (heroes, [name,hpAmp]) => {
        let hero = heroes[name];
        hero.hp+= Number(hpAmp);
        if(hero.hp >100){
            hero.hp = 100;
        }
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
//console.log(action(heroes,args));
//sort heroes
//print result

}

solve(['2',
'Solmyr 85 120', 
'Kyrren 99 50',
'Heal - Solmyr - 10',
'Reacharge - Solmyr - 50',
'TakeDamge - Kyrren - 66 - Orc',
'CastSpell - Kyrren - 15 - ViewEarth',
'End'])