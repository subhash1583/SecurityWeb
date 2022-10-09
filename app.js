import { insertData } from './utils/firebase/firebase.util';

const apply_btn = document.querySelector('.sec-7_left_button');
const overlay = document.querySelector('.overlay');
const apply_modal = document.querySelector('.outer-modal');
const learn_btn = document.querySelector('.learn_btn');
const section3 = document.querySelector('#section--3id');
const nav_container = document.querySelector('.nav-links');
const nav = document.querySelector('.nav');
const fqsubmitbtn = document.querySelector('.submit');
const namevalue = document.querySelector('.name-box');
const emailvalue = document.querySelector('.email-box');
const subjectvalue = document.querySelector('.subject-box');
const modala = document.querySelector('.modal_apply');
const modalc = document.querySelector('.modal_close');
const modalright = document.querySelector('.modal_right');
const modalname = document.querySelector('.name-modal');
const modalcontact = document.querySelector('.contact-modal');
const modaladress = document.querySelector('.address-modal');
const modalheight = document.querySelector('.height-modal');



/*================== FireBase ==================*/

const formContainer = document.querySelector('.form');
const nameBox = document.querySelector('#name');
const emailBox = document.querySelector('#eamil');
const subjectBox = document.querySelector('#subject');
const messageBox = document.querySelector('#message');



learn_btn.addEventListener('click', function() {
    console.log("hi this is great")
    section3.scrollIntoView({ behavior: 'smooth' });
});

nav_container.addEventListener('click', function(e) {
    e.preventDefault();
    console.log(e.target);
    if (e.target.classList.contains('nav__link')) {
        const id = e.target.getAttribute('href');
        document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
    }
});

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    // Set nav active status with boolean
    let isActive = false;
    console.log('nav-active : ' + isActive);

    burger.addEventListener('click', () => {
        nav.classList.toggle('top');
        nav.classList.toggle('nav-active');
        isActive = !isActive;
        console.log('nav-active : ' + isActive);

        //Animate link
        navLinks.forEach((link, index) => {
            if (isActive) {
                link.style.animation = `navLinkFadeIn 0.4s ease forwards ${index / 7 + 0.2}s`;
                console.log('nav li: ' + index + ' in');
            } else {
                // link.style.animation = "";
                link.style.animation = `navLinkFadeOut 0.2s ease forwards 0s`;
                // link.style.animation = "";
                console.log('nav li: ' + index + ' out');
            }
            console.log(link.style.animation);
        });

        //Burger animation
        burger.classList.toggle('toggle');
    });
};

navSlide();

// burger.addEventListener('click', function () {
// 	nav_container.classList.toggle('hidden');
// });

apply_btn.addEventListener('click', function() {
    overlay.classList.remove('hidden');
    apply_modal.classList.remove('hidden');
});

overlay.addEventListener('click', function() {
    overlay.classList.add('hidden');
    apply_modal.classList.add('hidden');
});
modalc.addEventListener('click', function() {
    overlay.classList.add('hidden');
    apply_modal.classList.add('hidden');
});
modala.addEventListener('click', function() {
    if (modalname === '' && modalcontact === '') {
        console.log("hi empty  one");
        modalright.insertAdjacentHTML("beforeend", "please! Fill Required Details")
    } else {
        modalright.addEventListener('submit', e => {
            e.preventDefault();
            insertData(modalname.value, modalcontact.value, modaladress.value, modalheight.value);
        });

        modala.innerHTML = "Applied";
        modalright.insertAdjacentHTML("beforeend", "Thanks For Applying! We Will Contact You Shortly!")
    }
})
fqsubmitbtn.addEventListener('click', function() {
    const emailvalue = document.querySelector('.email-box');
    if (namevalue.value === '' && emailvalue.value === '') {
        formContainer.insertAdjacentHTML('beforeend', "*Fill required details");
    } else {

        formContainer.addEventListener('submit', e => {
            e.preventDefault();
            insertData(nameBox.value, emailBox.value, subjectBox.value, messageBox.value);
        });
        fqsubmitbtn.innerHTML = "submited";

    }

})