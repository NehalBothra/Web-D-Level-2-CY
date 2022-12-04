var age=prompt("Enter your Age")

if(age>0 && age<18){
    document.write("You come under Kids Section")
}
else if(age>18 && age<60){
    document.write("You come under Adults")
}
else{
    document.write("You are Senior citizen")
}