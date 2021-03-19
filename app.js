const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: [],
   },
   get appetizers(){
     return this._courses.appetizers; 
   },
   set appetizers(appetizers){
     this._cources.appetizers = appetizers;
   },
    get mains(){
      return this._courses.mains;
   },
   set mains(mains){
     this._cources.mains = mains;
   },
    get desserts(){
      return this._cources.desserts;
   },
   set desserts(desserts){
     this._courses.deserts = desserts;
   },
   get courses() {
     return {
       appetizers: this.appetizers,
       mains: this.mains,
       desserts: this.desserts,
     };
   },
   addDishToCourse(courseName, dishName, dishPrice) {
     const dish = {
       name: dishName,
       price: dishPrice,
     };
     return this._courses[courseName].push(dish);
   },
   getRandomDishFromCourse(courseName) {
     const dishes = this._courses[courseName];
     const randomIndex = Math.floor(Math.random() * dishes.length);
     return dishes[randomIndex];
   },
   generateRandomMeal() {
     const appetizer = this.getRandomDishFromCourse('appetizers');
     const mains = this.getRandomDishFromCourse('mains');
     const desserts = this.getRandomDishFromCourse('desserts');
     const totalPrice = appetizer.price + mains.price + desserts.price;
     return `Tonight's special is ${appetizer.name}, ${mains.name}, and ${desserts.name} for $${totalPrice}.`
   }
};
menu.addDishToCourse('appetizers', 'Caprese Salad', 7);
menu.addDishToCourse('appetizers', 'Butternut Squash Ravioli', 10);
menu.addDishToCourse('appetizers', 'Bruschetta', 7);
menu.addDishToCourse('mains', '8 oz. Sirloin', 20);
menu.addDishToCourse('mains', 'Cajun Calamari', 18);
menu.addDishToCourse('mains', 'Creamy Tomato Pasta', 12);
menu.addDishToCourse('desserts', 'Icecream Sandwich', 5);
menu.addDishToCourse('desserts', 'Portuguese Tarts', 7);
menu.addDishToCourse('desserts', 'Baklava', 6);

let meal = menu.generateRandomMeal();
console.log(meal);
