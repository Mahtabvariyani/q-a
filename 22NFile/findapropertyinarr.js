'use strict'

//check the user with such name exists in array of objects



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


const isNAmeExists = (name,arr) => arr.some((el) => el.name === name)



console.log(isNAmeExists("Nam",users))