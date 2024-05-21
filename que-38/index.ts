// Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.


//Mkaing function
function describe_city(city : string = "" , country : string = "Pkaistan"){
    console.log(`${city} is in ${country}`)
}

//calling function with city karachi and default message
describe_city("Karachi")

//calling function with city new delhi and different country(India)
describe_city("New delhi" , "India")

//calling function with city London with different country (United Kingdom)
describe_city("London" , "United Kingdom")

//calling function with city Dhaka with different country (Bangladesh)
describe_city("Dhaka" , "Bangladesh")