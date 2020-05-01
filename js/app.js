/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const navbarList = document.getElementById('navbar__list');
const main = document.getElementById('main');
const section1 = document.getElementById('section1');
const section2 = document.getElementById('section2');
const section3 = document.getElementById('section3');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

const createNavbarList = (numberOfList) => {
    let listAll = '';
    for(i = 0; i < numberOfList; i++) {
        if(i == 0){
            listAll += ''.concat(`<a class="menu__link" id="menu${i+1}" href="#section${i + 1}"><li>section ${i + 1}</li></a>`);
        }else{
            listAll += ''.concat(`<a class="menu__link" id="menu${i+1}" href="#section${i + 1}"><li>section ${i + 1}</li></a>`);
        }
    }
    return listAll;
}



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
navbarList.innerHTML = createNavbarList(4);

// build new section with the help of web api
main.insertAdjacentHTML('beforeend', `<section id="section4" data-nav="Section 4">
                        <div class="landing__container">
                        <h2>Section 4</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.</p>

                        <p>Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.</p>
                        </div>
                        </section>`
                    );

const section4 = document.getElementById('section4')

// end build new section


// Add class 'active' to section when near top of viewport
let menu1 = document.getElementById('menu1');
let menu2 = document.getElementById('menu2');
let menu3 = document.getElementById('menu3');
let menu4 =  document.getElementById('menu4');

function makeActive(sectionName) {
    if(sectionName == 'section1') {
        menu1.classList.add('active');
        menu2.classList.remove('active');
    }if(sectionName == 'section2') {
        menu1.classList.remove('active');
        menu2.classList.add('active');
        menu3.classList.remove('active');
    }if(sectionName == 'section3') {
        menu2.classList.remove('active');
        menu3.classList.add('active');
        menu4.classList.remove('active');
    }if(sectionName == 'section4') {
        menu4.classList.add('active');
        menu3.classList.remove('active');
    }
}
window.addEventListener('scroll', function() {
    const box = {
        box1: section1.getBoundingClientRect(),
        box2: section2.getBoundingClientRect(),
        box3: section3.getBoundingClientRect(),
        box4: section4.getBoundingClientRect()
    }
    // condition for nearest section
    if(box.box1.top <= 150 && box.box1.bottom >= 150) {
        makeActive('section1');
        console.log(box.box1.top)
    }if(box.box2.top <= 150 && box.box2.bottom >= 150) {
        makeActive('section2');
    }if(box.box3.top <= 150 && box.box3.bottom >= 150) {
        makeActive('section3');
    }if(box.box4.top <= 150 && box.box4.bottom >= 150) {
        makeActive('section4');
    }
    // special condition for default aspects of site
    if(box.box1.top > 150){
        menu1.classList.remove('active');
        menu2.classList.remove('active');
        menu3.classList.remove('active');
    }
    
});

