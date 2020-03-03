// boki trójkąta
a = 3;
b = 4;
c = 5;
h = 7

// Pole trókąta o bokach ..., ... oraz ... wynosi ... .

let area = () => {
    let p = 0.5 * (a+b+c)
    let S = Math.sqrt(p*(p-a)*(p-b)*(p-c))

    return S;
}

console.log("Zadanie 2")
console.log( `Pole: ${area()}` );
console.log("---------")