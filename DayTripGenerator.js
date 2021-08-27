let locations = ['Florida', 'Texas', 'Montana', 'Arizona']
const randomLocation = locations[Math.floor(Math.random() * locations.length)];
console.log(randomLocation);

let resturants = ['Texas Road House', 'Buffalo Wild Wings', 'Culvers', 'Jimmy Johns'];
const randomResturant = resturants[Math.floor(Math.random() * resturants.length)];
console.log(randomResturant);

let transportation = ['Amtrak', 'Airplane', 'Car', 'RV'];
const randomRide = transportation[Math.floor(Math.random() * transportation.length)];
console.log(randomRide);

let entertainment = ['Beach', 'Hiking', 'Museum', 'Baseball Game'];
const randomFun = entertainment[Math.floor(Math.random() * entertainment.length)];
console.log(randomFun);

prompt("Does this vacation sound good to you?");