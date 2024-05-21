//Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
var guests = ["Hadia", "Sawera", "Jaweria", "Muntaha"];
guests.forEach(function (guest) { return console.log("I have arranged a dinner ".concat(guest, ",  and i will be very happy if you will join us")); });
