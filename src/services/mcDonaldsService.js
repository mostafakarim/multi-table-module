export default class menuService {
  static getMenu() {
    return new Promise((resolve) => {
      const data = {
        total: 0,
        categories: [
          {
            name: 'Burgers',
            id: 1,
            products: [
              {
                name: 'BigMac',
                sku: 10001,
                selected: false,
                price: 10,
                quantity: 1,
              },
              {
                name: 'Double BigMac',
                sku: 10002,
                selected: false,
                price: 15,
                quantity: 1,
              },
            ],
          },
          {
            name: 'Drinks',
            id: 2,
            products: [
              {
                name: 'Coca-Cola',
                sku: 20001,
                selected: false,
                price: 3,
                quantity: 1,
              },
              {
                name: 'Sprite',
                sku: 20002,
                selected: false,
                price: 4,
                quantity: 1,
              },
            ],
          },
          {
            name: 'Dessert',
            id: 3,
            products: [
              {
                name: 'McFlurry',
                sku: 30001,
                selected: false,
                price: 2,
                quantity: 1,
              },
              {
                name: 'Sundae',
                sku: 30002,
                selected: false,
                price: 3,
                quantity: 1,
              },
            ],
          },
        ],
      };
      resolve(data);
      // reject({ message: 'error, we cannot load the menu' });
    });
  }
}
