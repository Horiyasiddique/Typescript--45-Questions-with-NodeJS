// //Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.



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

//actual beginning of question number 17

//print a new message of sorry 
console.log("sorry guys !!! new dinner table won’t arrive in time for the dinner, and I have space for only two guests. ")

//while loop used for removing guests
while(guestList.length > 2 ){
    
let removeGuest = guestList.pop()
console.log(`Sorry! ${removeGuest} , I can't invite you to dinner tonight`)
}

//print a message to last 2 persons that they are luckily still invited
guestList.forEach(oneGuest => console.log(`Asslam o Alaikum ${oneGuest} but you are still invited`)) ;

//removing last 2 elements from athe array to get an empty array
guestList.pop()
guestList.pop()

console.log("empty array" , guestList);

