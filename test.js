
var var1 = 10;
var var2 = 20;
var1 = var1 + var2;
var2 = var1 - var2;
/*var1 = var1 - var2;
document.write(var2);

if (var1 > var2)
{
	document.write("This is true ");
}
else 
{
	document.write("This is false ");
}
function sum(a,b)
{
	return a+b;
}
var result = sum(8,10);
document.write(result);
for(i=0; i<10; i++)
{
	console.log(i);
}
var string = "Hello JS World ";
var str = string.slice(2,10);
console.log(str);

var tags = " meat , vegs, milk , hate , love , corn ";
tags.split(",");
console.log(tags);

//making class  
var myCar = new Object();
myCar.maxSpeed = 100;
myCar.driver="Affan";
myCar.driving = function()
{
	console.log(myCar.driver + " is driving at speed of " + myCar.maxSpeed);
};

myCar.driving();
//making class with alternative way 
var car2 = { 
				maxSpeed: 120 , 
				driver: "Ertugrul", 
				driving: function()
				{
					console.log(this.driver + " is driving at speed of " + this.maxSpeed)
				} 
			};


car2.driving();

// Constructor 
var Car = function(maxSpeed, driver)
{
	this.driver = driver;
	this.maxSpeed=maxSpeed;
	this.drive = function()
	{
		console.log(this.driver + " is Driving at speed of " + this.maxSpeed);
	};
}
 // we can only make objects of constructor in javaScript 
 var car1 = new Car ( 100 , " turgut ");
 var car2 = new Car ( 110 , " bamsi ");
 var car3 = new Car ( 120 , " talha ");
 var car4 = new Car ( 150 , " Ertugrul ");

 car1.drive();
 car2.drive();
 car3.drive();
 car4.drive();
*/

var content =document.getElementsById("content");
var button = document.getElementsById("show");

button.onclick = function()
{
	if( content.className == "open")
	{
		// shrink the box 
		content.className = "";
		button.innerHTML = "Show More";
	}
	else
	{
		//expand the box 
		content.className = "open";
		button.innerHTML = "Show Less";		
	}
};
var color = document.getElementById("content");
colors=["blue", "green", "pink", "red"];
counter=0;
colorChange =function()
{
	if (counter >= colors.lenght)
	{
		counter=0;
	}
	color.style.background=colors[counter];
	counter++;
}
setInterval(colorChange,500);