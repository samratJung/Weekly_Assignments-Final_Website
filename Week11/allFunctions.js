
//Question1.
let num = 12;
let fname = "Jotaro";
let isIt = true;
var pi = 3.114;
document.write("Q1. Write a program in Javascript to create variables to store numeric, float, string and Boolean values and show them in page with document.write() function.<br/>");
document.write("Ans.<br/>Number = " + num);
document.write("<br/>Float = " + pi);
document.write("<br/>Name = " + fname);
document.write("<br/>Boolean = " + isIt);


//Question2.
fname = prompt("Enter your name: "); //overwriting the variable declared above 
let stdId = parseInt(prompt("Enter your student id number: "));
alert("Hello! "+ fname + ". Id Number: " + stdId);


//Question3.
marksObtained = parseInt(prompt("Enter Marks Obtained: "));
document.write("<br/><br/><br/>Ans 3.");
if(marksObtained >= 80 && marksObtained <=100)
    document.writeln("<br/>"+fname+" got "+ marksObtained+ " marks ,which is Distinction!!");

else if(marksObtained >= 60 && marksObtained<80)
    document.writeln("<br/>"+fname+" got "+ marksObtained+ " marks ,which is First Division!!");

else if(marksObtained >= 50 && marksObtained<60)
    document.writeln("<br/>"+fname+" got "+ marksObtained+ " marks ,which is Second Division!!");

else if(marksObtained >= 40 && marksObtained<50)
    document.writeln("<br/>"+fname+" got "+ marksObtained+ " marks ,which is Third Division!!");

else if(marksObtained <40)
    document.writeln("<br/>"+fname+" got "+ marksObtained+ " marks ,Fail..");


//Question4.
var choice = parseInt(prompt("Enter any number from 1-7: "));
document.write("<br/><br/><br/>Ans 4.");
switch(choice)
{
    case 1:
        document.write("<br/>Sunday!");
        break;
    case 2:
        document.write("<br/>Monday!");
        break;
    case 3:
        document.write("<br/>Tuesday!");
        break;
    case 4:
        document.write("<br/>Wednesday!");
        break;
    case 5:
        document.write("<br/>Thursday!");
        break;
    case 6:
        document.write("<br/>Friday!");
        break;
    case 7:
        document.write("<br/>Saturday!");
        break;
    default:
        document.write("<br/>Invalid Input!");

}


//Question5.
document.write("<br/><br/><br/>Ans 5.<br/>");
let b = ".jpg";
for(a=1;a<5;a++)
{
    let c =a + b;
    document.write("<img src = images/" + c +">");
}



//Question6.
document.write("<br/><br/><br/>Ans 6.");
document.write("<br/>Multiplication Table For 5<br/>");
for(i=1;i<11;i++)
{
    mul = 5* i;
    document.write("<br/>5 * " + i + " = " + mul);
}


//Question7.
document.write("<table border = '1px'><tr><td>Ans 7.</td></tr></table>");
let y =0;
document.write("<table cellspacing = '1px' class = 'tcolr'><tr><td  bgcolor ='#3891a7' >S.N.</td> <td  bgcolor ='#3891a7' > Name </td> <td bgcolor ='#3891a7' >Image</td></tr></table>");
for(x=1;x<5;x++)
{
    rem = x %2;
    y++;
    if(rem ==0)
    {
        document.write("<table cellspacing = '1px'><tr><td  bgcolor ='#e8eef1' >"+y + "</td> <td  bgcolor ='#e8eef1' > Name "+ y+"</td> <td bgcolor ='#e8eef1' >"+y+".jpg</td></tr></table>");
    }

    else
    {
        document.write("<table  cellspacing = '1px'><tr><td bgcolor ='#cedce1' >"+y + "</td> <td  bgcolor ='#cedce1' > Name "+ y+"</td> <td  bgcolor ='#cedce1' >"+y+".jpg</td></tr></table>");
    }
}


//Question8
document.write("<br/><br/><br/>Ans 8.<br/>");
var colorArr = new Array("My" , "Name" , "is" , "Samrat", 8);
document.write(colorArr.toString());
document.write("<br/>"+colorArr.join());
document.write("<br/>"+colorArr.join(' '));
document.write("<br/>"+colorArr.join('+'));


//Question9
document.write("<br/><br/><br/>Ans 9.<br/>");
let arr1 = [1,2,3,4,5,6,7];
let sum = 0;
var mul = 1;
document.write("Array is [ ");
for(i=0;i<arr1.length ;i++){
    sum += arr1[i];
    mul *= arr1[i];
    if(i ==(arr1.length - 1)) document.write(arr1[i] + " ]");
    else document.write(arr1[i] + ", ");
}
document.write("<br/>Sum of array: " + sum + " <br/>Product of array:  "+ mul);


//Question10
document.write("<br/><br/><br/>Ans 10.<br/>");
function valRec(){
    var Rlength = parseInt(prompt("Enter length of rectangle: "));
    var Rbreadth = parseInt(prompt("Enter breadth of rectangle: "));
    rect(Rlength,Rbreadth);
}

function rect(length,breadth){
    var area = length * breadth;
    document.write("<br/>Area of Rectangle: " + area);
}


//Question11.

var x = 0;
var array = Array();

function add_element_to_array()
{
 array[x] = document.getElementById("text1").value;
 alert("Element: " + array[x] + " Added at index " + x);
 x++;
 document.getElementById("text1").value = "";
}

function display_array()
{
   var e = "<hr/>";   
    
   for (var y=0; y<array.length; y++)
   {
     e += "Element " + y + " = " + array[y] + "<br/>";
   }
   document.getElementById("Result").innerHTML = e;
}