function Penguin(name) {
    this.name = name;
    this.numLegs = 2;
}

// create your Emperor class here and make it inherit from Penguin
function Emperor(name) {
    this.name = name;   
}

// create an "emperor" object and print the number of legs it has
Emperor.prototype = new Penguin();

var emperor = new Emperor("ekm");
console.log(emperor.numLegs);