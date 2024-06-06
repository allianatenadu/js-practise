class Human {
    constructor (name, age) {
        this.name = name;
        this.age = age;
    }
    story(){
        return this.name + ' ' + "These are Alliana's hobbies";
    }
    talks() { 
        return this.name + ' ' + "speaks French"; 
    } 
    talk() { 
        return this.name + ' ' + "loves to sing"; 
    } 
    tal() { 
        return this.name + ' ' + "loves to draw"; 
    } 
    
}
class Man extends Human {
    constructor (name, age) {
    super (name, age)
    }
  }
  let Man1 = new Man ( "Alliana", 18)
  console.log(Man1.story());
  console.log(Man1.talks());
  console.log(Man1.talk());
  console.log(Man1.tal());
  