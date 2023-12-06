var arr =[1,2,3,4,5,10,8];
document.write(arr,"<br/>")
var newArr = arr.length;
document.write(newArr, "<br/>");
newArr = arr.toString()
document.write(newArr,"<br/>");
newArr = arr.pop();
document.write(newArr,"<br/>");
document.write(arr.pop(),"<br/>");
document.getElementById("demo").innerHTML = arr.pop();

var fruits = ["banna","orange","Apple","Jackfruit"];
document.write(fruits.pop(),"<br/>")
document.write(fruits,"<br/>")
document.write(fruits.push("dragonfruits"),"<br/>");
document.write(fruits,"<br/>");
 var fruits1 = fruits.shift();
 document.write(fruits1,"<br/>");
 document.write(fruits,"<br/>")
 fruits1= fruits.unshift("Goava");
 document.write(fruits,"<br/>")
 fruits[2] = "not fruit";
 document.write(fruits,"<br/>");
 fruits[fruits.length] = "another fruits";
 document.write(fruits,"<br/>")

 //array elements can be deleted using the javascript operator delete.
 //using delete leaves undefined holes in the array

 var fruits = ["Banana", "Orange", "Apple", "Mango"];

 document.getElementById("demo2").innerHTML = "the first fruit in : " + fruits[0];
 fruits1 = delete fruits[0];
 document.getElementById("demo3").innerHTML = "the seco fruit is : " + fruits[0];

var fruits = ["Banana", "Orange", "Apple", "Mango"];
var fruits1 = ["jackfruit", "coconut"];
document.write(fruits.concat(fruits1),"<br/>")
var newFruits = fruits1.concat(fruits);
document.write(newFruits.toString(),"<br/>") 

//Flattering an array is the process of reducing the dimensionality of an array
//the flat() method creates a new array with sub-array elements concatenated to a specified depth

var myArr =[[1,2],[3,4],[5,6],[7,8]];
var newArr = myArr.flat();
document.write(newArr,"<br/>")


//(Javascript Array Splice())  the first parameter difines the position where new element should be added(spliced in)
//the second parameter defines how many elements should be removed

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(0,0, "lemon", "Kiwi");
document.write(fruits,"<br/>");

//the splice() method returns an array with the deleted items
let remove = fruits.splice(1,2);
document.write(remove,"<br/>")


//(JavaScript Array Slice()) the slice() method slices out a piece of an array into a new array
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits = fruits.slice(0,2);
document.write(fruits,"<br/>")