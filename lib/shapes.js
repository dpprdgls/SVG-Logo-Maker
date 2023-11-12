//shape class utilizing a constructor to define the shape
class Shape {
    constructor() {
        this.color = '';
    }
    //shape class takes the getColor function
    getColor(colorPick) {
        this.color = colorPick;
    }
}

//triangle class inherits its properties from the shape class definition
class Triangle extends Shape {
    render() {
        return `<polygon points='150, 18 244, 182 56, 182' fill='${this.color}' />`;
    }
}

//square class inherits its properties from the shape class definition
class Square extends Shape {
    render() {
        return `<rect x='73' y='40'  width='160' height='160' fill='${this.color}' />`;
    }
}

//circle class inherits its properties from the shape class definition
class Circle extends Shape {
    render() {
        return `<circle cx='150' cy='115' r='80' fill='${this.color}' />`;
    }
}

module.exports = { Triangle, Square, Circle };
