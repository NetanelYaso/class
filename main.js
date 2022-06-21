// class Student {
//     constructor(name, grade, id){
//        this.name = name;
//        this.grade = grade;
//        this.id = id;
//     }  
// }
// const student1 = new Student("netanel" , 2 ,"209165695");
// const student2 = new Student("yoni", 3, "209165695");
// console.log(student1);
// console.log(student2);

// class User {
//     constructor(firstName, lastName, age, email){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//         this.email = email;
//     }
// }

// const user1 = new User("eldad", "brhano", 23, "eldad@gmail.com");
// const user2 = new User("netanel", "yaso", 22, "netanelyaso12@gmail.com");
// const user3 = new User("yosi", "balacho", 25, "yosi@gmail.com");
// let h1_id = document.getElementById("my_h1");
// const userArray = [user1, user2, user3];
// userArray.forEach((item)=>{
// //     for(let key in item){
//         h1_id.innerHTML += ` ${item[key]}`;
// //     }
// // })

// class Fromuser {
//     constructor(first_name, last_name, user_age){
//         this.first_name = first_name;
//         this.last_name = last_name;
//         this.user_age = user_age;
//     }
// }

// function sendFromUser(){
//     const user1 = new Fromuser(first_name.value, last_name.value, user_age.value);
//     for(let key in user1){
//      table.innerHTML += `<tr> <td> ${user1[key]} </td> </tr>`;
//     }
// }

// class Dog {
//     constructor(name, type, dateofbirth){
//         this.name = name;
//         this.type = type;
//         this.dateofbirth = dateofbirth;
//     }
// }

// const dog1 = new Dog("luky", "pitbul", 2010);
// const dog2 = new Dog("luky", "pitbul", 2010);
// const dog3 = new Dog("luky", "pitbul", 2010);
// const dog4 = new Dog("luky", "pitbul", 2010);
// const dog5 = new Dog("luky", "pitbul", 2010);
// const dogArray = [dog1,dog2,dog3,dog4,dog5];
// dogArray.forEach(item=>{
//     console.log(item);
// })

//  class Teacher {
//     constructor(firstName, lastName, grade, email){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.grade = grade;
//         this.email = email
//     }
// }

// teacherAray = [];
// function sendTeacher(){
//     const teacher1 = new Teacher(firstName.value, lastName.value, grade.value, email.value);
//     const teacher2 = new Teacher(firstName.value, lastName.value, grade.value, email.value);
//     const teacher3 = new Teacher(firstName.value, lastName.value, grade.value, email.value);
//     const teacher4 = new Teacher(firstName.value, lastName.value, grade.value, email.value);
//     firstName.value = "";
//     lastName.value = "";
//     grade.value = "";
//     email.value = "";
//     teacherAray.push(teacher1,teacher2,teacher3,teacher4)
//     teacherAray.forEach(item => {
//         tbody1.innerHTML += 
//         `<tr><td> ${item.firstName}</td> <td> ${item.lastName} </td> <td> ${item.grade} </td> <td> ${item.email} </td></tr> `
//     });
// }


// class Course {
//     constructor(name, isthereteacher, gradelist, studentslist) {
//         this.name = name;
//         this.isthereteacher = isthereteacher;
//         this.gradelist = gradelist;
//         this.studentslist = studentslist;
//     }
// }

// const course = new Course("full stuck", true, [100,95,77,80], ["netanel","asaf","chen","yaso"]);
// for(key in course){
//     h1_id.innerHTML += `${course[key]} <br>`;
// }
// course.studentslist.sort().forEach( student=>{
//     h1_id.innerHTML += `<p>${student} </p>`
// }
// )
// course.gradelist.sort((a,b)=>b-a).forEach( grade=>{
//     h1_id.innerHTML += `<p>${grade} </p>`
// }
// )

// תרגילי הורשה 

class Student{
    myStudent(){
        console.log(this.studentname,this.grade,this.id);
    }
    constructor(studentname, grade, id){
        this.studentname = studentname;
        this.grade = grade;
        this.id = id;
    }
}

const student1 = new Student("netanel",12, "209165695");
const student2 = new Student("yaso",15, "209154859");
console.log(student1);
console.log(student2);

student1.myStudent();

class CollegeStudent extends Student{}
const collegestudent1 = new CollegeStudent("daniel",20,"209165695");
console.log(collegestudent1);

class HighscoolStudent extends Student{
    constructor(studentname, grade, id,city,phonenumber){
        super(studentname, grade, id);
        this.city = city;
        this.phonenumber = phonenumber;
    }
}
const highscoolstudent1 = new CollegeStudent("or",18,"209165695");
console.log(highscoolstudent1);
const highscoolstudent2 = new CollegeStudent("yaso",17,"209165695","jerusalem","0543518991");
console.log(highscoolstudent2);

class MiddleSchoolStudent extends Student{}

const middleschoolstudent1 = new Student("netanel",16, "209165695");
console.log(middleschoolstudent1);
middleschoolstudent1.myStudent()