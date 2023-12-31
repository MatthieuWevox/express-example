class Universe{
    constructor(name) {
        this.id = null;
        this.name = name;
        this.description = null;
    }

    toMap(){
        return {
            id: this.id,
            name: this.name,
            // description: this.description
        };
    }

    static fromMap(map){
        let universe = new Universe(map.name);
        universe.id = map.id;
        universe.description = map.description;

        return universe;
    }

    generateDescription(){
        // Generate with openAi
        this.description = "Description of the universe " + this.name + " generated by openAi";
    }
}

module.exports = Universe;