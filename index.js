function writeCards(names, word){
    let array = []
    for (let i=0; i < names.length; i++) {
        array.push(`Thank you, ${names[i]}, for the wonderful ${word} gift!`)
    }
    return array
}

function countDown(x){
    if (x > 0) {
        while (x >= 0) {
            console.log(x)
            x--
        }
    }
}
