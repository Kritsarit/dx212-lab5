console.log("Hello World")
const score = 78;
let grade = "unknown";

if(score > 90){
     grade = "A";
}else if (score > 80){
    grade = "B"
}else if (score > 70){
    grade = "C";
}else if (score > 60){
    grade ="D"
}else{
    grade = "F"
}
console.log(grade);

const students = ["001","002","003","004","005"];
console.log(students[0]);

for(let i = 0 ; i < students .length ; i ++) {
    console.log(students[i]);
}
let person = { name : 'Peter' , age : 20 , nickname : "gab" , gpa : 3.75};
console.log(person.age);
