# HelloTypescript
Basic programming concepts in Typescript

## Preconditions
- [ ] [Node](https://nodejs.org/en/download/) is installed

## Setup
- [x] [install](https://www.typescriptlang.org/docs/handbook/typescript-tooling-in-5-minutes.html) with `npm install typescript`
- [x] compile your typescript code with `npx tsc fileName.ts`. To activate compilation at every code change you can activate the watch mode by using the `-w` flag: `npx tsc -w fileName.ts`

## Syntax
### Data types
- [x] use `let` or `const` for [declaring variables](https://www.typescriptlang.org/docs/handbook/variable-declarations.html)
- [x] [type checking](https://www.typescriptlang.org/docs/handbook/2/basic-types.html#static-type-checking)
- [x] undefined
- [ ] bigint
- [x] number
- [x] string
- [x] null
- [ ] symbol
- [x] undefined and void
    * In TypeScript, a function that does not return a value, actually returns undefined. 
    * The void type can have undefined or null as a value where as never cannot have any value. 
- [x] objects    
- [x] [`never`](https://www.typescripttutorial.net/typescript-tutorial/typescript-never-type/).    
    * The `never` type can be used to indicate that a function never returns anything.
- [x] [Composing types](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html#composing-types) with unions
- [x] unkown    
    * An unknown variable can not be alocated to a variable of a known type
- [x] any
    * A variable of type any can be alocated to any variable
- [x] passing functions as parameters
- [x] custom types with [interfaces](https://www.typescriptlang.org/docs/handbook/interfaces.html)
- [x] custom types with type
    * You should prefer interface. Use type when you need specific features.
- [x] “duck typing” or “structural typing” - two objects have the same shape, they are considered to be of the same type
    * TypeScript’s type system is fully erased at runtime => typeof(new Another()) === 'object'
- [x] [Enums](https://www.typescriptlang.org/docs/handbook/enums.html)

### Classes
- [x] Declare a [class](https://www.typescriptlang.org/docs/handbook/2/classes.html)
- [x] [this](https://www.typescriptlang.org/docs/handbook/2/classes.html#this-types) keyword in classes
- [x] [Inhritance](https://www.typescriptlang.org/docs/handbook/2/classes.html)
- [x] [class member visibility](https://www.typescriptlang.org/docs/handbook/2/classes.html)
- [x] You can export and import [modules](https://www.typescriptlang.org/docs/handbook/modules.html) exactly like in javascript

### Cast
- [x] [cast](https://www.typescripttutorial.net/typescript-tutorial/type-casting/)
- [x] [type Inference](https://www.typescriptlang.org/docs/handbook/type-inference.html)

### Functions
- [x] [functions](https://www.typescriptlang.org/docs/handbook/functions.html)
- [ ] passing parameters by value or reference / mutability

## Documentation
* https://www.typescriptlang.org/docs/handbook/typescript-tooling-in-5-minutes.html
