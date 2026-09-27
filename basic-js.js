let name  ="Peter"
let age = 20;
let graduated = true;
let gpa = 3.75;

let student1 = {
    name : "Manee",
    age : 19,
    graduated : false,
    gpa : 2.65
};

let student2 ={
    name : name,
    age : age,
    graduated : graduated,
    gpa : gpa
};

console.log(student1);
console.log(student2);

let grade = ["a","b","c","d","f"];
let scores = [90,80,70,60,50]
let students = [student1, student2];

console.log(students[1].gpa);
function calculategrade(score) {
    if (score >= 90) {
        return "a";
    } else if (score >= 80) {
        return "b";
    } else if ( score >= 70) {
        return "c";
    } else {
        return "f";
    
    }
}

console.log(calculategrade(85));

for (let i = 0; i < scores.length; i++) {
    let grade = calculategrade(scores[i]);
    console.log('Score: ${scores[i]}, Grade: ${grade}');
}
