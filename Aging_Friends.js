

var myStrings = "Xola is 23, Peter is 18, Oya is 29, Ellie is 20, Sive is 27";

//spliting myStrings first automatically goes to array also
var strings = myStrings.split(",");
 //console.log the string
    console.log(myStrings);

var fixedStrngs = myStrings
.replace(/is/g, ":");
console.log(fixedStrngs);

 secondString = [];

 strings.forEach(function(names){
   secondString.push(names.split("is"));

});
// creating empty array to store the younger age
var age = [];
// looping through my array and finding out age less than ellies
secondString.forEach(function (a){
  if(a[1]<20){
    // then push it to my empty array
  age.push({name:a[0], age:Number(a[1])})
}
});
// console.log out my strings without "is"
console.log(secondString);
//then console.log out that youngest person with name and age
console.log(age);
