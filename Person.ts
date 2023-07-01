import {Queue} from './Queue'

class Person {
    private _personlist: Queue<Person>;

    constructor(p: { name: string; gewicht: number }) {
        this._personlist = new Queue<Person>();
    }
}

export {Person}