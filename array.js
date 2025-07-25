let arr=new Array(1,2,3,"four");
console.log(arr[3]);

// let arr2=new Array["js",true,false];
// //array destructuring
// const [name,b1,b2]=arr2;
// console.log(name);


//filter operation:
let students=[
    {name:"john", grade:"A"},
    {name:"joe",grade:"B"},
    {name:"bob",grade:"A"}
]
let gradestudents=students.filter(students => students.grade==="A")
console.log(gradestudents);


//splice method:
let names=["asha","bala","charan"];
names.splice(1,1,"david");
console.log(names);
