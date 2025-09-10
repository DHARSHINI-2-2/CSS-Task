const contact=[
    {
        name: "john",
        phone: "123456789",
        email: "john@gmail.com",
    },
    {
    name: "Bob",
    phone: "9876543210",
    email: "bob@gmail.com",
  }
]
console.log(contact);

//destructuring
let person={
    name: "john",
    email: "john@gmail.com"
}
const {name:firstkey,email:secondkey}=person
console.log(firstkey+":"+secondkey);


//access contact
console.log("dot notation:",contact[0].name);
console.log("bracket notation:",contact[1]['email']);

//iteration
 contact.forEach(element => {
     console.log(`name:${contact.name},phone:${contact.phone},email:${contact.email}`);
 });
