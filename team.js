//exported class from programmer.js file
const Programmer = require("./programmer.js");

class Team {
//constructor with a project name and a programmers array
    constructor(projectName){
        this.programmers = [];
        this.projectName = projectName;
    }
 //method for adding a programmer into the programmer array
    addProgrammer(name, position, age, language){
        this.programmers.push(new Programmer(name, position, age, language));
    }
 //retun the total number of programmers in the array
    returnNumberOfTeamMembers(){
        return this.programmers.length;
    }
}

//export Team class to be included in the index.js 
module.exports = Team;
