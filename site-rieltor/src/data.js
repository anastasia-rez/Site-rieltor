import {ref, reactive, computed} from 'vue';

const mainData = reactive ({
  products: [
    {
      img: '../src/assets/img/apartament1.jpg',
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
      img: '../src/assets/img/apartment2.jpg',
      type: 'Купівля',
      type2: 'Квартира',
      price: '30000$',
      rooms: 2,
      bathroom: 1,
      area: '45м²',
      location: 'Київ',
      description: 'Апартаменти на лівому березі Дніпра'
    },

    {
      img: '../src/assets/img/apartment3.jpg',
      type: 'Купівля',
      type2: 'Домівка',
      price: '39000$',
      rooms: 3,
      bathroom: 2,
      area: '54м²',
      location: 'Дніпро',
      description: 'Апартаменти на правому березі Дніпра'
    },

    {
      img: '../src/assets/img/apartment4.jpg',
      type: 'Купівля',
      type2: 'Офіс',
      price: '70000$',
      bathroom: 1,
      rooms: 5,
      area: '70м²',
      location: 'Київ',
      description: 'Будинок на лівому березі Дніпра'
    },

    {
      img: '../src/assets/img/property-1.jpg',
      type: 'Оренда',
      type2: 'Квартира',
      price: '123000$',
      bathroom: 3,
      rooms: 5,
      area: '115м²',
      location: 'Київ',
      description: 'Будинок на лівому березі Дніпра'
    },

    {
      img: '../src/assets/img/property-2.jpg',
      type: 'Купівля',
      type2: 'Офіс',
      price: '70000$',
      bathroom: 1,
      rooms: 3,
      area: '80м²',
      location: 'Дніпро',
      description: 'Будинок на лівому березі Дніпра'
    }


  ],

  title: 'Альянс Експерт',

  team : [
    {
      img: '../src/assets/img/team-1.jpg',
      name: 'Name',
      position: 'Realtor',
      tel: +380660000000,
      linkInstagram: 'https://www.instagram.com/ana_anastasia17/',
      linkYouTube: 'https://www.youtube.com/watch?v=TpXFxjzWnuw',
      linkFb: 'https://www.facebook.com/profile.php?id=100010567900961'
    }, 

    {
      img: '../src/assets/img/team-2.jpg',
      name: 'Name',
      position: 'Realtor',
      tel: +380660000000,
      linkInstagram: 'https://www.instagram.com/',
      linkYouTube: '',
      linkFb: ''
    }, 

    {
      img: '../src/assets/img/team-3.jpg',
      name: 'Name',
      position: 'Realtor',
      tel: +380660000000,
      linkInstagram: 'https://www.instagram.com/',
      linkYouTube: '',
      linkFb: ''
    }, 

    {
      img: '../src/assets/img/team-4.jpg',
      name: 'Name1',
      position: 'Realtor',
      tel: +380660000000,
      linkInstagram: 'https://www.instagram.com/',
      linkYouTube: '',
      linkFb: ''
    }

  ],

  reviews : [
    {
      img: '../src/assets/img/testimonial-1.jpg',
      name: 'Name',
      service: 'Продаж квартири',
      review: 'Lorem ipsum dolor sit amet consectetur adipiscing elit penatibus fermentum, proin dapibus condimentum et a montes mattis dui. Integer lobortis tellus taciti facilisi nibhю'
    },

    {
      img: '../src/assets/img/testimonial-2.jpg',
      name: 'Name1',
      service: 'Купівля квартири',
      review: 'Lorem ipsum dolor sit amet consectetur adipiscing elit diam, nam natoque phasellus maximus quis cras nunc habitant vivamus, hendrerit enim condimentum dictumst nisi cubilia tincidunt.'
    },

    {
      img: '../src/assets/img/testimonial-3.jpg',
      name: 'Name2',
      service: 'Аренда квартири',
      review: 'Lorem ipsum dolor sit amet consectetur, adipiscing elit viverra ridiculus, eros nunc quam commodo. '
    },

    {
      img: '../src/assets/img/testimonial-4.jpg',
      name: 'Name3',
      service: 'Аренда квартири',
      review: 'Lorem ipsum dolor sit amet consectetur adipiscing elit facilisi habitasse, fames ex ut penatibus eu aenean est quisque, urna id velit malesuada tristique primis nam magna.'
    }

  ]

 
});




export {mainData}