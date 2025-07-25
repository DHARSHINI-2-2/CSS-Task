let details={
    name:"js",
    totalmark:100,
    subject:{        //nested object: object inside another object
        dbms:100,        //(subject oblect inside details oblect)
        java:100,
    },
    sum:function(){
        let total=this.subject.dbms+this.subject.java;
        return total;
    }
}
console.log(details.name);
console.log(details["totalmark"]);
console.log(details.subject.dbms);  //printing nested object
console.log(details.subject["java"]);
console.log(details.sum());

//object destructing
let person={
    job:"developer",
    salary:50000
}
const {job,salary}=person
console.log(job+" "+salary);

const {job:firstkey,salary:secondkey}=person
console.log(firstkey+" "+secondkey);