class Student{
    constructor(id, name){
        this.id = id;
        this.name = name;
        this.school = 'Shayestaganj High School';
    }
}
const student1 = new Student(09,'Junaed');
const student2 = new Student(10, 'Bappy Rehman');
console.log(student1, student2);
console.log(student1.name, student2.name);