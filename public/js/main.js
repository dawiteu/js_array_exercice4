let cars = ['Audi', 'Bmw', 'Merco']; 

cars.forEach(function(c){ console.log(c); });

console.log("-------");

cars.push("DawiT"); 

cars.forEach(function(c){ console.log(c); });
console.log("-------");


index = 2; 

let changeto = "Mercedes"; 

cars[index] = cars[index].replace(cars[index], changeto);

cars.forEach(function(c){ console.log(c); });
console.log("-------");

