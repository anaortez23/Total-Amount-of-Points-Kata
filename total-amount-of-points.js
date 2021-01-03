// MY SOLUTION

function points(games) {
let totalPoints = 0;
    for(let i = 0; i < games.length; i++){
        let x = Number(games[i][0]);
        let y =  Number(games[i][2])
        x > y ? totalPoints += 3
        :x === y ? totalPoints += 1
        :totalPoints 
}
return totalPoints
}

//BEST SOLUTION
const points = games => games.reduce((output,current) => {
    return output += current[0]>current[2] ? 3 : current[0]===current[2] ? 1 : 0;
},0)