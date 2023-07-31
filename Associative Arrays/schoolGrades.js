function schoolgrades(input){
    let students = new Map();
    
    for (let line of input){
    
        let tokens = line.split(' ');

        let name =  tokens.shift();
        
        let grades = tokens.map(Number);
        
        /*
        if (students.has(name)){

            let existing = students.get(name);

            for (let grade of grades){

                existing.push(grade);

            }
        }else {
            students.set(name,grades);
        }
        */
        
        if(!students.has(name)){
            students.set(name,[]);
        }

        let existing = students.get(name);
        for (let grade of grades){

            existing.push(grade);

        }
        
    }

    let sorted = Array.from(students);

    sorted.sort(compareAverage);
    
    for (let [name,grades] of sorted){

        console.log(`${name}: ${grades.join(', ')}`);
    }


   
}
function compareAverage([nameA, gradesA],[nameB, gradesB]){
    // a => [name, [grades]]
    //calcualte avarage for student A
    let avgA=0;
    gradesA.forEach(x => avgA +=x);
    avgA /=gradesA.length;

    let avgB=0;
    gradesB.forEach(x => avgB +=x);
    avgB /=gradesB.length;

    return avgA-avgB;

    
}

schoolgrades(['Lilly 4 6 6 5', 'Tim 2 3 6 2 3', 'Tammy 2 4 3', 'Tammy 6 6']);