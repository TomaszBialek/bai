names = ['Piotr', 'Anna', 'Michał', 'Paulina', 'Mateusz', 'Magda'];

class Students {
    constructor(names) {
        this.names = names
    }

    startWith(letter){
        let result = new Students([...this.names.filter(element => element.charAt(0) === letter)])

        return result
    }

    sort() {
        let result = new Students([...this.names].sort())
        return result
    }

    get() {
        return new Students([...this.names])
    }

    getFirst(n) {
        let result = new Students([])

        for(let i = 0; i < n; i++){
            result.names.push(this.names[i])
        }

        return result
    }
}

students = new Students(names);
console.log(students.get());
console.log(students.sort());
console.log(students.startWith('P'));
console.log(students.startWith('M').sort());
console.log(students.sort().getFirst(4));
console.log(students.startWith('M').sort().getFirst(2));
console.log(students.get());



