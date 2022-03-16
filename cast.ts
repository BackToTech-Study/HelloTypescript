import { ISome } from "./models/some_interface"
import { Some } from "./models/some"

let d: Some = new Some()
d.name = 'd';
showObjectInfo(d)

let e = new Some()
e.name = 'e';
showObjectInfo(e)

let f: ISome = new Some() as ISome
f.name = 'f';
showObjectInfo(f)

let a: ISome = {id: 0, name: "a"} as ISome
showObjectInfo(a)

let b: Some = { ...a, name: "b" } as Some
showObjectInfo(b)

let c = { ...a, name: "c" } as Some
showObjectInfo(c)

function showObjectInfo(source: any) {
  console.log(source)
  console.log(`${source.name} instanceof Some = ${source instanceof Some}`)
  console.log(`_________________________________________`)
}