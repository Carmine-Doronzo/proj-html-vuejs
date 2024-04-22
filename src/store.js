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
            src:'www.google.com'
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
    openMenu: false

})