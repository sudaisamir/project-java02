// /*// task1
var num1=+prompt("Enter 1st Number:")
var num2=+prompt("Enter 2nd Number:")
sum=num1+num2
sub=num1-num2
mul=num1*num2
mod=num1%num2
document.write(`The Sum of ${num1} and ${num2} is ${sum}`)
document.write(`<br>`)
// task2
document.write(` ${num1} - ${num2} is ${sub}`)
document.write(`<br>`)
document.write(`${num1} * ${num2} is ${mul}`)
document.write(`<br>`)
document.write(`${num1} % ${num2} is ${mod}`) 

// /*// task3
var a
document.write("Value after variable declaration is: ", a)
document.write(`<br>`)
a=5
document.write("Initial Value: ", a)
document.write(`<br>`)
a++
document.write("Value after increment is: ",a)
document.write(`<br>`)
a+=7
document.write("Value after addition is: ",a)
document.write(`<br>`)
a--
document.write("Value after decrement is: ",a)
document.write(`<br>`)
a%=3
document.write("The remainder is: ",a) 

// /*// task4
var TP=+"600"
var not=prompt("Enter Number of tickets")
var TC=TP*not
document.write(`Total cost to buy ${not} tickets to a movie is ${TC} PKR `) 

// /*//task 5
var num=prompt("Enter Number to print table:")
document.write(`Table Of ${num}`)
document.write(`<br>`)
for (let i=1;i<=10;i++){
    document.write(`${num} * ${i} = `,num*i)
    document.write(`<br>`)
}

// /*//task 6
var C=+prompt("Enter temperature in celsius")
var ctf= (C * 9/5) + 32
document.write(`${C} °C is ${ctf} °F`)
document.write(`<br>`)
var F=+prompt("Enter Temperature in Farenheit")
var ctc= (F-32)*5/9
document.write(`${F} °F is ${ctc} °C`) 

//task 7
var item1=+prompt("Price of Item 1 is ")
var quant1=+prompt("Quantity of Item 1 is ")
var item2=+prompt("Price of Item 2 is ")
var quant2=+prompt("Quantity of Item 2 is ")
var sc=+prompt("Enter shipping Charges ")
var totalcost= (item1*quant1)+(item2*quant2)+sc
document.write("Shopping Cart")
document.write(`<br>`)
document.write(`<br>`)
document.write("Price of item 1 is ",item1)
document.write(`<br>`)
document.write("Quantity of item 1 is ",quant1)
document.write(`<br>`)
document.write("Price of item 2 is ",item2)
document.write(`<br>`)
document.write("Quantity of item 1 is ",quant2)
document.write(`<br>`)
document.write("Shipping Charges ",sc)
document.write(`<br>`)
document.write(`<br>`)
document.write("The cost of your order is ",totalcost)

// /*//task 8
var TM=+prompt("Enter Total Marks")
var OM=+prompt("Enter Obtained marks")
var per= (OM/TM)*100
document.write("Mark-Sheet")
document.write(`<br>`)
document.write(`<br>`)
document.write("Total Marks ",TM)
document.write(`<br>`)
document.write("Obtained Marks ",OM)
document.write(`<br>`)
document.write(`<br>`)
document.write("Your Percentage is ",per)

// /*//task 9

var usd=+"10"
var SR=+"25"
var TIP= (usd*104.80)+(SR*28)
document.write("Currency In PKR")
document.write(`<br>`)
document.write(`<br>`)
document.write("Total Currency in PKR: ",TIP)

// /*//task 10
var a=5
var compute=((a+5)*10)/2
document.write(compute)

// /*//task 11
var year="2023"
var by="2003"
var age=year-by
document.write("Your age is either ",age-=1," or ",age+=1) 

// /*// task 12
var rad=+prompt("Enter Radius")
var pie=3.14
document.write("The Geometrizer")
document.write(`<br>`)
document.write(`<br>`)
var circ=2*pie*rad
var area= pie*(rad**2)
document.write("Radius of Cirlce ",rad)
document.write(`<br>`)
document.write("The Circumference is: ",circ)
document.write(`<br>`)
document.write("The area is: ",area)

// /*//task 13
var favsnack=prompt("Enter Favourtie Snack")
var CurAge=+prompt("Enter Current Age")
var  MaxAge=+prompt("Enter Estimated Max Age")
var amtsnack=+prompt("Enter Amount Of snack Per day")
var LTS=((MaxAge-CurAge)*365)*amtsnack
document.write("The Life Time Supply Calculator")
document.write(`<br>`)
document.write(`<br>`)
document.write("Favourite Snack: ",favsnack)
document.write(`<br>`)
document.write("Current Age: ",CurAge)
document.write(`<br>`)
document.write("Estimated Maximum Age: ",MaxAge)
document.write(`<br>`)
document.write("Amount of Snacks Per day: ",amtsnack)
document.write(`<br>`)
document.write(`You will need ${LTS} ${favsnack} to last you until the ripe old age of ${MaxAge}`)