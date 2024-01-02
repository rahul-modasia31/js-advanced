// Prototype lets us create common methods and properties for a set of objects

const Car = function (model: string) {
  this.model = model;
} as any;

Car.prototype.getModel = function () {
  return this.model;
};

const toyota = new Car("toyota");
console.log(toyota.getModel());

const nissan = new Car("nissan");
console.log(nissan.getModel());

// Prototype defined methods are shared between all instances of the object
console.log(toyota.getModel === nissan.getModel);

export {};
