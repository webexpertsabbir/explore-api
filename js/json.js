const user = {id: 1, name: 'Sabbir Hossen', job: 'Programming'}
// JavaScript Object Notation (JSON)

const stiringify = JSON.stringify(user);
// console.log(user);
// console.log(stiringify);

const shop = {
    name: 'Alia',
    addres:{
        street: 'Kocu khat bhuter bari',
        city: 'ranbir',
        state: 'bd' 
    },
    product:['Laptop', 'Monitor', 'Mic'],
    revance: 5000,
    isOpen: true,
    isOff: false
}
console.log(shop);
const shopJSON = JSON.stringify(shop);
console.log(shopJSON);
const shopReset = JSON.parse(shopJSON);
console.log(shopReset); 

