/*let age = 30;
if(age<=18){
    document.write("not Adult");
}else{
    document.write("adult");
}*/


let country = "Bangladesh is my homeland"

var text1 = country.length;
document.write(text1,"<br/>");
var text2 = country.slice(10,13);
document.write(text2,"<br/>");
var text3 = country.slice(16,25);
document.write(text3,"<br/>");
var text4 = country.slice(10)
document.write(text4,"<br/>");
var text5 = country.slice(-25,-8)
document.write(text5,"<br/>");
var text6 = country.slice(-8);
document.write(text6,"<br/>")

function myFunction(){
    let text = document.getElementById("demo").innerHTML;
    document.getElementById("demo").innerHTML = text.replace(/microsoft/i,"Windows");
}

var text7 = "I love cats. Cats are very easy to love. Cats are very popular";
text7 = text7.replaceAll("Cats", "dogs");
document.write(text7,"<br/>");
var text8 = "I love cats. Cats are very easy to love. Cats are very popular";
var text8 = text8.toUpperCase();
document.write(text8,"<br/>")
var text9 = "I love cats. Cats are very easy to love. Cats are very popular";
text9 = text9.toLowerCase();
document.write(text9,"<br/>");
var text8 = "I love cats. Cats are very easy to love. Cats are very popular";
var text9 = "and cow";

text8 = text8.concat(" ", text9);
document.write(text8,"<br/>");

var text10 = " Md SHohel ";
text10 = text10.trim();
text10 = text10.trimStart();
text10 = text10.trimEnd();
document.write(text10,"<br/>");
/*var text11 = " Md SHohel ";
text11 = text11.charAt(5);
document.write(text11);*/
var text12 = " Md SHohel ";
const myArr = text12.split("");
var text = "";
for(var i=0; i <myArr.length;i++){
    text += myArr[i] + "<br/>"
}

document.getElementById("demo2").innerHTML = text;