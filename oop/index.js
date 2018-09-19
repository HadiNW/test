class User {
    constructor(id, name, age, address, gender){
        this.id = id;
        this.name = name;
        this.age = age;
        this.address = address;
        this.gender = gender;
    }
    greet(){
        console.log('Halo! Saya salah satu member Hacktiv8!')
    }
}

class Student extends User {
    constructor(id, name, age, address, gender, pahse){
        super(id, name, age, address, gender);
        this.pahse = pahse;
        this.role = 'Student'
    }

    greet(){
        super.greet();
        console.log('Saya sedang belajar programming disini!')
    }
}


class Manager extends User {
    constructor(id, name, age, address, gender, salary){
        super(id, name, age, address, gender);
        this.salary = salary;
        this.role = 'Manager'
    }

    greet(){
        super.greet();
        console.log('Saya adalah seorang manager!')
    }
}

class Instructor extends User {
    constructor(id, name, age, address, gender, salary){
        super(id, name, age, address, gender);
        this.salary = salary;
        this.role = 'Instructor'
    }

    greet(){
        super.greet();
        console.log('Saya adalah seorang instruktur!')
    }
}


// let a = new Manager('1','hadi', 22, 'aaa', 'male', 1000)
// console.log(a.greet())

class Company {
    constructor(CompanyName, limit, people, loggedInUser){
        this.CompanyName = CompanyName;
        this.limit = limit;
        this.people = people;
        this.loggedInUser = loggedInUser;
    }
    
    login(user){
        let users = this.people;
        let userFound = null
        for (let i = 0; i < users.length; i++){
            if (users[i].name === user){
                userFound = user
                this.loggedInUser = users[i] 
            }
        }
        if (userFound){
            console.log(`welcome ${userFound}`)
           
        }else{
            console.log("You're not a member of Hacktiv8!")
        }
    }

    showSalaries(){
      if (this.loggedInUser.role === 'Manager'){
          for(let i = 0; i < this.people.length; i++) {
              if (this.people[i].role !== 'Student'){
                console.log(`name: ${this.people[i].name} salary: ${this.people[i].salary}`)
              }
             
          }
      }else{
          console.log("You don't have permission to access this feature!")
      }
    }

    get mySalary(){
        if (this.loggedInUser.role === "Student"){
            return "You don't have a salary yet"
        }else{
            return `Your salary is ${this.loggedInUser.salary}`
        }
    }

    showPeople(){
        let manager = []
        let instructor = []
        let student = []

        for (let i = 0; i < this.people.length; i++) {
            if (this.people[i].role === "Manager"){
                manager.push(this.people[i])
            }
            if (this.people[i].role === "Student"){
                student.push(this.people[i])
            }
            if (this.people[i].role === "Instructor"){
                instructor.push(this.people[i])
            }
        }

        let obj = {
            Instructors : instructor,
            Managers : manager,
            Students : student
        }
           console.log(obj)
    }
}

let JohnKosasih =  new Manager(1, 'John Kosasih', 15, 'mars', 'male', 100)
let MarryKosasih = new Instructor(2, 'Marry Kosasih', 16, 'pluto', 'female', 200)
let KirryKosasih = new Instructor(3, 'Kirry Kosasih', 17, 'saturnus', 'male', 300)
let KurryKosasih = new Student(4, 'Kurry Kosasih', 27, 'pluto', 'male', 1)

let hacktiv8 = new Company('hacktiv8', 10, [JohnKosasih, MarryKosasih, KirryKosasih, KurryKosasih], null)
// console.log(hacktiv8.people)
hacktiv8.login('Kurry Kosasih')
// console.log(hacktiv8.loggedInUser)
hacktiv8.showSalaries()
console.log(hacktiv8.mySalary)
hacktiv8.showPeople()
