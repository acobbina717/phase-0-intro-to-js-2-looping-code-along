// Code your solutions in this file
function writeCards(name) {
    let arry = []
    for (let x = 0; x < name.length; x++) {
        arry.push(`Thank you, ${name[x]}, for the wonderful surprise gift!`)
    }
    return arry
}

function countDown(num) {
    while (num >= 0) {
        console.log(num)
        num--
    }
}
