const  marvel_heros = ["Thor","Ironman" , "Spiderman"]
const dc_heros = ["superman" , "flash" , "batman"]



// marvel_heros.push(dc_heros)

// const all_heros = marvel_heros.concat(dc_heros)
// console.log(all_heros);

// const all_heros = [...marvel_heros , ...dc_heros]
// console.log(all_heros);

// const another_array = [1,2,3 , [4,5,6],7,[6,7,[4,5]]]
// const new_another_array = another_array.flat(Infinity)
// console.log(new_another_array);

console.log(Array.isArray("Aditya"));
console.log(Array.from("Aditya"));
// console.log(Array.from({name:"Aditya"})); //interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));

