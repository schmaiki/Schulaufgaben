import { Stack } from './Stack'
import { Zudaten } from './Zudaten'
class Chinabox {
    private zudatenlist: Stack<Zudaten>;

    constructor() {
        this.zudatenlist = new Stack<Zudaten>();
    }

    addZudaten(zudaten: Zudaten): void {
        this.zudatenlist.push(zudaten);
    }

    displayZudaten(): void {
        console.log("Inhalt der Chinabox:");
        while (!this.zudatenlist.isEmpty()) {
            const data = this.zudatenlist.pop();
            console.log(`${data?.name}: ${data?.gewicht}g`);
        }
    }
}

export { Chinabox }


