let positionLatitude = 10;     
let positionLongitude = 20;    
let addressLatitude = 2;    
let addressLongitude = 2;     
let diffLat = positionLatitude - addressLatitude; 
let diffLong = positionLongitude - addressLongitude; 
let sumOfSquares = (diffLat ** 2) + (diffLong ** 2);
let distance = Math.sqrt(sumOfSquares);
console.log("Рассчитанное расстояние:", distance);
