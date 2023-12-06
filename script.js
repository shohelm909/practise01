var country = "Bangladesh is my country";

country = country.length;
document.write(country)
var country2 = "Bangladesh is my country";
var country1 = country2.slice(10,24);
country1 = country2.slice(0,10);
country1 = country2.slice(-24,-7);
document.write(country1)

function myFunction(){
    let text = document.getElementById("demo").innerHTML;
    document.getElementById("demo").innerHTML = text.replace(/microsoft/i,"windows");
}

var cats = "i love dogs.not cat. cat is not my favourite";
var newCats = cats.replaceAll("cat","dogs");
document.write(newCats);

var cats = "i love dogs.not cat. cat is not my favourite";
cats = cats.toUpperCase();
document.write(cats);
var cats = "i love dogs.not cat. cat is not my favourite";
cats = cats.toLowerCase();
document.write(cats);

var cats = "Hello world  ";
var cats1 = cats.trim();

document.write(`lenght of cats: ${cats.length}, <br/> length of cats1 : ${cats1.length}<br/>`);
cats1 = cats.trimEnd();
document.write(`lenght of cats: ${cats.length}, <br/> lenght of cats1:${cats1.length}<br/>`);
cats1 = cats.trimStart();
document.write(`length of cats: ${cats.length},<br/> lenght of cats1: ${cats1.length},<br/>`)
var cats= "my name is Shohel";
var cats3 = "Hello world  ";
cats1 = cats.charAt(5);
document.write(cats1,"<br/>")
var newCats = cats3.concat(cats);
document.write(" ", newCats, "<br/>");
var cats= "my name is Shohel";

var newCats = cats.split(" ");
var text = " ";
for (var i=0;i<newCats.length;i++){
    text += newCats[i] + "<br/>"
}

document.write(text);
