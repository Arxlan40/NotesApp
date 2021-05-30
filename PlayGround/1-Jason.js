const fs =require('fs')

const book ={
    name: "Arsalan Umar",
    age:"24",
    planet:"Mars"
}

const bookJson= JSON.stringify(book)
fs.writeFileSync('1-json.json',bookJson)
console.log(fs.readFileSync("1-json.json").toString())