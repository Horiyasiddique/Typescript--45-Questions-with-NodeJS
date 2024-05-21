// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
//ARRAY OF CURRENT USERS
var current_users = ["Ali", "Taha", "Fatima", "Hoorain", "Aiman"];
//ARRAY OF NEW USERS
var new_users = ["Aliya", "Muntaha", "Ayesha", "Hoorain", "Aiman"];
//LOOPS FOR NEW USERS TO CHECK USERS NAME AVAILIABILITY
new_users.forEach(function (new_one_user) {
    //MAKING A CONDITION FOR USER NAME ALREADY EXIST AND SAVE IN OUR CONDITION VARIABLE
    var our_condition = current_users.some(function (current_one_users) { return current_one_users.toLowerCase() === new_one_user.toLowerCase(); });
    //PRINT THE IF ELSE STATEMENT
    if (our_condition) {
        console.log("Sorry ".concat(new_one_user, " , is already taken"));
    }
    else {
        console.log("This User Name ".concat(new_one_user, " , is availiable"));
    }
});
