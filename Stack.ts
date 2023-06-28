/*
Class: Stack<T>
 */
class Stack<T> {
    private stack: T[]
    constructor() {
        this.stack = []
    }

    //Fügt ein Objekt am Anfang des Stack ein.
    //Rückgabewert: void
    push(item: T): void {
        this.stack.push(item)
    }

    //Entfernt das Objekt oben im Stack und gibt es zurück.
    pop(): T | undefined {
        return this.stack.pop()
    }

    //Gibt das oberste Objekt von Stack zurück,
    //ohne es zu entfernen.
    peek(): T | undefined {
        return this.stack[this.stack.length - 1]
    }

    //Gibt einen Boolean zurück, der angibt,
    //ob das Stack aktuelle leer ist.
    isEmpty(): boolean {
        return this.stack.length === 0
    }

    //Gibt die Länge des aktuellen Stack fest.
    length(): number {
        return this.stack.length
    }

    //Entfernt alle Objekte aus dem Stack.
    clear(): void {
        this.stack = []
    }

    //gibt ein Array zurückzugeben,
    //die das angegebene Objekt darstellt
    toArray(): T[][] {
        return Array(this.stack)
    }

    //gibt eine Zeichenfolge zurückzugeben,
    //die das angegebene Objekt darstellt
    toString(): string{
        return String(this.stack)
    }
}
export { Stack };