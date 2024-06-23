const  students = [
   {
     fullName: {
       firstName: "Alliana",
       lastName:"Tenadu"
    },

    gender: "woman",
    age:18,

    address:{
        loc:"Anyaa",
        city: "Accra"
    }
}
];
students.forEach((student)=> {

const {
    fullName: {firstName, lastName},
    age,
    gender,
} = student;

if (age < 28 ) {
    console.log(`${firstName} is a old ${gender}`);
}else {
    console.log("tested");
}
});



