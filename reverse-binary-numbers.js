const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const calc = input => {
    let remain = []
    let num = parseInt(input,10)
    while(num !== 0){
        remain.push(num % 2)
        num = Math.floor(num / 2)
    }
    remain = remain.reverse()
    let sum = 0
    remain.forEach((binary,i) => {
        if(binary){
            sum += Math.pow(2,i)
        }
    })
    console.log(sum)
}

rl.on('line', input => {
    calc(input)
    rl.close()
})