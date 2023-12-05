let numbers = [1,2,3,4,5,10,9];
var text = numbers.find(function(value,index,array){
    return value > 5;
})
document.write(text);

class Student{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    test(){
        document.write("hello");
    }
    exampleFunction(){
        let arr = [1,3,4,5];
       /* arr.find(function(){
            this.test();
        },this);*/
        arr.find(()=>{this.test()});
    }
}



let student = new Student("Shohel", 35);

student.exampleFunction();