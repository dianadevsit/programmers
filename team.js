//exported class from programmer.js file
const Programmer = require("./programmer.js");

class Team {
//constructor with a project name and a programmers array
    constructor(projectName){
        this.programmers = [];
        this.projectName = projectName;
    }