class Shape2 {
  #shapeName;
  constructor() {}
  set shapeName(shapeName) {
    this.#shapeName = shapeName;
  }
  get shapeName() {
    return this.#shapeName;
  }
  area() {
    throw new Error("Abstract Method has no implementation");
  }
  environment() {
    throw new Error("Abstract Method has no implementation");
  }
}

class Polygon2 extends Shape2 {
  #width;
  #height;

  constructor(shapeName) {
    super(shapeName);
  }

  set width(width) {
    this.#width = Number(width);
  }
  get width() {
    return this.#width;
  }
  set height(height) {
    this.#height = Number(height);
  }
  get height() {
    return (this.#height = height);
  }
  area() {
    return this.#height * this.#width;
  }
  environment() {
    return this.#height * 2 + this.#width * 2;
  }
}

class NonPolygon2 extends Shape2 {
  #radius;
  set radius(radius) {
    this.#radius = Number(radius);
  }

  get radius() {
    return this.#radius;
  }

  environment() {
    return 2 * Math.PI * this.#radius;
  }

  area() {
    return (Math.PI * this.#radius*this.#radius);
  }
}

class Rectangle2 extends Polygon2 {
  constructor(width, height) {
    super(width, height);
  }
}

class Square2 extends Polygon2 {
    constructor(width, height) {
        super(width, height);
      }
}
class Circle2 extends NonPolygon2 {
  constructor(radius) {
    super(radius);
  }
}

class Cylindrical2 extends Circle2 {
  #height;
constructor(radius){
    super(radius)
}
  set height(height) {
    this.#height =Number(height);
  }
  get height() {
    return this.#height;
  }

  environment() {
    return 2*Math.PI*this.radius*this.#height
  }
  area() {
    return (
      2 * Math.PI * this.radius * this.#height +
      2 * Math.PI * (this.radius * this.radius)
    );
  }
}

function calculate() {
  var selectedShape = document.getElementById("shapes").value;

  var p = 0;
  var a = 0;

  switch (selectedShape) {
    case "circle":
      let circle = new Circle2();
      circle.shapeName = "my_circle";
      circle.radius = document.getElementById("radius").value;
      p = circle.environment();
      a = circle.area();
      break;
    case "cylindrical":
      var cylindrial = new Cylindrical2();
      cylindrial.shapeName = "my_cylindrical";
      cylindrial.radius = document.getElementById("radius").value;
      cylindrial.height = document.getElementById("height").value;
      p = cylindrial.environment();
      a = cylindrial.area();
      break;
    case "square":
      var square = new Square2();
      square.shapeName = "my_square";
      square.width = document.getElementById("width").value;
      square.height = document.getElementById("height").value;
      p = square.environment();
      a = square.area();
      break;
    case "rectangle":
      var rectangle = new Rectangle2();
      rectangle.shapeName = "my_rectangle";
      rectangle.width = document.getElementById("width").value;
      rectangle.height = document.getElementById("height").value;
      p = rectangle.environment();
      a = rectangle.area();
      break;
  }

  document.getElementById("perimeter").innerHTML = p;
  document.getElementById("area").innerHTML = a;
}

function updateInputs() {
    document.getElementById("radius").value = "";
    document.getElementById("width").value = "";
    document.getElementById("height").value = "";
    document.getElementById("perimeter").innerHTML = "";
    document.getElementById("area").innerHTML = "";
  selectedShape = document.getElementById("shapes").value;

  switch (selectedShape) {
    case "circle":
      document.getElementById("radius").disabled = false;
      document.getElementById("width").disabled = true;
      document.getElementById("height").disabled = true;
      break;
    case "cylindrical":
      document.getElementById("radius").disabled = false;
      document.getElementById("width").disabled = true;
      document.getElementById("height").disabled = false;
      break;
    case "square":
      document.getElementById("radius").disabled = true;
      document.getElementById("width").disabled = false;
      document.getElementById("height").disabled = false;
      break;
    case "rectangle":
      document.getElementById("radius").disabled = true;
      document.getElementById("width").disabled = false;
      document.getElementById("height").disabled = false;
      break;
  }
}

document.getElementById("radius").disabled = false;
document.getElementById("width").disabled = true;
document.getElementById("height").disabled = true;
