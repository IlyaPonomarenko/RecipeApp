const mockResponce = {
  data: {
    id: 1,
    name: "Chicken Parmesan",
    author: "test",
    country: "Italy",
    flag: "https://italy.svg",
    description: "A classic Italian dish.",
    image: "https://image.jpg",
    ingredients: [
      {
        ingredient: "chicken breasts",
        quantity: 2,
      },
      {
        ingredient: "flour",
        quantity: 0.5,
      },
    ],
    directions: ["Cook it"],
  }
};

export default {
  get: jest.fn().mockResolvedValue(mockResponce),
};
