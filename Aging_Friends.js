

var myStrings = "Xola is 23, Peter is 18, Oya is 29, Ellie is 20, Sive is 27";

//spliting myStrings first automatically goes to array also
var strings = myStrings.split(",");


    console.log(myStrings);

var fixedStrngs = myStrings
.replace(/is/g, ":");
console.log(fixedStrngs);

 secondString = [];

 strings.forEach(function(names){
   secondString.push(names.split("is"));

});
console.log(secondString);
