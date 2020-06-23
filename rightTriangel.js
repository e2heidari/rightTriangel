let triangel = "";
for (let i = 1; i < 10; i++) {
    for (let j = 1; j < 10; j++) {
        if (i + j > 9) {
            triangel = triangel.concat("*")
        } else {
            triangel = triangel.concat(" ")
        }
    }
    triangel = triangel.concat("\r\n")
}

console.log(triangel)

