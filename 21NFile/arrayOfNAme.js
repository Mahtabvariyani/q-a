// write a function to get the names of array

const users = [
  {
    id: 1,
    name: "Mah",
    isActive: true,
  },
  {
    id: 2,
    name: "Sam",
    isActive: false,
  },
  {
    id: 3,
    name: "Nam",
    isActive: true,
  },
];

function getAllNames(users) {
  const arr = [];
  for (let i = 0; i < users.length; i++) {
    console.log(users[i].name);
    arr.push(users[i].name);
  }
  return arr;
}

console.log(getAllNames(users));



//other way of doing it 


//imagine that names are users

const names = [];

users.forEach((users) => {
  names.push(users.name);
});

console.log(names);



//writing the best way is doing the map 


let names2 = []

users.map((user)=> {
    names.push(user.name)
})

console.log(names)







//getting the users name by sorting their name 
users.sort((user1, user2) => (user1.age < user2.age ? 1 : -1));


const namess = []

for(let i = 0; i < users.length; i++){
    if(users[i].isActive){
        namess.push(users[i].name)
    }
}

console.log(namess)


//the better soloution is 

const NAME = users
.sort((users1,users2) => ( users1.age < users2.age ? 1 : -1))
.filter((users) => users.isActive)
.map((user) => user.name)


console.log(NAME)