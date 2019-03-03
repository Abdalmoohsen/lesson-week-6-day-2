console.log("Works!");
var locations = ['Riyadh', 'Jeddah'];
locations.push("Dammam");
locations.unshift("Abha");




for (let i = 0; i < locations.length; i++){
console.log(locations[i]);
}


function printArray(arr){
for(let i = 0; i < locations.length; i++){
  if (locations[i] == arr){
    console.log("Locations " +i)
  }
}
}
