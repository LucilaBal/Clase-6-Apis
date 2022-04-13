const products = [
    {
      id: 30,
      name: "Samsung Galaxy a20",
      stock: 100,
      cost: 40.000,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dolor libero, tincidunt id lacinia auctor, mattis elementum tortor. In eu bibendum magna, ac dignissim justo.",
      capacity: 1500,
      image: [
        "https://res.cloudinary.com/bodegas-del-sur/image/upload/v1631316114/BodegasDelSur/01_1619706181.webp"
      ],
      sales: 0,
      createdAt: "2021-09-18T05:11:04.952Z",
      updatedAt: "2021-09-18T19:39:05.347Z",
      categoryId: 9,
      brandId: 95,
      packingId: null,
      category: {
        name: "Samsung",
        id: 9
      },
      brand: {
        id: 95,
        name: "A2O"
      },
      reviews: []
    },
    {
      id: 29,
      name: "Samsung A21",
      stock: 100,
      cost: 50.000,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dolor libero, tincidunt id lacinia auctor, mattis elementum tortor. In eu bibendum magna, ac dignissim justo.",
      capacity: 1500,
      image: [
        "https://res.cloudinary.com/bodegas-del-sur/image/upload/v1631316114/BodegasDelSur/01_1619706076.webp"
      ],
      sales: 0,
      createdAt: "2021-09-18T05:11:04.952Z",
      updatedAt: "2021-09-18T19:39:05.347Z",
      categoryId: 9,
      brandId: 95,
      packingId: null,
      category: {
        name: "Samsung",
        id: 9
      },
      brand: {
        id: 95,
        name: "A21"
      },
      reviews: [
        {
          "comment": ".",
          "rating": "4"
        }
      ]
    },
    {
      id: 76,
      name: "Samsung A30",
      stock: 92,
      cost: 60.000,
      description: 
      capacity: 750,
      image: [
        "https://res.cloudinary.com/bodegas-del-sur/image/upload/v1631316095/BodegasDelSur/01_1605541215.jpg"
      ],
      sales: 0,
      createdAt: "2021-09-18T05:11:04.952Z",
      updatedAt: "2021-09-20T16:10:21.030Z",
      categoryId: 1,
      brandId: 10,
      packingId: null,
      category: {
        name: "Samsung",
        id: 1
      },
      brand: {
        id: 10,
        name: "A30"
      },
      reviews: []
    },
    
  module.exports = {
    products,
  }