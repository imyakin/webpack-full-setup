import './styles/index.scss'

const obj = {
    a: 'smth',
    b: 10
}

const obj2 = {
    ...obj,
    c: 10
}

console.log(obj);
console.log(obj2);
