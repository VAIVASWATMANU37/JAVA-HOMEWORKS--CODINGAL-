class Student { 
    constructor(name) { 
        this.studentName = name; 
    } 

    static hello() { 
        return "hello"; 
    } 

    present() { 
        return 'My name is ' + this.studentName; 
    } 
}

class Grade extends Student { 
    constructor(name, grade) { 
        super(name); 
        this.studentGrade = grade; 
    } 

    show() { 
        return this.present() + ', from ' + this.studentGrade; 
    } 
}


let myStudent = new Grade("TEJAS", "grade 2");

console.log(myStudent.show()); 