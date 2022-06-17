interface IVehicle {
    id: number;
    name: string;
    
    run(): string;
}

class ElecticVehicle implements IVehicle {
    public id: number =  Math.floor(Math.random()*9999)
    public name: string

    constructor(newName: string = "default") {
        this.name = newName
    }

    run() {
        return "cri cri ..."
    }
}

class DieselVehicle implements IVehicle {
    public id: number =  Math.floor(Math.random()*9999)
    public name: string

    constructor(newName: string = "default") {
        this.name = newName
    }

    run() {
        return "vrum vrum"
    }

    clearParticleFilter() {
        return "vrum vrum vrum vrum ... now it's clean"
    }
}

class Mobra {
    public id: number =  Math.floor(Math.random()*9999)

    run() {
        return "cri cri ..."
    }
}

function showObject(obj: IVehicle) {
    console.log(`${obj.id} - ${obj.name} - running sound: ${obj.run()}`)
    console.log(`is instance of ElecticVehicle ${obj instanceof ElecticVehicle}`)
    console.log(`is instance of DieselVehicle ${obj instanceof DieselVehicle}`)
    console.log(`is instance of Mobra ${obj instanceof Mobra}`)
}

let a: ElecticVehicle = new ElecticVehicle("Tesla");
showObject(a)

let b: DieselVehicle = new DieselVehicle("Ford");
b.clearParticleFilter()
showObject(b)

let c: ElecticVehicle = new ElecticVehicle();
showObject(c)

let d: IVehicle = { id: 3, name: "Dacia", run: () => "poc poc" }
showObject(d)

let e: Mobra = { id: 99, run: () => "llllllll" }
showObject(e as IVehicle)

let f: IVehicle = {...b, name: "Volvo", run: () => 'vvvvv'} 
showObject(f)

let g: Mobra = { id: 6, run: () => "gg" }
showObject(g as ElecticVehicle)
