//Add an object property using dot or bracket notation

const circle = {}; //empty object
circle.radius = 5; //Creates the key (radius) inside 'circle' and sets its value to 5 using the dot notation
console.log(circle);

//bracket notation
circle["diameter"] = 10;
circle.circumference = circle.diameter * Math.PI;

circle["area"] = Math.PI * circle.radius ** 2;

console.log(circle);

//Modify a property Using dot or bracket notation
//We can update of overwrite existing properties simply by assigning a new value to an existing key
const mondayMenu = {
  cheesePlate: {
    soft: "Chèvre",
    semiSoft: "Gruyère",
    hard: "Manchego",
  },
  fries: "Curly",
  salad: "Cobb",
};
mondayMenu.fries = "Sweet potato";
console.log(mondayMenu);

function destructivelyUpdateObject(obj, key, value) {
  obj[key] = value;
  return obj;
}

tuesdayMenu = destructivelyUpdateObject(mondayMenu, "salad", "Caesar"); //note using this method also updates the mondayMenu
console.log(tuesdayMenu);
console.log(mondayMenu);

//Update an object Nondestructively using the spread operator
function nondestructivelyUpdateObject(obj, key, value) {
  const newObject = { ...obj }; //will create a clone of the original object and save it to a new variable
  newObject[key] = value;
  return newObject;
}

const sundayMenu = nondestructivelyUpdateObject(
  mondayMenu,
  "fries",
  "KFC fries"
);
console.log(sundayMenu);
console.log(mondayMenu.fries);

//Remove a Property from an Object
const wednesdayMenu = {
  cheesePlate: {
    soft: "Brie",
    semiSoft: "Fontina",
    hard: "Provolone",
  },
  fries: "Sweet potato",
  salad: "Southwestern",
};

//to remove the salad:
delete wednesdayMenu.salad;
console.log(wednesdayMenu);

//Relationship between arrays and objects
//Arrays are a special type of objects
console.log(typeof []); //--> object
