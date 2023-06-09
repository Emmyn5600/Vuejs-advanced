export default {
  namespaced: true,
  state() {
    return {
      products: [
        {
          id: 'p1',
          image:
            'https://res.cloudinary.com/esconnect/image/upload/v1597848913/samples/ecommerce/leather-bag-gray.jpg',
          title: 'Book Collection',
          description:
            'A collection of must-read books. All-time classics included!',
          price: 99.99,
        },
        {
          id: 'p2',
          image:
            'https://res.cloudinary.com/esconnect/image/upload/v1597848905/samples/ecommerce/analog-classic.jpg',
          title: 'Mountain Tent',
          description: 'A tent for the ambitious outdoor tourist.',
          price: 129.99,
        },
        {
          id: 'p3',
          image:
            'https://res.cloudinary.com/esconnect/image/upload/v1597848907/samples/food/fish-vegetables.jpg',
          title: 'Food Box',
          description:
            'May be partially expired when it arrives but at least it is cheap!',
          price: 6.99,
        },
      ],
    };
  },
  getters: {
    products(state) {
      return state.products;
    },
  },
};
