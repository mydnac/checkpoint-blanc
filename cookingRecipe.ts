interface Ingredient {
    nameIngredient : string,
    priceKg : number,
    imgUrl : string 
}

class Recipe{
    constructor(public name: string) {
}
};

class Starter extends Recipe implements Ingredient {
    constructor (public name: string, public nameIngredient: string, public priceKg: number, public imgUrl : string, public preparationTime: number ) {
    super(name)
}
};

class MainCourse extends Recipe implements Ingredient{
    constructor (public name: string, public nameIngredient: string, public priceKg: number, public imgUrl : string, public preparationTime: number ) {
    super(name)
}
};

class Dessert extends Recipe implements Ingredient{
    constructor (public name: string, public nameIngredient: string, public priceKg: number, public imgUrl : string, public preparationTime: number ) {
    super(name)
}
};



