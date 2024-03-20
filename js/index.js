/*alert("Hello world");
console.log("Abdallah");*/

/*var in java script
var name="jhon";
console.log(name);
 name="Ali";
console.log(name);*/

/*var in java script
let age=12;
console.log(age);
 age=65;
console.log(age);*/

/*list in java script
var person=["Jhon",25,"New York"];
console.log(person);
console.log(person[0]);
console.log(person[1]);
person[2]="Amman";
console.log(person);
person=100;
console.log(person);*/


/*obj in java script
var person2={name:"Abdallah",age:15};
console.log(person2)
console.log(person2.age)*/


/*var age=100;
if(age==='100'){

    console.log("is equal")
}
else{
    console.log("is not equal")
}*/

/*
بطبع tage كامل 
var header=document.getElementById('header');
console.log(header);
*/

/*
بطبع محتوى tage
var header=document.getElementById('header');
console.log(header.innerHTML);
*/


/*
بعدل على محتوى tage
var header=document.getElementById('header');
console.log(header.innerHTML);
header.innerHTML='Js edit this contant';*/



/*
طريقه كتابه function مع استدعائه
function myfunction(){
    console.log('hellos world')
}
myfunction()*/


var form=document.getElementById('form');
console.log(form)
 var selectedop=document.getElementById('selectedop');


var navBarbackground=document.getElementsByName('bg-light');
form.addEventListener('submit',function(event){
    event.preventDefault();
 
    var n1=document.getElementById('n1').value;
   var n2=document.getElementById('n2').value;
   var result=document.getElementById('result');
   switch(selectedop.value){
    case'+':
    var sum=parseInt(n1)+ parseInt(n2);
   alert("sumation is: "+sum);
   result.innerHTML=sum; break;

   case '-':
    var sum=parseInt(n1)- parseInt(n2);
   alert("subtraction is: "+sum);
   result.innerHTML=sum; break;
   case '/':
    var sum=parseInt(n1)/parseInt(n2);
   alert("division is: "+sum);
   result.innerHTML=sum; break;
   case '*':
    var sum=parseInt(n1) * parseInt(n2);
   alert("multiplicition is: "+sum);
   result.innerHTML=sum; break;
   }
  

})


