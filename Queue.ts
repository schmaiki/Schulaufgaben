class Queue<T> {
    private queues: T[];

    constructor() {
        this.queues = [];
    }

    add(item: T): void {
        this.queues.push(item);
    }

    get(): T | undefined {
        return this.queues.shift();
    }

    isEmpty(): boolean {
        return this.queues.length === 0;
    }

    length(): number {
        return this.queues.length;
    }

    clear(): void {
        this.queues = [];
    }

    //gibt ein Array zurückzugeben,
    //die das angegebene Objekt darstellt
    toArray(): T[][] {
        return Array(this.queues)
    }

    //gibt eine Zeichenfolge zurückzugeben,
    //die das angegebene Objekt darstellt
    toString(): string {
        return String(this.queues)
    }
}
export {Queue}