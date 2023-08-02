let student1 = {name:'ange' , age:12 , subject: 'math'};
let student2 = {name:'anne' , age:14 , subject: 'english'};
let student3 = {name:'ariane' , age:16 , subject: 'physics'};

const students = new WeakSet([student1,student2,student3]);
console.log(students)