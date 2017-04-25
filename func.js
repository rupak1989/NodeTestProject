function duplicateCharacters(str) {
    //Create an empty object
    var hashTable = {};

    for(var i = 0; i < str.length; i++){
        //Check if the character has already been registered
        //If false, register it and link a 1 to it
        //If true, increment the integer linked to it
        if (hashTable.hasOwnProperty(str[i]))
            hashTable[str[i].toString()]++; 
        else
            hashTable[str[i].toString()] = 1;
    }
    var output = "";
    //Go through the hashTable
    for(var key in hashTable) {
        //Concatenate the key
        output += key.toString();
        //If the character only appeared once, do not add it
        if(hashTable[key] != 1)
            output += hashTable[key].toString()
    }
	console.log(output);
    return output;
}
duplicateCharacters('aaabcccdeffaaa');
/*
// Variable Declaration with Source text
var sourceText="aaabcccdeffa";
var resultText="";
// Splitting the source text to array
var sourceTextArray=sourceText.split("");
var uniqueText = [];
//Fetches Unique text from sourceTextArray in order
$.each(sourceTextArray, function(i, el){
    if($.inArray(el, uniqueText) === -1) uniqueText.push(el);
});
//Iteration with unique text array 
$.each(uniqueText, function(i, el){
//Regular Expression approach to calculate frequency of character with source text
resultText+=(sourceText.match(new RegExp(el, "g")) || []).length>1?el+(sourceText.match(new RegExp(el, "g")) || []).length:el;
});

console.log(resultText);
*/

/* //remove dublicarte character
function find_unique_characters(str) {
  var unique = '';
  for (var i = 0; i < str.length; i++) {
    if (str.lastIndexOf(str[i]) == str.indexOf(str[i])) {
      unique += str[i];
    }
  }
  return unique;
}

console.log(find_unique_characters('baraban'));
console.log(find_unique_characters('anaconda'));
*/

/* //get unique character
function find_unique_characters( string ){
    var unique='';
    for(var i=0; i<string.length; i++){
        if(unique.indexOf(string[i])==-1){
	console.log(unique.indexOf(string[i]));
            unique += string[i];
        } else {
	console.log('AAAAAAAA',unique.indexOf(string[i]));
	}
    }
    return unique;
}
console.log(find_unique_characters('baraban'));
*/
/*
function stringParse(string){
  var arr = string.split("");
  for(var i = 0; i<arr.length; i++){
    var letterToCompare = arr[i];
    var j= i+1;
    if(letterToCompare === arr[j]){
      console.log('duplicate found');
      console.log(letterToCompare);
    }    
  }  
}

stringParse('ssadasdasdsad');
*/
/* function test() {
    var stringToTest = 'find the first duplicate character in the string';
    var a = stringToTest.split(''), getDub = [], noDub = false;
console.log(a);
    for (var i=0; i<a.length; i++) {
        var letterToCompare = a[i];
        for (var j=i+1; j<a.length; j++) {
            if (letterToCompare !== a[j]) {
                console.log('first Duplicate found');
                console.log(letterToCompare);
                //return false;
		getDub.push(letterToCompare);
            }
        }
    }
	console.log(getDub);
}
test()

*/
