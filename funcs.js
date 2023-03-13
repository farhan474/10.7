function hasDuplicate(arr){
	return arr.length > new Set(arr).size
}

function vowelCount(str){
	str.toLowerCase();
let vowels = "aeiou";
let m = new Map();

let v = str.split("").filter((val)=> vowels.includes(val))


v.forEach((letter)=>{
	let search = new RegExp(`${letter}`, 'g')
	let amount = v.join("").match(search).length
	m.set(letter ,amount)
})
return m
}