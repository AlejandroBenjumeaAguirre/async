function* gen(){
    yield 1;
    yield 2;
    yield 3;
}


const g = gen().next();

console.log(g);

function* iterate(array) {
    for(let value of array){
        yield value;
    }
}

const it = iterate(['Alejandro', 'Javier', 'Diana', 'Nathalia']);

console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
