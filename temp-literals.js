
const place = "India"
const activity = "visit Taj Mahal"
const hotel = "The Prince"
const companion = "Jeff"


const str = "I want to visit " + place + " and " + activity
+ ". " + "I will stay at " + hotel + " travel with around with " + 
companion + ".";

const tempLit = `I want to visit ${place} and ${activity}.
I will stay at ${hotel} and travel around with ${companion}.`

// Using Concatenation
console.log(str + "\n")
// Using Template Literals
console.log(tempLit)


