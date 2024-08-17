const numbers = [5, 12, 18, 25, 30, 15];
const firstGreaterThan20 = numbers.find(num => num > 20);
console.log(firstGreaterThan20);



const number = [5, 12, 18, 25, 30, 15];
const firstlessThan20 = number.find(num => num < 20);
console.log(firstlessThan20);



const data = [
    { id: 1, name: 'a' },
    { id: 2, name: 'b' },
    { id: 3, name: 'c' },
    { id: 4, name: 'd' },
    { id: 5, name: 'e' },
];
const ri = Math.floor(Math.random() * data.length);
const rid = data[ri].id;
const f = data.filter(item => item.id === rid);
console.log('random id:', rid);
console.log('filtered data:', f);




const num = [90, 89, 56, 45];
const oddEven = num.map(n => n % 2 === 0 ? 'even' : 'odd');
console.log(oddEven);




class book {
    constructor(typeofbook, numpages, pagetype, author) {
        this.typeofbook = typeofbook;
        this.numpages = numpages;
        this.pagetype = pagetype;
        this.author = author;
    }
    getbookinfo() {
        return 'this is a ', this.typeofbook, ' book with ', this.numpages, this.pagetype, ' pages written by ', this.author;
    }
}
const book1 = new book('fiction', 250, 'paper', 'j.k.rowling');
console.log(book1.getbookinfo());




class Animal {
    constructor(name, gender) {
        this.name = name;
        this.gender = gender;
        this.disease = null;
    }
    walk() {
        console.log(this.name, 'is walking.');
    }
    eat() {
        console.log(this.name, ' is eating.');
    }
    climb() {
        console.log(this.name, 'is climbing.');
    }
    getDisease() {
        return this.disease;
    }
    setDisease(disease) {
        this.disease = disease;
    }
}
const animal = new Animal('Simba', 'Male');
animal.walk();
animal.eat();
animal.climb();
console.log('Name:', animal.name);
console.log('Gender:', animal.gender);
console.log('Disease:', animal.getDisease());
animal.setDisease('Flu');
console.log('Disease:', animal.getDisease());