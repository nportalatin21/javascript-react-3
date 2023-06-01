// 
// File: App.Config.js
// Auth: Martin Burolla
// Date: 10/19/2022
// Desc: All configuration options for the application.
//

export const drinkPrices = [
    { 
        id: 1,
        type: "lemonade",
        price: 1.00 
    },
    { 
        id: 2,
        type: "tea",
        price: 2.00 
    },
    { 
        id: 3,
        type: "coffee",
        price: 3.00 
    },
    {
        id: 4,
        type: "milk",
        price: 4.00 

    }
]
export const foodPrices = [
    { 
        id: 1,
        type: "croissant",
        price: 1.00 
    },
    { 
        id: 2,
        type: "muffin",
        price: 2.00 
    },
    { 
        id: 3,
        type: "cookie",
        price: 3.00 
    },
    {
        id: 4,
        type: "maccaron",
        price: 4.00 

    }
]

export const getPriceForDrink = (type) => {
    return drinkPrices.find(p => p.type === type).price
}

export const getPriceForFood = (type) => {
    return foodPrices.find(p => p.type === type).price
}