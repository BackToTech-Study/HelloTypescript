import { ISome } from "./models/some_interface"
import { Some } from "./models/some"

let d: Some = new Some()
d.name = 'Mr. D';
showInfoSection("let d: Some = new Some()", d)

let e = new Some()
e.name = 'Ms. E';
showInfoSection("let e = new Some()", e)

let f: ISome = new Some() as ISome
f.name = 'Mr. F';
showInfoSection("let f: ISome = new Some() as ISome", f)

let a: ISome = {id: 0, name: "Ms. A"} as ISome
showInfoSection("let a: ISome = {id: 0, name: \"Ms. A\"} as ISome", a)

let b: Some = { ...a, name: "Mr. B" } as Some
showInfoSection("let b: Some = { ...a, name: \"Mr. B\" } as Some", b)

let c = { ...a, name: "Ms. C" } as Some
showInfoSection("let c = { ...a, name: \"Ms. C\" } as Some", c)


function showInfoSection(title: string, object: ISome) {
  console.log(`_________________________________________`)
  console.log(title)
  if (object instanceof Some)
    console.log(object.sayHello())
  else
    console.log(`Object with name ${object.name} doesn't implement the method sayHello`)
  console.log(object)
  console.log(`${object.name} is instanceof Some = ${object instanceof Some}`)
  console.log(`Object as json = ${JSON.stringify(object)}`)
}

