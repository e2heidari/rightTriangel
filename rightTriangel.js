let x = 10;
let y = 10;
let triangel = "";
for (let i = 1; i < x; i++) {
    for (let j = 1; j < y; j++) {
        if (i + j > 9) {
            triangel = triangel.concat("*")
        } else {
            triangel = triangel.concat(" ")
        }
    }
    triangel = triangel.concat("\r\n")
}

console.log(triangel)

