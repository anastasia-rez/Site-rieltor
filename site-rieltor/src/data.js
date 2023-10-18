import {ref, reactive, computed} from 'vue';

const mainData = reactive ({
  // Найкращі варіанти
  products: [
    {
      id: 1,
      photos: [
        '/src/assets/img/apartament1.jpg',
        '/src/assets/img/apartment2.jpg',
        '/src/assets/img/apartment3.jpg',
      ],
      type: 'Оренда',
      type2: 'Квартира',
      price: '300$',
      rooms: 3,
      bathroom: 1,
      area: '45м²',
      location: 'Дніпро',
      description: 'Квартира у центрі Дніпра з мальовничим видом на центр города'
    },

    {
      id: 2,
      photos: [
        '/src/assets/img/apartament1.jpg',
        '/src/assets/img/apartment2.jpg',
        '/src/assets/img/apartment3.jpg',
      ],
      type: 'Купівля',
      type2: 'Квартира',
      price: '30 000$',
      rooms: 2,
      bathroom: 1,
      area: '45м²',
      location: 'Київ',
      description: 'Апартаменти на лівому березі Дніпра'
    },

    {
      id: 3,
      photos: [
        '/src/assets/img/apartament1.jpg',
        '/src/assets/img/apartment2.jpg',
        '/src/assets/img/apartment3.jpg',
      ],
      type: 'Купівля',
      type2: 'Будинок',
      price: '39 000$',
      rooms: 3,
      bathroom: 2,
      area: '54м²',
      location: 'Дніпро',
      description: 'Апартаменти на правому березі Дніпра'
    },

    {
      id: 4,
      photos: [
        '/src/assets/img/apartament1.jpg',
        '/src/assets/img/apartment2.jpg',
        '/src/assets/img/apartment3.jpg',
      ],
      type: 'Купівля',
      type2: 'Офіс',
      price: '70 000$',
      bathroom: 1,
      rooms: 5,
      area: '70м²',
      location: 'Київ',
      description: 'Будинок на лівому березі Дніпра'
    },

    {
      id: 5,
      photos: [
        '/src/assets/img/apartament1.jpg',
        '/src/assets/img/apartment2.jpg',
        '/src/assets/img/apartment3.jpg',
      ],
      type: 'Оренда',
      type2: 'Квартира',
      price: '123 000$',
      bathroom: 3,
      rooms: 5,
      area: '115м²',
      location: 'Київ',
      description: 'Будинок на лівому березі Дніпра'
    },

    {
      id: 6,
      photos: [
        '/src/assets/img/apartament1.jpg',
        '/src/assets/img/apartment2.jpg',
        '/src/assets/img/apartment3.jpg',
      ],
      type: 'Купівля',
      type2: 'Офіс',
      price: '70 000$',
      bathroom: 1,
      rooms: 3,
      area: '80м²',
      location: 'Дніпро',
      description: 'Будинок на лівому березі Дніпра'
    }


  ],

  title: 'Альянс Експерт',

  // Працівники
  team : [
    {
      img: '/src/assets/img/team-1.jpg',
      name: 'Name',
      position: 'Realtor',
      tel: +380660000000,
      linkInstagram: 'https://www.instagram.com/ana_anastasia17/',
      linkYouTube: 'https://www.youtube.com/watch?v=TpXFxjzWnuw',
      linkFb: 'https://www.facebook.com/profile.php?id=100010567900961'
    }, 

    {
      img: '/src/assets/img/team-2.jpg',
      name: 'Name',
      position: 'Realtor',
      tel: +380660000000,
      linkInstagram: 'https://www.instagram.com/',
      linkYouTube: '',
      linkFb: ''
    }, 

    {
      img: '/src/assets/img/team-3.jpg',
      name: 'Name',
      position: 'Realtor',
      tel: +380660000000,
      linkInstagram: 'https://www.instagram.com/',
      linkYouTube: '',
      linkFb: ''
    }, 

    {
      img: '/src/assets/img/team-4.jpg',
      name: 'Name1',
      position: 'Realtor',
      tel: +380660000000,
      linkInstagram: 'https://www.instagram.com/',
      linkYouTube: '',
      linkFb: ''
    }

  ],

  // Відгуки
  reviews : [
    {
      img: '../src/assets/img/отзывы/testimonial-1.jpg',
      name: 'Name',
      service: 'Продаж квартири',
      review: 'Lorem ipsum dolor sit amet consectetur adipiscing elit penatibus fermentum, proin dapibus condimentum et a montes mattis dui. Integer lobortis tellus taciti facilisi nibhю.Lorem ipsum dolor sit amet consectetur adipiscing elit penatibus fermentum, proin dapibus condimentum et a montes mattis dui. Integer lobortis tellus taciti facilisi nibhю.'
    },

    {
      img: '../src/assets/img/отзывы/testimonial-2.jpg',
      name: 'Name1',
      service: 'Купівля квартири',
      review: 'Lorem ipsum dolor sit amet consectetur adipiscing elit diam, nam natoque phasellus maximus quis cras nunc habitant vivamus, hendrerit enim condimentum dictumst nisi cubilia tincidunt.'
    },

    {
      img: '../src/assets/img/отзывы/testimonial-3.jpg',
      name: 'Name2',
      service: 'Аренда квартири',
      review: 'Lorem ipsum dolor sit amet consectetur, adipiscing elit viverra ridiculus, eros nunc quam commodo. Lorem ipsum dolor sit amet consectetur adipiscing elit diam, nam natoque phasellus maximus quis cras nun'
    },

    {
      img: '../src/assets/img/отзывы/testimonial-4.jpg',
      name: 'Name3',
      service: 'Аренда квартири',
      review: 'Lorem ipsum dolor sit amet consectetur adipiscing elit facilisi habitasse, fames ex ut penatibus eu aenean est quisque, urna id velit malesuada tristique primis nam magna. Lorem ipsum dolor sit amet consectetur adipiscing elit diam, nam natoque phasellus maximus quis cras nun'
    }

  ],


  // Оренда квартир
  rentApartments: [
    {
      id: 1,
      photos: [
        '/src/assets/img/apartament1.jpg',
        '/src/assets/img/apartment2.jpg',
        '/src/assets/img/apartment3.jpg',
      ],
      type: 'Оренда',
      type2: 'Квартира',
      price: '300$',
      rooms: 3,
      bathroom: 1,
      area: '45м²',
      location: 'Дніпро',
      description: 'Квартира у центрі Дніпра з мальовничим видом на річку'
    },

    {
      id: 2,
      photos: [
        '/src/assets/img/apartament1.jpg',
        '/src/assets/img/apartment2.jpg',
        '/src/assets/img/apartment3.jpg',
      ],
      type: 'Оренда',
      type2: 'Квартира',
      price: '30 000$',
      rooms: 2,
      bathroom: 1,
      area: '45м²',
      location: 'Київ',
      description: 'Апартаменти на лівому березі Дніпра'
    },

    {
      id: 3,
      photos: [
        '/src/assets/img/apartament1.jpg',
        '/src/assets/img/apartment2.jpg',
        '/src/assets/img/apartment3.jpg',
      ],
      type: 'Оренда',
      type2: 'Будинок',
      price: '39 000$',
      rooms: 3,
      bathroom: 2,
      area: '54м²',
      location: 'Дніпро',
      description: 'Апартаменти на правому березі Дніпра'
    },

    {
      id: 4,
      photos: [
        '/src/assets/img/apartament1.jpg',
        '/src/assets/img/apartment2.jpg',
        '/src/assets/img/apartment3.jpg',
      ],
      type: 'Оренда',
      type2: 'Офіс',
      price: '70 000$',
      bathroom: 1,
      rooms: 5,
      area: '70м²',
      location: 'Київ',
      description: 'Будинок на лівому березі Дніпра'
    },

    {
      id: 5,
      photos: [
        '/src/assets/img/apartament1.jpg',
        '/src/assets/img/apartment2.jpg',
        '/src/assets/img/apartment3.jpg',
      ],
      type: 'Оренда',
      type2: 'Квартира',
      price: '123 000$',
      bathroom: 3,
      rooms: 5,
      area: '115м²',
      location: 'Київ',
      description: 'Будинок на лівому березі Дніпра'
    },

    {
      id: 6,
      photos: [
        '/src/assets/img/apartament1.jpg',
        '/src/assets/img/apartment2.jpg',
        '/src/assets/img/apartment3.jpg',
      ],
      type: 'Оренда',
      type2: 'Офіс',
      price: '70 000$',
      bathroom: 1,
      rooms: 3,
      area: '80м²',
      location: 'Дніпро',
      description: 'Будинок на лівому березі Дніпра'
    },

    {
      id: 7,
      photos: [
        '/src/assets/img/apartament1.jpg',
        '/src/assets/img/apartment2.jpg',
        '/src/assets/img/apartment3.jpg',
      ],
      type: 'Оренда',
      type2: 'Офіс',
      price: '70 000$',
      bathroom: 1,
      rooms: 3,
      area: '80м²',
      location: 'Дніпро',
      description: 'Будинок на лівому березі Дніпра'
    },

    {
      id: 8,
      photos: [
        '/src/assets/img/apartament1.jpg',
        '/src/assets/img/apartment2.jpg',
        '/src/assets/img/apartment3.jpg',
      ],
      type: 'Оренда',
      type2: 'Офіс',
      price: '70 000$',
      bathroom: 1,
      rooms: 3,
      area: '80м²',
      location: 'Дніпро',
      description: 'Будинок на лівому березі Дніпра'
    },

    {
      id: 9,
      photos: [
        '/src/assets/img/apartament1.jpg',
        '/src/assets/img/apartment2.jpg',
        '/src/assets/img/apartment3.jpg',
      ],
      type: 'Оренда',
      type2: 'Офіс',
      price: '70 000$',
      bathroom: 1,
      rooms: 3,
      area: '80м²',
      location: 'Дніпро',
      description: 'Будинок на лівому березі Дніпра'
    },

    {
      id: 10,
      photos: [
        '/src/assets/img/apartament1.jpg',
        '/src/assets/img/apartment2.jpg',
        '/src/assets/img/apartment3.jpg',
      ],
      type: 'Оренда',
      type2: 'Офіс',
      price: '70 000$',
      bathroom: 1,
      rooms: 3,
      area: '80м²',
      location: 'Дніпро',
      description: 'Будинок на лівому березі Дніпра'
    },

    {
      id: 11,
      photos: [
        '/src/assets/img/apartament1.jpg',
        '/src/assets/img/apartment2.jpg',
        '/src/assets/img/apartment3.jpg',
      ],
      type: 'Оренда',
      type2: 'Офіс',
      price: '70 000$',
      bathroom: 1,
      rooms: 3,
      area: '80м²',
      location: 'Дніпро',
      description: 'Будинок на лівому березі Дніпра'
    }

  ],

  // Купівля квартир 
  sellApartments: [
    {
      id: 1,
      photos: [
        '/src/assets/img/apartament1.jpg',
        '/src/assets/img/apartment2.jpg',
        '/src/assets/img/apartment3.jpg',
      ],
      type: 'Продаж',
      type2: 'Квартира',
      price: '30 000$',
      rooms: 3,
      bathroom: 1,
      area: '45м²',
      location: 'Дніпро',
      description: 'Квартира у центрі Дніпра з мальовничим видом на річку'
    },

    {
      id: 2,
      photos: [
        '/src/assets/img/apartament1.jpg',
        '/src/assets/img/apartment2.jpg',
        '/src/assets/img/apartment3.jpg',
      ],
      type: 'Продаж',
      type2: 'Квартира',
      price: '30 000$',
      rooms: 2,
      bathroom: 1,
      area: '45м²',
      location: 'Київ',
      description: 'Апартаменти на лівому березі Дніпра'
    },

    {
      id: 3,
      photos: [
        '/src/assets/img/apartament1.jpg',
        '/src/assets/img/apartment2.jpg',
        '/src/assets/img/apartment3.jpg',
      ],
      type: 'Продаж',
      type2: 'Квартира',
      price: '39 000$',
      rooms: 3,
      bathroom: 2,
      area: '54м²',
      location: 'Дніпро',
      description: 'Апартаменти на правому березі Дніпра'
    },

    {
      id: 4,
      photos: [
        '/src/assets/img/apartament1.jpg',
        '/src/assets/img/apartment2.jpg',
        '/src/assets/img/apartment3.jpg',
      ],
      type: 'Продаж',
      type2: 'Квартира',
      price: '70 000$',
      bathroom: 1,
      rooms: 5,
      area: '70м²',
      location: 'Київ',
      description: 'Будинок на лівому березі Дніпра'
    },

    {
      id: 5,
      photos: [
        '/src/assets/img/apartament1.jpg',
        '/src/assets/img/apartment2.jpg',
        '/src/assets/img/apartment3.jpg',
      ],
      type: 'Продаж',
      type2: 'Квартира',
      price: '123 000$',
      bathroom: 3,
      rooms: 5,
      area: '115м²',
      location: 'Київ',
      description: 'Будинок на лівому березі Дніпра'
    },

    {
      id: 6,
      photos: [
        '/src/assets/img/apartament1.jpg',
        '/src/assets/img/apartment2.jpg',
        '/src/assets/img/apartment3.jpg',
      ],
      type: 'Продаж',
      type2: 'Квартира',
      price: '70 000$',
      bathroom: 1,
      rooms: 3,
      area: '80м²',
      location: 'Дніпро',
      description: 'Будинок на лівому березі Дніпра'
    },

    {
      id: 7,
      photos: [
        '/src/assets/img/apartament1.jpg',
        '/src/assets/img/apartment2.jpg',
        '/src/assets/img/apartment3.jpg',
      ],
      type: 'Продаж',
      type2: 'Квартира',
      price: '70 000$',
      bathroom: 1,
      rooms: 3,
      area: '80м²',
      location: 'Дніпро',
      description: 'Будинок на лівому березі Дніпра'
    },

    {
      id: 8,
      photos: [
        '/src/assets/img/apartament1.jpg',
        '/src/assets/img/apartment2.jpg',
        '/src/assets/img/apartment3.jpg',
      ],
      type: 'Продаж',
      type2: 'Квартира',
      price: '70 000$',
      bathroom: 1,
      rooms: 3,
      area: '80м²',
      location: 'Дніпро',
      description: 'Будинок на лівому березі Дніпра'
    },

    {
      id: 9,
      photos: [
        '/src/assets/img/apartament1.jpg',
        '/src/assets/img/apartment2.jpg',
        '/src/assets/img/apartment3.jpg',
      ],
      type: 'Продаж',
      type2: 'Квартира',
      price: '70 000$',
      bathroom: 1,
      rooms: 3,
      area: '80м²',
      location: 'Дніпро',
      description: 'Будинок на лівому березі Дніпра'
    },

    {
      id: 10,
      photos: [
        '/src/assets/img/apartament1.jpg',
        '/src/assets/img/apartment2.jpg',
        '/src/assets/img/apartment3.jpg',
      ],
      type: 'Продаж',
      type2: 'Квартира',
      price: '70 000$',
      bathroom: 1,
      rooms: 3,
      area: '80м²',
      location: 'Дніпро',
      description: 'Будинок на лівому березі Дніпра'
    },

    {
      id: 11,
      photos: [
        '/src/assets/img/apartament1.jpg',
        '/src/assets/img/apartment2.jpg',
        '/src/assets/img/apartment3.jpg',
      ],
      type: 'Продаж',
      type2: 'Квартира',
      price: '70 000$',
      bathroom: 1,
      rooms: 3,
      area: '80м²',
      location: 'Дніпро',
      description: 'Будинок на лівому березі Дніпра'
    }

  ],

  // Оренда будинка
  rentHouses: [
  {
    id: 1,
    photos: [
      '/src/assets/img/apartament1.jpg',
      '/src/assets/img/apartment2.jpg',
      '/src/assets/img/apartment3.jpg',
    ],
    type: 'Оренда',
    type2: 'Будинок',
    price: '30 000$',
    rooms: 3,
    bathroom: 1,
    area: '45м²',
    location: 'Дніпро',
    description: 'Квартира у центрі Дніпра з мальовничим видом на річку'
  },

  {
    id: 2,
    photos: [
      '/src/assets/img/apartament1.jpg',
      '/src/assets/img/apartment2.jpg',
      '/src/assets/img/apartment3.jpg',
    ],
    type: 'Оренда',
    type2: 'Будинок',
    price: '30 000$',
    rooms: 2,
    bathroom: 1,
    area: '45м²',
    location: 'Київ',
    description: 'Апартаменти на лівому березі Дніпра'
  },

  {
    id: 3,
    photos: [
      '/src/assets/img/apartament1.jpg',
      '/src/assets/img/apartment2.jpg',
      '/src/assets/img/apartment3.jpg',
    ],
    type: 'Оренда',
    type2: 'Будинок',
    price: '39 000$',
    rooms: 3,
    bathroom: 2,
    area: '54м²',
    location: 'Дніпро',
    description: 'Апартаменти на правому березі Дніпра'
  },

  {
    id: 4,
    photos: [
      '/src/assets/img/apartament1.jpg',
      '/src/assets/img/apartment2.jpg',
      '/src/assets/img/apartment3.jpg',
    ],
    type: 'Оренда',
    type2: 'Будинок',
    price: '70 000$',
    bathroom: 1,
    rooms: 5,
    area: '70м²',
    location: 'Київ',
    description: 'Будинок на лівому березі Дніпра'
  },

  {
    id: 5,
    photos: [
      '/src/assets/img/apartament1.jpg',
      '/src/assets/img/apartment2.jpg',
      '/src/assets/img/apartment3.jpg',
    ],
    type: 'Оренда',
    type2: 'Будинок',
    price: '123 000$',
    bathroom: 3,
    rooms: 5,
    area: '115м²',
    location: 'Київ',
    description: 'Будинок на лівому березі Дніпра'
  },

  {
    id: 6,
    photos: [
      '/src/assets/img/apartament1.jpg',
      '/src/assets/img/apartment2.jpg',
      '/src/assets/img/apartment3.jpg',
    ],
    type: 'Оренда',
    type2: 'Будинок',
    price: '70 000$',
    bathroom: 1,
    rooms: 3,
    area: '80м²',
    location: 'Дніпро',
    description: 'Будинок на лівому березі Дніпра'
  },

  {
    id: 7,
    photos: [
      '/src/assets/img/apartament1.jpg',
      '/src/assets/img/apartment2.jpg',
      '/src/assets/img/apartment3.jpg',
    ],
    type: 'Оренда',
    type2: 'Будинок',
    price: '70 000$',
    bathroom: 1,
    rooms: 3,
    area: '80м²',
    location: 'Дніпро',
    description: 'Будинок на лівому березі Дніпра'
  },

  {
    id: 8,
    photos: [
      '/src/assets/img/apartament1.jpg',
      '/src/assets/img/apartment2.jpg',
      '/src/assets/img/apartment3.jpg',
    ],
    type: 'Оренда',
    type2: 'Будинок',
    price: '70 000$',
    bathroom: 1,
    rooms: 3,
    area: '80м²',
    location: 'Дніпро',
    description: 'Будинок на лівому березі Дніпра'
  },

  {
    id: 9,
    photos: [
      '/src/assets/img/apartament1.jpg',
      '/src/assets/img/apartment2.jpg',
      '/src/assets/img/apartment3.jpg',
    ],
    type: 'Оренда',
    type2: 'Будинок',
    price: '70 000$',
    bathroom: 1,
    rooms: 3,
    area: '80м²',
    location: 'Дніпро',
    description: 'Будинок на лівому березі Дніпра'
  },

  {
    id: 10,
    photos: [
      '/src/assets/img/apartament1.jpg',
      '/src/assets/img/apartment2.jpg',
      '/src/assets/img/apartment3.jpg',
    ],
    type: 'Оренда',
    type2: 'Будинок',
    price: '70 000$',
    bathroom: 1,
    rooms: 3,
    area: '80м²',
    location: 'Дніпро',
    description: 'Будинок на лівому березі Дніпра'
  },

  {
    id: 11,
    photos: [
      '/src/assets/img/apartament1.jpg',
      '/src/assets/img/apartment2.jpg',
      '/src/assets/img/apartment3.jpg',
    ],
    type: 'Оренда',
    type2: 'Будинок',
    price: '70 000$',
    bathroom: 1,
    rooms: 3,
    area: '80м²',
    location: 'Дніпро',
    description: 'Будинок на лівому березі Дніпра'
  }

  ],

  // Купівля будинка
  sellHouses: [
    {
      id: 1,
      photos: [
        '/src/assets/img/apartament1.jpg',
        '/src/assets/img/apartment2.jpg',
        '/src/assets/img/apartment3.jpg',
      ],
      type: 'Продаж',
      type2: 'Будинок',
      price: '30 000$',
      rooms: 3,
      bathroom: 1,
      area: '45м²',
      location: 'Дніпро',
      description: 'Квартира у центрі Дніпра з мальовничим видом на річку'
    },
  
    {
      id: 2,
      photos: [
        '/src/assets/img/apartament1.jpg',
        '/src/assets/img/apartment2.jpg',
        '/src/assets/img/apartment3.jpg',
      ],
      type: 'Продаж',
      type2: 'Будинок',
      price: '30 000$',
      rooms: 2,
      bathroom: 1,
      area: '45м²',
      location: 'Київ',
      description: 'Апартаменти на лівому березі Дніпра'
    },
  
    {
      id: 3,
      photos: [
        '/src/assets/img/apartament1.jpg',
        '/src/assets/img/apartment2.jpg',
        '/src/assets/img/apartment3.jpg',
      ],
      type: 'Продаж',
      type2: 'Будинок',
      price: '39 000$',
      rooms: 3,
      bathroom: 2,
      area: '54м²',
      location: 'Дніпро',
      description: 'Апартаменти на правому березі Дніпра'
    },
  
    {
      id: 4,
      photos: [
        '/src/assets/img/apartament1.jpg',
        '/src/assets/img/apartment2.jpg',
        '/src/assets/img/apartment3.jpg',
      ],
      type: 'Продаж',
      type2: 'Будинок',
      price: '70 000$',
      bathroom: 1,
      rooms: 5,
      area: '70м²',
      location: 'Київ',
      description: 'Будинок на лівому березі Дніпра'
    },
  
    {
      id: 5,
      photos: [
        '/src/assets/img/apartament1.jpg',
        '/src/assets/img/apartment2.jpg',
        '/src/assets/img/apartment3.jpg',
      ],
      type: 'Продаж',
      type2: 'Будинок',
      price: '123 000$',
      bathroom: 3,
      rooms: 5,
      area: '115м²',
      location: 'Київ',
      description: 'Будинок на лівому березі Дніпра'
    },
  
    {
      id: 6,
      photos: [
        '/src/assets/img/apartament1.jpg',
        '/src/assets/img/apartment2.jpg',
        '/src/assets/img/apartment3.jpg',
      ],
      type: 'Продаж',
      type2: 'Будинок',
      price: '70 000$',
      bathroom: 1,
      rooms: 3,
      area: '80м²',
      location: 'Дніпро',
      description: 'Будинок на лівому березі Дніпра'
    },
  
    {
      id: 7,
      photos: [
        '/src/assets/img/apartament1.jpg',
        '/src/assets/img/apartment2.jpg',
        '/src/assets/img/apartment3.jpg',
      ],
      type: 'Продаж',
      type2: 'Будинок',
      price: '70 000$',
      bathroom: 1,
      rooms: 3,
      area: '80м²',
      location: 'Дніпро',
      description: 'Будинок на лівому березі Дніпра'
    },
  
    {
      id: 8,
      photos: [
        '/src/assets/img/apartament1.jpg',
        '/src/assets/img/apartment2.jpg',
        '/src/assets/img/apartment3.jpg',
      ],
      type: 'Продаж',
      type2: 'Будинок',
      price: '70 000$',
      bathroom: 1,
      rooms: 3,
      area: '80м²',
      location: 'Дніпро',
      description: 'Будинок на лівому березі Дніпра'
    },
  
    {
      id: 9,
      photos: [
        '/src/assets/img/apartament1.jpg',
        '/src/assets/img/apartment2.jpg',
        '/src/assets/img/apartment3.jpg',
      ],
      type: 'Продаж',
      type2: 'Будинок',
      price: '70 000$',
      bathroom: 1,
      rooms: 3,
      area: '80м²',
      location: 'Дніпро',
      description: 'Будинок на лівому березі Дніпра'
    },
  
    {
      id: 10,
      photos: [
        '/src/assets/img/apartament1.jpg',
        '/src/assets/img/apartment2.jpg',
        '/src/assets/img/apartment3.jpg',
      ],
      type: 'Продаж',
      type2: 'Будинок',
      price: '70 000$',
      bathroom: 1,
      rooms: 3,
      area: '80м²',
      location: 'Дніпро',
      description: 'Будинок на лівому березі Дніпра'
    },
  
    {
      id: 11,
      photos: [
        '/src/assets/img/apartament1.jpg',
        '/src/assets/img/apartment2.jpg',
        '/src/assets/img/apartment3.jpg',
      ],
      type: 'Продаж',
      type2: 'Будинок',
      price: '70 000$',
      bathroom: 1,
      rooms: 3,
      area: '80м²',
      location: 'Дніпро',
      description: 'Будинок на лівому березі Дніпра'
    }
  
  ],

  // Земельні ділянки
  landPlots: [
    {
      id: 1,
      photos: [
        '/src/assets/img/apartament1.jpg',
        '/src/assets/img/apartment2.jpg',
        '/src/assets/img/apartment3.jpg',
      ],
      type: 'Продаж',
      type2: 'Земельна ділянка',
      price: '30 000$',
      area: '45м²',
      location: 'Дніпро',
      description: 'Квартира у центрі Дніпра з мальовничим видом на річку'
    },
  
    {
      id: 2,
      photos: [
        '/src/assets/img/apartament1.jpg',
        '/src/assets/img/apartment2.jpg',
        '/src/assets/img/apartment3.jpg',
      ],
      type: 'Продаж',
      type2: 'Земельна ділянка',
      price: '30 000$',
      area: '45м²',
      location: 'Київ',
      description: 'Апартаменти на лівому березі Дніпра'
    },
  
    {
      id: 3,
      photos: [
        '/src/assets/img/apartament1.jpg',
        '/src/assets/img/apartment2.jpg',
        '/src/assets/img/apartment3.jpg',
      ],
      type: 'Продаж',
      type2: 'Земельна ділянка',
      price: '39 000$',
      area: '54м²',
      location: 'Дніпро',
      description: 'Апартаменти на правому березі Дніпра'
    },
  
    {
      id: 4,
      photos: [
        '/src/assets/img/apartament1.jpg',
        '/src/assets/img/apartment2.jpg',
        '/src/assets/img/apartment3.jpg',
      ],
      type: 'Продаж',
      type2: 'Земельна ділянка',
      price: '70 000$',
      area: '70м²',
      location: 'Київ',
      description: 'Будинок на лівому березі Дніпра'
    },
  
    {
      id: 5,
      photos: [
        '/src/assets/img/apartament1.jpg',
        '/src/assets/img/apartment2.jpg',
        '/src/assets/img/apartment3.jpg',
      ],
      type: 'Продаж',
      type2: 'Земельна ділянка',
      price: '123 000$',
      area: '115м²',
      location: 'Київ',
      description: 'Будинок на лівому березі Дніпра'
    },
  
    {
      id: 6,
      photos: [
        '/src/assets/img/apartament1.jpg',
        '/src/assets/img/apartment2.jpg',
        '/src/assets/img/apartment3.jpg',
      ],
      type: 'Продаж',
      type2: 'Земельна ділянка',
      price: '70 000$',
      area: '80м²',
      location: 'Дніпро',
      description: 'Будинок на лівому березі Дніпра'
    },
  
    {
      id: 7,
      photos: [
        '/src/assets/img/apartament1.jpg',
        '/src/assets/img/apartment2.jpg',
        '/src/assets/img/apartment3.jpg',
      ],
      type: 'Продаж',
      type2: 'Земельна ділянка',
      price: '70 000$',
      area: '80м²',
      location: 'Дніпро',
      description: 'Будинок на лівому березі Дніпра'
    },
  
    {
      id: 8,
      photos: [
        '/src/assets/img/apartament1.jpg',
        '/src/assets/img/apartment2.jpg',
        '/src/assets/img/apartment3.jpg',
      ],
      type: 'Продаж',
      type2: 'Земельна ділянка',
      price: '70 000$',
      area: '80м²',
      location: 'Дніпро',
      description: 'Будинок на лівому березі Дніпра'
    },
  
    {
      id: 9,
      photos: [
        '/src/assets/img/apartament1.jpg',
        '/src/assets/img/apartment2.jpg',
        '/src/assets/img/apartment3.jpg',
      ],
      type: 'Продаж',
      type2: 'Земельна ділянка',
      price: '70 000$',
      area: '80м²',
      location: 'Дніпро',
      description: 'Будинок на лівому березі Дніпра'
    },
  
    {
      id: 10,
      photos: [
        '/src/assets/img/apartament1.jpg',
        '/src/assets/img/apartment2.jpg',
        '/src/assets/img/apartment3.jpg',
      ],
      type: 'Продаж',
      type2: 'Земельна ділянка',
      price: '70 000$',
      area: '80м²',
      location: 'Дніпро',
      description: 'Будинок на лівому березі Дніпра'
    },
  
    {
      id: 11,
      photos: [
        '/src/assets/img/apartament1.jpg',
        '/src/assets/img/apartment2.jpg',
        '/src/assets/img/apartment3.jpg',
      ],
      type: 'Продаж',
      type2: 'Земельна ділянка',
      price: '70 000$',
      area: '80м²',
      location: 'Дніпро',
      description: 'Будинок на лівому березі Дніпра'
    }
  
  ],

  // Офіси
  offices: [
    // {
    //   id: 1,
    //   photos: [
    //     './src/assets/img/лучшиеварианты/apartament1.jpg',
    //     './src/assets/img/лучшиеварианты/apartment2.jpg',
    //     './src/assets/img/лучшиеварианты/apartment3.jpg',
    //   ],
    //   type: 'Продаж',
    //   type2: 'Офіс',
    //   price: '30 000$',
    //   rooms: 3,
    //   bathroom: 1,
    //   area: '45м²',
    //   location: 'Дніпро',
    //   description: 'Квартира у центрі Дніпра з мальовничим видом на річку'
    // },

  ],

});




export {mainData}