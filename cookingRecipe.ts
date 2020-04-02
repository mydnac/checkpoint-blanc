class Ingredient {
    constructor(public nameIngredient: string, public priceKg: number, public imgUrl : string){

    }
}

class Recipe implements Ingredient{
    constructor(public nameIngredient: string, public priceKg: number, public imgUrl : string, public name: string, type: string, timePreparation : number) {

        
}
};




