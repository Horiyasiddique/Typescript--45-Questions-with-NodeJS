// //More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.

// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.

//creating a guest array
let guestList = ["Sadia" , "Fatima" , "Jaweria" , "Maheen"]

//making variable for those who can't come 
 let dontCome = guestList[0]

// print the name of guest who can't come
 console.log(dontCome , "she can't come due to some emergency")

//replce the name of absent person with another person
 guestList.splice(0,1,"Rimsha")

 //print the message
 console.log("We have found a bigger table for dinner")

 // add a person's name at start of an array
 guestList.unshift("Alia");

 //add a person's name at the end of an array
 guestList.push("Rabia");

 //math.floor function is used for round about the value
let middleIndex : number = Math.floor( guestList.length / 2);


 //add a person's name at the middle of an array
 guestList.splice(middleIndex ,0 , "Zimal");

 //print message to the updated list
 guestList.forEach(oneGuest => console.log(`Asslam o Alaikum ${oneGuest} I have found a bigger table for dinner would you like to join me ????`));


