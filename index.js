//import inquirer 
const inquirer = require('inquirer');

//import file system 
const fs = require('fs');

//import classes from .lib/shapes 
const { Triangle, Square, Circle } = require('./lib/shapes.js');

//Function writes the SVG file using the answers from the inquirer prompts given by the user
function writeToFile(fileName, answers) {
    //create file as empty string
    let svgString = '';
    //set width and height of the logo container
    svgString = `<svg version='1.1' width='300' height='200' xmlns='hhttp://www.w3.org/2000/svg'>`;
    //the <g> tag is used to wrap the <text> tag so that the text is layered on top of the shape
    svgString += '<g>';
    //adds user input for shape choice to the svgString
    svgString += `${answers.shape} `;
    
    //takes user input from choices and adds the shape properties and color to svgString
    let shapePick;
    if (answers.shape === 'triangle') {
        shapePick = new Triangle();
        svgString += `<polygon points='150, 18 244, 182 56, 182' fill='${answers.shapeBgColor}"/>`;
    } else if (answers.shape === 'square') {
        shapePick = new Square();
        svgString += `<rect x='73' y='40'  width='160' height='160' fill='${answers.shapeBgColor}"/>`;
    } else {
        shapePick = new Circle();
        svgString += `<circle cx='150' cy='115' r='80' fill='${answers.shapeBgColor}"/>`;
    }

    // <text> tag gives rise to text alignment, text-content/text-color taken in from user prompt and gives default font size of "40"
    svgString += `<text x="150" y="130" text-anchor="middle" font-size="40" fill="${answers.textColor}">${answers.text}</text>`;
    // Closing </g> tag
    svgString += "</g>";
    // Closing </svg> tag
    svgString += "</svg>";

    // Using file system module to generate svg file, takes in file name given in the promptUser function, the svg string, and a ternary operator which handles logging any errors, or a "Generated logo.svg" message to the console  
    fs.writeFile(fileName, svgString, (err) => {
        err ? console.log(err) : console.log("Generated logo.svg");
    });
}

