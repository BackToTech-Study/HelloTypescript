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