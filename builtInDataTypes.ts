function separate<T>(functoid: (params: T) => void, params: T) {
    console.log(`_________________________________________`)
    functoid(params)
}


interface InfoMessage {
    title: string, 
    variable: any
}


const showObjectInfo = (params: InfoMessage): void => {
    console.log(params.title)
    console.log(`value = ${params.variable}`)
    console.log(`typeof = ${typeof(params.variable)}`)
}


let isActive: boolean
separate<InfoMessage>(showObjectInfo, {title: "let isActive: boolean", variable: isActive})


isActive = 4 > 3
separate<InfoMessage>(showObjectInfo, {title: "isActive = 5 > 6", variable: isActive})


let numericValue: number = 5
separate<InfoMessage>(showObjectInfo, {title: "let numericValue: number = 5", variable: numericValue})


let text: string = 'some'
separate<InfoMessage>(showObjectInfo, {title: "let text: string = 'some'", variable: text})


let none: null = null
separate<InfoMessage>(showObjectInfo, {title: "let none: null = null", variable: none})


function returnNothing () {}
let nothing: void = returnNothing()
separate<InfoMessage>(showObjectInfo, {title: "let nothing: void = returnNothing()", variable: nothing})
// In TypeScript, a function that does not return a value, actually returns undefined.
// The void type can have undefined or null as a value where as never cannot have any value.


let some: object = {first: 4, second: 5}
separate<InfoMessage>(showObjectInfo, {title: "let some = {first: 4, second: 5}", variable: some})


function infinteLoop(): never { 
    while(true) { 
        console.log("step") 
    } 
}
separate<string []>(
    (messages: string []) => { messages.forEach(msg => console.log(msg)) }, 
    ["function infinteLoop(): never { \n\tthrow new Error() \n}", "used to indicate that a function never returns anything"]
)


type States = 'Opened' | 'Closed' | 'Broken'
let machineState: States = 'Closed'
separate<InfoMessage>(showObjectInfo, {title: "let machineState: States = 'Closed'", variable: machineState})


let multiple: string | number = 'text'
separate<InfoMessage>(showObjectInfo, {title: "let multiple: string | number = 'text'", variable: multiple})
multiple = 5
separate<InfoMessage>(showObjectInfo, {title: "multiple = 5", variable: multiple})


let notKnown: unknown
separate<InfoMessage>(showObjectInfo, {title: "let notKnown: unknown", variable: notKnown})


let anything: any
separate<InfoMessage>(showObjectInfo, {title: "let anything: any", variable: anything})


class Dude {
    title: string
    variable: any
    more: number

    constructor(headline: string, firstValue: any, secondValue: number) {
        this.title = headline
        this.variable = firstValue
        this.more = secondValue
    }
}
let title: string = "let someDude: Dude = new Dude('Some dude', notKnown, 5)"
let someDude: Dude = new Dude(title, notKnown, 5)
separate<InfoMessage>(showObjectInfo, someDude)


class Another {
    title: string
    variable: any
    more: number
}
let anotherDude: Another = someDude
anotherDude.title = "let anotherDude: Another = someDude"
separate<InfoMessage>(showObjectInfo, anotherDude)

let typeValue: string = typeof(new Another())
separate<InfoMessage>(showObjectInfo, {title: 'let typeValue: any = typeof(someDude)', variable: typeValue})


