const myData=[
    {
        name:"dharshini",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlwBZHYrWDtR9jrrVLGtA3EAW-r2u3qXZvPg&s",
    },
    {
        name:"harini",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlwBZHYrWDtR9jrrVLGtA3EAW-r2u3qXZvPg&s",
    },
    {
        name:"hari",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlwBZHYrWDtR9jrrVLGtA3EAW-r2u3qXZvPg&s",
    }
]

const con= document.getElementById("container");
for(i=0;i<myData.length;i++)
{
    con.innerHTML+=`
    <div class='card'>
    <img src=${myData[i].image} height="100px">
    <p>${myData[i].name}</p>
    </div>`
}




fetch('https://fakestoreapi.com/products')
.then(res=>
    res.json()
    )            
.then((data)=>{
    for(let i=0;i<data.length;i++)
    {
        con.innerHTML+=`
        <div class='card'>
        <img src=${data[i].image} height="100px" /> 
        </div>`
    }
})
