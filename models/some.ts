import { ISome } from "./some_interface";

export class Some implements ISome {
    public id: number = Math.floor(Math.random() * 999);
    public name: string = "";
    private type: string = typeof(this);

    public sayHello() {
        return `Hello from ${this.name}.`
    }
}
  