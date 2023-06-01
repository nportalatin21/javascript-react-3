import { getPriceForDrink, getPriceForFood } from './App.Config';

export const buildOrder = (drinks, foods) => {
  let total = 0;

  const arrayOfDrinks = Object.keys(drinks).map(item => {
    const qty = drinks[item];
    const price = getPriceForDrink(item);
    const subTotal = qty * price;
    total += subTotal;

    return {
      item,
      qty,
      price,
      subTotal
    };
  });

  const arrayOfFoods = Object.keys(foods).map(item => {
    const qty = foods[item];
    const price = getPriceForFood(item);
    const subTotal = qty * price;
    total += subTotal;

    return {
      item,
      qty,
      price,
      subTotal
    };
  });

  const order = [...arrayOfDrinks, ...arrayOfFoods].filter(item => item.qty > 0);

  return {
    order,
    total
  };
};

export const calcTotalForAllOrders = orders => {
  return orders ? orders.reduce((total, item) => total + item.total, 0) : 0;
};

export const getTotalNumberDrinks = drinks => {
  let totalDrinks = 0;
  Object.values(drinks).forEach(qty => {
    totalDrinks += qty;
  });
  return totalDrinks;
};