class Student
{
    constructor(name , surname )
    {
        this.name = name
        this.surname = surname
    }

    nameAndSurname()
    {
        return ` ${this.name} ${this.surname}`;
    }

    initials()
    {
        return ` ${this.name.charAt(0)}.${this.surname.charAt(0)}.`
    }
}


student = new Student('Jan', 'Nowak')
console.log(student.nameAndSurname())
console.log(student.initials())
student2 = new Student('Tomasz', 'Białek')
console.log(student2.nameAndSurname())
console.log(student2.initials())