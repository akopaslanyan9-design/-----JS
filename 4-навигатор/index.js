let addressLat = 10;      //positionLatitude 	 Широта текущего положения 
let addressLong  = 20;    // positionLongitude 	 Долгота текущего положения 
let addressLatitude = 2;  // addressLatitude 	 Широта пункта назначения 
let addressLongitude = 5; // addressLongitude 	 Долгота пункта назначения 
let Latitude = (addressLat ** 2) + (addressLatitude ** 2);
let result = Math.sqrt(Latitude);
let Longitude = (addressLong ** 2) + (addressLongitude ** 2);
let result2 = Math.sqrt(Longitude);
console.log(result);
console.log(result2);

