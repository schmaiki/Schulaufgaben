//import { Stack } from './Stack'
//import {Chinabox} from './Chinabox'
// import {Queue} from './Queue'
// import {Person} from "./Person";

// const numberStack = new Stack<number>()
// numberStack.push(1)
// numberStack.push(2)
// numberStack.push(3)
// console.log(numberStack.peek()) // 3
// console.log(numberStack.pop()) // 3
// console.log(numberStack.pop()) // 2
// console.log(numberStack.length()) // 1
// console.log(numberStack.isEmpty()) // false
// numberStack.clear()
// console.log(numberStack.isEmpty()) // true
//
// const stringStack = new Stack<string>()
// stringStack.push("1")
// stringStack.push("2")
// stringStack.push("3")
// console.log(stringStack.peek()) // 3
// console.log(stringStack.pop()) // 3
// console.log(stringStack.pop()) // 2
// console.log(stringStack.length()) // 1
// console.log(stringStack.isEmpty()) // false
// stringStack.clear()
// console.log(stringStack.isEmpty()) // true
//
// const stack = new Stack<number|string>()
// stack.push("1")
// stack.push(1)
// console.log(stack.toArray()) //['1',1]
// console.log(stack.toString()) // 1,1

// const box = new Chinabox()
// box.addZudaten({name: "Nudeln", gewicht: 80})
// box.addZudaten({name: "Sojasprossen", gewicht: 10})
// box.addZudaten({name: "Souce", gewicht: 5})
// box.addZudaten({name: "Hühnchen", gewicht: 15})
// box.displayZudaten()

// const queue = new Queue<Person>()
// queue.add(new Person({name: 'Maik', gewicht: 100}))
// queue.add(new Person({name: 'Maiki', gewicht: 90}))
// console.log(queue.length())
// console.log("Eine Person steigt aus")
// queue.get()
// console.log(queue.length())
// console.log("Eine Person steigt aus")
// queue.get()
// console.log(queue.length())
// queue.get()
// if (queue.isEmpty()) {
//     console.log('Der Fahrstuhl ist leer!')
// }

import {Verschluesselung} from './Verschluesselung'

const myEncryption = new Verschluesselung('mypassword', 'mysecretsalt');
const encryptedData = myEncryption.encrypt('Hallo Welt');
console.log('Verschlüsselte Daten:', encryptedData);

const decryptedData = myEncryption.decrypt(encryptedData);
console.log('Entschlüsselte Daten:', decryptedData);