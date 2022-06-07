enum Color {
    BLACK,
    RED,
    BLUE,
    YELLOW
}


let a = Color.YELLOW
console.log(`let a = Color.YELLOW => a = ${a}`)

console.log(`Color.BLUE = ${Color.BLUE}`)
console.log(`Color['BLUE'] = ${Color['BLUE']}`)
console.log(`Color.BLUE.toString() = ${Color.BLUE.toString()}`)
console.log(`Color[2] = ${Color[2]}`)
console.log(`Color[Color.BLUE] = ${Color[Color.BLUE]}`)
console.log(`Object.keys(Color) = ${Object.keys(Color)}`)


var arr = new Array() 
arr['Skoda'] = 0
arr['BMW'] = 1
arr['Dacia'] = 2
arr['Volvo'] = 3

console.log(`arr['Dacia'] = ${arr['Dacia']}`)
console.log(`arr[2] = ${arr[2]}`)

tmp = arr['Dacia']
console.log(`tmp = ${tmp}`)

console.log(`Masini['Dacia'] == arr['Dacia'] <=> ${Masini['Dacia'] == arr['Dacia']}`)
