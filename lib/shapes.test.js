//import various shapes classes from ./shapes.js
const { Triangle, Square, Circle } = require('./shapes.js');

//Unit test: test for a triangle with a blue background to render correctly
describe('Triangle test', () => {
    test('Test for a triangle with a blue background to render correctly', () => {
        const shape = new Triangle();
        shape.getColor('blue');
        expect(shape.render()).toEqual(
            `<polygon points='150, 18 244, 182 56, 182' fill='blue' />`
        );
    });
});

//describe: test for a circle with a yellow background to render correctly
describe('Circle test', () => {
    test('Test for a circle with a yellow background to render correctly', () => {
        const shape = new Circle();
        shape.getColor('yellow');
        expect(shape.render()).toEqual(
            `<circle cx='150' cy='115' r='80' fill='yellow' />`
        );
    });
});

//Unit test: test for a square with an orange background to render correctly
describe('Square test', () => {
    test('Test for a square with a blue background to render correctly', () => {
        const shape = new Square();
        shape.getColor('orange');
        expect(shape.render()).toEqual(
            `<rect x='73' y='40'  width='160' height='160' fill='orange' />`
        );
    });
});
