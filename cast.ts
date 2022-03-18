import { ISome } from "./models/some_interface"
import { Some } from "./models/some"

let d: Some = new Some()
d.name = 'd';
showInfoSection("let d: Some = new Some()", d)

let e = new Some()
e.name = 'e';
showInfoSection("let e = new Some()", e)

let f: ISome = new Some() as ISome
f.name = 'f';
showInfoSection("let f: ISome = new Some() as ISome", f)

let a: ISome = {id: 0, name: "a"} as ISome
showInfoSection("let a: ISome = {id: 0, name: \"a\"} as ISome", a)

let b: Some = { ...a, name: "b" } as Some
showInfoSection("let b: Some = { ...a, name: \"b\" } as Some", b)

let c = { ...a, name: "c" } as Some
showInfoSection("let c = { ...a, name: \"c\" } as Some", c)


function showInfoSection(tytle: string, object: any) {
  console.log(`_________________________________________`)
  console.log(tytle)
  console.log(object)
  console.log(`${object.name} instanceof Some = ${object instanceof Some}`)
}

