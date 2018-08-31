const menu = {
  _courses: {
    _appetizers: [],
    _mains: [],
    _desserts: [],
    get appetizers() {
      return this._appetizers;
    },
    set appetizers(appetizerIn) {
      this._appetizers = appetizerIn;       // SGN : Added setter 
    },
    get mains() {
      return this._mains;
    },
    set mains(mainsIn) {
       this._mains = mainsIn;               // SGN : Added setter 
    },
    get desserts() {
      return this._desserts;
    },
    set desserts(dessertsIn){
        this._desserts = dessertsIn;        // SGN : Added setter 
    },
  },
  get courses() {
    return {
      appetizers: this._courses.appetizers,
      mains: this._courses.mains,
      desserts: this._courses.desserts,
    };
  },

  /*  ==============================================================
    SGN : passed parameters to object
    ==============================================================   */


  addDishToCourse (courseName, dishName, dishPrice) {
     
    const dish = {
      name: dishName,   // SGN : Assigned dishName
      price: dishPrice, // SGN : Assigned dishPrice
    };
    this._courses[courseName].push(dish);
    },

/*  ==============================================================
    SGN : Added parameters for courseName, 
    ==============================================================   */

  getRandomDishFromCourse (courseName) {
    const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex];
  },
  generateRandomMeal() {
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const mains = this.getRandomDishFromCourse('mains');
    const desserts = this.getRandomDishFromCourse('desserts');
    const totalPrice = appetizer.price + mains.price + desserts.price;

    // SGN  Updated ${main.name} to ${mains.name}
    return `Your meal is ${appetizer.name}, ${mains.name}, ${desserts.name}, with a total price of ${totalPrice}.`;
  },
  
};
 
menu.addDishToCourse('appetizers', 'Caprese Salad', 5.00);

menu.addDishToCourse('appetizers', 'cheese curds', 6.00);

menu.addDishToCourse('appetizers', 'Hummus and Dip', 4.25);
 
menu.addDishToCourse('mains', 'Shrimp Flambee', 5.00);
menu.addDishToCourse('mains', 'Chicken Alfredo', 5.00);
menu.addDishToCourse('mains', 'Filet mignon', 5.00);

 
menu.addDishToCourse('desserts', 'Coconut Cake', 6.75);
menu.addDishToCourse('desserts', 'Starburst', 2.00);
menu.addDishToCourse('desserts', 'Chocolate Cake', 8.50);
 
let meal = menu.generateRandomMeal();
console.log(meal);

// No video not yet done.

// Question:

// Meal Maker
// As a frequent diner, you love trying out new restaurants and experimenting with different foods. However, having to figure out what you want to order can be a time-consuming ordeal if the menu is big, and you want an easier way to be able to figure out what you are going to eat.

// In this project, you'll use JavaScript to randomly create a three-course meal based on what is available on a menu. We'll keep running it until we're satisfied with the generated meal!

// Note: codes that are uncommented are hints

// 1.
// Start by creating an empty menu object.

const menu = {

};
// 2.
// Add a _courses property to your menu object and set its value to an empty object. This property will ultimately contain a mapping between each course and the dishes available to order in that course.

const menu = {
    _courses: {}
};
// 3.
// Create three properties inside the _courses object called appetizers, mains, and desserts. Each one of these should initialize to an empty array.

// Here is what you would do for the appetizers, make sure to include the mains and desserts as well.

const menu = {
  _courses: {
    appetizers: [],
    ...
  }
};
// 4.
// Create getter and setter methods for the appetizers, mains, and desserts properties.

const menu = {
  _courses: {
    appetizers: [],
    ...,
  },
  get appetizers() {

  },
  set appetizers(appetizerIn) {

  },
  ...
};

// 5.
// Inside your menu object, create an empty getter method for the _courses property.

const menu = {
  _courses: {},
  get courses() {
    return ...;
  }
};

// 6.
// Inside the courses getter method, return an object that contains key/value pairs for appetizers, mains, and desserts.

// Return an object with properties for appetizers, mains, and desserts. The example below shows how to create an object that contains an array of appetizers.

get courses() {
  return {
  appetizers: this._courses.appetizers,  // this uses the appetizer getter method
  ...
}

// 7.
// Inside the menu object, we are going to create a method called .addDishToCourse() which will be used to add a new dish to the specified course on the menu.

// The method should take in three parameters: the courseName, the dishName , and the dishPrice.

const menu = {
  ...
  addDishToCourse (courseName, ...) {

  }
};

// 8.
// The .addDishToCourse() method should create an object called dish which has a name and price which it gets from the parameters.

// The method should then push this dish object into the appropriate array in your menu's _courses object based on what courseName was passed in.

const menu = {
  ...
  addDishToCourse (courseName, ...) {
    const dish = {
      ...
    };

    this._courses[courseName].push(dish); // also try using your setter method!
  }
};

// 9.
// Now, we're going to need another function which will allow us to get a random dish from a course on the menu, which will be necessary for generating a random meal.

// Create a method inside the menu object called .getRandomDishFromCourse(). It will take in one parameter which is the courseName.

const menu = {
  ...
  getRandomDishFromCourse (...) {

  }
};

// 10.
// There are a few steps in getting the .getRandomDishFromCourse() to work.

// Retrieve the array of the given course's dishes from the menu's _courses object and store in a variable called dishes.
// Generate a random index by multiplying Math.random() by the length of the dishes array (This will guarantee that the random number will be between 0 and the length of the array)
// Round that generated number to a whole number by using Math.floor() on the result.
// Return the dish located at that index in dishes.

const menu = {
  ...
  getRandomDishFromCourse: function (...) {
    const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length);
    // return a dish from `dishes` by using `randomIndex`
  }
};

// 11.
// Now that we have a way to get a random dish from a course, we can create a .generateRandomMeal() function which will automatically generate a three-course meal for us. The function doesn't need to take any parameters.

// The function should create an appetizer variable which should be the result of calling the .getRandomDishFromCourse() method when we pass in an appetizers string to it.
// Create a main variable and dessert variable the same way you created the appetizer variable, but make sure to pass in the right course type.
// Calculates the total price and returns a string that contains the name of each of the dishes and the total price of the meal, formatted as you like.

const menu = {
  ...
  generateRandomMeal: function() {
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const mains = ...
    const desserts = ...
    const totalPrice = appetizer.price + ...

    return `Your meal is ${appetizer.name}, ${main.name}, ... The price is $${totalPrice}.`;
  }
};

// 12.
// Now that we've finished our menu, object, let's use it to create a menu by adding some appetizers, mains, and desserts with the .addDishToCourse() function. Add at least 3 dishes to each course (or more if you like!).

menu.addDishToCourse('appetizers', 'Caesar Salad', 4.25);
...

// 13.
// Once your menu has items inside it, generate a meal by using the .generateRandomMeal() function on your menu, and save it to a variable called meal. Lastly, print out your meal variable to see what meal was generated for you.

let meal = menu.generateRandomMeal();
console.log(meal);