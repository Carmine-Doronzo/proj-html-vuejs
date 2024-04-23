import { reactive } from "vue";

export const db = reactive({

    menuLink:
    [
        {
            name:'Home',
            src:'www.google.com'
        },
        {
            name:'About Us',
            src:'primo'
        },
        {
            name:'Services',
            src:'www.google.com'
        },
        {
            name:'shop',
            src:'www.google.com'
        },
        {
            name:'Our Team',
            src:'www.google.com'
        },
        {
            name:'Blog',
            src:'www.google.com'
        },
        {
            name:'Contact Us',
            src:'www.google.com'
        },
    ],
    openMenu: false,

    services:
    [
        {
            name:'Trim & Cut',
            img:'/img/avadabarbers-trimcut-icon-before.png',
            description:'Avada Barbers are experts i nthe lickety split trim and hair cut. Quick but careful and ridiculously good loking.'
        
        },
        {
            name:'Wash & Dry',
            img:'/img/avadabarbers-washndry-icon.png',
            description:'Take a seat in our fine leather chairs, lean back and let us lather you a fresh head in a luxurious fashion.'
        },
        {
            name:'Beard Tidy',
            img:'/img/avadabarbers-beardtrim-icon.png',
            description:'Tame the tangles and untidy facial hairs like a gentleman with our Beard tidy services from Avada Barbers.'
        },

    ]

})