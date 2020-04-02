class Recipe {
    name : string;
    type: string;
    preparationTime : number;

    constructor(name: string,type: string, preparationTime : number) {
        this.name = name;
        this.type = type;
        this.preparationTime = preparationTime


};

class Ingredient extends Recipe {
    nameIngredient : string;
    priceKg : number;
    urlImg : string;

    constructor(name: string,type: string, preparationTime : number, nameIngredient: string, priceKg: number, urlImg ) {
        super(name, type, preparationTime)
        this.nameIngredient = nameIngredient;
        this.priceKg = priceKg;
        this.urlImg = urlImg;
    }
    
}


