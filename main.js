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

class Teacher {
    constructor(firstName, lastName, grade, email){
        this.firstName = firstName;
        this.lastName = lastName;
        this.grade = grade;
        this.email = email
    }
}

teacherAray = [];
function sendTeacher(){
    const teacher = new Teacher(firstName.value, lastName.value, grade.value, email.value);
    console.log(teacher);
    firstName.value = "";
    lastName.value = "";
    grade.value = "";
    email.value = "";
    
    if(teacherAray.length == 2){
        teacherAray.forEach(item => {
            for(let key in item){
                table.innerHTML += `<tr> <td> ${item[key]} </td> </tr>`
            }
        });
    }
}
