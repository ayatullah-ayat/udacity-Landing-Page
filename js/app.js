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

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

const createNavbarList = (numberOfList) => {
    const li = document.querySelector('#navbar__list');

    let listAll = '';
    for(i = 0; i < numberOfList; i++) {
        if(i == 0){
            listAll += ''.concat(`<a class="menu__link" data-menu="menu ${i+1}"><li>section ${i + 1}</li></a>`);
        }else{
            listAll += ''.concat(`<a class="menu__link" data-menu="menu ${i+1}"><li>section ${i + 1}</li></a>`);
        }
    }
    return listAll;
}

function makeAllInActive() {
    menus.forEach(menu => {
        menu.classList.remove('active')
    })
}
function makeAtive(singleSection) {

    // make sure if this is Landing Page section
    if(singleSection.length == 0) {
        makeAllInActive();
        return
    }
    menus.forEach(menu => {
        const menuData = menu.dataset.menu.split(' ')[1];
        const sectionData = singleSection[0].dataset.nav.split(' ')[1];
        if(menuData === sectionData) {
            // add active class
            menu.classList.add('active')
        }else{
            // remove active class
            menu.classList.remove('active')
        }
        console.log(singleSection)
    })
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


/****************scroll feature for the appropriatee ************* 
                 position(use: scrollIntoView() 
 *****************************************************************/
const menus = document.querySelectorAll('.menu__link')

menus.forEach((menu, index) => {
    menu.addEventListener('click', function() {
        const section = document.querySelector('#section' + (index + 1))
        section.scrollIntoView({behavior: "smooth"})
    })
})


/****************active menu through the ************* 
                 section being viewed by user 
 * ************************************************/

const sectionAll = document.getElementsByTagName('section');
const makeArrayOfSectionAll = Array.from(sectionAll)

window.addEventListener('scroll', function() {
    const findViewedSection = makeArrayOfSectionAll.filter(sect => {
        const box = sect.getBoundingClientRect();
        return box.top <= 150 && box.bottom >= 150
    })
    makeAtive(findViewedSection);
    
})
