const marvel_heroes = ["thor", "Ironmn", "spiderman"]
const dc_heroes = ["superman", "flash", "batman"]

// marvel_heroes.push(dc_heroes)

// console.log(marvel_heroes);
// console.log(marvel_heroes[3][1]);

// const allHeroes = marvel_heroes.concat(dc_heroes)
// console.log(allHeroes);

const all_new_heros = [...marvel_heroes, ...dc_heroes]

// console.log(all_new_heros);

const another_array = [1, 2, 3,[4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_arrays = another_array.flat(Infinity)  // all arrays mix in one arrays 
// console.log(real_another_arrays);



console.log(Array.isArray("Meet"));
console.log(Array.from("Meet"));
console.log(Array.from({name: "Meet"}));  // key se arrays o/p []

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));