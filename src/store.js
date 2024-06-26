import { reactive } from "vue";

export const db = reactive({

    menuLink:
        [
            {
                name: 'Home',
                src: '#header'
            },
            {
                name: 'About Us',
                src: '#awards'
            },
            {
                name: 'Services',
                src: '#services'
            },
            {
                name: 'shop',
                src: '#shopping'
            },
            {
                name: 'Our Team',
                src: '#review'
            },
            {
                name: 'Blog',
                src: '#blog'
            },
            {
                name: 'Contact Us',
                src: '#footer'
            },
        ],
    openMenu: false,

    services:
        [
            {
                name: 'Trim & Cut',
                img: '/img/avadabarbers-trimcut-icon-before.png',
                description: 'Avada Barbers are experts i nthe lickety split trim and hair cut. Quick but careful and ridiculously good loking.'

            },
            {
                name: 'Wash & Dry',
                img: '/img/avadabarbers-washndry-icon.png',
                description: 'Take a seat in our fine leather chairs, lean back and let us lather you a fresh head in a luxurious fashion.'
            },
            {
                name: 'Beard Tidy',
                img: '/img/avadabarbers-beardtrim-icon.png',
                description: 'Tame the tangles and untidy facial hairs like a gentleman with our Beard tidy services from Avada Barbers.'
            },

        ],
    products: [
        {
            name: 'Brush',
            img: '/img/brush_dark-800x800.png',
            price: '$15.00',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit error unde suscipit nostrum repellat quibusdam, nam nihil natus provident dolor sint fuga porro velit fugit, autem libero reprehenderit.'
        },
        {
            name: 'Scissors',
            img: '/img/scissors-800x800.png',
            price: '$85.00',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit error unde suscipit nostrum repellat quibusdam, nam nihil natus provident dolor sint fuga porro velit fugit, autem libero reprehenderit.'
        },
        {
            name: 'Hot Oil',
            img: '/img/hot_oil_dark-800x800.png',
            price: '$15.00',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit error unde suscipit nostrum repellat quibusdam, nam nihil natus provident dolor sint fuga porro velit fugit, autem libero reprehenderit.'
        },
        {
            name: 'Straight Razor',
            img: '/img/straight_razor_dark-800x800.png',
            price: '$30.00',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit error unde suscipit nostrum repellat quibusdam, nam nihil natus provident dolor sint fuga porro velit fugit, autem libero reprehenderit.'
        },
        {
            name: 'Safety Set',
            img: '/img/safety_set-800x800.png',
            price: '$30.00',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit error unde suscipit nostrum repellat quibusdam, nam nihil natus provident dolor sint fuga porro velit fugit, autem libero reprehenderit.'
        },
        {
            name: 'Shaving Butter',
            img: '/img/shaving_butter-800x800.png',
            price: '$15.00',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit error unde suscipit nostrum repellat quibusdam, nam nihil natus provident dolor sint fuga porro velit fugit, autem libero reprehenderit.'
        },
    ],
    footer:
        [
            {
                img: '/img/avadabarbers_footer_shop_image-300x234.png',
                button: 'SHOP OUR RANGE NOW'
                
                


            },
            {
                img: '/img/avadabarbers-logo-x2-200x70.png',
                button: 'FOLLOW US',

            },
            {
                img: '/img/avadabarbers_footer_appointment_image-300x234.png',
                button: 'BOOK YOUR APPOINTMENT'

            }


        ],
    contact:
    [
        'Avada Barbers',
        '123 New York Street',
        'New York City',
        'info@yourwebsite.com',
        '+1(555)555-1212'
    ]
        ,
    socialLink:
    [
        "fa-brands fa-facebook-f",
        "fa-brands fa-twitter",
        "fa-brands fa-youtube",
        "fa-brands fa-instagram"
    ],
    rewiews:[
        {
            name:'John Doe',
            img:'/img/avadabarbers-trimcut-gallery6-200x200.jpg',
            review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia ex aut dolorum natus fuga nihil delectus tempora impedit voluptatibus, quia inventore doloremque consequatur perspiciatis debitis '
        },
        {
            name:'Pete Jones',
            img:'/img/avadabarbers-trimcut-gallery7-200x201.jpg',
            review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia ex aut dolorum natus fuga nihil delectus tempora impedit voluptatibus, quia inventore doloremque consequatur perspiciatis debitis '
        },
        {
            name:'Mark Wilson',
            img:'/img/avadabarbers-trimcut-gallery3-200x201.jpg',
            review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia ex aut dolorum natus fuga nihil delectus tempora impedit voluptatibus, quia inventore doloremque consequatur perspiciatis debitis '
        },
    ],
    blogs:[
        {
            img:'/img/avadabarbers-second-blog-320x202.jpg',
            title:'Avada Barbers Now Open',
            text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi odio velit dolores sed laboriosam! Perspiciatis, nobis quidem?'
        },
        {
            img:'/img/avadabarbers-choosing-blog-320x202.jpg',
            title:'Choosing The Right Barber',
            text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi odio velit dolores sed laboriosam! Perspiciatis, nobis quidem?'
        },
        {
            img:'/img/avadabarbers-ourservice-blog-320x202.jpg',
            title:'Quick Service Guide',
            text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi odio velit dolores sed laboriosam! Perspiciatis, nobis quidem?'
        },
    ],
    i:0

})